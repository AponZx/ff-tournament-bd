'use client';
import Link from 'next/link';

export default function Home() {
  const categories = [
    { title: 'BR MATCH', desc: '89 matches found', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400', link: '/matches/fullmap', badge: 'BR' },
    { title: 'BR SURVIVAL', desc: '6 matches found', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=400', link: '/matches/fullmap', badge: 'SURVIVAL' },
    { title: 'CLASH SQUAD', desc: '38 matches found', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=400', link: '/matches/fullmap', badge: 'CS' },
    { title: 'CS 1v1 2v2', desc: '143 matches found', image: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&q=80&w=400', link: '/matches/fullmap', badge: 'CS' },
  ];

  return (
    <main className="min-h-screen bg-[#f3f4f6] font-sans">
      <div className="w-full bg-red-600 text-white p-6 text-center shadow-md relative overflow-hidden">
        <h1 className="text-2xl font-black italic mb-1 z-10 relative">SUBSCRIBE TO OUR<br/>YouTube CHANNEL</h1>
      </div>
      <div className="p-3">
        <div className="bg-yellow-500 text-white p-3 rounded-lg flex items-center gap-2 text-xs font-bold shadow-sm">
          <span className="bg-white text-yellow-500 rounded-full w-5 h-5 flex items-center justify-center">📢</span>
          <div className="flex-1 overflow-hidden" dangerouslySetInnerHTML={{ __html: '<marquee scrollamount="5">টেলিগ্রামে জয়েন করুন এবং এডমিনকে ইনবক্স করে অপেক্ষা করবেন সমস্যার সমাধান পাবেন ইনশাআল্লাহ!</marquee>' }} />
        </div>
      </div>
      <div className="p-3">
        <h2 className="text-lg font-black mb-3">FREE FIRE</h2>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((cat, i) => (
            <Link href={cat.link} key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 block active:scale-95 transition-transform">
              <div className="h-28 bg-gray-300 relative">
                <img src={cat.image} className="w-full h-full object-cover" alt={cat.title} />
                <span className="absolute top-2 right-2 bg-pink-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">{cat.badge}</span>
              </div>
              <div className="p-2"><h3 className="font-bold text-xs truncate">{cat.title}</h3><p className="text-[10px] text-gray-500">{cat.desc}</p></div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
