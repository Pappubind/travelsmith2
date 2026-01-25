import { Link } from 'react-router-dom';
import { Camera, Map, Star, Globe, CheckCircle } from 'lucide-react';
import '../Destinations.css';

export default function Australia() {
    return (
        <div className="destinations-page">
            <section className="dest-hero" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url("https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=1920") no-repeat center/cover' }}>
                <div className="container dest-hero-content">
                    <h1>The Great Australian Tour</h1>
                    <p>From the urban wonders of Sydney to the pristine colors of the Great Barrier Reef.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-image-container">
                            <img
                                src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=1200"
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
                        <div className="card p-4 text-center">
                            <Star className="text-primary mb-3 mx-auto" size={32} />
                            <h3>The Reef</h3>
                            <p>Experience the world's largest coral reef with private diving and snorkeling.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Globe className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Modern Cities</h3>
                            <p>The best of Australian urban life, gourmet coffee, and fine dining.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Camera className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Wild Outback</h3>
                            <p>Uncover the spiritual heart of Australia at Uluru with luxury camping.</p>
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
