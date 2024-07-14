import { IoSearchCircle } from 'react-icons/io5';

function SearchComponent({ onSearch }) {
  //   const [searchTerm, setSearchTerm] = useState('');
  //   const handleSearchChange = (event) => {
  //     setSearchTerm(event.target.value);
  //   };
  //   const handleSearchSubmit = (event) => {
  //     event.preventDefault();
  //     onSearch(searchTerm);
  //   };
  return (
    <form className="bg-white rounded-full py-2 px-4 max-w-[370px] flex">
      <select className="text-green-500 font-bold bg-white" name="searchBy">
        <option value="name">Jenis Pohon</option>
        <option value="description">Nama Latin</option>
        <option value="description">Lokasi</option>
      </select>
      <div className="border-green-500 border-[1px] mx-2"></div>
      <input
        className="text-black bg-white"
        type="text"
        placeholder="Cari pohon ..."
      />
      <button className="text-green-500 text-3xl left-0" type="submit">
        <IoSearchCircle />
      </button>
    </form>
  );
}

export default SearchComponent;
