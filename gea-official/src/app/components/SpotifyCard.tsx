interface SpotifyCardProps {
    title?: string;
    embedUrl: string
}

export default function SpotifyCard({ title, embedUrl }: SpotifyCardProps) {
    return (
        <div className="text-white rounded-xl shadow-md  overflow-hidden w-full max-w-md transition-transform duration-300 hover:scale-[1.01]">
            {title && (
                <div className="p-4 border-b border-gray-700">
                    <h2 className="text-lg font-semibold text-gray-100 text-center">
                        {title}
                    </h2>
                </div>
            )}

            <div className="p-4">
                <iframe
                    className="w-full rounded-xl"
                    style={{ borderRadius: "12px" }}
                    src={embedUrl}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}


