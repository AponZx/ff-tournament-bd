'use client';
import { useState } from 'react';

export default function TournamentDetails() {
  const [ffName, setFfName] = useState('');
  const [ffUid, setFfUid] = useState('');
  const [isJoined, setIsJoined] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const message = `🎮 <b>New Player Joined!</b>\n\n👤 <b>In-Game Name:</b> ${ffName}\n🆔 <b>UID:</b> <code>${ffUid}</code>\n🏆 <b>Match:</b> CS Ranked Daily Mix\n💰 <b>Entry Fee Deducted:</b> 50 BDT`;

    const res = await fetch('/api/notify-admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });

    if (res.ok) {
      setIsJoined(true);
      alert('Successfully Joined! Entry fee deducted.');
    } else {
      alert('Failed to connect to server.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 font-sans pt-8">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-black italic text-yellow-500 mb-2">CS Ranked Daily Mix</h2>
        <p className="text-gray-400 text-sm mb-6">Match starts at 8:00 PM Tonight.</p>

        {isJoined ? (
          <div className="bg-green-900/30 border border-green-500 rounded-xl p-6 mb-6 text-center">
            <h3 className="text-green-400 font-bold text-xl mb-2">✅ You are Joined!</h3>
            <p className="text-gray-300 text-sm mb-4">Room ID and Password will appear here 15 minutes before the match starts.</p>
            <div className="bg-black p-4 rounded-lg border border-gray-800 font-mono">
              <p className="text-gray-500 text-xs">Room ID</p>
              <p className="text-xl tracking-widest text-white mb-2">WAITING...</p>
              <p className="text-gray-500 text-xs">Password</p>
              <p className="text-xl tracking-widest text-white">WAITING...</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleJoin} className="bg-gray-900 border border-gray-800 rounded-xl p-5 mb-6 shadow-xl">
            <h3 className="font-bold text-lg mb-4 text-white">Player Details Required</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Free Fire In-Game Name</label>
                <input type="text" value={ffName} onChange={(e) => setFfName(e.target.value)} required className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:border-yellow-500 outline-none" placeholder="e.g. SK SABIR BOSS" />
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Free Fire UID</label>
                <input type="number" value={ffUid} onChange={(e) => setFfUid(e.target.value)} required className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:border-yellow-500 outline-none" placeholder="e.g. 123456789" />
              </div>
              <button type="submit" disabled={loading} className="w-full bg-yellow-500 text-black font-black uppercase tracking-wide py-3 rounded-lg active:scale-95 transition-transform mt-2">
                {loading ? 'Processing...' : 'Pay ৳50 & Join'}
              </button>
            </div>
          </form>
        )}

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
          <h3 className="font-bold text-white mb-3">Rules & Regulations</h3>
          <ul className="text-xs text-gray-400 space-y-2 list-disc pl-4">
            <li>Teaming up with enemies will result in an instant ban.</li>
            <li>Use of hacks or glitches is strictly prohibited.</li>
            <li>Make sure your given UID matches the one you play with.</li>
            <li>Prize money will be added to your wallet automatically after the match.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
