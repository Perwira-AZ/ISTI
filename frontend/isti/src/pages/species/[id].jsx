import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Head from 'next/head';
import CarouselComponent from '@/components/corousel';
import React, { useState, useEffect } from 'react';

const DynamicMap = dynamic(() => import('@/components/map'), {
  ssr: false,
});

function Species() {
  const router = useRouter();
  const { id } = router.query;
  const [species, setSpecies] = useState(null);
  const [trees, setTrees] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getSpeciesByID(species_id) {
    try {
      const response = await fetch(
        `https://${process.env.NEXT_PUBLIC_HOST}/api/species/${species_id}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching species:', error);
    }
  }

  async function getTree(species_id) {
    try {
      const response = await fetch(
        `https://${process.env.NEXT_PUBLIC_HOST}/api/tree/location/${species_id}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching trees:', error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      if (id) {
        setLoading(true);
        const species_data = await getSpeciesByID(id);
        setSpecies(species_data);

        const tree_data = await getTree(id);
        setTrees(tree_data);
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  return (
    // <></>
    <>
      {loading ? (
        <>
          <Head>
            <title>ISTI</title>
          </Head>
          <main className="flex flex-col items-center justify-center min-h-screen pt-16 pb-6">
            loading
          </main>
        </>
      ) : (
        <>
          <Head>
            <title>ISTI - {species.scientific_name}</title>
          </Head>
          <main className="flex flex-col items-center justify-center min-h-screen pt-16 pb-6">
            <h1 className="text-green-700 text-[60px] mt-10 text-center">
              <em>{species.scientific_name}</em>
            </h1>
            <div className="flex flex-row gap-8 px-12 max-w-[1200px] items-start">
              <CarouselComponent list={species.images} />
              <table className="table-auto text-black max-w-[650px] border-spacing-4 border-b border-slate-500">
                <tbody>
                  <tr className="border-b">
                    <th className="text-right align-top p-2 border-slate-800">
                      Nama Lokal
                    </th>
                    <td>{species.local_name}</td>
                  </tr>
                  <tr className="border-b">
                    <th className="text-right align-top p-2 border-slate-800">
                      Kategori
                    </th>
                    <td>{species.category}</td>
                  </tr>
                  {species.category == 'Budaya' ? (
                    <tr className="border-b">
                      <th className="text-right align-top p-2 border-slate-800">
                        Makna Kebudayaan
                      </th>
                      <td className="text-justify">
                        {species.philosophy_IUCN}
                      </td>
                    </tr>
                  ) : (
                    <tr className="border-b">
                      <th className="text-right align-top p-2 border-slate-800">
                        Status IUCN
                      </th>
                      <td className="text-justify">
                        {species.philosophy_IUCN}
                      </td>
                    </tr>
                  )}
                  <tr className="border-b">
                    <th className="text-right align-top p-2 border-slate-800">
                      Habitat
                    </th>
                    <td>{species.habitat}</td>
                  </tr>
                  <tr className="border-b">
                    <th className="text-right align-top p-2 border-slate-800">
                      Potensi
                    </th>
                    <td>{species.potency}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="max-w-[1200px] min-w-[1000px] h-[600px] my-8">
              <h3
                className="text-black text-2xl font-bold text-center mb-2"
                id="location"
              >
                Lokasi
              </h3>
              <DynamicMap
                trees={trees}
                name={species.local_name}
                scientific={species.scientific_name}
              />
            </div>
          </main>
        </>
      )}
    </>
  );
}

export default Species;
