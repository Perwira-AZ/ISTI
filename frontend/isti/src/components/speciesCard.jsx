import { useRouter } from 'next/router';

function SpeciesCard({ species }) {
  const router = useRouter();

  const handleDetail = () => {
    router.push(`/species/${species.id}`);
  };

  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-2xl bg-clip-border rounded-xl max-w-96 border-black border-[1px]">
      <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-96">
        <img
          src="https://images.unsplash.com/photo-1545308562-050974fb9ac4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile-picture"
        />
      </div>
      <div className="p-6 pb-2">
        {/* <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 w-full max-h-[60px] truncate text-wrap">
          Mengenal Mentaok, Awal Mula DIY
        </h5> */}
        <p>Nama Lokal: {species.local_name}</p>
        <p>
          Nama Ilmiah: <em>{species.scientific_name}</em>
        </p>
        {species.category == 'Langka' ? (
          <p>Status IUCN: {species.philosophy_IUCN}</p>
        ) : null}
      </div>
      <div className="m-6 mt-2">
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-green-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
          onClick={handleDetail}
        >
          Detail
        </button>
      </div>
    </div>
  );
}

export default SpeciesCard;
