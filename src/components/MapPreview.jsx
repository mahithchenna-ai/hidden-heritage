import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';

// Fix Leaflet default icon path issues in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapUpdater = ({ sites, selectedSites, hoveredSite }) => {
  const map = useMap();
  
  useEffect(() => {
    if (sites.length > 0) {
      const bounds = L.latLngBounds(sites.map(s => s.coordinates));
      map.fitBounds(bounds, { padding: [50, 50] });
      setTimeout(() => {
        map.invalidateSize();
      }, 200);
    }
  }, [sites, map]);

  useEffect(() => {
    if (hoveredSite) {
      const site = sites.find(s => s.id === hoveredSite);
      if (site) {
        map.setView(site.coordinates, 12, { animate: true });
      }
    }
  }, [hoveredSite, map, sites]);

  return null;
};

const MapPreview = ({ sites, selectedSites, onToggleSite, hoveredSite }) => {
  const selectedSitesData = selectedSites.map(id => sites.find(s => s.id === id)).filter(Boolean);
  const routeCoordinates = selectedSitesData.map(s => s.coordinates);

  const customIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41]
  });

  const selectedIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41]
  });

  return (
    <div className="rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] relative z-[1]">
      <MapContainer 
        center={[26.5, 78.2]} 
        zoom={10} 
        scrollWheelZoom={false}
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {sites.map(site => (
          <Marker 
            key={site.id} 
            position={site.coordinates}
            icon={selectedSites.includes(site.id) ? selectedIcon : customIcon}
            eventHandlers={{
              mouseover: (e) => {
                e.target.openPopup();
              },
              mouseout: (e) => {
                // e.target.closePopup();
              }
            }}
          >
            <Popup>
              <div className="min-w-[200px]">
                <img src={site.image} alt={site.name} className="w-full h-[120px] object-cover rounded mb-3" />
                <h4 className="m-0 mb-1 text-[1.1rem] text-[#2c1e16] font-bold">{site.name}</h4>
                <p className="m-0 mb-2 text-[#6b5c53] text-[0.8rem]">{site.type}</p>
                <label className="flex items-center gap-2 cursor-pointer font-medium text-accent">
                  <input 
                    type="checkbox" 
                    checked={selectedSites.includes(site.id)}
                    onChange={() => onToggleSite(site.id)}
                  />
                  <span>Select for route</span>
                </label>
              </div>
            </Popup>
          </Marker>
        ))}

        {routeCoordinates.length > 1 && (
          <Polyline 
            positions={routeCoordinates} 
            pathOptions={{ color: '#c86b3a', weight: 3, dashArray: '5, 10' }} 
          />
        )}

        <MapUpdater sites={sites} selectedSites={selectedSites} hoveredSite={hoveredSite} />
      </MapContainer>
    </div>
  );
};

export default MapPreview;
