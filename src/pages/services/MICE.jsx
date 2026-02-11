import { Briefcase, Users, Monitor, BarChart, CheckCircle, Presentation, Building2, Globe } from 'lucide-react';
import SEO from '../../components/SEO';
import './ServiceDetail.css';

export default function MICE() {
    return (
        <div className="service-detail-page">
            <SEO
                title="M.I.C.E Management Goa"
                description="Expert management for Meetings, Incentives, Conferences, and Exhibitions in Goa. We provide strategic event planning and comprehensive logistics for corporate groups."
                keywords="MICE Goa, Corporate Events Goa, Conference Management India, Incentive Travel Goa"
            />
            <section className="service-hero mice-hero" style={{ background: 'url("/images/mice_hero_premium_1768746289905.png") no-repeat center/cover' }}>
                <div className="dest-hero-overlay" />
                <div className="service-hero-content">
                    <h1>M.I.C.E Management</h1>
                    <p>Meetings, Incentives, Conferences, and Corporate Events</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-image-container">
                            <img
                                src="/images/mice_corporate_events_1768320621666.png"
                                alt="MICE Events Coordination"
                                className="detail-image-fixed"
                            />
                        </div>
                        <div className="detail-text">
                            <h2>Strategic Event Planning</h2>
                            <p className="justify-text">
                                We specialize in creating high-impact corporate programs that deliver
                                results. From board meetings to large-scale international conferences,
                                our team handles every aspect of the event lifecycle.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Venue Sourcing & Negotiation</li>
                                <li><CheckCircle size={18} /> Advanced Audiovisual & Tech Support</li>
                                <li><CheckCircle size={18} /> Delegate Registration & Management</li>
                                <li><CheckCircle size={18} /> Theme Design & Production</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Our MICE Specialties</h2>
                    <div className="grid grid-4 mice-grid-expanded">
                        <div className="service-feature-card">
                            <div className="service-icon-box">
                                <Presentation size={32} />
                            </div>
                            <h3>Meetings</h3>
                            <p>Executive board meetings and corporate retreats in premier venues.</p>
                        </div>
                        <div className="service-feature-card">
                            <div className="service-icon-box">
                                <Users size={32} />
                            </div>
                            <h3>Incentive Travel</h3>
                            <p>Reward programs and team-building trips that inspire and motivate.</p>
                        </div>
                        <div className="service-feature-card">
                            <div className="service-icon-box">
                                <Building2 size={32} />
                            </div>
                            <h3>Conferences</h3>
                            <p>Large-scale conventions and seminars with end-to-end management.</p>
                        </div>
                        <div className="service-feature-card">
                            <div className="service-icon-box">
                                <Globe size={32} />
                            </div>
                            <h3>Exhibitions</h3>
                            <p>Trade fairs and product launches with complete logistics and setup.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
