import { useState } from 'react';
import BookingModal from '../../../components/BookingModal';
import { Camera, Map, Star, Globe, CheckCircle } from 'lucide-react';
import '../Destinations.css';

export default function SouthAfrica() {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    return (
        <div className="destinations-page">
            <section className="dest-hero south-africa-hero" style={{ background: 'url("/images/south-africa-safari.jpg") no-repeat center/cover' }}>
                <div className="dest-hero-overlay" />
                <div className="container dest-hero-content">
                    <h1>Spectacular South Africa Safari</h1>
                    <p style={{ textAlign: 'justify' }}>A diverse journey from the Kruger wildlife to the shores of Cape Town.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-text">
                            <h2>The Rainbow Nation Tours</h2>
                            <p style={{ textAlign: 'justify' }}>
                                South Africa offers an incredible variety of experiences. Our safari tour combines
                                the world-famous Kruger National Park with the scenic beauty of the Garden Route
                                and the cosmopolitan charm of Cape Town.
                            </p>
                            <p>
                                Stay in world-class private game reserves and luxury boutique hotels with
                                stunning views of the Table Mountain and the Atlantic coast.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Private Game Reserves in Kruger</li>
                                <li><CheckCircle size={18} /> Table Mountain Cableway & Cape Point</li>
                                <li><CheckCircle size={18} /> Winelands Gourmet Experience</li>
                                <li><CheckCircle size={18} /> Garden Route Scenic Self-Drive or Guided Tours</li>
                            </ul>
                        </div>
                        <div className="detail-image-container">
                            <img
                                src="/images/Cape-Town.webp"
                                alt="Cape Town"
                                className="detail-image-fixed"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">South African Highlights</h2>
                    <div className="grid grid-3">
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Star size={32} />
                            </div>
                            <h3>Luxury Lodges</h3>
                            <p>Unmatched hospitality in some of the world's best safari lodges.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Globe size={32} />
                            </div>
                            <h3>Coastal Magic</h3>
                            <p>Breathtaking drives along one of the world's most beautiful coastlines.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Camera size={32} />
                            </div>
                            <h3>Diverse Wildlife</h3>
                            <p>From the Big Five to Whale watching and Penguin colonies.</p>
                        </div>
                    </div>
                </div>
            </section>

            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                prefillDestination="Spectacular South Africa Safari"
            />
            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Experience the Adventure of a Lifetime</h2>
                    <p>Custom South Africa packages available for families and adventurers.</p>
                    <button
                        onClick={() => setIsBookingModalOpen(true)}
                        className="btn btn-primary btn-lg mt-4"
                        style={{ border: 'none' }}
                    >
                        Inquire About South Africa
                    </button>
                </div>
            </section>
        </div>
    );
}
