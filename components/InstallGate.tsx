'use client';
import { useEffect, useState } from 'react';

export default function InstallGate({ children }: { children: React.ReactNode }) {
  const [isInstalled, setIsInstalled] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    // 1. Detect if user is on Android
    const ua = navigator.userAgent.toLowerCase();
    setIsAndroid(ua.includes('android'));

    // 2. Detect if already installed (Standalone mode)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    // On iOS "standalone" might be in navigator
    // @ts-ignore
    const isIOSStandalone = window.navigator.standalone === true;

    if (isStandalone || isIOSStandalone) {
      setIsInstalled(true);
    }

    // 3. Capture the Install Prompt
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  }, []);

  const handleInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        }
        setDeferredPrompt(null);
      });
    } else {
      alert('To install: Tap the browser menu (3 dots) -> "Install App" or "Add to Home Screen"');
    }
  };

  // IF INSTALLED: Show the Website/App normaly
  if (isInstalled) {
    return <>{children}</>;
  }

  // IF NOT INSTALLED: Show the "Download Wall"
  return (
    <div className="fixed inset-0 bg-[#0a0a0a] z-[9999] flex flex-col items-center justify-center p-6 text-center">
      
      {/* Logo Animation */}
      <div className="mb-8 relative">
        <div className="absolute inset-0 bg-yellow-500 blur-xl opacity-20 animate-pulse"></div>
        <h1 className="text-4xl font-black italic tracking-wider text-yellow-500 relative z-10">
          FF <span className="text-white">WARZONE</span>
        </h1>
      </div>

      <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-sm">
        <h2 className="text-2xl font-bold text-white mb-2">Download Required</h2>
        <p className="text-gray-400 text-sm mb-6">
          You must install the official app to join tournaments and securely manage your wallet.
        </p>

        {/* The Install Button */}
        <button 
          onClick={handleInstall}
          className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black font-black uppercase py-4 rounded-xl shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          INSTALL APP NOW
        </button>

        <p className="mt-6 text-xs text-gray-600">
          {isAndroid ? 'Secure App for Android' : 'Tap Share -> Add to Home Screen'}
        </p>
      </div>

      <div className="absolute bottom-6 text-gray-700 text-xs">
        V 1.0.0 • Secure Build
      </div>
    </div>
  );
}
