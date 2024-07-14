import Head from 'next/head';
import Image from 'next/image';
import hero_images from '@/../public/assets/images/hero_kenari_besar.png';
import SearchComponent from '@/components/search';
import { FaAnglesDown } from 'react-icons/fa6';

function Home() {
  return (
    <>
      <Head>
        <title>ISTI - Integrated System of Tree Information</title>
      </Head>
      <main>
        <div className="relative  z-20 ">
          <Image className="w-full" src={hero_images} alt="hero images" />
          <div className="absolute inset-0 h-1/2 my-auto bg-black bg-opacity-60"></div>{' '}
          {/* Overlay */}
          <div className="pl-24 absolute w-full p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="pb-4 max-w-[1280px] font-bold text-[80px]">
              Kenali Pohon Langka dan Pohon Kebudayaan di Sekitarmu!
            </p>
            <SearchComponent />
          </div>
          <button className="absolute bottom-0 text-white font-bold bg-green-500 py-2 px-3 rounded-full left-1/2 -translate-x-1/2 center mb-4 text-lg text-center flex gap-3 items-center">
            <p className="inline-block">Lihat lebih banyak</p>
            <FaAnglesDown className="inline-block text-2xl animate-bounce" />
          </button>
        </div>
      </main>
    </>
  );
}

export default Home;
