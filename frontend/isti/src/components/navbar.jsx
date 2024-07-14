import Image from 'next/image';
import SearchComponent from './search';
import logo from '@/../public/assets/images/logo.png';

function Navbar() {
  return (
    <nav className="fixed w-full z-[100] bg-green-500 text-white py-1 px-4 flex justify-between items-center rounded-b-3xl">
      <logo className="flex">
        <Image src={logo} />
        <p className="w-[225px] text-lg font-bold">
          ISTI - <em>Integrated System of Tree Information</em>
        </p>
      </logo>
      <SearchComponent />
      <ul className="flex gap-8 font-medium text-xl ">
        <li>
          <a
            // className="bg-green-600 text-white rounded-full py-1 px-2"
            href="/"
          >
            Beranda
          </a>
        </li>
        <li>
          <a href="/article">Artikel</a>
        </li>
        <li>
          <a href="#">Hubungi Kami</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
