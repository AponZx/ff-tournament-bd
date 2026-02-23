'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function FullMapMatches() {
  const [showPrizePool, setShowPrizePool] = useState(false);

  return (
    <div className="min-h-screen bg-[#f3f4f6]">
      <div className="bg-white p-4 flex items-center justify-between border-b border-gray-200 sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-xl font-bold">&larr;</Link>
          <h1 className="text-lg font-bold">FreeFire FullMap Matches</h1>
        </div>
        <button className="text-blue-500 font-bold text-xl">↻</button>
      </div>

      <div className="p-3 space-y-4">
        {/* MATCH CARD 1 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative">
          <div className="absolute top-0 right-0 bg-[#8bc34a] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">#28774</div>
          <div className="p-4 pt-5">
            <div className="flex gap-3 mb-4">
              <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=100&q=80" className="w-12 h-12 rounded-lg object-cover" />
              <div>
                <h3 className="font-bold text-sm leading-tight text-gray-800">Duo Time | রোজার দিন দয়া করে কেউ রুমের ভেতর আন-রেজিস্ট্রেশন প্লেয়ার ইনভাইট করবেন না</h3>
                <p className="text-[10px] text-gray-500 mt-1">2026-02-23 at 08:20 AM</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="border border-gray-200 rounded-lg p-2 text-center"><p className="text-[9px] text-gray-500 uppercase">WIN PRIZE</p><p className="font-bold text-sm">800 TK</p></div>
              <div className="border border-gray-200 rounded-lg p-2 text-center"><p className="text-[9px] text-gray-500 uppercase">PER KILL</p><p className="font-bold text-sm">10 TK</p></div>
              <div className="border border-gray-200 rounded-lg p-2 text-center"><p className="text-[9px] text-gray-500 uppercase">ENTRY FEE</p><p className="font-bold text-sm">20 TK</p></div>
            </div>

            <div className="flex justify-between text-[10px] text-gray-600 font-semibold mb-1 px-1"><span>Duo</span><span>Bermuda</span><span>MOBILE</span></div>
            <div className="flex justify-between text-[10px] text-gray-600 font-semibold mb-1"><span>Spots Left:</span><span className="font-bold">0/48</span></div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4"><div className="bg-orange-500 h-1.5 rounded-full w-full"></div></div>

            <div className="flex gap-2 mb-4">
              <button className="flex-1 border border-gray-200 rounded-lg py-2 text-xs font-bold text-blue-600">🔑 Room Details</button>
              <button onClick={() => setShowPrizePool(true)} className="flex-1 border border-gray-200 rounded-lg py-2 text-xs font-bold text-blue-600">🏆 Prize Pool</button>
            </div>
          </div>
          <div className="bg-[#e53935] text-white text-center py-2.5 font-bold text-sm">Match Full</div>
        </div>
      </div>

      {/* PRIZE POOL MODAL (Popup) */}
      {showPrizePool && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-yellow-400 rounded-2xl w-full max-w-sm overflow-hidden border-4 border-yellow-200 relative">
            <button onClick={() => setShowPrizePool(false)} className="absolute top-2 right-2 bg-black/30 rounded-full w-7 h-7 flex items-center justify-center text-white text-lg">×</button>
            <div className="bg-yellow-500 text-center p-4">
              <h2 className="font-black text-2xl text-white drop-shadow-md">TOTAL WINPRIZE</h2>
            </div>
            <div className="p-6 bg-white space-y-3">
              <div className="flex justify-between items-center text-gray-800 font-bold"><span className="flex items-center gap-2">👑 Winner</span><span>90 Taka</span></div>
              <div className="flex justify-between items-center text-gray-800 font-bold"><span className="flex items-center gap-2">🥈 2nd Position</span><span>70 Taka</span></div>
              <div className="flex justify-between items-center text-gray-800 font-bold"><span className="flex items-center gap-2">🥉 3rd Position</span><span>40 Taka</span></div>
              <div className="flex justify-between items-center text-gray-800 font-bold"><span className="flex items-center gap-2">🏅 4th Position</span><span>30 Taka</span></div>
              <div className="flex justify-between items-center text-gray-800 font-bold"><span className="flex items-center gap-2">🏅 5th Position</span><span>20 Taka</span></div>
              <hr className="border-gray-200 my-2" />
              <div className="flex justify-between items-center text-gray-800 font-bold"><span className="flex items-center gap-2">🎯 Per Kill</span><span>10 Taka</span></div>
              <hr className="border-gray-200 my-2" />
              <div className="flex justify-between items-center text-gray-800 font-black text-lg"><span className="flex items-center gap-2">🏆 Total Prize Pool</span><span>800 Taka</span></div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
