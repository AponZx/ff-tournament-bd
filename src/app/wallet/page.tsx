'use client';
import { useState } from 'react';

export default function WalletPage() {
  const [amount, setAmount] = useState('');
  const [trxId, setTrxId] = useState('');
  const [method, setMethod] = useState('bKash');

  const handleDeposit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert('Deposit sent to Admin Telegram!');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 pt-10">
      <div className="max-w-md mx-auto bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <h2 className="text-2xl font-bold mb-6 text-green-400">Add Money (BDT)</h2>
        
        <div className="bg-gray-800 p-4 rounded-lg mb-6 text-sm">
          <p className="text-gray-300 mb-2">1. Send money via Send Money to:</p>
          <p className="font-mono text-xl text-white font-bold">017XX-XXXXXX</p>
          <p className="text-xs text-gray-500 mt-2">Personal bKash / Nagad</p>
        </div>

        <form onSubmit={handleDeposit} className="space-y-4">
          <select value={method} onChange={(e) => setMethod(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white">
            <option>bKash</option>
            <option>Nagad</option>
          </select>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white" placeholder="Amount (e.g. 100)" />
          <input type="text" value={trxId} onChange={(e) => setTrxId(e.target.value)} required className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white" placeholder="Transaction ID" />
          <button type="submit" className="w-full bg-green-500 text-black font-bold py-3 rounded-lg">Verify Payment</button>
        </form>
      </div>
    </div>
  );
}
