import { useState } from 'react';
import BookingModal from '../../components/BookingModal';
import { Camera, Map, Star, Mountain, CheckCircle, Globe, Sun } from 'lucide-react';
import './Destinations.css';

export default function India() {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [selectedTour, setSelectedTour] = useState('');

    const openBookingModal = (tourTitle) => {
        setSelectedTour(tourTitle);
        setIsBookingModalOpen(true);
    };

    return (
        <div className="destinations-page">
            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                prefillDestination={selectedTour}
            />
            {/* Hero */}
            <section className="dest-hero india-hero">
                <div className="dest-hero-overlay" />
                <div className="container dest-hero-content">
                    <h1>Discover India</h1>
                    <p>Premium & High-End Luxury Destinations</p>
                </div>
            </section>

            {/* Overview */}
            <section className="section-gray">
                <div className="container">
                    <div className="text-center mb-10">
                        <h2 className="title-md">The Indian Subcontinent</h2>
                        <p className="subtitle-sm mx-auto max-w-2xl">
                            From the snow-capped Himalayas in the north to the serene backwaters of the south,
                            India offers an unmatched depth of travel experiences.
                        </p>
                    </div>

                    <div className="grid grid-3">
                        {/* Northern India */}
                        <div className="glass-card p-6">
                            <div className="dest-icon-box mb-4">
                                <Mountain size={32} />
                            </div>
                            <h3>Northern India</h3>
                            <p>Luxury Himalayan retreats, Golden Triangle tours, and spiritual journeys through the Ganges valley.</p>
                            <ul className="list-unstyled mt-4 text-sm text-gray-400">
                                <li>• Kashmir Valley</li>
                                <li>• Himachal Peaks</li>
                                <li>• Uttarakhand Trails</li>
                            </ul>
                        </div>

                        {/* Western India */}
                        <div className="glass-card p-6">
                            <div className="dest-icon-box mb-4">
                                <Sun size={32} />
                            </div>
                            <h3>Western India</h3>
                            <p>Royal heritage of Rajasthan, the vibrant culture of Gujarat, and the golden beaches of Goa.</p>
                            <ul className="list-unstyled mt-4 text-sm text-gray-400">
                                <li>• Jaipur & Udaipur</li>
                                <li>• Goa Coastal Lux</li>
                                <li>• Rann of Kutch</li>
                            </ul>
                        </div>

                        {/* Eastern & Southern */}
                        <div className="glass-card p-6">
                            <div className="dest-icon-box mb-4">
                                <Globe size={32} />
                            </div>
                            <h3>Bhutan & Nepal</h3>
                            <p>Exclusive high-end tours into the last kingdoms of the Himalayas, including Bhutan and Nepal.</p>
                            <ul className="list-unstyled mt-4 text-sm text-gray-400">
                                <li>• Paro & Thimphu</li>
                                <li>• Kathmandu Valley</li>
                                <li>• Himalayan Glamping</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Iconic Experiences */}
            <section className="section-light">
                <div className="container">
                    <h2 className="text-center mb-10 title-md">Iconic Experiences</h2>
                    <div className="grid grid-2">
                        <div className="destination-photo-card group">
                            <div className="relative overflow-hidden aspect-video">
                                <img src="/images/taj_mahal.jpg" alt="Taj Mahal" className="img-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <h3>The Golden Triangle</h3>
                                <p className="text-gray-400">A journey through Delhi, Agra, and Jaipur, witnessing the pinnacle of Mughal and Rajput architecture.</p>
                            </div>
                        </div>
                        <div className="destination-photo-card group">
                            <div className="relative overflow-hidden aspect-video">
                                <img src="/images/jaipur_palace.jpg" alt="Jaipur Palace" className="img-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <h3>Royal Rajasthan</h3>
                                <p className="text-gray-400">Relive the history of Indian kings in luxury palace-hotels and desert campsites.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="dest-cta">
                <div className="container">
                    <h2>Ready for a Premium India Experience?</h2>
                    <p>Let us curate your perfect luxury India tour</p>
                    <button
                        onClick={() => openBookingModal('India Tours')}
                        className="btn btn-primary btn-lg"
                        style={{ border: 'none' }}
                    >
                        Request Custom India Tour
                    </button>
                </div>
            </section>
        </div>
    );
}
