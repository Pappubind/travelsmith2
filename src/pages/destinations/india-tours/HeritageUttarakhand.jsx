import { Link } from 'react-router-dom';
import { Anchor, Shield, Target, Waves, CheckCircle } from 'lucide-react';
import '../Destinations.css';

export default function HeritageUttarakhand() {
    return (
        <div className="destinations-page">
            <section className="dest-hero" style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("https://images.unsplash.com/photo-1590393802679-0da00808a3d5?auto=format&fit=crop&q=75&w=1600")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="container dest-hero-content">
                    <h1>Heritage of Uttarakhand</h1>
                    <p>The spiritual gateway and the heart of ancient traditions.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-text">
                            <h2>The Spiritual Heart of India</h2>
                            <p>
                                Immerse yourself in the sacred heritage of Rishikesh and Haridwar. This tour is a journey
                                through ancient temples, sacred ghats, and the rejuvenating energy of the River Ganges.
                            </p>
                            <p>
                                Stay in world-class yoga retreats and heritage riverfront hotels while witnessing
                                the world-famous Ganga Aarti and exploring Ashrams of global significance.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> VIP Access to Har Ki Pauri Aarti</li>
                                <li><CheckCircle size={18} /> Private Yoga & Meditation Sessions</li>
                                <li><CheckCircle size={18} /> Guided Temple Architecture Tours</li>
                                <li><CheckCircle size={18} /> Rejuvenating Ayurvedic Spa Packages</li>
                            </ul>
                        </div>
                        <div className="detail-image-container">
                            <img
                                src="https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?auto=format&fit=crop&q=80&w=1200"
                                alt="Ganga Aarti"
                                className="detail-image-fixed"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Spiritual Heritage</h2>
                    <div className="grid grid-3">
                        <div className="card p-4 text-center">
                            <Waves className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Sacred Ganges</h3>
                            <p>Deep spiritual connection at the source of ancient Indian traditions.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Target className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Yoga Capital</h3>
                            <p>Learn from authentic masters in the Yoga Capital of the world.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Shield className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Ancient Ashrams</h3>
                            <p>Explore the history and philosophy of India's most influential Ashrams.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Connect with Your Inner Self</h2>
                    <p>Spiritual retreats starting from 3 to 14 days.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg mt-4">Inquire Now</Link>
                </div>
            </section>
        </div>
    );
}
