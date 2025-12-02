'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { environment } from '../environment/environment';

interface HeaderProps {
    className?: string;
}

export default function Header({ className = '' }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();


    const svgPath = environment.staticPaths.customSVGs;
    const menuIconPath = `${svgPath}/menu-icon.svg`;
    const closeIconPath = `${svgPath}/close-icon.svg`;
    const logoImg = environment.staticPaths.images + '/logo/LogoGEA-Blanco.png';

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header
            className={`
                fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-300 flex items-center h-20 px-4
                ${isScrolled ? 'bg-black bg-opacity-20 backdrop-blur-md shadow-lg' : 'bg-transparent'}
                ${className}
            `}
        >
            <div className="relative flex items-center w-full">
                {/* logo */}
                <Link
                    href="/"
                    onClick={handleLinkClick}
                    className={`
                        text-5xl text-white transition-all duration-300 flex items-center
                        ${isScrolled ? 'md:ml-4' : 'md:mx-auto'}
                    `}
                >
                    <img src={logoImg} alt="Logo GEA" className="h-[60px] w-auto cursor-pointer" />
                </Link>

                <button
                    className="md:hidden text-white text-3xl p-4 ml-auto focus:outline-none z-10"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    <img
                        src={isMenuOpen ? closeIconPath : menuIconPath}
                        alt={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                        className="w-6 h-6"
                    />
                </button>

                {/* desktop */}
                <nav
                    className={`
                        hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 text-xl text-white transition-opacity duration-300
                        ${isScrolled ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                    `}
                >
                    <Link href="/" className="hover:text-red-600 transition-colors duration-200 " onClick={handleLinkClick}>
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-red-600 transition-colors duration-200" onClick={handleLinkClick}>
                        About
                    </Link>
                    <Link href="/gallery" className="hover:text-red-600 transition-colors duration-200" onClick={handleLinkClick}>
                        Gallery
                    </Link>
                    <Link href="/events" className="hover:text-red-600 transition-colors duration-200" onClick={handleLinkClick}>
                        Events
                    </Link>
                </nav>
            </div>

            {/* mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden fixed top-0 right-0 h-screen w-64 bg-black bg-opacity-20 backdrop-blur-md text-white flex flex-col justify-start items-center pt-10 transition-transform duration-300 ease-in-out z-40">
                    <button
                        className="self-end text-white text-2xl p-4 focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Cerrar menú"
                    >
                        &times;
                    </button>

                    <Link href="/" className="hover:text-gray-200 mb-4" onClick={handleLinkClick}>
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-gray-200 mb-4" onClick={handleLinkClick}>
                        About
                    </Link>
                    <Link href="/gallery" className="hover:text-gray-200 mb-4" onClick={handleLinkClick}>
                        Gallery
                    </Link>
                    <Link href="/events" className="hover:text-gray-200 mb-4" onClick={handleLinkClick}>
                        Events
                    </Link>
                </div>
            )}
        </header>
    );
}