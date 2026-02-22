'use client';
import { useEffect, useState } from 'react';

export default function InstallGate({ children }: { children: React.ReactNode }) {
  const [isInstalled, setIsInstalled] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [readyToInstall, setReadyToInstall] = useState(false);

  useEffect(() => {
    // 1. Register Service Worker (Crucial for Android Install Button)
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(
        function (registration) {
          console.log('Service Worker registration successful');
        },
        function (err) {
          console.log('Service Worker registration failed: ', err);
        }
      );
    }

    // 2. Check if already installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (isStandalone) {
      setIsInstalled(true);
    }

    // 3. CAPTURE THE INSTALL EVENT
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Update UI notify the user they can add to home screen
      setReadyToInstall(true);
    });
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      // Show the install prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
        setDeferredPrompt(null);
      }
    } else {
      // Fallback if browser is taking too long to fire the event
      alert('Install prompt is preparing... try clicking again in 2 seconds.');
    }
  };

  // IF INSTALLED: Show the Website
  if (isInstalled) {
    return <>{children}</>;
  }

  // IF NOT INSTALLED: Show the One-Tap Wall
  return (
    <div className="fixed inset-0 bg-[#0a0a0a] z-[9999] flex flex-col items-center justify-center p-6 text-center font-sans">
      
      <div className="mb-10 relative animate-pulse">
        <div className="absolute inset-0 bg-yellow-500 blur-2xl opacity-20"></div>
        <h1 className="text-5xl font-black italic tracking-wider text-yellow-500 relative z-10 drop-shadow-xl">
          FF <span className="text-white">WARZONE</span>
        </h1>
      </div>

      <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-8 rounded-3xl shadow-2xl w-full max-w-sm relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50"></div>

        <h2 className="text-3xl font-black text-white mb-2 uppercase italic">Download App</h2>
        <p className="text-gray-400 text-sm mb-8 font-medium">
          Install the official app to access tournaments and secure wallet.
        </p>

        {/* The One-Tap Button */}
        {readyToInstall ? (
          <button 
            onClick={handleInstall}
            className="w-full bg-yellow-500 text-black font-black text-lg uppercase py-4 rounded-xl shadow-[0_0_20px_rgba(234,179,8,0.4)] active:scale-95 transition-all flex items-center justify-center gap-3 animate-bounce-slow"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            INSTALL NOW
          </button>
        ) : (
          <button 
            disabled
            className="w-full bg-gray-800 text-gray-500 font-bold text-lg uppercase py-4 rounded-xl flex items-center justify-center gap-3 cursor-not-allowed"
          >
            <svg className="animate-spin h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Preparing...
          </button>
        )}

        <p className="mt-6 text-[10px] text-gray-600 uppercase tracking-widest font-bold">
          {readyToInstall ? '100% Secure • 4.5 MB' : 'Loading App Data...'}
        </p>
      </div>
    </div>
  );
}
