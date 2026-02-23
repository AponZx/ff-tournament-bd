'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();
  const navItems = [
    { name: 'Play', path: '/', icon: '🎮' },
    { name: 'My Matches', path: '/my-matches', icon: '📋' },
    { name: 'Results', path: '/results', icon: '📈' },
    { name: 'Profile', path: '/profile', icon: '👤' },
  ];
  return (
    <div className="fixed bottom-0 w-full bg-[#f8f9fa] border-t border-gray-200 flex justify-around items-center h-16 z-50 pb-safe">
      {navItems.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Link href={item.path} key={item.name} className="flex flex-col items-center justify-center w-full h-full">
            <span className={`text-xl mb-1 ${isActive ? 'text-indigo-600 grayscale-0' : 'grayscale opacity-60'}`}>{item.icon}</span>
            <span className={`text-[10px] font-bold ${isActive ? 'text-indigo-600' : 'text-gray-500'}`}>{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
