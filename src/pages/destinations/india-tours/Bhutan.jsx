import { Link } from 'react-router-dom';
import { Cloud, MapPin, Globe, Mountain, CheckCircle } from 'lucide-react';
import '../Destinations.css';

export default function Bhutan() {
    return (
        <div className="destinations-page">
            <section className="dest-hero" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url("https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1920") no-repeat center/cover' }}>
                <div className="container dest-hero-content">
                    <h1>Bhutan: The Land of Dragon</h1>
                    <p>Experience the magic and mysticism of the last Shangri-La.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-text">
                            <h2>The Kingdom of Happiness</h2>
                            <p>
                                Bhutan is a destination that prioritizes wellbeing over wealth. Our tour takes you
                                deep into the Land of the Thunder Dragon, where modern life and ancient tradition
                                exist in perfect harmony.
                            </p>
                            <p>
                                From the iconic Tiger's Nest Monastery to the tranquil valleys of Punakha,
                                experience a journey that is as much spiritual as it is visual.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Guided Hike to Taktsang (Tiger's Nest)</li>
                                <li><CheckCircle size={18} /> Visit to Punakha Dzong & Thimphu Valley</li>
                                <li><CheckCircle size={18} /> Authentic Bhutanese Traditional Lunch</li>
                                <li><CheckCircle size={18} /> Luxury Wellness & Meditation Stays</li>
                            </ul>
                        </div>
                        <div className="detail-image-container">
                            <img
                                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1200"
                                alt="Bhutan Monastery"
                                className="detail-image-fixed"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Bhutanese Wonders</h2>
                    <div className="grid grid-3">
                        <div className="card p-4 text-center">
                            <Globe className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Pristine Nature</h3>
                            <p>Explore the world's only carbon-negative country with untouched landscapes.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Mountain className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Sacred Peaks</h3>
                            <p>Adventure through mountain passes with panoramic Himalayan vistas.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Cloud className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Culture First</h3>
                            <p>Stay in authentic Dzong-inspired luxury resorts for total immersion.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Find Your Inner Peace in Bhutan</h2>
                    <p>All-inclusive packages covering permits and sustainable tourism fees.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg mt-4">Inquire Now</Link>
                </div>
            </section>
        </div>
    );
}
