import SpeciesCard from './speciesCard';

function SpeciesContainer() {
  return (
    <div className="px-12 pb-12 grid grid-cols-3 justify-center justify-items-center items-center content-center gap-8 max-w-[1500px]">
      <SpeciesCard />
      <SpeciesCard />
      <SpeciesCard />
    </div>
  );
}

export default SpeciesContainer;
