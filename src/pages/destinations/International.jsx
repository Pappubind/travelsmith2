import { useState } from 'react';
import BookingModal from '../../components/BookingModal';
import { Globe, MapPin, Compass, Waves, Star, Sun, Shield } from 'lucide-react';
import './Destinations.css';

export default function International() {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [selectedTour, setSelectedTour] = useState('');

    const openBookingModal = (tourTitle) => {
        setSelectedTour(tourTitle);
        setIsBookingModalOpen(true);
    };

    return (
        <div className="destinations-page">
            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                prefillDestination={selectedTour}
            />
            {/* Hero */}
            <section className="dest-hero international-hero">
                <div className="dest-hero-overlay" />
                <div className="container dest-hero-content">
                    <h1>International Destinations</h1>
                    <p>Luxury & Global Tours Worldwide</p>
                </div>
            </section>

            {/* Global Overview */}
            <section className="section-gray">
                <div className="container">
                    <div className="text-center mb-10">
                        <h2 className="title-md">Beyond Boundaries</h2>
                        <p className="subtitle-sm mx-auto max-w-2xl">
                            Explore the most exclusive destinations across the world with TravelSmith's curated global networks.
                        </p>
                    </div>

                    <div className="grid grid-4">
                        <div className="glass-card p-6">
                            <div className="dest-icon-box mb-4">
                                <Compass size={32} />
                            </div>
                            <h3>Africa</h3>
                            <p>Ultra-luxury safaris in Kenya, Tanzania, and South Africa.</p>
                        </div>
                        <div className="glass-card p-6">
                            <div className="dest-icon-box mb-4">
                                <Waves size={32} />
                            </div>
                            <h3>Island Paradise</h3>
                            <p>Premium beachfront experiences in Mauritius and the Maldives.</p>
                        </div>
                        <div className="glass-card p-6">
                            <div className="dest-icon-box mb-4">
                                <Globe size={32} />
                            </div>
                            <h3>Europe</h3>
                            <p>Heritage and coastal luxury in Greece and beyond.</p>
                        </div>
                        <div className="glass-card p-6">
                            <div className="dest-icon-box mb-4">
                                <Sun size={32} />
                            </div>
                            <h3>Americas</h3>
                            <p>From North American skylines to South American mystical trials.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* World Landmarks */}
            <section className="section-light">
                <div className="container">
                    <h2 className="text-center mb-10 title-md">World Landmarks</h2>
                    <div className="grid grid-2">
                        <div className="destination-photo-card group">
                            <div className="relative overflow-hidden aspect-video">
                                <img src="/images/sydney.jpg" alt="Sydney" className="img-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <h3>Magnificent Australia</h3>
                                <p className="text-gray-400">Discover the spirit of the Outback and the glamor of the Harbor City.</p>
                            </div>
                        </div>
                        <div className="destination-photo-card group">
                            <div className="relative overflow-hidden aspect-video">
                                <img src="/images/santorini.jpg" alt="Santorini" className="img-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <h3>Timeless Greece</h3>
                                <p className="text-gray-400">Experience the birth of civilization and the azure beauty of the Aegean.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="dest-cta">
                <div className="container">
                    <h2>Ready to Explore the World?</h2>
                    <p>Let us plan your dream international journey</p>
                    <button
                        onClick={() => openBookingModal('International Tours')}
                        className="btn btn-primary btn-lg"
                        style={{ border: 'none' }}
                    >
                        Explore International Tours
                    </button>
                </div>
            </section>
        </div>
    );
}
