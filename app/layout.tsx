import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components';

const josefinSans = Josefin_Sans({
  variable: '--josefinsans',
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Muhammad Zulfan Wahyudin',
  description: 'Loved to code, design, and build things.',
  keywords: [
    'software engineer',
    'web developer',
    'react',
    'next.js',
    'open to work',
    'open to freelance',
  ],
  openGraph: {
    url: 'https://mzulfanw.space',
    type: 'website',
    title: 'Muhammad Zulfan Wahyudin',
    description: 'Loved to code, design, and build things.',
    images: [
      {
        url: 'https://opengraph.b-cdn.net/production/images/4a613b4b-87c1-413f-980d-1287fa4ae31b.jpg?token=Np4WjOG5jKJgpSEW3_KW4QA_AGvn9jldrDNn1aEuI_I&height=1600&width=1200&expires=33273995396',
        width: 1200,
        height: 1600,
        alt: 'OpenGraph Image for Muhammad Zulfan Wahyudin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://mzulfanw.space',
    title: 'Muhammad Zulfan Wahyudin',
    description: 'Loved to code, design, and build things.',
    images: [
      'https://opengraph.b-cdn.net/production/images/4a613b4b-87c1-413f-980d-1287fa4ae31b.jpg?token=Np4WjOG5jKJgpSEW3_KW4QA_AGvn9jldrDNn1aEuI_I&height=1600&width=1200&expires=33273995396',
    ],
  },
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
