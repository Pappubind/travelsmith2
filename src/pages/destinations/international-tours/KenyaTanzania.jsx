import { useState } from 'react';
import BookingModal from '../../../components/BookingModal';
import { Camera, Map, Star, Globe, CheckCircle } from 'lucide-react';
import '../Destinations.css';

export default function KenyaTanzania() {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    return (
        <div className="destinations-page">
            <section className="dest-hero kenya-hero" style={{ background: 'url("/images/safari.jpg") no-repeat center/cover' }}>
                <div className="dest-hero-overlay" />
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
                                src="/images/safari.jpg"
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
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Star size={32} />
                            </div>
                            <h3>The Big Five</h3>
                            <p>High chances of spotting Lion, Leopard, Elephant, Buffalo, and Rhino.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Globe size={32} />
                            </div>
                            <h3>Great Migration</h3>
                            <p>The spectacular movement of millions of wildebeest across the plains.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Camera size={32} />
                            </div>
                            <h3>Landscape Views</h3>
                            <p>Infinite horizons and the iconic Acacia-dotted landscape of the Serengeti.</p>
                        </div>
                    </div>
                </div>
            </section>

            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                prefillDestination="Spectacular Kenya & Tanzania"
            />
            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Go Wild with TravelSmith</h2>
                    <p>Bespoke safari itineraries starting from 7 to 14 days.</p>
                    <button
                        onClick={() => setIsBookingModalOpen(true)}
                        className="btn btn-primary btn-lg mt-4"
                        style={{ border: 'none' }}
                    >
                        Book My African Safari
                    </button>
                </div>
            </section>
        </div>
    );
}
