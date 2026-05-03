import Hero from '../components/Hero';
import PhotoTreadmill from '../components/PhotoTreadmill';
import RegionCard from '../components/RegionCard';
import { mockRegions } from '../data/mockData';

const Home = () => {
  return (
    <div>
      <Hero />
      
      <section className="py-20 max-w-[1200px] mx-auto px-4">
        <h2 className="text-center font-title text-4xl font-semibold text-[#4b3023] mb-12">Discover Hidden Regions</h2>
        <div className="flex flex-col gap-12">
          {mockRegions.map(region => (
            <RegionCard key={region.id} region={region} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
