import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import InstallGate from '../components/InstallGate';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FF Warzone BD',
  description: 'Join Free Fire Tournaments',
  manifest: '/manifest.json',
  icons: {
    icon: 'https://cdn-icons-png.flaticon.com/512/1067/1067357.png',
    apple: 'https://cdn-icons-png.flaticon.com/512/1067/1067357.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#eab308',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#eab308" />
      </head>
      <body className={inter.className}>
        <InstallGate>
          {children}
        </InstallGate>
      </body>
    </html>
  );
}
