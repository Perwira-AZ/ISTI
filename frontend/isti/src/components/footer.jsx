import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="bg-green-500 text-white border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center ">
        <div>
          <p className="t">
            <b>&copy; 2024 ISTI - Integrated System of Tree Information</b>
          </p>
          <p className="t">
            PKM - KI | Universitas Gadjah Mada <br /> Bulaksumur, Sleman, DI
            Yogyakarta
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <a
            href="https://instagram.com/pkmkiugm_isti"
            target="blank"
            className="text-gray-600 flex flex-row gap-1"
          >
            <FaInstagram className="text-white text-2xl" />
            <p className="text-white">pkmkiugm_isti</p>
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=61559446852927"
            target="blank"
            className="text-gray-600 flex flex-row gap-1"
          >
            <FaFacebook className="text-white text-2xl" />
            <p className="text-white">Pkmkiugm Isti</p>
          </a>
          {/* <a href="#" className="text-gray-600 flex flex-row gap-1">
                      <FaXTwitter className="text-white text-2xl" />
                      <p className="text-white">pkmkiugm_isti</p>
                    </a> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
