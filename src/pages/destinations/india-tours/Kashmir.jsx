import { useState } from 'react';
import BookingModal from '../../../components/BookingModal';
import { Camera, Map, Star, Mountain, CheckCircle } from 'lucide-react';
import '../Destinations.css';

export default function Kashmir() {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    return (
        <div className="destinations-page">
            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                prefillDestination="Glorious Kashmir"
            />
            <section className="dest-hero kashmir-hero" style={{ background: 'url("/images/Kashmir-Tourism-Best-of-Kashmir.jpg") no-repeat center/cover' }}>
                <div className="dest-hero-overlay" />
                <div className="container dest-hero-content">
                    <h1>Glorious Kashmir</h1>
                    <p>Experience Paradise on Earth with our premium luxury tours.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-image-container">
                            <img
                                src="/images/dal_lake.jpg"
                                alt="Dal Lake Srinagar"
                                className="detail-image-fixed"
                            />
                        </div>
                        <div className="detail-text">
                            <h2>The Jewel of the North</h2>
                            <p style={{ textAlign: 'justify' }}>
                                Kashmir is not just a destination; it's a sensory experience. Our Glorious Kashmir tour
                                takes you through the serene Dal Lake, the snow-capped peaks of Gulmarg, and the
                                breathtaking meadows of Pahalgam.
                            </p>
                            <p style={{ textAlign: 'justify' }}>
                                Stay in luxury houseboats and heritage resorts while exploring the rich culture,
                                warm hospitality, and world-famous cuisine of the valley.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Shikara Rides on Dal Lake</li>
                                <li><CheckCircle size={18} /> Gondola Rides in Gulmarg</li>
                                <li><CheckCircle size={18} /> Visit to Mughal Gardens</li>
                                <li><CheckCircle size={18} /> Premium Alpine Camping Experiences</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Tour Highlights</h2>
                    <div className="grid grid-3">
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Mountain size={32} />
                            </div>
                            <h3>Gulmarg Peaks</h3>
                            <p>One of the world's highest cable car rides with stunning Himalayan views.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Star size={32} />
                            </div>
                            <h3>Luxury Houseboats</h3>
                            <p>Experience the heritage of staying on water with modern luxury amenities.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Camera size={32} />
                            </div>
                            <h3>Scenic Meadows</h3>
                            <p>Perfect for photography enthusiasts and nature lovers alike.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Ready to Experience Paradise?</h2>
                    <p>Customizable 6 to 10 day itineraries available for families and couples.</p>
                    <button
                        onClick={() => setIsBookingModalOpen(true)}
                        className="btn btn-primary btn-lg mt-4"
                        style={{ border: 'none' }}
                    >
                        Inquire About Kashmir Tour
                    </button>
                </div>
            </section>
        </div>
    );
}
