'use client';
import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-4">
        <div className="text-center bg-gray-900 p-8 rounded-2xl border border-green-500">
          <h2 className="text-2xl font-bold text-green-400 mb-2">Account Created!</h2>
          <p className="text-gray-300">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-black italic tracking-wider text-yellow-500 mb-1">CREATE ACCOUNT</h1>
          <p className="text-gray-400 text-sm">Join the BD Warzone community</p>
        </div>

        {error && <div className="bg-red-900/50 border border-red-500 text-red-200 p-3 rounded-lg mb-4 text-sm text-center">{error}</div>}

        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="text-xs text-gray-400 mb-1 block">Email Address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-yellow-500" placeholder="player@gmail.com" />
          </div>
          <div>
            <label className="text-xs text-gray-400 mb-1 block">Password (Min 6 chars)</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-yellow-500" placeholder="••••••••" />
          </div>
          <button type="submit" disabled={loading} className="w-full bg-yellow-500 text-black font-black uppercase py-3 rounded-lg mt-4 active:scale-95 transition-transform">
            {loading ? 'Creating...' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account? <Link href="/login" className="text-yellow-500 font-bold">Log In</Link>
        </p>
      </div>
    </div>
  );
}
