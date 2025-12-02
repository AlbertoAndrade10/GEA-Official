"use client"
import ConcertGallery from "@/app/components/ConcertGallery";
import ImageService from "@/app/services/ImageService/ImageService"
import { MoonLoader } from "react-spinners"
import { useEffect, useState } from "react";

export default function MutantConcert() {
    const imageService: ImageService = new ImageService()
    const [imagesUrls, setImageUrls] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadImages = async () => {
            try {
                const urls = await imageService.getMutantConcertImages()
                setImageUrls(urls);
            } catch (err) {
                console.error("Error al cargar imagenes: ", err)

            } finally {
                setLoading(false);
            }
        };

        loadImages();

    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <MoonLoader color="#ffffff" size={60} />
            </div>
        );
    }


    return (
        <>
            <div className="flex items-center justify-center text-white mt-22">
                <h1 className="text-5xl font-bold mb-6">Mutant concert</h1>
            </div>

            <div className="text-white py-6 px-4 min-h-screen">
                <ConcertGallery images={imagesUrls} altPrefix="Concierto Mutante" />
            </div>
        </>
    )
}