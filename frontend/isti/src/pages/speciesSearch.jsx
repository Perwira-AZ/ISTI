import Head from 'next/head';
import { useRouter } from 'next/router';
import SpeciesContainer from '@/components/speciesContainer';
import { useState, useEffect } from 'react';

function SpeciesSearch() {
  const router = useRouter();
  const { searchBy, keyword } = router.query;
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSpecies() {
      if (searchBy && keyword) {
        try {
          const response = await fetch(
            `http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_PORT}/api/species/search?searchBy=${searchBy}&keyword=${keyword}`
          );
          const data = await response.json();
          setSpecies(data);
        } catch (error) {
          console.error('Error fetching species:', error);
        } finally {
          setLoading(false);
        }
      }
    }

    fetchSpecies();
  }, [searchBy, keyword]);

  return (
    <>
      <Head>
        <title>Spesies - ISTI</title>
      </Head>
      <main className="pt-16 flex flex-col justify-center items-center min-h-screen">
        {/* <h1 className="text-green-700 text-center text-[80px] font-bold">
          Mau baca apa hari ini?
        </h1> */}
        <SpeciesContainer species={species} />
      </main>
    </>
  );
}

export default SpeciesSearch;
