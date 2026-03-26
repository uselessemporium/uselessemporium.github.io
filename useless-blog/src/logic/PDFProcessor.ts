import jsPDF from "jspdf";
import JSZip from "jszip";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export class PDFProcessor {

    static async extractPages(file: File): Promise<string[]> {
        const results: string[] = [];

        const buffer = await file.arrayBuffer();

        const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;

        for (let pageIndex = 1; pageIndex <= pdf.numPages; pageIndex++) {
            const page = await pdf.getPage(pageIndex);
            //This is to keep the image sharp
            const viewport = page.getViewport({ scale: 3 });

            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d")!;

            canvas.width = viewport.width;
            canvas.height = viewport.height;

            await page.render({
                canvasContext: context,
                viewport: viewport,
                canvas: canvas
            }).promise;

            const croppedCanvas = document.createElement("canvas");
            const croppedContext = croppedCanvas.getContext("2d")!;

            const cropWidth = canvas.width / 2;
            const cropHeight = canvas.height;

            croppedCanvas.width = cropWidth;
            croppedCanvas.height = cropHeight;

            croppedContext.drawImage(
                canvas,
                0,
                0,
                cropWidth,
                cropHeight,
                0,
                0,
                cropWidth,
                cropHeight
            );

            const base64 = croppedCanvas.toDataURL("image/png");
            results.push(base64);
        }

        return results;
    }
}

export const PNGProcessor = {
    createBoardFile: async (
        file: File,
        onProgress?: (percent: number) => void
    ): Promise<File> => {
        const zip = new JSZip();
        const contents = await zip.loadAsync(file);


        const imageNames = Object.keys(contents.files)
            .filter((name) => {
                const isPng = name.toLowerCase().endsWith('.png');
                const isMacMeta = name.includes('__MACOSX');
                const isHidden = name.split('/').pop()?.startsWith('.'); // Catches ._ files

                return isPng && !isMacMeta && !isHidden;
            })
            .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));


        if (imageNames.length === 0) throw new Error("No PNGs found");

        const pdf = new jsPDF({ unit: 'px', compress: true });
        pdf.deletePage(1);

        for (let i = 0; i < imageNames.length; i++) {
            const imgData = await contents.files[imageNames[i]].async('uint8array');
            const blob = new Blob([new Uint8Array(imgData)], { type: 'image/png' });
            const url = URL.createObjectURL(blob);

            try {
                const imgData: any = await contents.files[imageNames[i]].async('uint8array');
                const blob = new Blob([imgData], { type: 'image/png' });
                const url = URL.createObjectURL(blob);
                const { img, cropTop, cropHeight } = await getCroppedDimensions(url);

                pdf.addPage([img.width, cropHeight], img.width > cropHeight ? 'l' : 'p');
                pdf.addImage(
                    imgData,
                    'PNG',
                    0,
                    -cropTop,
                    img.width,
                    img.height,
                    undefined,
                    'FAST'
                );

                URL.revokeObjectURL(url);
                if (onProgress) onProgress(Math.round(((i + 1) / imageNames.length) * 100));
            } catch (error) {
                console.error(`Error processing ${imageNames[i]}`, error);
            } finally {
                URL.revokeObjectURL(url);
            }
        }

        const pdfBlob = pdf.output('blob');
        return new File([pdfBlob], file.name.replace('.zip', '.pdf'), { type: 'application/pdf' });
    },
};

async function getCroppedDimensions(url: string): Promise<{ img: HTMLImageElement, cropTop: number, cropHeight: number }> {
    return new Promise((resolve, reject) => {
        const img = new Image();

        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d', { willReadFrequently: true });
            if (!ctx) {
                reject("Canvas context failed");
                return;
            }

            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            let firstY = -1;
            let lastY = -1;

            for (let y = 0; y < canvas.height; y++) {
                for (let x = 0; x < canvas.width; x++) {
                    const alpha = data[(y * canvas.width + x) * 4 + 3];
                    if (alpha > 0) {
                        if (firstY === -1) firstY = y;
                        lastY = y;
                        break;
                    }
                }
            }

            resolve({
                img,
                cropTop: firstY === -1 ? 0 : firstY,
                cropHeight: firstY === -1 ? img.height : (lastY - firstY) + 1
            });
        };

        img.onerror = (err) => {
            img.src = "";
            reject(err);
        };

        img.src = url;
    });

}