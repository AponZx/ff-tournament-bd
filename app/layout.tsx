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
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        <InstallGate>
          {/* REMOVED max-w-md to fix black gaps. Now it is FULL WIDTH. */}
          <div className="min-h-screen w-full bg-gray-50 pb-20">
            {children}
          </div>
          <BottomNav />
        </InstallGate>
      </body>
    </html>
  );
}
