import { useState } from 'react';
import BookingModal from '../../../components/BookingModal';
import { Camera, Map, Star, Globe, CheckCircle } from 'lucide-react';
import '../Destinations.css';

export default function GoldenQuadrangle() {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    return (
        <div className="destinations-page">
            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                prefillDestination="The Golden Quadrangle"
            />
            <section className="dest-hero gold-hero" style={{ background: 'url("/images/taj_mahal.jpg") no-repeat center/cover' }}>
                <div className="dest-hero-overlay" />
                <div className="container dest-hero-content">
                    <h1>The Golden Quadrangle</h1>
                    <p>The essential Indian journey through Delhi, Agra, and Jaipur.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-image-container">
                            <img
                                src="/images/jaipur_palace.jpg"
                                alt="Taj Mahal"
                                className="detail-image-fixed"
                            />
                        </div>
                        <div className="detail-text">
                            <h2>The Ultimate Cultural Circuit</h2>
                            <p>
                                The Golden Quadrangle is the most iconic travel circuit in India. We elevate this
                                classic trip with private luxury transport, expert scholarly guides, and
                                world-class accommodation.
                            </p>
                            <p>
                                From the Mughal grandeur of New Delhi and the eternal white marble of the Taj Mahal
                                to the royal forts of the Pink City, this tour captures the heart of India's heritage.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Private Sunrise Tour of Taj Mahal</li>
                                <li><CheckCircle size={18} /> High-Speed Luxury Train Transfers</li>
                                <li><CheckCircle size={18} /> Authentic Mughal Dining Experiences</li>
                                <li><CheckCircle size={18} /> Curated Craft Shopping Tours</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Iconic Landmarks</h2>
                    <div className="grid grid-3">
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Star size={32} />
                            </div>
                            <h3>New Delhi</h3>
                            <p>A blend of ancient history and dynamic modernity in India's capital.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Star size={32} />
                            </div>
                            <h3>Agra</h3>
                            <p>Home to the Taj Mahal and the majestic Agra Fort.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Star size={32} />
                            </div>
                            <h3>Jaipur</h3>
                            <p>Royal heritage and vibrant culture in the capital of Rajasthan.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Experience the Gold Standard</h2>
                    <p>Customizable 5 to 7 day circuits for discerning travelers.</p>
                    <button
                        onClick={() => setIsBookingModalOpen(true)}
                        className="btn btn-primary btn-lg mt-4"
                        style={{ border: 'none' }}
                    >
                        Book Golden Triangle
                    </button>
                </div>
            </section>
        </div>
    );
}
