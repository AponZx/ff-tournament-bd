import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import InstallGate from '../components/InstallGate';
import BottomNav from '../components/BottomNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Extreme Tour BD',
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-900 pb-20`}>
        <InstallGate>
          <div className="max-w-md mx-auto bg-gray-100 min-h-screen relative shadow-2xl">
            {children}
            <BottomNav />
          </div>
        </InstallGate>
      </body>
    </html>
  );
}
