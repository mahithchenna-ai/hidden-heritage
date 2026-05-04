import { useParams, Link } from 'react-router-dom';
import { chambalSites } from '../data/mockData';

const SiteError = () => {
  const { siteId } = useParams();
  const site = chambalSites.find(s => s.id === siteId) || chambalSites[0];

  return (
    <div className="bg-background min-h-screen">
      <div 
        className="h-[50vh] min-h-[400px] bg-cover bg-center relative flex items-end pb-16" 
        style={{ backgroundImage: `url(${site.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#2c1e16]/90 to-[#2c1e16]/10"></div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <Link to="/explore" className="inline-block text-white/80 mb-4 transition-colors hover:text-white">&larr; Back to Region</Link>
          <h1 className="text-white text-5xl md:text-[3.5rem] mb-2 font-title font-bold">{site.name}</h1>
          <span className="inline-block bg-accent px-4 py-1 rounded-full font-semibold uppercase text-xs tracking-wider">
            {site.type}
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-[#4b3023] text-white px-4 py-1.5 rounded-full text-sm font-semibold">{site.culturalTag}</span>
            <span className="border border-[#4b3023] text-[#4b3023] px-4 py-1.5 rounded-full text-sm font-semibold">{site.crowdLevel} Crowd</span>
          </div>

          <p className="text-xl text-[#7a3300] italic mb-8"><strong>Why Visit?</strong> {site.whyVisit}</p>
          <h2 className="text-3xl font-title font-bold text-primary mb-6">About {site.name}</h2>
          <p className="text-lg leading-relaxed text-[#6b5c53] mb-12">{site.fullDesc}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-white rounded-xl shadow-sm">
            <div className="flex flex-col gap-2">
              <span className="text-[0.75rem] font-bold text-[#6b5c53] uppercase tracking-widest">Accessibility</span>
              <span className="text-text">{site.accessibility}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[0.75rem] font-bold text-[#6b5c53] uppercase tracking-widest">Opening Hours</span>
              <span className="text-text">{site.openingHours}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[0.75rem] font-bold text-[#6b5c53] uppercase tracking-widest">Nearby Sites</span>
              <span className="text-text">{site.nearbyDistance}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[0.75rem] font-bold text-[#6b5c53] uppercase tracking-widest">Duration Split</span>
              <span className="text-text">{site.durationSplit}</span>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-xl shadow-lg sticky top-24">
            <h3 className="text-2xl font-title font-bold text-primary mb-6">Cost Breakdown</h3>
            <div className="flex justify-between py-3 border-bottom border-[#f0ebe1] text-sm text-[#6b5c53]">
              <span>Entry Fee</span>
              <span>₹{site.costBreakdown.entry}</span>
            </div>
            <div className="flex justify-between py-3 border-bottom border-[#f0ebe1] text-sm text-[#6b5c53]">
              <span>Guide Services</span>
              <span>₹{site.costBreakdown.guide}</span>
            </div>
            <div className="flex justify-between py-3 border-bottom border-[#f0ebe1] text-sm text-[#6b5c53]">
              <span>Parking</span>
              <span>₹{site.costBreakdown.parking}</span>
            </div>
            <div className="flex justify-between py-3 border-bottom border-[#f0ebe1] text-sm text-[#6b5c53]">
              <span>Activities</span>
              <span>₹{site.costBreakdown.activities}</span>
            </div>
            <div className="flex justify-between py-6 mt-4 border-t border-[#f0ebe1] font-bold text-xl text-text">
              <span>Estimated Total</span>
              <span>₹{site.costBreakdown.entry + site.costBreakdown.guide + site.costBreakdown.parking + site.costBreakdown.activities}</span>
            </div>
            <button className="btn btn-primary w-full mt-6">Add to Trip Planner</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Site;
