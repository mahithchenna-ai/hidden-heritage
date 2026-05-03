import { Link } from 'react-router-dom';
import PhotoTreadmill from './PhotoTreadmill';

const Hero = () => {
  return (
    <div className="relative h-[calc(100vh-60px)] flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img 
          className="w-full h-full object-cover" 
          src="https://images.unsplash.com/photo-1583043550616-ac6e0a1b9574?auto=format&fit=crop&q=80" 
          alt="Indian Heritage" 
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="text-white z-10 w-full mb-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-white text-5xl md:text-[5rem] leading-[1.1] mb-6 animate-fade-in-up font-title">
            Explore India's<br />Hidden Heritage
          </h1>
          <p className="text-xl mb-10 opacity-90 leading-relaxed animate-fade-in-up-delay">
            Uncover ancient temples, mysterious ravines, and timeless rock art in<br className="hidden md:block" />
            the heart of Chambal. Journey beyond the guidebooks.
          </p>
          <Link 
            to="/explore" 
            className="inline-block bg-[#c86b3a] hover:bg-[#a6562d] text-white py-4 px-10 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Start Your Journey
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-20">
        <PhotoTreadmill hideTitle={true} />
      </div>
    </div>
  );
};

export default Hero;
