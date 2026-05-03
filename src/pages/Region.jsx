import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockRegions } from '../data/mockData';
import SiteCard from '../components/SiteCard';
import MapPreview from '../components/MapPreview';

const Region = () => {
  const { regionId } = useParams();
  const region = mockRegions.find(r => r.id === (regionId || 'chambal')) || mockRegions[0];
  
  const [selectedSites, setSelectedSites] = useState([]);
  const [hoveredSite, setHoveredSite] = useState(null);

  const handleToggleSite = (siteId) => {
    setSelectedSites(prev => 
      prev.includes(siteId) 
        ? prev.filter(id => id !== siteId)
        : [...prev, siteId]
    );
  };

  const getAsymmetryClass = (index) => {
    if (index % 3 === 0) return 'card-large';
    return '';
  };

  const getGridSpan = (index) => {
    if (index % 3 === 0) return 'md:col-span-2 md:row-span-2';
    return '';
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="py-12 md:py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-[3.5rem] text-text font-title font-bold mb-0">Interactive Map</h1>
        </div>
      </div>

      <div className="mb-16 container mx-auto px-4">
        <MapPreview 
          sites={region.sites} 
          selectedSites={selectedSites} 
          onToggleSite={handleToggleSite}
          hoveredSite={hoveredSite}
        />
        <div className="flex justify-center mt-6">
          <Link to="/trip-builder" className="btn btn-primary">Open Trip Planner</Link>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <h2 className="text-3xl font-title font-bold text-primary mb-8">Explore Heritage Sites</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 grid-flow-row-dense">
          {region.sites.map((site, idx) => (
            <div 
              key={site.id} 
              onMouseEnter={() => setHoveredSite(site.id)}
              onMouseLeave={() => setHoveredSite(null)}
              className={getGridSpan(idx)}
            >
              <SiteCard site={site} asymmetryClass={getAsymmetryClass(idx)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Region;
