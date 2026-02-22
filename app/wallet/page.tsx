'use client';
import { useState } from 'react';

export default function WalletPage() {
  const [amount, setAmount] = useState('');
  const [trxId, setTrxId] = useState('');
  const [method, setMethod] = useState('bKash');
  const [loading, setLoading] = useState(false);

  const handleDeposit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const message = `🔔 <b>New Deposit Request</b>\n\n💰 <b>Amount:</b> ${amount} BDT\n🏦 <b>Method:</b> ${method}\n🧾 <b>TrxID:</b> <code>${trxId}</code>\n\n<i>Check your personal app to verify.</i>`;

    const res = await fetch('/api/notify-admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });

    if (res.ok) {
      alert('Deposit request sent! Admin will verify via Telegram shortly.');
      setAmount('');
      setTrxId('');
    } else {
      alert('Failed to send. Admin needs to check Vercel Environment Variables.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 pt-10 font-sans">
      <div className="max-w-md mx-auto bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-green-400">Add Money (BDT)</h2>
        
        <div className="bg-gray-800 p-4 rounded-lg mb-6 text-sm border border-gray-700">
          <p className="text-gray-300 mb-2">1. Send money via Send Money to:</p>
          <p className="font-mono text-2xl text-white font-bold tracking-wider">017XX-XXXXXX</p>
          <p className="text-xs text-gray-500 mt-2">Personal bKash / Nagad</p>
        </div>

        <form onSubmit={handleDeposit} className="space-y-4">
          <div>
            <label className="text-xs text-gray-400 mb-1 block">Select Method</label>
            <select value={method} onChange={(e) => setMethod(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-green-500 outline-none">
              <option>bKash</option>
              <option>Nagad</option>
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-400 mb-1 block">Amount (BDT)</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-green-500 outline-none" placeholder="e.g. 100" />
          </div>
          <div>
            <label className="text-xs text-gray-400 mb-1 block">Transaction ID</label>
            <input type="text" value={trxId} onChange={(e) => setTrxId(e.target.value)} required className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-green-500 outline-none" placeholder="TrxID here" />
          </div>
          <button type="submit" disabled={loading} className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 rounded-lg transition-colors mt-2">
            {loading ? 'Sending to Admin...' : 'Verify Payment'}
          </button>
        </form>
      </div>
    </div>
  );
}
