'use client';
import { useEffect, useState } from 'react';

export default function InstallGate({ children }: { children: React.ReactNode }) {
  const [isApp, setIsApp] = useState(false);

  useEffect(() => {
    // 1. CHECK: Is this the PWA?
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    
    // 2. CHECK: Is this an APK (WebView)?
    // Android APKs usually add 'wv' to the User Agent
    const userAgent = navigator.userAgent.toLowerCase();
    const isWebView = userAgent.includes('wv') || userAgent.includes('android');

    // If it's PWA or APK/WebView, let them in!
    if (isStandalone || isWebView) {
      setIsApp(true);
    }
  }, []);

  // IF IT IS THE APP (APK or PWA), Show the Content
  if (isApp) {
    return <>{children}</>;
  }

  // IF IT IS A BROWSER, Show the "Download Wall"
  return (
    <div className="fixed inset-0 bg-[#0a0a0a] z-[9999] flex flex-col items-center justify-center p-6 text-center font-sans">
      <div className="mb-8 relative animate-pulse">
        <div className="absolute inset-0 bg-yellow-500 blur-3xl opacity-20"></div>
        <h1 className="text-5xl font-black italic tracking-wider text-yellow-500 relative z-10">
          FF <span className="text-white">WARZONE</span>
        </h1>
      </div>

      <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl shadow-2xl w-full max-w-sm">
        <h2 className="text-2xl font-black text-white mb-4 uppercase italic">Download APK</h2>
        <p className="text-gray-400 text-sm mb-6">
          You are visiting via Browser. Please download the official Android App to play.
        </p>

        {/* This button will eventually link to your APK file */}
        <button 
          className="w-full bg-yellow-500 text-black font-black text-lg uppercase py-4 rounded-xl shadow-xl flex items-center justify-center gap-3"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          DOWNLOAD APK
        </button>
      </div>
    </div>
  );
}
