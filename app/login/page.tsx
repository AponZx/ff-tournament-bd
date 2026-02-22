'use client';
import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push('/');
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black italic tracking-wider text-yellow-500">
            FF <span className="text-white">WARZONE</span>
          </h1>
          <p className="text-gray-400 text-sm mt-2">Login to join matches & earn money</p>
        </div>

        {error && <div className="bg-red-900/50 border border-red-500 text-red-200 p-3 rounded-lg mb-4 text-sm text-center">{error}</div>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-xs text-gray-400 mb-1 block">Email Address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-yellow-500" placeholder="player@gmail.com" />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs text-gray-400">Password</label>
              <Link href="/reset-password" className="text-xs text-yellow-500 hover:underline">Forgot?</Link>
            </div>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-yellow-500" placeholder="••••••••" />
          </div>
          <button type="submit" disabled={loading} className="w-full bg-yellow-500 text-black font-black uppercase py-3 rounded-lg mt-4 active:scale-95 transition-transform">
            {loading ? 'Verifying...' : 'Log In'}
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          Don't have an account? <Link href="/signup" className="text-yellow-500 font-bold">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
