import { Link } from 'react-router-dom';
import { Layout, Rocket, Users, CheckCircle } from 'lucide-react';
import '../ServiceDetail.css';

export default function Exhibitions() {
    return (
        <div className="service-detail-page">
            <section className="service-hero" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=1920") no-repeat center/cover' }}>
                <div className="container">
                    <h1>Trade Shows & Exhibitions</h1>
                    <p>Dynamic product launches, trade fairs, and exhibit design that captures attention.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-text">
                            <h2>Impactful Brand Presence</h2>
                            <p>
                                At exhibitions, standing out is everything. We provide comprehensive design and build solutions
                                that translate your brand values into immersive physical spaces.
                            </p>
                            <p>
                                From custom stall fabrication to large-scale floor management, we ensure your presence
                                at trade fairs is professional, engaging, and result-oriented.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Custom Stand Design & Build</li>
                                <li><CheckCircle size={18} /> Exhibition Floor Management</li>
                                <li><CheckCircle size={18} /> Logistics & Material Handling</li>
                                <li><CheckCircle size={18} /> Onsite Staffing & Support</li>
                            </ul>
                        </div>
                        <div className="detail-image-container">
                            <img
                                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200"
                                alt="Exhibition Hall"
                                className="detail-image-fixed"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Our Exhibition Services</h2>
                    <div className="grid grid-3">
                        <div className="card p-4 text-center">
                            <Layout className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Design & Space</h3>
                            <p>Innovative stall designs that optimize flow and visitor engagement.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Rocket className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Product Launches</h3>
                            <p>Strategic setup and production for high-impact product unveilings.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Users size={32} className="text-primary mb-3 mx-auto" />
                            <h3>Lead Management</h3>
                            <p>Integration of tech solutions for visitor tracking and lead generation.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Make Your Brand the Center of Attention</h2>
                    <p>Contact us to discuss your exhibition requirements.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg mt-4">Get a Quote</Link>
                </div>
            </section>
        </div>
    );
}
