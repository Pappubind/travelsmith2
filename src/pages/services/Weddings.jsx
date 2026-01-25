import { Heart, Camera, Music, Utensils, CheckCircle, MapPin, Users } from 'lucide-react';
import './ServiceDetail.css';

export default function Weddings() {
    return (
        <div className="service-detail-page">
            <section className="service-hero wedding-hero" style={{ background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/weddings_hero_premium.png") no-repeat center/cover' }}>
                <div className="container">
                    <h1 style={{ color: "white" }}>Destination Weddings</h1>
                    <p>Turning Your Dream Celebration into an Eternal Reality</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-text">
                            <h2>Full-Service Wedding Planning</h2>
                            <p>
                                We believe every wedding should be as unique as the couple. Our dedicated
                                wedding specialists work tirelessly to ensure that every flower, every
                                guest, and every moment is perfect.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Bespoke Theme & Decor Design</li>
                                <li><CheckCircle size={18} /> Premium Venue Partnerships</li>
                                <li><CheckCircle size={18} /> Comprehensive Guest Concierge</li>
                                <li><CheckCircle size={18} /> Entertainment & Catering Coordination</li>
                            </ul>
                        </div>
                        <div className="detail-image-container">
                            <img
                                src="/images/india_destinations_operations_1768319141419.png"
                                alt="Wedding Planning Operations"
                                className="detail-image-fixed"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Wedding Services</h2>
                    <div className="grid grid-3">
                        <div className="card p-4 text-center">
                            <MapPin size={40} className="text-primary mb-3 mx-auto" />
                            <h3>Venue Selection</h3>
                            <p>Handpicked luxury resorts and heritage palaces for your special day.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Users size={40} className="text-primary mb-3 mx-auto" />
                            <h3>Guest Management</h3>
                            <p>Seamless hospitality and logistics for all your wedding attendees.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Heart size={40} className="text-primary mb-3 mx-auto" />
                            <h3>Event Coordination</h3>
                            <p>Flawless execution of all ceremonies from Mehendi to Reception.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
