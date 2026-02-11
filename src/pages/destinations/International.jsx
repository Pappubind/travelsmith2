import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, MapPin, Compass, Waves, Star, Sun, Shield, ArrowRight, Heart } from 'lucide-react';
import BookingModal from '../../components/BookingModal';
import './Destinations.css';

export default function International() {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const internationalDestinations = [
        {
            title: "Kenya & Tanzania",
            slug: "kenya-tanzania",
            image: "/images/safari.jpg",
            desc: "Ultra-luxury safaris and the Great Migration in the heart of East Africa.",
            badge: "Top Safari"
        },
        {
            title: "South Africa",
            slug: "south-africa",
            image: "/images/south-africa-safari.jpg",
            desc: "Discover the Rainbow Nation, from Kruger's wildlife to Cape Town's glamor.",
            badge: "Diverse"
        },
        {
            title: "Mauritius",
            slug: "mauritius",
            image: "/images/maritius.jpg",
            desc: "Premium beachfront luxury and azure waters in an island paradise.",
            badge: "Honeymoon"
        },
        {
            title: "Classic Greece",
            slug: "greece",
            image: "/images/santorini.jpg",
            desc: "The birth of civilization meet the stunning beauty of the Aegean Sea.",
            badge: "Cultural"
        },
        {
            title: "North America",
            slug: "north-america",
            image: "/images/new_york.jpg",
            desc: "From the bright lights of NYC to the majestic peaks of the Rockies.",
            badge: "Urban"
        },
        {
            title: "South America",
            slug: "south-america",
            image: "/images/south-america.webp",
            desc: "Explore mystical trails, from Machu Picchu to the vibrant streets of Rio.",
            badge: "Adventure"
        },
        {
            title: "Magnificent Australia",
            slug: "australia",
            image: "/images/sydney.jpg",
            desc: "Experience the spirit of the Outback and the iconic Sydney Harbor.",
            badge: "Continental"
        }
    ];

    return (
        <div className="destinations-page">
            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                prefillDestination="International Luxury Tours"
            />
            {/* Hero */}
            <section className="dest-hero international-hero">
                <div className="dest-hero-overlay" />
                <div className="container dest-hero-content">
                    <h1>International Destinations</h1>
                    <p>Luxury & Global Tours Worldwide curated for the discerning traveler</p>
                </div>
            </section>

            {/* Global Overview Grid */}
            <section className="section-gray">
                <div className="container">
                    <div className="text-center mb-10">
                        <h2 className="title-md">Beyond Boundaries</h2>
                        <p className="subtitle-sm mx-auto max-w-2xl">
                            Explore the most exclusive destinations across the world with TravelSmith's curated global networks.
                        </p>
                    </div>

                    <div className="destination-grid">
                        {internationalDestinations.map((dest, index) => (
                            <Link to={`/destinations/international/${dest.slug}`} key={index} className="tour-card" style={{ textDecoration: 'none' }}>
                                <div className="tour-card-image">
                                    <div className="tour-card-badge">{dest.badge}</div>
                                    <img src={dest.image} alt={dest.title} className="img-cover" />
                                </div>
                                <div className="tour-card-content">
                                    <h3>{dest.title}</h3>
                                    <p>{dest.desc}</p>
                                    <div className="tour-card-footer">
                                        <span className="tour-link">
                                            Explore Tour <ArrowRight size={16} />
                                        </span>
                                        <div className="flex gap-2">
                                            <Shield size={16} className="text-gray-400" />
                                            <Star size={16} className="text-gray-400" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <section className="dest-cta">
                        <div className="container">
                            <h2>Boundless Adventures Await</h2>
                            <p>From the glaciers of the south to the peaks of the north, let us plan your global journey.</p>
                            <button
                                onClick={() => setIsBookingModalOpen(true)}
                                className="btn btn-primary btn-lg"
                                style={{ border: 'none' }}
                            >
                                Inquire About International Tours
                            </button>
                        </div>
                    </section>
                </div>
            </section>

        </div>
    );
}
