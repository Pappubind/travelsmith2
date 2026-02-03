import { Link } from 'react-router-dom';
import { Camera, Map, Star, Globe, CheckCircle, Mountain } from 'lucide-react';
import '../Destinations.css';

export default function Australia() {
    return (
        <div className="destinations-page">
            <section className="dest-hero australia-hero" style={{ background: 'url("/images/australlia.jpeg") no-repeat center/cover' }}>
                <div className="dest-hero-overlay" />
                <div className="container dest-hero-content">
                    <h1>Magical Australia</h1>
                    <p>Experience the spirit of the Outback and the glamour of Sydney.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-image-container">
                            <img
                                src="/images/sydney.jpg"
                                alt="Sydney Opera House"
                                className="detail-image-fixed"
                            />
                        </div>
                        <div className="detail-text">
                            <h2>The Land Down Under</h2>
                            <p>
                                Australia is a continent of epic scale and unique beauty. Our tour brings you the
                                highlights—from private bridge climbs in Sydney to luxury island hopping on
                                the Great Barrier Reef.
                            </p>
                            <p>
                                Stay in world-famous luxury lodges in the Outback or ultra-modern luxury apartments
                                with harbor views in Sydney and Melbourne.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Private Yacht Charters on the Reef</li>
                                <li><CheckCircle size={18} /> VIP Sydney Opera House Backstage Access</li>
                                <li><CheckCircle size={18} /> Luxury Outback Stays & Aboriginal Tours</li>
                                <li><CheckCircle size={18} /> Private Wildlife Encounters</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Australian Highlights</h2>
                    <div className="grid grid-3">
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Globe size={32} />
                            </div>
                            <h3>Outback Spirit</h3>
                            <p>Adventure through the heart of the Australian Red Center.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Star size={32} />
                            </div>
                            <h3>Sydney Luxury</h3>
                            <p>Private Yacht tours and premium dining at the Opera House.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Mountain size={32} />
                            </div>
                            <h3>Reef Exploration</h3>
                            <p>World-class diving and helicopter tours over the Great Barrier Reef.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Discover the Extraordinary Australia</h2>
                    <p>Inquire for 10 to 20 day premium across-continent tours.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg mt-4">Inquire About Australia</Link>
                </div>
            </section>
        </div>
    );
}
