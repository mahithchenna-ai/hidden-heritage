import { Link } from 'react-router-dom';

const SiteCardError = ({ site, asymmetryClass = '' }) => {
  const isLarge = asymmetryClass === 'card-large';
  
  return (
    <div className={`flex flex-col bg-white rounded-lg overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-2.5 h-full`}>
      <div className={`relative ${isLarge ? 'h-[250px] md:h-[400px]' : 'h-[250px]'}`}>
        <img src={site.image} alt={site.name} className="w-full h-full object-cover" />
        <span className="absolute top-4 right-4 bg-primary text-white py-1 px-3 rounded-full text-xs font-semibold uppercase">
          {site.type}
        </span>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h4 className="mb-2 text-xl font-bold text-[#2c1e16]">{site.name}</h4>
        <p className="text-[#6b5c53] text-sm mb-6 flex-1">{site.shortDesc}</p>
        <Link 
          to={`/site/${site.id}`} 
          className="text-accent font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:gap-3"
        >
          More <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default SiteCard;
