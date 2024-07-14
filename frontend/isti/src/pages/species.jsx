import Head from 'next/head';
import SpeciesContainer from '@/components/speciesContainer';

function Species() {
  return (
    <>
      <Head>
        <title>Spesies - ISTI</title>
      </Head>
      <main className="pt-16 flex flex-col justify-center items-center min-h-screen">
        {/* <h1 className="text-green-700 text-center text-[80px] font-bold">
          Mau baca apa hari ini?
        </h1> */}
        <SpeciesContainer />
      </main>
    </>
  );
}

export default Species;
