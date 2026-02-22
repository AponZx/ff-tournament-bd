'use client';
import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const supabase = createClientComponentClient();

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) setMessage(`Error: ${error.message}`);
    else setMessage('Password reset link sent to your email!');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-2xl">
        <h2 className="text-xl font-bold mb-4">Reset Password</h2>
        {message && <p className="mb-4 text-sm text-yellow-500">{message}</p>}
        <form onSubmit={handleReset} className="space-y-4">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white outline-none" placeholder="Enter your email" />
          <button type="submit" className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg">Send Reset Link</button>
        </form>
        <Link href="/login" className="block text-center mt-4 text-gray-400 text-sm hover:text-white">Back to Login</Link>
      </div>
    </div>
  );
}
