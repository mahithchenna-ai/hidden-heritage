import { useState, useMemo } from 'react';
import { chambalSites, mockGuides } from '../data/mockData';

const TripPlanner = () => {
  const [budget, setBudget] = useState(10000);
  const [days, setDays] = useState(3);
  const [selectedGuideId, setSelectedGuideId] = useState('none');
  const [selectedSites, setSelectedSites] = useState([]);
  const [isCalculated, setIsCalculated] = useState(false);

  const toggleSite = (id) => {
    setIsCalculated(false);
    setSelectedSites(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const handleCalculate = () => {
    setIsCalculated(true);
  };

  const selectedSitesData = useMemo(() => 
    chambalSites.filter(s => selectedSites.includes(s.id)),
  [selectedSites]);

  const summary = useMemo(() => {
    if (!isCalculated) return null;
    
    const entryFees = selectedSitesData.reduce((sum, s) => sum + s.entryFee, 0);
    const guide = mockGuides.find(g => g.id === selectedGuideId);
    const guideTotal = guide ? guide.ratePerDay * days : 0;
    
    const travelCost = selectedSites.length * 500; 
    const foodCost = days * 1000;
    const accommodation = days > 1 ? (days - 1) * 2000 : 0;
    
    const total = entryFees + guideTotal + travelCost + foodCost + accommodation;
    const remaining = budget - total;

    return {
      entryFees,
      guideTotal,
      travelCost,
      foodCost,
      accommodation,
      total,
      remaining
    };
  }, [isCalculated, selectedSitesData, selectedSites, days, selectedGuideId, budget]);

  return (
    <div className="bg-background h-[calc(100vh-60px)] py-6 overflow-hidden">
      <div className="container mx-auto px-4 h-full flex flex-col">
        <h1 className="text-center text-4xl font-title font-bold mb-6 text-text">Build Custom Trip</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[calc(100%-4rem)]">
          {/* Left Column: Trip Configuration */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col overflow-hidden">
            <h2 className="text-2xl font-title font-bold text-text mb-4">Trip Configuration</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-2">
                <label className="text-[0.75rem] font-bold text-[#2c1e16] uppercase">Budget (₹)</label>
                <input 
                  type="number" 
                  className="p-2 border border-[#e0d5c1] rounded-md text-sm focus:outline-none focus:border-accent"
                  value={budget} 
                  onChange={(e) => setBudget(Number(e.target.value))} 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[0.75rem] font-bold text-[#2c1e16] uppercase">Days</label>
                <input 
                  type="number" 
                  className="p-2 border border-[#e0d5c1] rounded-md text-sm focus:outline-none focus:border-accent"
                  value={days} 
                  onChange={(e) => setDays(Number(e.target.value))} 
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2 mb-4">
              <label className="text-[0.75rem] font-bold text-[#2c1e16] uppercase">Select Guide (Optional)</label>
              <select 
                className="p-2 border border-[#e0d5c1] rounded-md text-sm focus:outline-none focus:border-accent"
                value={selectedGuideId} 
                onChange={(e) => setSelectedGuideId(e.target.value)}
              >
                <option value="none">No Guide</option>
                {mockGuides.map(g => (
                  <option key={g.id} value={g.id}>{g.name} (₹{g.ratePerDay}/day)</option>
                ))}
              </select>
            </div>

            <h3 className="text-xl font-title font-bold text-text mb-3">Select Sites</h3>
            <div className="flex-1 overflow-y-auto pr-2 space-y-3 mb-4 scrollbar-thin scrollbar-thumb-[#e0d5c1] scrollbar-track-transparent">
              {chambalSites.map(site => (
                <div 
                  key={site.id} 
                  className={`flex items-center p-4 border border-[#e0d5c1] rounded-lg cursor-pointer transition-colors hover:bg-background ${selectedSites.includes(site.id) ? 'bg-background border-primary' : ''}`}
                  onClick={() => toggleSite(site.id)}
                >
                  <input 
                    type="checkbox" 
                    className="w-5 h-5 mr-4 accent-primary"
                    checked={selectedSites.includes(site.id)}
                    onChange={() => {}} // handled by div click
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-text">{site.name}</span>
                    <span className="text-[0.75rem] text-[#6b5c53] mt-1">
                      {site.type} • ₹{site.entryFee} • 180 mins
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button 
              className="w-full bg-[#7a3300] hover:bg-[#5a2600] text-white py-3 rounded-full font-bold transition-colors mt-auto"
              onClick={handleCalculate}
            >
              Calculate Estimate
            </button>
          </div>

          {/* Right Column: Trip Summary */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col overflow-hidden">
            <h2 className="text-2xl font-title font-bold text-text mb-4">Trip Summary</h2>
            
            {!isCalculated ? (
              <div className="flex-1 flex items-center justify-center text-center text-[#6b5c53] px-8">
                <p>Select sites and click "Calculate Estimate" to see your trip summary</p>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto animate-fade-in-up">
                <div className="flex justify-between py-4 border-b border-[#f0ebe1] text-[#6b5c53]">
                  <span>Sites Selected:</span>
                  <span className="font-bold">{selectedSites.length}</span>
                </div>
                <div className="flex justify-between py-4 border-b border-[#f0ebe1] text-[#6b5c53]">
                  <span>Total Entry Fees:</span>
                  <span className="font-bold">₹{summary?.entryFees}</span>
                </div>
                <div className="flex justify-between py-4 border-b border-[#f0ebe1] text-[#6b5c53]">
                  <span>Travel & Logistics:</span>
                  <span className="font-bold">₹{summary?.travelCost}</span>
                </div>
                <div className="flex justify-between py-4 border-b border-[#f0ebe1] text-[#6b5c53]">
                  <span>Food & Accommodation:</span>
                  <span className="font-bold">₹{(summary?.foodCost || 0) + (summary?.accommodation || 0)}</span>
                </div>
                {summary?.guideTotal > 0 && (
                  <div className="flex justify-between py-4 border-b border-[#f0ebe1] text-[#6b5c53]">
                    <span>Guide Services:</span>
                    <span className="font-bold">₹{summary.guideTotal}</span>
                  </div>
                )}
                <div className="flex justify-between py-6 mt-2 font-black text-2xl text-text">
                  <span>Estimated Total:</span>
                  <span>₹{summary?.total}</span>
                </div>
                <div className={`mt-6 p-4 rounded-lg text-center font-bold ${summary?.remaining < 0 ? 'bg-[#ffebee] text-[#c62828]' : 'bg-[#e8f5e9] text-[#2e7d32]'}`}>
                  {summary?.remaining < 0 
                    ? `Over budget by ₹${Math.abs(summary.remaining)}` 
                    : `Within budget! ₹${summary?.remaining} left`}
                </div>
                
                <button className="w-full bg-accent hover:bg-[#a6562d] text-white py-4 rounded-lg font-bold transition-colors mt-8 shadow-md">
                  Confirm & Book
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripPlanner;
