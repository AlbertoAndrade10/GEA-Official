"use client";

import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { environment } from "../environment/environment";
import { useEffect, useRef, useState } from "react";

export default function Video() {
    const videoPath = environment.staticPaths.video + "/video-principal.mov";
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    useEffect(() => {
        const attemptPlay = async () => {
            if (videoRef.current) {
                try {
                    const playPromise = videoRef.current.play();
                    if (playPromise !== undefined) {
                        await playPromise;
                    }
                } catch (err) {
                    console.log("Autoplay bloqueado o fallido:", err);
                }
            }
        };

        const timer = setTimeout(() => {
            attemptPlay();
        }, 0);

        return () => clearTimeout(timer);
    }, []);


    return (
        <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] overflow-hidden rounded-b-2xl">
            <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover rounded-b-2xl"
                loop
                muted={isMuted}
                playsInline
                preload="metadata"
            >
                <source src={`${videoPath}`} type="video/mp4" />
                Tu navegador no soporta el video.
            </video>
            <div className="absolute inset-0 bg-linear-to-b from-black/30 to-black/70"></div>
            <div className="absolute bottom-4 right-4 p-4 z-20">
                <button
                    onClick={toggleMute}
                    className="bg-black/50 cursor-pointer hover:bg-black/70 text-white rounded-full p-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label={isMuted ? "Desmutear video" : "Mutar video"}
                >
                    {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
                </button>
            </div>
        </div>
    );
}