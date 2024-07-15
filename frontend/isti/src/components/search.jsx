import { useRouter } from 'next/router';
import { IoSearchCircle } from 'react-icons/io5';
import { useState, useEffect } from 'react';

function SearchComponent() {
  const router = useRouter();
  const [searchBy, setSearchBy] = useState('local_name');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const { searchBy, keyword } = router.query;
    if (searchBy) {
      setSearchBy(searchBy);
    }
    if (keyword) {
      setSearchQuery(keyword);
    }
  }, [router.query]);

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/speciesSearch?searchBy=${searchBy}&keyword=${searchQuery}`);
  };

  return (
    <form
      className="bg-white rounded-full py-2 px-4 max-w-[370px] flex"
      onSubmit={handleSearch}
    >
      <select
        className="text-green-500 font-bold bg-white"
        name="searchBy"
        value={searchBy}
        onChange={(e) => setSearchBy(e.target.value)}
      >
        <option value="local_name">Nama Lokal</option>
        <option value="scientific">Nama Latin</option>
      </select>
      <div className="border-green-500 border-[1px] mx-2"></div>
      <input
        className="text-black bg-white px-1"
        type="search"
        placeholder="Cari pohon ..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="text-green-500 text-3xl left-0" type="submit">
        <IoSearchCircle />
      </button>
    </form>
  );
}

export default SearchComponent;
