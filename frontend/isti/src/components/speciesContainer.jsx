import SpeciesCard from './speciesCard';

function SpeciesContainer({ species }) {
  return (
    <>
      {species.length === 0 ? (
        <p className="text-center text-black">No species found.</p>
      ) : (
        <div className="px-12 pb-12 grid grid-cols-3 items-stretch gap-8 max-w-[1500px]">
          {species.map((item) => (
            <SpeciesCard key={item.id} species={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default SpeciesContainer;
