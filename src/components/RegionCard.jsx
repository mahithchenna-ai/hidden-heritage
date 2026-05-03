import { Link } from 'react-router-dom';

const RegionCard = ({ region }) => {
  return (
    <div className="flex flex-col md:flex-row rounded-xl overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] mb-12">
      <div className="flex-1 min-h-[200px] md:min-h-[300px]">
        <img src={region.banner} alt={region.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 p-12 flex flex-col justify-center">
        <h3 className="text-3xl font-title text-[#2c1e16] font-bold mb-4">{region.name}</h3>
        <p className="mb-8 text-[#6b5c53] leading-relaxed">{region.description}</p>
        <Link 
          to={`/explore/${region.id}`} 
          className="inline-block bg-[#4b3023] hover:bg-[#6b5c53] text-white py-3 px-8 rounded font-semibold transition-colors w-fit"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default RegionCard;
