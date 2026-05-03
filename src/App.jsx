import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Region from './pages/Region';
import Site from './pages/Site';
import About from './pages/About';
import Bookings from './pages/Bookings';
import Feedback from './pages/Feedback';
import TripPlanner from './pages/TripPlanner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Region />} />
            <Route path="/explore/:regionId" element={<Region />} />
            <Route path="/site/:siteId" element={<Site />} />
            <Route path="/trip-builder" element={<TripPlanner />} />
            <Route path="/about" element={<About />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
