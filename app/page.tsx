'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('Upcoming');

  const tournaments = [
    { id: 1, title: 'CS Ranked Daily Mix', mode: 'Squad', map: 'Bermuda', entry: 50, per_kill: 10, prize: 500, max: 48, joined: 32, status: 'Upcoming' },
    { id: 2, title: 'Solo King BD', mode: 'Solo', map: 'Purgatory', entry: 20, per_kill: 5, prize: 200, max: 48, joined: 48, status: 'Ongoing' },
    { id: 3, title: 'Duo Masters', mode: 'Duo', map: 'Alpine', entry: 30, per_kill: 15, prize: 300, max: 48, joined: 48, status: 'Past' }
  ];

  const filteredTournaments = tournaments.filter(t => t.status === activeTab);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pb-20 font-sans">
      <header className="flex justify-between items-center p-4 bg-gray-900 border-b border-gray-800 sticky top-0 z-10">
        <h1 className="text-2xl font-black italic tracking-wider text-yellow-500 shadow-sm">
          FF <span className="text-white">WARZONE</span>
        </h1>
        <div className="flex gap-2">
          <Link href="/profile" className="bg-blue-600 px-3 py-2 rounded-lg font-bold text-xs text-white">Profile</Link>
          <Link href="/wallet" className="bg-green-600 px-3 py-2 rounded-lg font-bold text-xs text-white">৳ Deposit</Link>
        </div>
      </header>

      {/* TABS */}
      <div className="flex justify-around bg-gray-900 p-2 border-b border-gray-800">
        {['Past', 'Ongoing', 'Upcoming'].map(tab => (
          <button 
            key={tab} 
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-bold text-sm rounded-lg transition-all ${activeTab === tab ? 'bg-yellow-500 text-black' : 'text-gray-400'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <section className="p-4">
        <div className="grid grid-cols-1 gap-5">
          {filteredTournaments.length === 0 && <p className="text-center text-gray-500 mt-10">No matches found.</p>}
          {filteredTournaments.map((tourney) => (
            <div key={tourney.id} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-2xl relative">
              <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-black px-3 py-1 rounded-bl-lg uppercase tracking-widest">
                {tourney.mode}
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold mb-1 text-white">{tourney.title}</h3>
                <p className="text-gray-400 text-xs mb-4">Map: <span className="text-yellow-400">{tourney.map}</span></p>
                
                <div className="grid grid-cols-3 gap-2 mb-4 bg-gray-950 p-3 rounded-lg border border-gray-800 text-center">
                  <div>
                    <p className="text-gray-500 text-[10px] uppercase">Entry Fee</p>
                    <p className="font-bold text-green-400">৳ {tourney.entry}</p>
                  </div>
                  <div className="border-l border-r border-gray-800">
                    <p className="text-gray-500 text-[10px] uppercase">Per Kill</p>
                    <p className="font-bold text-red-400">৳ {tourney.per_kill}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px] uppercase">Prize Pool</p>
                    <p className="font-bold text-yellow-400">৳ {tourney.prize}</p>
                  </div>
                </div>

                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Players Joined</span>
                  <span>{tourney.joined} / {tourney.max}</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${(tourney.joined / tourney.max) * 100}%` }}></div>
                </div>

                <Link href={`/tournaments/${tourney.id}`} className="block w-full text-center bg-white text-black font-black py-3 rounded-lg active:scale-95 transition-transform uppercase tracking-wide">
                  {tourney.status === 'Upcoming' ? 'Join Match' : 'View Details'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
