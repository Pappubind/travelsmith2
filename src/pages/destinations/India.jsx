import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Map, Star, Mountain, CheckCircle, Globe, Sun, ArrowRight, Shield, Heart } from 'lucide-react';
import BookingModal from '../../components/BookingModal';
import './Destinations.css';

export default function India() {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const indiaDestinations = [
        {
            title: "Heavenly Kashmir",
            slug: "kashmir",
            image: "/images/Kashmir-Tourism-Best-of-Kashmir.jpg",
            desc: "Experience the paradise on earth with serene lakes and snow-capped peaks.",
            badge: "Top Rated"
        },
        {
            title: "Himachal Wonders",
            slug: "himachal",
            image: "/images/manali.jpg",
            desc: "Explore the valley of Gods, from Shimla's charm to Manali's adventure.",
            badge: "Popular"
        },
        {
            title: "Splendour Uttarakhand",
            slug: "splendour-uttarakhand",
            image: "/images/Mussoorie-2.avif",
            desc: "A journey through the 'Land of Gods', featuring Mussoorie and beyond.",
            badge: "Premium"
        },
        {
            title: "Heritage Uttarakhand",
            slug: "heritage-uttarakhand",
            image: "/images/mussoorie_hero.jpg",
            desc: "Discover the spiritual and architectural heritage of the Himalayas.",
            badge: "Heritage"
        },
        {
            title: "Chardham Yatra",
            slug: "chardham-yatra",
            image: "/images/chardham-2025.jpg",
            desc: "The ultimate spiritual pilgrimage to the four sacred shrines.",
            badge: "Spiritual"
        },
        {
            title: "Royal Rajasthan",
            slug: "rajasthan",
            image: "/images/udaipur_palace.jpg",
            desc: "Relive the era of kings in palace hotels and desert campsites.",
            badge: "Luxury"
        },
        {
            title: "Golden Quadrangle",
            slug: "golden-quadrangle",
            image: "/images/jaipur_palace.jpg",
            desc: "The classic circuit of Delhi, Agra, Jaipur, and beyond.",
            badge: "Classic"
        },
        {
            title: "Enchanting Nepal",
            slug: "enchanting-nepal",
            image: "/images/nepal_valley.jpg",
            desc: "Spiritual journeys and breathtaking vistas in the heart of the Himalayas.",
            badge: "Global"
        },
        {
            title: "Royal Nepal",
            slug: "royal-nepal",
            image: "/images/kathmandu.webp",
            desc: "Exclusive tours of Kathmandu valley and royal heritage sites.",
            badge: "Boutique"
        },
        {
            title: "Mystical Bhutan",
            slug: "bhutan",
            image: "/images/bhutan_tigers_nest.jpg",
            desc: "Explore the last Shangri-La, a kingdom of happiness and peace.",
            badge: "Exclusive"
        }
    ];

    return (
        <div className="destinations-page">
            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                prefillDestination="India Premium Tours"
            />
            {/* Hero */}
            <section className="dest-hero india-hero">
                <div className="dest-hero-overlay" />
                <div className="container dest-hero-content">
                    <h1>Discover India</h1>
                    <p>Premium & High-End Luxury Destinations across the Subcontinent</p>
                </div>
            </section>

            {/* Sub-Destinations Grid */}
            <section className="section-gray">
                <div className="container">
                    <div className="text-center mb-10">
                        <h2 className="title-md">Explore Our Indian Destinations</h2>
                        <p className="subtitle-sm mx-auto max-w-2xl">
                            From the majestic Himalayas to the royal deserts, discover our curated collection of luxury Indian tours.
                        </p>
                    </div>

                    <div className="destination-grid">
                        {indiaDestinations.map((dest, index) => (
                            <Link to={`/destinations/india/${dest.slug}`} key={index} className="tour-card" style={{ textDecoration: 'none' }}>
                                <div className="tour-card-image">
                                    <div className="tour-card-badge">{dest.badge}</div>
                                    <img src={dest.image} alt={dest.title} className="img-cover" />
                                </div>
                                <div className="tour-card-content">
                                    <h3>{dest.title}</h3>
                                    <p>{dest.desc}</p>
                                    <div className="tour-card-footer">
                                        <span className="tour-link">
                                            View Details <ArrowRight size={16} />
                                        </span>
                                        <div className="flex gap-2">
                                            <Shield size={16} className="text-gray-400" />
                                            <Heart size={16} className="text-gray-400" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <section className="dest-cta">
                        <div className="container">
                            <h2>Ready for a Royal Experience?</h2>
                            <p>Let us curate your perfect luxury journey through the Indian subcontinent.</p>
                            <button
                                onClick={() => setIsBookingModalOpen(true)}
                                className="btn btn-primary btn-lg"
                                style={{ border: 'none' }}
                            >
                                Inquire About India Tours
                            </button>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
}
