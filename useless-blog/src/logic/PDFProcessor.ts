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