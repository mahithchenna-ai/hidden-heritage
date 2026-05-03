const photos = [
  'https://images.unsplash.com/photo-1606498438291-8d420fdae11c?w=400',
  'https://images.unsplash.com/photo-1583043550616-ac6e0a1b9574?w=400',
  'https://images.unsplash.com/photo-1663997943673-9c679560f5a5?w=400',
  'https://images.unsplash.com/photo-1681054559674-7e80aad3d2ff?w=400',
  'https://images.unsplash.com/photo-1715790357004-81af9a3b1967?w=400',
];

const PhotoTreadmill = ({ hideTitle }) => {
  return (
    <div className={`overflow-hidden text-white ${hideTitle ? 'bg-transparent p-0 mb-8' : 'bg-primary py-20'}`}>
      {!hideTitle && <h2 className="container mx-auto px-4 text-center mb-4 text-white text-3xl font-title font-bold">Glimpses of the Past</h2>}
      <div className="relative w-screen ml-[calc(-50vw+50%)] overflow-hidden py-4">
        <div className="flex gap-4 w-max animate-treadmill-scroll">
          {photos.concat(photos).map((photo, i) => (
            <div key={i} className="w-[300px] h-[180px] rounded shrink-0 shadow-[0_4px_15px_rgba(0,0,0,0.2)] overflow-hidden group">
              <img src={photo} alt={`Heritage ${i}`} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoTreadmill;
