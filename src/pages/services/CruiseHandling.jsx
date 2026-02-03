import { Anchor, Shield, Ship, Users, CheckCircle, Navigation } from 'lucide-react';
import SEO from '../../components/SEO';
import './ServiceDetail.css';

export default function CruiseHandling() {
    return (
        <div className="service-detail-page">
            <SEO
                title="Cruise Liner Ground Handling India"
                description="Premier ground handling services for international cruise liners at major Indian ports. Specializing in shore excursions, turnaround operations, and port logistics."
                keywords="Cruise Handling India, Shore Excursions Goa, Cruise Port Services India, TravelSmith Cruise"
            />
            <section className="service-hero cruise-hero" style={{ background: 'url("/images/cruise-1-1024x545.jpg") no-repeat center/cover' }}>
                <div className="dest-hero-overlay" />
                <div className="service-hero-content">
                    <h1>Cruise Liner Ground Handling</h1>
                    <p>Premier Port Services and Shore Excursions at Major Indian Harbors</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-text">
                            <h2>Excellence in Port Operations</h2>
                            <p>
                                The Travelsmith Cruise Services team work side by side cruise ship representatives to deliver an efficient, professional and customer focused experience from shore to ship and vice versa. Every member of the team has been selected to deliver exceptional customer service, have excellent local knowledge and contacts and is very resourceful. With thorough planning and preparation and being able to work creatively and calmly when faced with the unexpected, we are confident that you will be delighted with our services.
                            </p>
                            <p>
                                Our local, in-depth knowledge and experience truly enables us to design and deliver a tailor-made program of shore excursions and activities for all tastes, ages and interests.
                            </p>
                            <p>
                                As well as offering the popular and traditional excursions, we believe it’s important to offer something that’s a little bit different. Our intimate, local knowledge allows us to create memorable experiences ashore and we are constantly investing resources in developing new and interesting excursion opportunities.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Seamless Shore Excursions</li>
                                <li><CheckCircle size={18} /> Turnaround Operations</li>
                                <li><CheckCircle size={18} /> VIP Passenger Logistics</li>
                                <li><CheckCircle size={18} /> Dedicated Port Liaison</li>
                            </ul>
                        </div>
                        <div className="detail-image-container">
                            <img
                                src="/images/goa_cruise_operations_1768319162428.png"
                                alt="Cruise Port Operations"
                                className="detail-image-fixed"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Core Cruise Services</h2>
                    <div className="grid grid-3">
                        <div className="service-feature-card">
                            <div className="service-icon-box">
                                <Anchor size={40} />
                            </div>
                            <h3>Port Clearance</h3>
                            <p>Efficient handling of all port formalities and guest immigration support.</p>
                        </div>
                        <div className="service-feature-card">
                            <div className="service-icon-box">
                                <Navigation size={40} />
                            </div>
                            <h3>Shore Excursions</h3>
                            <p>Curated local tours designed specifically for cruise passengers' timeframes.</p>
                        </div>
                        <div className="service-feature-card">
                            <div className="service-icon-box">
                                <Ship size={40} />
                            </div>
                            <h3>Vessel Support</h3>
                            <p>Logistical and operational support for crew members and vessel requirements.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <h2 className="text-center mb-5">Cruises Handled By Us</h2>
                    <div className="grid grid-3 text-center">
                        <div className="p-2 glass-card" style={{ border: '1px solid var(--glass-border)' }}>Rhapsody of the Seas</div>
                        <div className="p-2 glass-card" style={{ border: '1px solid var(--glass-border)' }}>Mariner of the Seas</div>
                        <div className="p-2 glass-card" style={{ border: '1px solid var(--glass-border)' }}>Celebrity Constellation</div>
                        <div className="p-2 glass-card" style={{ border: '1px solid var(--glass-border)' }}>MSC Lirica</div>
                        <div className="p-2 glass-card" style={{ border: '1px solid var(--glass-border)' }}>Queen Mary 2</div>
                        <div className="p-2 glass-card" style={{ border: '1px solid var(--glass-border)' }}>Explorer of The Seas</div>
                        <div className="p-2 glass-card" style={{ border: '1px solid var(--glass-border)' }}>Rotterdam</div>
                        <div className="p-2 glass-card" style={{ border: '1px solid var(--glass-border)' }}>Azamara</div>
                        <div className="p-2 glass-card" style={{ border: '1px solid var(--glass-border)' }}>Celebrity Century</div>
                        <div className="p-2 glass-card" style={{ border: '1px solid var(--glass-border)' }}>Aidaaura</div>
                        <div className="p-2 glass-card" style={{ border: '1px solid var(--glass-border)' }}>Aida Diwa</div>
                        <div className="p-2 glass-card" style={{ border: '1px solid var(--glass-border)' }}>AIDA SOL</div>
                        <div className="p-2 glass-card" style={{ border: '1px solid var(--glass-border)' }}>Costa Deliziosa</div>
                        <div className="p-2 glass-card" style={{ border: '1px solid var(--glass-border)' }}>Costa Atlatica</div>
                    </div>
                </div>
            </section>
        </div >
    );
}
