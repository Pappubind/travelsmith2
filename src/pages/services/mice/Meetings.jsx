import { Link } from 'react-router-dom';
import { Presentation, CheckCircle, MapPin, Users, Clock } from 'lucide-react';
import '../ServiceDetail.css';

export default function Meetings() {
    return (
        <div className="service-detail-page">
            <section className="service-hero" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/meeting_room.jpg") no-repeat center/cover' }}>
                <div className="container">
                    <h1>Executive Meetings</h1>
                    <p>High-stakes board meetings, corporate retreats, and strategic planning sessions.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-image-container">
                            <img
                                src="/images/meeting_room.jpg"
                                alt="Modern Meeting Room"
                                className="detail-image-fixed"
                            />
                        </div>
                        <div className="detail-text">
                            <h2>Strategic Corporate Meetings</h2>
                            <p>
                                At TravelSmith, we understand that executive meetings require a perfect balance of professional infrastructure
                                andInspiring environments. We curate exclusive venues that foster productivity and high-level decision making.
                            </p>
                            <p>
                                Whether it's a confidential board meeting or a critical management retreat, we handle all logistics to ensure
                                your team can focus entirely on the agenda.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Exclusive Boardroom Sourcing</li>
                                <li><CheckCircle size={18} /> Secure & Private Environments</li>
                                <li><CheckCircle size={18} /> High-End Audio-Visual Support</li>
                                <li><CheckCircle size={18} /> Gourmet Catering & Hospitality</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Our Approach to Meetings</h2>
                    <div className="grid grid-3">
                        <div className="card p-4">
                            <MapPin className="text-primary mb-3" />
                            <h3>Prime Locations</h3>
                            <p>Access to India's most prestigious corporate hubs and serene retreat locations in Goa.</p>
                        </div>
                        <div className="card p-4">
                            <Users className="text-primary mb-3" />
                            <h3>Personalized Care</h3>
                            <p>On-site coordinators to manage every detail during your meeting.</p>
                        </div>
                        <div className="card p-4">
                            <Clock className="text-primary mb-3" />
                            <h3>Efficiency First</h3>
                            <p>Meticulous timing and layout planning to maximize your executive's time.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Planning Your Next Executive Session?</h2>
                    <p>Let us handle the logistics while you focus on the vision.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg mt-4">Consult with Our Team</Link>
                </div>
            </section>
        </div>
    );
}
