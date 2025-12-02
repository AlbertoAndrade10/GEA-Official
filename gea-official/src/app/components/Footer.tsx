import Link from 'next/link';
import { environment } from '../environment/environment';

interface FooterProps {
    className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
    const logoInstagram = environment.staticPaths.icons + '/instagram.jpg';
    const logoYoutube = environment.staticPaths.icons + '/youtube.jpg';
    const logoSpotify = environment.staticPaths.icons + '/spotify.jpg';
    const urlInstagram = environment.urls.instagram;
    const urlYoutube = environment.urls.youtube;
    const urlSpotify = environment.urls.spotify;

    const renderSocialLink = (href: string, imgSrc: string, alt: string) => (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            prefetch={false}
        >
            <img src={imgSrc} alt={alt} className="h-10 w-auto cursor-pointer" />
        </Link>
    );

    return (
        <footer className={`flex space-x-10 items-center justify-center mb-10 ${className}`}>
            {/* Logo instagram */}
            {renderSocialLink(urlInstagram, logoInstagram, "Instagram")}

            {/* Logo youtube */}
            {renderSocialLink(urlYoutube, logoYoutube, "YouTube")}

            {/* Logo spotify */}
            {renderSocialLink(urlSpotify, logoSpotify, "Spotify")}
        </footer>
    );
}