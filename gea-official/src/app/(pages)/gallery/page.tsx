'use client';
import Link from 'next/link';
import ConcertCard from "@/app/components/ConcertCard"
import { environment } from "@/app/environment/environment"

export default function Gallery() {

    const mutantMainImage = environment.staticPaths.images + "/concerts/concierto-mutante/23.webp"
    const salaXMainImage = environment.staticPaths.images + "/concerts/concierto-salaX/47.webp"
    const hollanderMainImage = environment.staticPaths.images + "/concerts/concierto-hollander/33.jpg"
    const funClubMainImage = environment.staticPaths.images + "/concerts/concierto-funkclub/1.jpg"
    const undergroundMainImage = environment.staticPaths.images + "/concerts/concierto-underground/18.jpg"
    const hangar48MainImage = environment.staticPaths.images + "/concerts/concierto-hangar48/6.webp"

    const concerts = [
        { title: "Mutant concert", imageUrl: mutantMainImage, linkTo: "/mutant-concert" },
        { title: "Sala X concert", imageUrl: salaXMainImage, linkTo: "/sala-x-concert" },
        { title: "Hollander concert", imageUrl: hollanderMainImage, linkTo: "/hollander-concert" },
        { title: "Fun club concert", imageUrl: funClubMainImage, linkTo: "/funclub-concert" },
        { title: "Underground concert", imageUrl: undergroundMainImage, linkTo: "/underground-concert" },
        { title: "Hangar48 concert", imageUrl: hangar48MainImage, linkTo: "/hangar48-concert" },

    ]

    return (
        <div className="text-white py-6 px-4 mt-20 min-h-screen">
            <section className="mt-10 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {concerts.map((concert, index) => (
                        <div key={index} className="flex justify-center">
                            <ConcertCard
                                title={concert.title}
                                imageUrl={concert.imageUrl}
                                linkTo={concert.linkTo}
                                altText={concert.title}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}