import { useState } from 'react';
import BookingModal from '../../../components/BookingModal';
import { Landmark, Map, Star, Sun, CheckCircle } from 'lucide-react';
import '../Destinations.css';

export default function Rajasthan() {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    return (
        <div className="destinations-page">
            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                prefillDestination="Heartland of Rajasthan"
            />
            <section className="dest-hero rajasthan-hero" style={{ background: 'url("/images/jaipur_palace.jpg") no-repeat center/cover' }}>
                <div className="dest-hero-overlay" />
                <div className="container dest-hero-content">
                    <h1>Heartland of Rajasthan</h1>
                    <p>Relive the royal history in the land of kings, forts, and palaces.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-text">
                            <h2>A Royal Extravaganza</h2>
                            <p style={{ textAlign: 'justify' }}>
                                Rajasthan is a vibrant tapestry of culture, history, and architectural marvels. Our Heartland
                                of Rajasthan tour takes you through the Pink City of Jaipur, the Blue City of Jodhpur,
                                and the City of Lakes, Udaipur.
                            </p>
                            <p style={{ textAlign: 'justify' }}>
                                Experience stay in authentic palace-turned-hotels, camel safaris in the Thar Desert,
                                and private heritage walks through ancient alleys rich with storytelling.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Private Guided Fort & Palace Tours</li>
                                <li><CheckCircle size={18} /> Luxury Desert Camping in Jaisalmer</li>
                                <li><CheckCircle size={18} /> Boat Rides on Lake Pichola</li>
                                <li><CheckCircle size={18} /> Authentic Folk Performance evenings</li>
                            </ul>
                        </div>
                        <div className="detail-image-container">
                            <img
                                src="/images/udaipur.jpeg"
                                alt="Udaipur Palace"
                                className="detail-image-fixed"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Royal Experiences</h2>
                    <div className="grid grid-3">
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Landmark size={32} />
                            </div>
                            <h3>Forts & Palaces</h3>
                            <p>Explore UNESCO World Heritage forts like Amer and Mehrangarh.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Sun size={32} />
                            </div>
                            <h3>Desert Safaris</h3>
                            <p>Experience the golden sunset on the dunes of the Thar desert.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Star size={32} />
                            </div>
                            <h3>Palace Stays</h3>
                            <p>Live like royalty in restored 18th-century heritage properties.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Your Royal Journey Awaits</h2>
                    <p>Classic 8 to 15 day itineraries tailored for luxury travelers.</p>
                    <button
                        onClick={() => setIsBookingModalOpen(true)}
                        className="btn btn-primary btn-lg mt-4"
                        style={{ border: 'none' }}
                    >
                        Inquire About Rajasthan
                    </button>
                </div>
            </section>
        </div>
    );
}
