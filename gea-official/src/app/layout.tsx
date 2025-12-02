import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen bg-black text-white">
                <Header />
                <main className="grow px-1 py-2 relative z-0">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
