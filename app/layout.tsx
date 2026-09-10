import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SEO from '@/components/layout/SEO';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Data Scientist Portfolio',
  description: 'Personal portfolio showcasing data science projects, blog, and professional experience',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Data Scientist Portfolio',
    description: 'Personal portfolio showcasing data science projects, blog, and professional experience',
    url: 'https://data-scientist-portfolio.vercel.app',
    siteName: 'Data Scientist Portfolio',
    images: [
      {
        url: 'https://data-scientist-portfolio.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Data Scientist Portfolio',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <SEO />
        <Header />
        <main className="min-h-screen bg-gray-50">{children}</main>
        <Footer />
      </body>
    </html>
  );
}