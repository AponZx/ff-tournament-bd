'use client';
import Link from 'next/link';

export default function FullMapMatches() {
  return (
    <div className="min-h-screen bg-[#f3f4f6]">
      {/* Header */}
      <div className="bg-white p-4 flex items-center justify-between border-b border-gray-200 sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-xl font-bold">&larr;</Link>
          <h1 className="text-lg font-bold">FreeFire FullMap Matches</h1>
        </div>
        <button className="text-blue-500">↻</button>
      </div>

      {/* Match List */}
      <div className="p-3 space-y-4">
        
        {/* MATCH CARD 1 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative">
          <div className="absolute top-0 right-0 bg-[#8bc34a] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">
            #28774
          </div>
          
          <div className="p-4 pt-5">
            <div className="flex gap-3 mb-4">
              <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=100&q=80" className="w-12 h-12 rounded-lg object-cover" />
              <div>
                <h3 className="font-bold text-sm leading-tight text-gray-800">Duo Time | রোজার দিন দয়া করে কেউ রুমের ভেতর আন-রেজিস্ট্রেশন প্লেয়ার ইনভাইট করবেন না</h3>
                <p className="text-[10px] text-gray-500 mt-1">2026-02-23 at 08:20 AM</p>
              </div>
            </div>

            {/* 3 Boxes */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="border border-gray-200 rounded-lg p-2 text-center">
                <p className="text-[9px] text-gray-500 uppercase">WIN PRIZE</p>
                <p className="font-bold text-sm">800 TK</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-2 text-center">
                <p className="text-[9px] text-gray-500 uppercase">PER KILL</p>
                <p className="font-bold text-sm">10 TK</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-2 text-center">
                <p className="text-[9px] text-gray-500 uppercase">ENTRY FEE</p>
                <p className="font-bold text-sm">20 TK</p>
              </div>
            </div>

            {/* Match Info & Progress */}
            <div className="flex justify-between text-[10px] text-gray-500 mb-1 px-1">
              <span>Duo</span>
              <span>Bermuda</span>
              <span>MOBILE</span>
            </div>
            
            <div className="flex justify-between text-[10px] text-gray-500 mb-1">
              <span>Only 0 spots are left</span>
              <span className="font-bold">48/48</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
              <div className="bg-orange-500 h-1.5 rounded-full w-full"></div>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 mb-4">
              <button className="flex-1 border border-gray-200 rounded-lg py-2 text-xs font-bold text-blue-600 flex justify-center items-center gap-1">
                🔑 Room Details
              </button>
              <button className="flex-1 border border-gray-200 rounded-lg py-2 text-xs font-bold text-blue-600 flex justify-center items-center gap-1">
                🏆 Prize Pool
              </button>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="bg-[#e53935] text-white text-center py-2.5 font-bold text-sm">
            Room Created Join Now
          </div>
        </div>

      </div>
    </div>
  );
}
