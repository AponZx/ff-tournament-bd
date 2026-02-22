'use client';
import { useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
      setTimeout(() => router.push('/login'), 2000);
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
        <div className="bg-gray-900 p-8 rounded-2xl border border-green-500 text-center"><h2 className="text-green-400 font-bold text-xl">Account Created!</h2></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-2xl">
        <h1 className="text-2xl font-black italic text-center tracking-wider text-yellow-500 mb-6">CREATE ACCOUNT</h1>
        {error && <div className="bg-red-900/50 border border-red-500 text-red-200 p-3 rounded-lg mb-4 text-sm text-center">{error}</div>}
        <form onSubmit={handleSignUp} className="space-y-4">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-yellow-500" placeholder="Email Address" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-yellow-500" placeholder="Password (Min 6)" />
          <button type="submit" disabled={loading} className="w-full bg-yellow-500 text-black font-black uppercase py-3 rounded-lg mt-4">{loading ? 'Creating...' : 'Sign Up'}</button>
        </form>
        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account? <Link href="/login" className="text-yellow-500 font-bold">Log In</Link>
        </p>
      </div>
    </div>
  );
}
