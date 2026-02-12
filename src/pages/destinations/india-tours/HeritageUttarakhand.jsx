import { useState } from 'react';
import BookingModal from '../../../components/BookingModal';
import { Anchor, Shield, Target, Waves, CheckCircle } from 'lucide-react';
import '../Destinations.css';

export default function HeritageUttarakhand() {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    return (
        <div className="destinations-page">
            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                prefillDestination="Heritage of Uttarakhand"
            />
            <section className="dest-hero heritage-hero" style={{ background: 'url("/images/rishikesh_hero.jpg") no-repeat center/cover' }}>
                <div className="dest-hero-overlay" />
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
                            <p style={{ textAlign: 'justify' }}>
                                Immerse yourself in the sacred heritage of Rishikesh and Haridwar. This tour is a journey
                                through ancient temples, sacred ghats, and the rejuvenating energy of the River Ganges.
                            </p>
                            <p style={{ textAlign: 'justify' }}>
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
                                src="/images/hardwar_detail.jpg"
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
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Waves size={32} />
                            </div>
                            <h3>Sacred Ganges</h3>
                            <p>Deep spiritual connection at the source of ancient Indian traditions.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Target size={32} />
                            </div>
                            <h3>Yoga Capital</h3>
                            <p>Learn from authentic masters in the Yoga Capital of the world.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Shield size={32} />
                            </div>
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
                    <button
                        onClick={() => setIsBookingModalOpen(true)}
                        className="btn btn-primary btn-lg mt-4"
                        style={{ border: 'none' }}
                    >
                        Inquire Now
                    </button>
                </div>
            </section>
        </div>
    );
}
