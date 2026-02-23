'use client';
import Link from 'next/link';

export default function Home() {
  const categories = [
    { 
      title: 'BR MATCH', 
      desc: '89 matches found', 
      image: 'https://wallpapers.com/images/hd/free-fire-mobile-4k-j645391m7935496z.jpg', 
      link: '/matches/fullmap', 
      badge: 'BR' 
    },
    { 
      title: 'SQUAD SURVIVAL', 
      desc: '6 matches found', 
      image: 'https://wallpapers.com/images/hd/garena-free-fire-4k-poster-z23r302820387431.jpg', 
      link: '/matches/fullmap', 
      badge: 'SURVIVAL' 
    },
    { 
      title: 'CLASH SQUAD', 
      desc: '38 matches found', 
      image: 'https://wallpapers.com/images/hd/free-fire-clash-squad-ranked-match-3840-x-2160-wallpaper-h520448135891461.jpg', 
      link: '/matches/fullmap', 
      badge: 'CS' 
    },
    { 
      title: 'CS 1v1 / 2v2', 
      desc: '143 matches found', 
      image: 'https://wallpapers.com/images/hd/free-fire-criminal-bundle-4k-3840-x-2160-wallpaper-h520448135891461.jpg', 
      link: '/matches/fullmap', 
      badge: 'VS' 
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8f9fa] font-sans pb-24">
      {/* 1. YouTube Banner (Premium Gradient) */}
      <div className="relative w-full h-48 overflow-hidden shadow-lg mb-4">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-black">
          <img 
            src="https://wallpapers.com/images/hd/free-fire-4k-loading-screen-3840-x-2160-wallpaper-h520448135891461.jpg" 
            className="w-full h-full object-cover opacity-40" 
            alt="Background"
          />
        </div>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-6">
          <div className="bg-red-600 w-16 h-12 rounded-xl flex items-center justify-center mb-2 shadow-2xl border border-red-400">
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
          </div>
          <h1 className="text-white text-3xl font-black italic tracking-tighter drop-shadow-md">
            SUBSCRIBE TO OUR<br/>
            <span className="text-red-500 bg-white px-2 rounded-sm ml-1">YouTube</span> CHANNEL
          </h1>
          <button className="mt-3 bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-1.5 px-6 rounded-full shadow-lg transition-transform active:scale-95">
            Tap to Subscribe
          </button>
        </div>
      </div>

      {/* 2. Notice Board (Clean & Rounded) */}
      <div className="px-4 mb-6">
        <div className="bg-white border-l-4 border-orange-500 rounded-r-lg shadow-sm p-3 flex items-center gap-3">
          <div className="bg-orange-100 text-orange-600 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex-1 overflow-hidden text-sm font-medium text-gray-700">
             <div dangerouslySetInnerHTML={{ __html: '<marquee scrollamount="4">টেলিগ্রামে জয়েন করুন এবং এডমিনকে ইনবক্স করে অপেক্ষা করবেন সমস্যার সমাধান পাবেন ইনশাআল্লাহ! Match ID and Password will be given 10 minutes before start.</marquee>' }} />
          </div>
        </div>
      </div>

      {/* 3. Game Categories (The "ExtremeTour" Look) */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-black text-gray-800 italic uppercase border-l-4 border-black pl-2">Free Fire Matches</h2>
          <span className="text-[10px] bg-black text-white px-2 py-0.5 rounded font-bold">LIVE</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {categories.map((cat, i) => (
            <Link href={cat.link} key={i} className="group relative h-32 rounded-2xl overflow-hidden shadow-md border border-gray-100 active:scale-95 transition-all">
              {/* Background Image */}
              <img src={cat.image} className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110" alt={cat.title} />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

              {/* Badge */}
              <div className="absolute top-2 right-2 bg-pink-600 text-white text-[9px] font-black px-2 py-0.5 rounded-md shadow-sm">
                {cat.badge}
              </div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-3">
                <h3 className="text-white font-black text-sm leading-tight italic uppercase drop-shadow-md">{cat.title}</h3>
                <p className="text-gray-300 text-[10px] font-medium mt-0.5">{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
