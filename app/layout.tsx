import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import InstallGate from '../components/InstallGate';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FF Warzone BD',
  description: 'Join Free Fire Tournaments and Earn Money',
  manifest: '/manifest.json',
  icons: {
    apple: '/icon.png',
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
      <body className={inter.className}>
        <InstallGate>
          {children}
        </InstallGate>
      </body>
    </html>
  );
}
