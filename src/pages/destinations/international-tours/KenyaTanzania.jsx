import { Link } from 'react-router-dom';
import { Camera, Map, Star, Globe, CheckCircle } from 'lucide-react';
import '../Destinations.css';

export default function KenyaTanzania() {
    return (
        <div className="destinations-page">
            <section className="dest-hero" style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url("https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=75&w=1600")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="container dest-hero-content">
                    <h1>Spectacular Kenya & Tanzania</h1>
                    <p>Witness the Great Migration and the majestic wildlife of East Africa.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-image-container">
                            <img
                                src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1200"
                                alt="African Safari"
                                className="detail-image-fixed"
                            />
                        </div>
                        <div className="detail-text">
                            <h2>The Ultimate Safari Experience</h2>
                            <p>
                                Experience the raw beauty of the African savannah. Our tour takes you through the
                                Maasai Mara in Kenya and the Serengeti in Tanzania for an unparalleled wildlife
                                viewing experience.
                            </p>
                            <p>
                                Stay in luxury tented camps and lodges that offer the perfect blend of adventure
                                and comfort, with private game drives led by expert naturalists.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Private 4x4 Game Drives</li>
                                <li><CheckCircle size={18} /> Luxury Tented Camp Accommodation</li>
                                <li><CheckCircle size={18} /> Hot Air Balloon Safari options</li>
                                <li><CheckCircle size={18} /> Cultural Visits to Maasai Villages</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Safari Highlights</h2>
                    <div className="grid grid-3">
                        <div className="card p-4 text-center">
                            <Star className="text-primary mb-3 mx-auto" size={32} />
                            <h3>The Big Five</h3>
                            <p>High chances of spotting Lion, Leopard, Elephant, Buffalo, and Rhino.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Globe className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Great Migration</h3>
                            <p>The spectacular movement of millions of wildebeest across the plains.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Camera className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Landscape Views</h3>
                            <p>Infinite horizons and the iconic Acacia-dotted landscape of the Serengeti.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Go Wild with TravelSmith</h2>
                    <p>Bespoke safari itineraries starting from 7 to 14 days.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg mt-4">Book My African Safari</Link>
                </div>
            </section>
        </div>
    );
}
