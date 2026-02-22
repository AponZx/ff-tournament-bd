'use client';
import { useEffect, useState } from 'react';

export default function InstallGate({ children }: { children: React.ReactNode }) {
  const [isInstalled, setIsInstalled] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isReady, setIsReady] = useState(false);
  const [showManualInstructions, setShowManualInstructions] = useState(false);
  const [isInAppBrowser, setIsInAppBrowser] = useState(false);

  useEffect(() => {
    // 1. FAST CHECK: Are we installed?
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (isStandalone) {
      setIsInstalled(true);
      return;
    }

    // 2. DETECT FACEBOOK/MESSENGER/YOUTUBE (In-App Browsers)
    const ua = navigator.userAgent || navigator.vendor;
    // Common in-app browser strings
    if ((ua.indexOf('FBAN') > -1) || (ua.indexOf('FBAV') > -1) || (ua.indexOf('Instagram') > -1) || (ua.indexOf('Line') > -1)) {
      setIsInAppBrowser(true);
    }

    // 3. CAPTURE INSTALL EVENT (If available)
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsReady(true); // Native install ready!
    });

    // 4. FORCE READY TIMER (The Fix for "Stuck on Preparing")
    // If browser doesn't fire event in 1.5 seconds, we unlock the button anyway
    // and use the Manual Instructions fallback.
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleInstall = async () => {
    // SCENARIO A: Native Install (Chrome/Samsung Internet)
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
      return;
    }

    // SCENARIO B: Facebook/Messenger/In-App Browser
    // They technically CANNOT install. We must tell them to Open in Chrome.
    if (isInAppBrowser) {
      alert('⚠️ Security Restriction\n\nFacebook/Messenger does not allow App Installs.\n\n1. Tap the 3 Dots (⋮) at top right.\n2. Select "Open in Chrome" or "Browser".\n3. Then Install.');
      return;
    }

    // SCENARIO C: Manual Fallback (Event didn't fire, but we force it)
    setShowManualInstructions(true);
  };

  // IF INSTALLED: Show Website
  if (isInstalled) {
    return <>{children}</>;
  }

  // MANUAL INSTRUCTIONS MODAL (Overlay)
  if (showManualInstructions) {
    return (
      <div className="fixed inset-0 bg-black/95 z-[99999] flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300">
        <div className="absolute top-4 right-4 animate-bounce text-yellow-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>
        
        <h2 className="text-3xl font-black text-white mb-4 uppercase">Almost Done!</h2>
        <div className="bg-gray-800 p-6 rounded-xl border border-yellow-500 shadow-2xl">
          <p className="text-gray-300 mb-4 font-bold text-lg">Tap the Browser Menu (3 dots)</p>
          <div className="flex items-center gap-2 text-left bg-black p-3 rounded-lg border border-gray-700 mb-4">
            <span className="text-2xl">⋮</span>
            <div>
              <p className="text-xs text-gray-500 uppercase">Step 1</p>
              <p className="font-bold text-white">Tap Options</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-left bg-black p-3 rounded-lg border border-gray-700">
            <span className="text-2xl">📲</span>
            <div>
              <p className="text-xs text-gray-500 uppercase">Step 2</p>
              <p className="font-bold text-white">Install App / Add to Home</p>
            </div>
          </div>
        </div>
        <button 
          onClick={() => setShowManualInstructions(false)} 
          className="mt-8 text-gray-500 text-sm underline"
        >
          Close Help
        </button>
      </div>
    );
  }

  // DOWNLOAD WALL
  return (
    <div className="fixed inset-0 bg-[#0a0a0a] z-[9999] flex flex-col items-center justify-center p-6 text-center font-sans">
      
      {/* Brand Header */}
      <div className="mb-8 relative">
        <div className="absolute inset-0 bg-yellow-500 blur-3xl opacity-10"></div>
        <h1 className="text-5xl font-black italic tracking-wider text-yellow-500 relative z-10 drop-shadow-xl">
          FF <span className="text-white">WARZONE</span>
        </h1>
        <p className="text-xs font-bold text-gray-500 tracking-[0.3em] mt-2">OFFICIAL TOURNAMENT APP</p>
      </div>

      <div className="w-full max-w-sm relative">
        {isInAppBrowser && (
          <div className="bg-red-900/50 border border-red-500 p-3 rounded-lg mb-4 text-xs text-red-200 font-bold text-left flex items-center gap-2">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            <div>
              <span className="block uppercase text-[10px] opacity-70">Browser Warning</span>
              Tap "..." then "Open in Chrome"
            </div>
          </div>
        )}

        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
          
          <h2 className="text-2xl font-black text-white mb-2 uppercase italic">Required Update</h2>
          <p className="text-gray-400 text-sm mb-6 font-medium leading-relaxed">
            Please install the latest security update v2.4 to access your wallet.
          </p>

          {/* THE BUTTON - No more loading forever */}
          <button 
            onClick={handleInstall}
            className={`w-full py-4 rounded-xl font-black text-lg uppercase shadow-xl flex items-center justify-center gap-3 transition-all duration-300 ${
              isReady 
                ? 'bg-yellow-500 text-black hover:bg-yellow-400 active:scale-95 cursor-pointer' 
                : 'bg-gray-800 text-gray-500 cursor-wait'
            }`}
          >
            {isReady ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                INSTALL NOW
              </>
            ) : (
              'Preparing...'
            )}
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 flex gap-4 text-[10px] text-gray-600 font-mono">
        <span>SECURE</span>
        <span>•</span>
        <span>ENCRYPTED</span>
        <span>•</span>
        <span>VERIFIED</span>
      </div>
    </div>
  );
}
