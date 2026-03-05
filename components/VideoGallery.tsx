"use client";
import { useState } from "react";

export default function VideoGallery() {
    const [activeVideo, setActiveVideo] = useState(null);

    const videos = [
        "mlSfcva7CN8",
        "ZUQN6Jo0pRo",
        "cXE3ojCH9-U",
        "s7Uj-_sW5B0",
        "ZUQN6Jo0pRo",
        "OrNsEuuWgjk",
        "OrNsEuuWgjk",
        "cbUfg7fss4Y",
        "pXtWeRWabl4",
    ];

    return (
        <>
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((id, i) => (
                    <div
                        key={i}
                        onClick={() => setActiveVideo(id)}
                        className="relative cursor-pointer group"
                    >
                        <img
                            src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                            alt="Video Thumbnail"
                            className="w-full aspect-video object-cover rounded-lg"
                        />

                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-black/60 text-white text-3xl px-4 py-2 rounded-full group-hover:scale-110 transition">
                                ▶
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {activeVideo && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                    onClick={() => setActiveVideo(null)}
                >
                    <div
                        className="w-full max-w-4xl aspect-video"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            className="w-full h-full rounded-lg"
                            src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                            title="YouTube video player"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </>
    );
}