import Head from 'next/head';
import Image from 'next/image';
import hero_images from '@/../public/assets/images/hero_kenari_besar.png';
import logo_green from '@/../public/assets/images/logo-green.png';
import detector from '@/../public/assets/images/Detector.png';
import deteksi from '@/../public/assets/images/deteksi.png';
import edukasi from '@/../public/assets/images/edukasi.png';
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16 text-gray-800">
            <h2 className="text-[50px] font-bold text-green-500 mb-4 text-center">
              Apa Itu ISTI?
            </h2>
            <div className="flex flex-row items-center">
              <Image
                className="w-[300px] h-[300px]"
                src={logo_green}
                alt="logo"
              />
              <div>
                <h3 className="text-[30px] font-bold text-green-500 mb-4 text-right">
                  ISTI - Integrated System of Tree Information
                </h3>
                <p className="mb-4 text-right">
                  <b>Latar Belakang Program</b>
                  <br />
                  Berdasarkan Dinas Lingkungan Hidup DI Yogyakarta di tahun 2016
                  menyatakan bahwa terdapat 805 jenis tanaman tinggi di provinsi
                  ini, termasuk di dalamnya adalah 4 famili yang dilindungi.
                  Namun, masih banyak masyarakat yang belum mengetahui dengan
                  adanya pohon langka dan bernilai kebudayaan tersebut.
                </p>
                <p className="mb-4 text-right">
                  Beberapa pohon bernilai kebudayaan pun mulai sulit ditemukan.
                  Contohnya seperti tanaman mentok yang menjadi cikal bakal dari
                  kerajaan Islam Mataram.
                </p>
                <p className="mb-4 text-right">
                  Oleh karena itu, ISTI hadir sebagai media edukasi sekaligus
                  mendukung pengawasan terhadap pohon bernilai kebudayaan dan
                  pohon langka di DI Yogyakarta.
                </p>
                <p className="mb-4 text-right">
                  <b>Apa itu ISTI?</b>
                  <br />
                  ISTI merupakan program terintegrasi yang dilengkapi dengan
                  website dan alat detektor penebangan yang terpasang pada
                  pohon-pohon langka dan bernilai filosofi. Adanya ISTI akan
                  membantu pengawasan terhadap pohon-pohon tersebut dan menjadi
                  media edukasi kepada masyarakat luas.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16 text-gray-800">
            <h2 className="text-[50px] font-bold text-green-500 mb-4 text-center">
              Alat Detektor ISTI
            </h2>
            <div className="flex flex-row items-center">
              <div>
                <p className="mb-4 text-left">
                  <b>Pernah lihat alat ini di pohon sekitarmu?</b> Alat ini
                  adalah detektor penebangan milik ISTI untuk membantu mengawasi
                  pohon langka dan bernilai kebudayaan di provinsi Daerah
                  Istimewa Yogyakarta. Ketika terjadi penebangan, sensor akan
                  mendeteksi adanya getaran dan suara sehingga dapat langsung
                  dilaporkan real time di dalam website ini lho!
                </p>
                <p className="mb-4 text-left">
                  Ayo turut menjaga alat ini dengan tidak dipegang atau dilepas
                  ya!
                </p>
              </div>
              <Image
                className="w-[500px] h-[300px]"
                src={detector}
                alt="detector"
              />
            </div>
            {/* <img src="detector.jpg" alt="Alat Detektor ISTI" class="w-1/2 mx-auto"> */}
          </section>

          <section className="mb-16">
            <h2 className="text-[50px] font-bold text-green-500 mb-4 text-center">
              Program Kami
            </h2>
            <div className="flex flex-cols gap-36 justify-center">
              <div className="flex items-center space-x-4">
                {/* <img src="detection-icon.png" alt="Detection Icon" class="h-12"> */}
                <div className="flex flex-col items-center max-w-[350px] gap-3">
                  <Image
                    className="w-[300px] h-[300px]"
                    src={deteksi}
                    alt="deteksi"
                  />

                  <h3 className="text-lg font-semibold text-green-500 text-center">
                    Deteksi Kegiatan Penebangan pada Pohon Bernilai Kebudayaan
                    dan Langka di DI Yogyakarta
                  </h3>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                {/* <img src="education-icon.png" alt="Education Icon" class="h-12"> */}
                <div className="flex flex-col items-center max-w-[350px] gap-3">
                  <Image
                    className="w-[300px] h-[300px]"
                    src={edukasi}
                    alt="edukasi"
                  />
                  <h3 className="text-lg font-semibold text-green-500 text-center">
                    Media Edukasi dan Informasi Mengenai Pohon Bernilai
                    Kebudayaan dan Langka di DI Yogyakarta
                  </h3>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Home;
