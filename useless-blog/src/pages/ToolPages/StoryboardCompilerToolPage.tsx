import { useEffect, useRef, useState } from "react";
import { PNGProcessor } from "../../logic/PDFProcessor";

export const StoryboardCompilerToolPage: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [dragging, setDragging] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [processing, setProcessing] = useState(false);
    const processingRef = useRef(false);

    useEffect(() => {
        setFile(null);
    }, []);

    const handleFile = (f: File) => {
        if (f.type !== "application/zip") {
            setFile(null);
            setError("Only PDF files are supported.");
            return;
        }

        setFile(f);
        setError(null);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        if (processing) return;

        setDragging(false);

        const f = e.dataTransfer.files?.[0];
        if (f) handleFile(f);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        if (!processing) setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    };


    const handleProcess = async () => {
        if (processingRef.current || !file) return;

        try {
            processingRef.current = true;
            setProcessing(true);

            const extracted = await PNGProcessor.createBoardFile(file);
            const url = window.URL.createObjectURL(extracted);

            const link = document.createElement('a');
            link.href = url;
            link.download = extracted.name;
            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);

        } finally {
            setProcessing(false);
            processingRef.current = false;
        }
    };


    return <>
        <div className="w-full flex justify-center mb-auto">
            <div className="w-full max-w-7xl grid grid-cols-3 gap-8 p-8">

                <div className="col-span-2">
                    <div className="bg-zinc-800 rounded-xl shadow p-6 flex flex-col gap-6">

                        <h1 className="text-2xl text-gray-200 font-semibold">
                            StoryBoard Compiler Tool
                        </h1>

                        <p className="text-gray-400">
                            This tool lets you compile storyboard single files into a previewable PDF.
                        </p>

                        <div className="flex gap-6 items-start">

                            <img
                                src="/assets/storyboardCompiler/previewSample.png"
                                className="w-[100px] rounded border border-zinc-700 object-cover"
                            />

                            <div className="flex flex-col gap-2 max-w-md">

                                <p className="text-gray-300 font-medium">
                                    Expected Content Layout
                                </p>

                                <p className="text-gray-400 text-sm">
                                    You need to upload a zip file with flat pngs.
                                </p>

                                <p className="text-gray-400 text-sm">
                                    Recommended sizes for each thumbnail are 800px wide and multiples of 650px for the height.
                                </p>

                                <p className="text-gray-500 text-xs">
                                    The vertical transparent padding on each image will be removed and the pages will be ordered by name.
                                </p>

                                <p className="text-gray-500 text-xs">
                                    You can easilly create the source zip file form an export, just make each thumnail its own layer and put them in order.
                                </p>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="bg-zinc-800 rounded-xl shadow p-6 flex flex-col gap-4">

                        <h2 className="font-medium text-gray-200">
                            Upload ZIP folder
                        </h2>

                        <div
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onClick={() => !processing && document.getElementById("pdfInput")?.click()}
                            className={`border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center text-center transition cursor-pointer
                                ${dragging ? "bg-zinc-700 border-zinc-500" : "hover:bg-gray-500"}
                                ${processing ? "opacity-50 pointer-events-none" : ""}`}
                        >
                            <p className="text-sm text-gray-400">
                                {file ? file.name : "Drop your zip here"}
                            </p>

                            {!file && (
                                <p className="text-xs text-gray-400 mt-1">
                                    or click to browse
                                </p>
                            )}

                            {error && (
                                <p className="text-xs text-red-400 mt-2">
                                    {error}
                                </p>
                            )}

                            <input
                                id="pdfInput"
                                type="file"
                                accept="application/zip"
                                className="hidden"
                                onChange={(e) => {
                                    const f = e.target.files?.[0];
                                    if (f) handleFile(f);
                                }}
                            />
                        </div>

                        <button
                            disabled={!file || !!error || processing}
                            onClick={handleProcess}
                            className={`w-full mt-2 rounded-lg py-2 transition
                                ${file && !error && !processing
                                    ? "bg-black text-white hover:opacity-90"
                                    : "bg-zinc-700 text-gray-400 cursor-not-allowed"
                                }`}
                        >
                            {processing ? "Processing ZIP..." : "Process ZIP"}
                        </button>

                    </div>
                </div>

            </div>
        </div>

    </>
}