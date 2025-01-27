import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components';

const josefinSans = Josefin_Sans({
  variable: '--josefinsans',
  weight: ['400', '700'],
  style: 'normal',
});

export const metadata: Metadata = {
  title: 'Muhammad Zulfan Wahyudin',
  description: 'Loved to code, design, and build things.',
  keywords: ['software engineer', 'web developer', 'react', 'next.js'],
  icons: [
    {
      rel: 'icon',
      href: '/favicon.ico',
      url: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.variable} flex min-h-screen flex-col antialiased`}
      >
        <Navbar />
        <main className="mx-6 flex flex-grow items-center justify-center">
          {children}
        </main>

        <footer className="w-full p-4 text-center">
          <p>Crafted with Next.js, TailwindCSS, and ❤️</p>
        </footer>
      </body>
    </html>
  );
}
