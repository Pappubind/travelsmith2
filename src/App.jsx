import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import Home from './pages/Home';
import About from './pages/About';
import Goa from './pages/destinations/Goa';
import India from './pages/destinations/India';
import International from './pages/destinations/International';
import Services from './pages/Services';
import TourOperators from './pages/services/TourOperators';
import CruiseHandling from './pages/services/CruiseHandling';
import MICE from './pages/services/MICE';
import DMC from './pages/services/DMC';
import Weddings from './pages/services/Weddings';
import VehicleRental from './pages/services/VehicleRental';
import HotelReservation from './pages/services/HotelReservation';
import Support from './pages/services/Support';
import Packages from './pages/Packages';
import Testimonials from './pages/Testimonials';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import WhyTravelsmith from './pages/WhyTravelsmith';
import BlogPost1 from './pages/blog/BlogPost1';
import BlogPost2 from './pages/blog/BlogPost2';
import BlogPost3 from './pages/blog/BlogPost3';
import BlogPost4 from './pages/blog/BlogPost4';

// MICE Sub-pages
import Meetings from './pages/services/mice/Meetings';
import IncentiveTravel from './pages/services/mice/IncentiveTravel';
import Conferences from './pages/services/mice/Conferences';
import Exhibitions from './pages/services/mice/Exhibitions';

// India Tour Sub-pages
import Kashmir from './pages/destinations/india-tours/Kashmir';
import Himachal from './pages/destinations/india-tours/Himachal';
import SplendourUttarakhand from './pages/destinations/india-tours/SplendourUttarakhand';
import HeritageUttarakhand from './pages/destinations/india-tours/HeritageUttarakhand';
import ChardhamYatra from './pages/destinations/india-tours/ChardhamYatra';
import Rajasthan from './pages/destinations/india-tours/Rajasthan';
import GoldenQuadrangle from './pages/destinations/india-tours/GoldenQuadrangle';
import EnchantingNepal from './pages/destinations/india-tours/EnchantingNepal';
import RoyalNepal from './pages/destinations/india-tours/RoyalNepal';
import Bhutan from './pages/destinations/india-tours/Bhutan';

// International Tour Sub-pages
import KenyaTanzania from './pages/destinations/international-tours/KenyaTanzania';
import SouthAfrica from './pages/destinations/international-tours/SouthAfrica';
import Mauritius from './pages/destinations/international-tours/Mauritius';
import Greece from './pages/destinations/international-tours/Greece';
import NorthAmerica from './pages/destinations/international-tours/NorthAmerica';
import SouthAmerica from './pages/destinations/international-tours/SouthAmerica';
import Australia from './pages/destinations/international-tours/Australia';

import './index.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <ScrollToTop />
          <Header />
          <ScrollToTopButton />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/why-travelsmith" element={<WhyTravelsmith />} />
              <Route path="/destinations/goa" element={<Goa />} />
              <Route path="/destinations/india" element={<India />} />
              <Route path="/destinations/international" element={<International />} />

              {/* India Tours Sub-routes */}
              <Route path="/destinations/india/kashmir" element={<Kashmir />} />
              <Route path="/destinations/india/himachal" element={<Himachal />} />
              <Route path="/destinations/india/splendour-uttarakhand" element={<SplendourUttarakhand />} />
              <Route path="/destinations/india/heritage-uttarakhand" element={<HeritageUttarakhand />} />
              <Route path="/destinations/india/chardham-yatra" element={<ChardhamYatra />} />
              <Route path="/destinations/india/rajasthan" element={<Rajasthan />} />
              <Route path="/destinations/india/golden-quadrangle" element={<GoldenQuadrangle />} />
              <Route path="/destinations/india/enchanting-nepal" element={<EnchantingNepal />} />
              <Route path="/destinations/india/royal-nepal" element={<RoyalNepal />} />
              <Route path="/destinations/india/bhutan" element={<Bhutan />} />

              {/* International Tours Sub-routes */}
              <Route path="/destinations/international/kenya-tanzania" element={<KenyaTanzania />} />
              <Route path="/destinations/international/south-africa" element={<SouthAfrica />} />
              <Route path="/destinations/international/mauritius" element={<Mauritius />} />
              <Route path="/destinations/international/greece" element={<Greece />} />
              <Route path="/destinations/international/north-america" element={<NorthAmerica />} />
              <Route path="/destinations/international/south-america" element={<SouthAmerica />} />
              <Route path="/destinations/international/australia" element={<Australia />} />

              <Route path="/services" element={<Services />} />
              <Route path="/services/dmc" element={<DMC />} />
              <Route path="/services/tour-operators" element={<TourOperators />} />
              <Route path="/services/cruise-handling" element={<CruiseHandling />} />
              <Route path="/services/mice" element={<MICE />} />

              {/* MICE Sub-routes */}
              <Route path="/services/mice/meetings" element={<Meetings />} />
              <Route path="/services/mice/incentive-travel" element={<IncentiveTravel />} />
              <Route path="/services/mice/conferences" element={<Conferences />} />
              <Route path="/services/mice/exhibitions" element={<Exhibitions />} />

              <Route path="/services/weddings" element={<Weddings />} />
              <Route path="/services/vehicle-rental" element={<VehicleRental />} />
              <Route path="/services/hotel-reservation" element={<HotelReservation />} />
              <Route path="/services/support" element={<Support />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/1" element={<BlogPost1 />} />
              <Route path="/blog/2" element={<BlogPost2 />} />
              <Route path="/blog/3" element={<BlogPost3 />} />
              <Route path="/blog/4" element={<BlogPost4 />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
