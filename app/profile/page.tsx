'use client';
import { useEffect, useState } from 'react';

export default function Profile() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
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
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 font-sans pt-10">
      <div className="max-w-md mx-auto bg-gray-900 border border-gray-800 rounded-xl p-6">
        
        {/* Install App Banner */}
        {deferredPrompt && (
          <div className="bg-yellow-500 text-black p-4 rounded-xl mb-6 flex justify-between items-center shadow-lg">
            <div>
              <p className="font-black text-lg">INSTALL APP</p>
              <p className="text-xs font-bold opacity-80">Get notifications for matches!</p>
            </div>
            <button onClick={handleInstall} className="bg-black text-yellow-500 px-4 py-2 rounded-lg font-bold text-sm">
              INSTALL
            </button>
          </div>
        )}

        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-gradient-to-tr from-yellow-500 to-red-500 rounded-full flex items-center justify-center text-2xl font-black text-black">P1</div>
          <div>
            <h2 className="text-xl font-bold">Player One</h2>
            <p className="text-gray-400 text-sm">UID: Not linked yet</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-black border border-gray-800 p-4 rounded-lg text-center">
            <p className="text-gray-500 text-xs">Matches Played</p>
            <p className="text-2xl font-black text-white">0</p>
          </div>
          <div className="bg-black border border-gray-800 p-4 rounded-lg text-center">
            <p className="text-gray-500 text-xs">Total Kills</p>
            <p className="text-2xl font-black text-white">0</p>
          </div>
        </div>

        <div className="bg-blue-900/30 border border-blue-500 rounded-xl p-5 text-center">
          <h3 className="text-blue-400 font-bold mb-2">Refer & Earn System</h3>
          <p className="text-xs text-gray-300 mb-4">Share your link. Get 10 BDT when your friend plays their first match!</p>
          <div className="bg-black p-3 rounded-lg border border-gray-700 font-mono text-sm mb-3">
            ffwarzone.com/ref/p1
          </div>
          <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg text-sm">Copy Link</button>
        </div>
      </div>
    </div>
  );
}
