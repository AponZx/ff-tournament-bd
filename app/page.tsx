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
    <main className="w-full min-h-screen bg-gray-50 font-sans">
      
      {/* Header Area - CLEAN RED */}
      <div className="w-full bg-[#d32f2f] text-white py-4 px-6 shadow-md">
        <h1 className="text-2xl font-black italic">
          SUBSCRIBE TO OUR<br/>
          <span className="text-white text-3xl">YouTube CHANNEL</span>
        </h1>
        <div className="mt-2 w-10 h-1 bg-white rounded-full"></div>
      </div>

      {/* Notice Board - ALIGNED & BOLD TEXT */}
      <div className="p-4"> 
        {/* REMOVED -mt-4 to fix alignment */}
        <div className="bg-white rounded-lg shadow-md p-3 flex items-center gap-3 border border-gray-100">
          <div className="bg-orange-100 p-2 rounded-full">
            <span className="text-orange-500 font-bold text-xl">📢</span>
          </div>
          <div className="flex-1 overflow-hidden text-sm font-bold text-gray-800">
             <div dangerouslySetInnerHTML={{ __html: '<marquee scrollamount="4">টেলিগ্রামে জয়েন করুন এবং এডমিনকে ইনবক্স করে অপেক্ষা করবেন।</marquee>' }} />
          </div>
        </div>
      </div>

      {/* Categories - BOLDER TEXT */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-black text-gray-800 uppercase tracking-wide border-l-4 border-gray-800 pl-3">Free Fire Matches</h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {categories.map((cat, i) => (
            <Link href={cat.link} key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 block active:scale-95 transition-transform group">
              <div className="h-28 bg-gray-200 relative overflow-hidden">
                <img src={cat.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={cat.title} />
                <span className="absolute top-2 right-2 bg-[#e91e63] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">{cat.badge}</span>
              </div>
              <div className="p-3">
                <h3 className="font-black text-xs text-gray-900 mb-1">{cat.title}</h3>
                <p className="text-[10px] text-gray-600 font-semibold">{cat.desc}</p> 
                {/* Changed text-gray-500 to 600 and font-medium to semibold */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
