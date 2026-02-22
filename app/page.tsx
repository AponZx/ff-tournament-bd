import Link from 'next/link';

export default function Home() {
  const tournaments = [
    { id: 1, title: 'CS Ranked Daily Mix', game_mode: 'Squad', entry_fee: 50, prize_pool: 500, max: 48, joined: 32 },
    { id: 2, title: 'Solo King BD', game_mode: 'Solo', entry_fee: 20, prize_pool: 200, max: 48, joined: 45 }
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-4 pb-20 font-sans">
      <header className="flex justify-between items-center mb-8 pt-4">
        <h1 className="text-2xl font-black italic tracking-wider text-yellow-500">
          FF <span className="text-white">WARZONE</span>
        </h1>
        <Link href="/wallet" className="bg-gray-800 px-4 py-2 rounded-full border border-gray-700 font-bold text-sm text-green-400">
          ৳ Deposit
        </Link>
      </header>

      <section>
        <h2 className="text-xl font-bold mb-4 border-l-4 border-yellow-500 pl-3">Upcoming Matches</h2>
        <div className="grid grid-cols-1 gap-4">
          {tournaments.map((tourney) => (
            <div key={tourney.id} className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-lg relative p-5">
              <div className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
                {tourney.game_mode}
              </div>
              <h3 className="text-xl font-bold mb-4 mt-2">{tourney.title}</h3>
              
              <div className="flex justify-between items-center mb-4">
                <div className="text-center">
                  <p className="text-gray-500 text-xs uppercase">Entry Fee</p>
                  <p className="font-bold text-green-400">৳ {tourney.entry_fee}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-500 text-xs uppercase">Prize Pool</p>
                  <p className="font-bold text-yellow-400">৳ {tourney.prize_pool}</p>
                </div>
              </div>

              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(tourney.joined / tourney.max) * 100}%` }}></div>
              </div>
              <p className="text-xs text-gray-400 mb-4">{tourney.joined} / {tourney.max} Joined</p>

              <button className="w-full bg-white text-black font-bold py-2 rounded-lg">Join Tournament</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
