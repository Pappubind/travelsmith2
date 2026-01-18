import { Briefcase, Users, Monitor, BarChart, CheckCircle } from 'lucide-react';
import './ServiceDetail.css';

export default function MICE() {
    return (
        <div className="service-detail-page">
            <section className="service-hero mice-hero" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/mice_hero_premium_1768746289905.png") no-repeat center/cover' }}>
                <div className="container">
                    <h1 style={{ color: "white" }}>M.I.C.E Management</h1>
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
                            <p>
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
                    <h2 className="text-center mb-5">Our MICE Pillars</h2>
                    <div className="grid grid-4">
                        <div className="card p-4 text-center">
                            <Briefcase size={40} className="text-primary mb-3 mx-auto" />
                            <h4>Meetings</h4>
                            <p>Productive environments for high-level discussions.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Users size={40} className="text-primary mb-3 mx-auto" />
                            <h4>Incentives</h4>
                            <p>Motivational travel that rewards excellence.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Monitor size={40} className="text-primary mb-3 mx-auto" />
                            <h4>Conferences</h4>
                            <p>Seamless execution of large scale congresses.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <BarChart size={40} className="text-primary mb-3 mx-auto" />
                            <h4>Events</h4>
                            <p>Brand launches and corporate galas.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
