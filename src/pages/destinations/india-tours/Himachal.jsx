import { useState } from 'react';
import BookingModal from '../../../components/BookingModal';
import { Cloud, MapPin, Wind, Mountain, CheckCircle } from 'lucide-react';
import '../Destinations.css';

export default function Himachal() {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    return (
        <div className="destinations-page">
            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                prefillDestination="Scenic Himachal"
            />
            <section className="dest-hero himachal-hero" style={{ background: 'url("/images/himachal_peaks.jpg") no-repeat center/cover' }}>
                <div className="dest-hero-overlay" />
                <div className="container dest-hero-content">
                    <h1>Scenic Himachal</h1>
                    <p>From the Ridge of Shimla to the heights of Rohtang.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-text">
                            <h2>The Land of Snowy Peaks</h2>
                            <p>
                                Himachal Pradesh offers a refreshing escape into the heart of the Himalayas. Our Scenic Himachal
                                tour is perfect for those seeking adventure, spiritual peace, or simply a cool mountain breeze.
                            </p>
                            <p>
                                Explore the colonial charm of Shimla, the vibrant hippie culture of Kasol, and the
                                majestic snow-frontiers of Manali and Rohtang Pass.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Heritage Walk in Shimla</li>
                                <li><CheckCircle size={18} /> Adventure Sports in Solang Valley</li>
                                <li><CheckCircle size={18} /> Visit to Jakhoo Temple & Mall Road</li>
                                <li><CheckCircle size={18} /> Luxury Mountain Spa Resorts</li>
                            </ul>
                        </div>
                        <div className="detail-image-container">
                            <img
                                src="/images/manali.jpg"
                                alt="Manali Mountains"
                                className="detail-image-fixed"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Himachal Experiences</h2>
                    <div className="grid grid-3">
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Mountain size={32} />
                            </div>
                            <h3>High Altitudes</h3>
                            <p>Visit Rohtang Pass and Atal Tunnel for year-round snow experiences.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Wind size={32} />
                            </div>
                            <h3>Pure Air</h3>
                            <p>Retreat to remote valleys for a true digital detox in nature.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Cloud size={32} />
                            </div>
                            <h3>Himalayan Cuisine</h3>
                            <p>Taste the local Siddu and mountain-to-table gourmet dining.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Escape to the Mountains</h2>
                    <p>Perfect for summer getaways and winter snow lovers.</p>
                    <button
                        onClick={() => setIsBookingModalOpen(true)}
                        className="btn btn-primary btn-lg mt-4"
                        style={{ border: 'none' }}
                    >
                        Plan My Himachal Trip
                    </button>
                </div>
            </section>
        </div>
    );
}
