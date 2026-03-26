import React, { useEffect, useState } from "react";
import { PDFProcessor } from "../../logic/PDFProcessor";

export const WebtoonPreviewToolPage: React.FC = () => {
    const [showPreview, setShowPreview] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [dragging, setDragging] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [processing, setProcessing] = useState(false);
    const [pages, setPages] = useState<string[]>([]);

    useEffect(() => {
        setFile(null);
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const handleFile = (f: File) => {
        if (f.type !== "application/pdf") {
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
        if (!file || error || processing) return;

        try {
            setProcessing(true);

            const extracted = await PDFProcessor.extractPages(file);

            setPages(extracted);
            setShowPreview(true);
        } catch (err) {
            console.error(err);
        } finally {
            setProcessing(false);
        }
    };

    if (isMobile) {
        return (
            <div className="w-full flex items-center justify-center">
                <div className="bg-zinc-800 rounded-xl border border-zinc-700 p-8 max-w-sm text-center">
                    <p className="text-gray-200 font-medium mb-2">
                        Device not supported
                    </p>

                    <p className="text-gray-400 text-sm">
                        This tool requires a larger screen.
                        Please open this page on a tablet or desktop device.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="w-full flex justify-center mb-auto">
                <div className="w-full max-w-7xl grid grid-cols-3 gap-8 p-8">

                    <div className="col-span-2">
                        <div className="bg-zinc-800 rounded-xl shadow p-6 flex flex-col gap-6">

                            <h1 className="text-2xl text-gray-200 font-semibold">
                                Webtoon Preview Tool
                            </h1>

                            <p className="text-gray-400">
                                This tool lets you upload a planning PDF made with something like Procreate and preview the composition on the correct aspect ratio.
                            </p>

                            <div className="flex gap-6 items-start">

                                <img
                                    src="/assets/webtoonPreview/previewSample.png"
                                    className="w-[100px] rounded border border-zinc-700 object-cover"
                                />

                                <div className="flex flex-col gap-2 max-w-md">

                                    <p className="text-gray-300 font-medium">
                                        Expected Page Layout
                                    </p>

                                    <p className="text-gray-400 text-sm">
                                        Each page of the PDF should contain a vertical slice of the episode or section.
                                        The left side contains rough planning thumbnails while the right side
                                        is reserved for annotations, dialogue notes, or editing reminders.
                                    </p>

                                    <p className="text-gray-400 text-sm">
                                        Recommended sizes for each page are 800px wide and multiples of 650px for the height.
                                        This way, you have enough space to create thumbnails but not enough to tempt
                                        yourself to make needless details on the planning phase.
                                    </p>

                                    <p className="text-gray-500 text-xs">
                                        Only the drawing section is used to generate the preview.
                                    </p>

                                </div>

                            </div>

                            <p className="text-gray-400">
                                The preview will generate a vertical scroll with the concatenated pages.
                            </p>

                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="bg-zinc-800 rounded-xl shadow p-6 flex flex-col gap-4">

                            <h2 className="font-medium text-gray-200">
                                Upload PDF
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
                                    {file ? file.name : "Drop your PDF here"}
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
                                    accept="application/pdf"
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
                                {processing ? "Processing PDF..." : "Process PDF"}
                            </button>

                        </div>
                    </div>

                </div>
            </div>

            {showPreview && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900">

                    <div className="relative">

                        <div className="h-[90vh] aspect-[5/8] bg-black rounded-lg border border-zinc-700 shadow-2xl overflow-y-auto">
                            {pages.map((src, i) => (
                                <img
                                    key={i}
                                    src={src}
                                    className="w-full"
                                />
                            ))}
                        </div>

                        <button
                            onClick={() => setShowPreview(false)}
                            className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-zinc-800 border border-zinc-600 flex items-center justify-center text-gray-300 hover:text-white hover:bg-zinc-700 transition"
                        >
                            ✕
                        </button>

                    </div>

                </div>
            )}
        </>
    );
};