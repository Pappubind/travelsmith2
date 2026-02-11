import { useState } from 'react';
import BookingModal from '../../../components/BookingModal';
import { Landmark, Waves, Sun, CheckCircle } from 'lucide-react';
import '../Destinations.css';

export default function Greece() {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    return (
        <div className="destinations-page">
            <section className="dest-hero greece-hero" style={{ background: 'url("/images/greece.jpg") no-repeat center/cover' }}>
                <div className="dest-hero-overlay" />
                <div className="container dest-hero-content">
                    <h1>Timeless Greece</h1>
                    <p>From the ancient Acropolis to the blue vistas of Santorini.</p>
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
                                src="/images/santorini.jpg"
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
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Landmark size={32} />
                            </div>
                            <h3>Ancient History</h3>
                            <p>Private-access tours to the most influential ruins of Western civilization.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Waves size={32} />
                            </div>
                            <h3>Island Hopping</h3>
                            <p>Luxury catamaran cruises across the turquoise waters of the Aegean.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Sun size={32} />
                            </div>
                            <h3>Aegean Luxury</h3>
                            <p>Stay in world-class cave villas with infinity pools and caldera views.</p>
                        </div>
                    </div>
                </div>
            </section>

            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                prefillDestination="Timeless Greece"
            />
            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Your Mediterranean Dream Awaits</h2>
                    <p>Luxury island tours designed for connoisseurs of the good life.</p>
                    <button
                        onClick={() => setIsBookingModalOpen(true)}
                        className="btn btn-primary btn-lg mt-4"
                        style={{ border: 'none' }}
                    >
                        Inquire About Greece
                    </button>
                </div>
            </section>
        </div>
    );
}
