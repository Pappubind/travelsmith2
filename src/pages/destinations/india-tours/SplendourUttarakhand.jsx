import { useState } from 'react';
import BookingModal from '../../../components/BookingModal';
import { TreePine, Map, Sun, Mountain, CheckCircle } from 'lucide-react';
import '../Destinations.css';

export default function SplendourUttarakhand() {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    return (
        <div className="destinations-page">
            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                prefillDestination="Splendour of Uttarakhand"
            />
            <section className="dest-hero" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url("/images/mussoorie_hero.jpg") no-repeat center/cover' }}>
                <div className="container dest-hero-content">
                    <h1>Splendour of Uttarakhand</h1>
                    <p>Nature's grand design in the Queen of Hills and beyond.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-image-container">
                            <img
                                src="/images/Mussoorie-2.avif"
                                alt="Mussoorie Hills"
                                className="detail-image-fixed"
                            />
                        </div>
                        <div className="detail-text">
                            <h2>The Queen of Hills</h2>
                            <p>
                                Mussoorie and Dhanaulti represent the gentle splendour of the Himalayas. Our tour is designed
                                for families and couples seeking a peaceful mountain retreat with premium comforts.
                            </p>
                            <p>
                                From the cascading Kempty Falls to the mist-covered peaks of Dhanaulti, experience the
                                raw beauty of Devbhoomi in style.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Luxury Resort Stays with Valley Views</li>
                                <li><CheckCircle size={18} /> Private Guide for Nature Trails</li>
                                <li><CheckCircle size={18} /> Exclusive Picnic Setups in Dhanaulti</li>
                                <li><CheckCircle size={18} /> Visit to Historic Landour</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Nature's Best</h2>
                    <div className="grid grid-3">
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <TreePine size={32} />
                            </div>
                            <h3>Pine Forests</h3>
                            <p>Walk through ancient deodar and pine forests of Dhanaulti.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Sun size={32} />
                            </div>
                            <h3>Golden Sunsets</h3>
                            <p>Experience the world-famous Mussoorie winterline and golden sunsets.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Mountain size={32} />
                            </div>
                            <h3>Eco Parks</h3>
                            <p>Sustainable tourism experiences in the heart of nature.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Experience the Splendour</h2>
                    <p>Weekend getaways and week-long retreats available.</p>
                    <button
                        onClick={() => setIsBookingModalOpen(true)}
                        className="btn btn-primary btn-lg mt-4"
                        style={{ border: 'none' }}
                    >
                        Book Uttarakhand Tour
                    </button>
                </div>
            </section>
        </div>
    );
}
