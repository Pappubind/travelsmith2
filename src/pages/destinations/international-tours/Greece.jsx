import { Link } from 'react-router-dom';
import { Camera, Map, Star, Globe, CheckCircle } from 'lucide-react';
import '../Destinations.css';

export default function Greece() {
    return (
        <div className="destinations-page">
            <section className="dest-hero" style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url("https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=75&w=1600")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="container dest-hero-content">
                    <h1>Magical Greece</h1>
                    <p>Island hopping through the ancient history and sapphire waters of the Aegean.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-text">
                            <h2>The Cradle of Civilization</h2>
                            <p>
                                Greece is a timeless masterpiece. Our tour combines the majestic Acropolis of
                                Athens with the iconic blue-domed vistas of Santorini and the vibrant luxury
                                of Mykonos.
                            </p>
                            <p>
                                Experience stay in caldera-view boutique hotels and enjoy private sailing trips
                                through the Greek islands while savoring the world's best Mediterranean cuisine.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Private Guided Tour of the Parthenon</li>
                                <li><CheckCircle size={18} /> Luxury Caldera-View Suite Stays</li>
                                <li><CheckCircle size={18} /> Sunset Sailing Charters in Santorini</li>
                                <li><CheckCircle size={18} /> Exclusive Beach Club Access in Mykonos</li>
                            </ul>
                        </div>
                        <div className="detail-image-container">
                            <img
                                src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=1200"
                                alt="Santorini View"
                                className="detail-image-fixed"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Greek Odyssey</h2>
                    <div className="grid grid-3">
                        <div className="card p-4 text-center">
                            <Star className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Ancient Ruins</h3>
                            <p>Step back in time at world-famous archaeological sites with expert guides.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Globe className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Island Hopping</h3>
                            <p>Seamless luxury transfers between the Aegean's most beautiful islands.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Camera className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Unbeatable Sunsets</h3>
                            <p>Witness the world's most photographed sunsets from exclusive locations.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Your Mediterranean Dream Awaits</h2>
                    <p>Luxury island tours designed for connoisseurs of the good life.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg mt-4">Inquire About Greece</Link>
                </div>
            </section>
        </div>
    );
}
