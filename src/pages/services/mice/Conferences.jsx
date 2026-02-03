import { Link } from 'react-router-dom';
import { Building2, Globe, Mic, Users, CheckCircle } from 'lucide-react';
import '../ServiceDetail.css';

export default function Conferences() {
    return (
        <div className="service-detail-page">
            <section className="service-hero conferences-hero" style={{ background: 'url("/images/conferences_hero.jpg") no-repeat center/cover' }}>
                <div className="dest-hero-overlay" />
                <div className="container">
                    <h1>World-Class Conferences</h1>
                    <p>End-to-end management for professional congresses, seminars, and corporate conventions.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-image-container">
                            <img
                                src="/images/blog_mice_conference.png"
                                alt="Conference Hall"
                                className="detail-image-fixed"
                            />
                        </div>
                        <div className="detail-text">
                            <h2>Expert Conference Management</h2>
                            <p>
                                Goa is one of the most preferred destinations for MICE tourism and it is much more than just a beach holiday destination. The new integrated airport terminal, latest technologies, the superb resorts, the best of the venues and state of the art business facilities meet the global standards which welcomes large events, incentive groups, conferences, exhibitions etc. Travelsmith is specialist in MICE services and will create a lasting impression on every meeting, incentive, convention and event handled by us. Our dedicated team will work with specific objectives and will ensure that you have an amazing experience by providing end to end services.
                            </p>

                        </div>
                    </div>
                    <br></br><br></br>
                    <p>We at Travelsmith not just provide hassle free handling but ensure all time attention and smooth running of the show through the conference. The team is involved in assisting right from the planning stage till the last delegate departs at a successful conference. Complete information on the destination with excellent and hand in hand working relation with the industry partners allow us to share the best competitive prices and an exceptional large range of choices. Our unique fun and creative team building activities help you to address your team in a new way of inspiration. It is Travelsmith team’s mission and vision to deliver amazing experiences.
                    </p>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Conference Solutions</h2>
                    <div className="grid grid-3">
                        <div className="service-feature-card">
                            <div className="service-icon-box">
                                <Mic size={32} />
                            </div>
                            <h3>Audio Visual</h3>
                            <p>State-of-the-art sound, lighting, and presentation technology for high impact.</p>
                        </div>
                        <div className="service-feature-card">
                            <div className="service-icon-box">
                                <Globe size={32} />
                            </div>
                            <h3>Global Reach</h3>
                            <p>Experience handling international delegations and multi-language requirements.</p>
                        </div>
                        <div className="service-feature-card">
                            <div className="service-icon-box">
                                <Building2 size={32} />
                            </div>
                            <h3>Modern Venues</h3>
                            <p>Access to the newest convention centers and professional business hotels.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Launch Your Next Success</h2>
                    <p>Ready to host a world-class conference? We're ready to help.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg mt-4">Partner With Us</Link>
                </div>
            </section>
        </div>
    );
}
