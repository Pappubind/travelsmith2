import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Goa from './pages/destinations/Goa';
import India from './pages/destinations/India';
import International from './pages/destinations/International';
import Services from './pages/Services';
import DMC from './pages/services/DMC';
import MICE from './pages/services/MICE';
import Weddings from './pages/services/Weddings';
import Support from './pages/services/Support';
import Packages from './pages/Packages';
import Testimonials from './pages/Testimonials';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations/goa" element={<Goa />} />
            <Route path="/destinations/india" element={<India />} />
            <Route path="/destinations/international" element={<International />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/dmc" element={<DMC />} />
            <Route path="/services/mice" element={<MICE />} />
            <Route path="/services/weddings" element={<Weddings />} />
            <Route path="/services/support" element={<Support />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
