import { Link } from 'react-router-dom';
import { Landmark, Map, Star, Sun, CheckCircle } from 'lucide-react';
import '../Destinations.css';

export default function Rajasthan() {
    return (
        <div className="destinations-page">
            <section className="dest-hero" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url("https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=1920") no-repeat center/cover' }}>
                <div className="container dest-hero-content">
                    <h1>Heartland of Rajasthan</h1>
                    <p>Relive the royal history in the land of kings, forts, and palaces.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-text">
                            <h2>A Royal Extravaganza</h2>
                            <p>
                                Rajasthan is a vibrant tapestry of culture, history, and architectural marvels. Our Heartland
                                of Rajasthan tour takes you through the Pink City of Jaipur, the Blue City of Jodhpur,
                                and the City of Lakes, Udaipur.
                            </p>
                            <p>
                                Experience stay in authentic palace-turned-hotels, camel safaris in the Thar Desert,
                                and private heritage walks through ancient alleys rich with storytelling.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Private Guided Fort & Palace Tours</li>
                                <li><CheckCircle size={18} /> Luxury Desert Camping in Jaisalmer</li>
                                <li><CheckCircle size={18} /> Boat Rides on Lake Pichola</li>
                                <li><CheckCircle size={18} /> Authentic Folk Performance evenings</li>
                            </ul>
                        </div>
                        <div className="detail-image-container">
                            <img
                                src="https://images.unsplash.com/photo-1477584165583-f44e69144449?auto=format&fit=crop&q=80&w=1200"
                                alt="Udaipur Palace"
                                className="detail-image-fixed"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Royal Experiences</h2>
                    <div className="grid grid-3">
                        <div className="card p-4 text-center">
                            <Landmark className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Forts & Palaces</h3>
                            <p>Explore UNESCO World Heritage forts like Amer and Mehrangarh.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Sun className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Desert Safaris</h3>
                            <p>Experience the golden sunset on the dunes of the Thar desert.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Star className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Palace Stays</h3>
                            <p>Live like royalty in restored 18th-century heritage properties.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Your Royal Journey Awaits</h2>
                    <p>Classic 8 to 15 day itineraries tailored for luxury travelers.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg mt-4">Inquire About Rajasthan</Link>
                </div>
            </section>
        </div>
    );
}
