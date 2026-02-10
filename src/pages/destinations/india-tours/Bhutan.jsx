import { useState } from 'react';
import BookingModal from '../../../components/BookingModal';
import { Cloud, MapPin, Globe, Mountain, CheckCircle } from 'lucide-react';
import '../Destinations.css';

export default function Bhutan() {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    return (
        <div className="destinations-page">
            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                prefillDestination="Bhutan: The Land of Dragon"
            />
            <section className="dest-hero bhutan-hero" style={{ background: 'url("/images/bhutan_tigers_nest.jpg") no-repeat center/cover' }}>
                <div className="dest-hero-overlay" />
                <div className="container dest-hero-content">
                    <h1>Bhutan: The Land of Dragon</h1>
                    <p>Experience the magic and mysticism of the last Shangri-La.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-text">
                            <h2>The Last Shangri-La</h2>
                            <p>
                                Bhutan is a kingdom where Gross National Happiness is more important than Gross Domestic Product.
                                Our tour takes you through the stunning valleys of Paro, Thimphu, and Punakha.
                            </p>
                            <p>
                                Hike to the iconic Tiger's Nest Monastery, explore ancient Dzongs (fortresses), and
                                immerse yourself in a culture that has remained preserved for centuries.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Hike to Paro Taktsang (Tiger's Nest)</li>
                                <li><CheckCircle size={18} /> Visit to Punakha Dzong</li>
                                <li><CheckCircle size={18} /> Prayer Flag Hosting Ceremony</li>
                                <li><CheckCircle size={18} /> Luxury Lodge Accommodations</li>
                            </ul>
                        </div>
                        <div className="detail-image-container">
                            <img
                                src="/images/punakha-dzong.jpg"
                                alt="Bhutan Dzong"
                                className="detail-image-fixed"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Bhutan Experiences</h2>
                    <div className="grid grid-3">
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Mountain size={32} />
                            </div>
                            <h3>Himalayan Serenity</h3>
                            <p>Experience the untouched beauty of the eastern Himalayas.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Globe size={32} />
                            </div>
                            <h3>Culture & Heritage</h3>
                            <p>Witness colorful festivals and age-old local traditions.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Cloud size={32} />
                            </div>
                            <h3>Spiritual Journey</h3>
                            <p>Participate in meditation and wellness sessions with local monks.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Find Your Inner Peace in Bhutan</h2>
                    <p>All-inclusive packages covering permits and sustainable tourism fees.</p>
                    <button
                        onClick={() => setIsBookingModalOpen(true)}
                        className="btn btn-primary btn-lg mt-4"
                        style={{ border: 'none' }}
                    >
                        Inquire Now
                    </button>
                </div>
            </section>
        </div>
    );
}
