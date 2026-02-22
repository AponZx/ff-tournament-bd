// This page will be connected to the database in the next update
export default function Profile() {
  const user = {
    name: "AponZx",
    referralCode: "WZf4a8b1",
    totalReferrals: 0,
    matchesPlayed: 0,
    totalKills: 0,
    totalWins: 0
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 font-sans pt-10">
      <div className="max-w-md mx-auto">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-tr from-yellow-500 to-red-500 rounded-full flex items-center justify-center text-3xl font-black text-black shadow-lg">
              {user.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-gray-400 text-sm">UID: Not linked yet</p>
            </div>
          </div>

          <div className="bg-black border border-gray-800 p-4 rounded-lg text-center">
            <p className="text-gray-500 text-xs mb-1">YOUR REFERRAL CODE</p>
            <p className="font-mono text-2xl tracking-widest text-yellow-500">{user.referralCode}</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-900 border border-gray-800 p-4 rounded-lg text-center">
            <p className="text-gray-400 text-sm">Matches Played</p>
            <p className="text-3xl font-black text-white">{user.matchesPlayed}</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 p-4 rounded-lg text-center">
            <p className="text-gray-400 text-sm">Total Referrals</p>
            <p className="text-3xl font-black text-white">{user.totalReferrals}</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 p-4 rounded-lg text-center">
            <p className="text-gray-400 text-sm">Total Wins</p>
            <p className="text-3xl font-black text-white">{user.totalWins}</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 p-4 rounded-lg text-center">
            <p className="text-gray-400 text-sm">Total Kills</p>
            <p className="text-3xl font-black text-white">{user.totalKills}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
