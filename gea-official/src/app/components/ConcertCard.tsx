'use client';
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";


interface ConcertCardProps {
    title: string;
    altText?: string;
    imageUrl: string;
    linkTo: string;
}

export default function ConcertCard({
    title,
    imageUrl,
    altText = "Concert image",
    linkTo,
}: ConcertCardProps) {
    return (
        <Link
            href={linkTo}
            className="block w-full max-w-[400px] bg-black rounded-xl border border-gray-700 overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-102"
        >
            <section className="relative w-full aspect-4/5 border border-white/30 rounded-lg overflow-hidden shadow-white/30">
                <Image
                    src={imageUrl}
                    alt={altText}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                />
            </section>


            <section className="p-6 flex flex-col items-center justify-between">
                <h2 className="text-2xl font-bold text-white mb-4 text-center">{title}</h2>
                <div className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors">
                    <FaArrowRight />
                </div>
            </section>
        </Link>

    );
}
