import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary sticky top-0 z-[1000] py-2">
      <div className="flex justify-between items-center h-[60px] container mx-auto px-4">
        <Link to="/" className="font-title text-[1.75rem] font-bold text-[#d9b89a]">
          Hidden Heritage
        </Link>
        <ul className="flex list-none gap-6">
          <li><Link to="/" className="font-normal text-[#f0f0f0] text-[0.9rem] transition-colors duration-300 hover:text-accent">Home</Link></li>
          <li><Link to="/explore" className="font-normal text-[#f0f0f0] text-[0.9rem] transition-colors duration-300 hover:text-accent">Explore</Link></li>
          <li><Link to="/trip-builder" className="font-normal text-[#f0f0f0] text-[0.9rem] transition-colors duration-300 hover:text-accent">Trip Builder</Link></li>
          <li><Link to="/about" className="font-normal text-[#f0f0f0] text-[0.9rem] transition-colors duration-300 hover:text-accent">About</Link></li>
          <li><Link to="/bookings" className="font-normal text-[#f0f0f0] text-[0.9rem] transition-colors duration-300 hover:text-accent">Bookings</Link></li>
          <li><Link to="/feedback" className="font-normal text-[#f0f0f0] text-[0.9rem] transition-colors duration-300 hover:text-accent">Feedback</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
