import Image from 'next/image';
import SearchComponent from './search';
import logo from '@/../public/assets/images/logo.png';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="fixed w-full z-[100] bg-green-500 text-white py-2 px-4 flex justify-between items-center rounded-b-3xl">
      <logo className="flex">
        <Image src={logo} />
        <p className="w-[225px] text-lg font-bold">
          ISTI - <em>Integrated System of Tree Information</em>
        </p>
      </logo>
      <SearchComponent />
      <ul className="flex gap-8 font-medium text-xl ">
        <li>
          <Link
            // className="bg-green-600 text-white rounded-full py-1 px-2"
            href="/"
          >
            Beranda
          </Link>
        </li>
        <li>
          <Link href="/article">Artikel</Link>
        </li>
        {/* <li>
          <a href="#">Hubungi Kami</a>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
