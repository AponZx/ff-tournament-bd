'use client';
import { useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

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
          <p className="text-gray-400 text-sm mt-2">Login to join matches</p>
        </div>
        {error && <div className="bg-red-900/50 border border-red-500 text-red-200 p-3 rounded-lg mb-4 text-sm text-center">{error}</div>}
        <form onSubmit={handleLogin} className="space-y-4">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-yellow-500" placeholder="Email Address" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-yellow-500" placeholder="Password" />
          <button type="submit" disabled={loading} className="w-full bg-yellow-500 text-black font-black uppercase py-3 rounded-lg mt-4 active:scale-95">{loading ? 'Verifying...' : 'Log In'}</button>
        </form>
        <p className="text-center text-gray-400 text-sm mt-6">
          Don't have an account? <Link href="/signup" className="text-yellow-500 font-bold">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
