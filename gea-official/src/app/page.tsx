// app/page.tsx
import Hero from './components/Hero';
import './globals.css';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className=" items-center justify-center  p-1">
      <Hero />
    </div>
  );
}