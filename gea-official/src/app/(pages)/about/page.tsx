import MemberCard from "@/app/components/MemberCard";
import SpotifyCard from "@/app/components/SpotifyCard";
import { environment } from "@/app/environment/environment";

export default function AboutPage() {

    const carlosMainImage = environment.staticPaths.images + "/concerts/concierto-hollander/42.jpg"

    const alfonsoMainImage = environment.staticPaths.images + "/concerts/concierto-hollander/26.jpg"

    const albertoMainImage = environment.staticPaths.images + "/concerts/concierto-mutante/2.webp"


    return (
        <div className="text-white py-10 px-6 mt-20 min-h-screen ">
            <div
                className=" grid gap-10 justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center"
            >
                <MemberCard
                    urlMemberImg={carlosMainImage}
                    memberName="Carlos"
                    descriptionMember="description"
                />
                <MemberCard
                    urlMemberImg={alfonsoMainImage}
                    memberName="Alfonso"
                    descriptionMember="description"
                />
                <MemberCard
                    urlMemberImg={albertoMainImage}
                    memberName="Alberto"
                    descriptionMember="description"
                />
            </div>

            {/*spotify */}
            <div className="mt-16  w-full py-10 px-4 rounded-xl">
                <h2 className="text-2xl font-semibold text-center text-gray-100 mb-8">
                    Most played songs
                </h2>

                <div className="grid gap-8 justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <SpotifyCard
                        embedUrl="https://open.spotify.com/embed/track/0hPROGzM4rFaBwTtOv9iXr?utm_source=generator"
                    />
                    <SpotifyCard
                        embedUrl="https://open.spotify.com/embed/track/42nrsVYn9Snwer3krie2lp?utm_source=generator"
                    />
                    <SpotifyCard
                        embedUrl="https://open.spotify.com/embed/track/7oyL9RyJVJGTcwxVjSxfU6?utm_source=generator"
                    />
                </div>
            </div>

        </div>


    );
}

