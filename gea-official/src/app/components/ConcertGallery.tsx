// ConcertGallery.tsx
import { useState } from "react";
import Image from "next/image";
import React from "react";

interface ConcertGalleryProps {
    images: string[];
    altPrefix?: string;
}

const ConcertGallery: React.FC<ConcertGalleryProps> = React.memo(({ images, altPrefix = 'Imagen' }) => {
    const [selectedImage, setSelectedImage] = useState<{ url: string; index: number } | null>(null);

    const handleImageClick = (url: string, index: number) => {
        setSelectedImage({ url, index });
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    if (images.length === 0) {
        return <p>Imágenes no encontradas.</p>;
    }

    return (
        <div className="py-6">
            {/* Grilla de imágenes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((url, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
                        onClick={() => handleImageClick(url, index)}
                    >
                        <Image
                            src={url}
                            alt={`${altPrefix} ${index + 1}`}
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover"
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,..."
                        />
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
                    onClick={handleClose}
                >
                    <div className="relative max-w-6xl max-h-[90vh] w-auto flex items-center justify-center">
                        <Image
                            src={selectedImage.url}
                            alt="Vista expandida"
                            width={1200}
                            height={800}
                            className="object-contain max-w-full max-h-[85vh]"
                        />
                        <button
                            className="absolute top-4 right-4 text-white  bg-opacity-50  p-2 cursor-pointer"
                            onClick={handleClose}
                            aria-label="Cerrar imagen"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
});

export default ConcertGallery;