const Bookings = () => {
  return (
    <div className="container py-20 text-center max-w-[600px] mx-auto px-4 min-h-[60vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-title font-bold text-primary mb-4">Your Bookings</h1>
      <p className="text-[#6b5c53] mb-8 leading-relaxed">
        You currently have no active bookings. Head over to the Explore section, build your dream trip, and book an unforgettable journey into the past.
      </p>
      <a href="/explore" className="btn btn-primary self-center">Explore Regions</a>
    </div>
  );
};

export default Bookings;
