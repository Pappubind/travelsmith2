import { Link } from 'react-router-dom';
import { Plane, Users, Heart, Shield, ArrowRight, Anchor, Hotel } from 'lucide-react';
import './Services.css';

export default function Services() {
    const serviceCategories = [
        {
            id: 'dmc',
            title: 'DMC Services',
            description: 'Complete destination management with ground handling and operational excellence in India.',
            icon: <Plane size={32} />,
            link: '/services/dmc',
            image: '/images/hero_dmc_operations_1768320541503.png'
        },
        {
            id: 'mice',
            title: 'M.I.C.E Management',
            description: 'Professional handling of Meetings, Incentives, Conferences, and Corporate Events.',
            icon: <Users size={32} />,
            link: '/services/mice',
            image: '/images/mice_corporate_events_1768320621666.png'
        },
        {
            id: 'weddings',
            title: 'Destination Weddings',
            description: 'Flawless execution of dream weddings at India\'s most stunning beach and heritage venues.',
            icon: <Heart size={32} />,
            link: '/services/weddings',
            image: '/images/weddings_hero_premium.png'
        },
        {
            id: 'cruise',
            title: 'Cruise Handling',
            description: 'Premier port services and shore excursions for international cruise liners at major Indian harbors.',
            icon: <Anchor size={32} />,
            link: '/services/cruise-handling',
            image: '/images/cruise-1-1024x545.jpg'
        },
        {
            id: 'hotels',
            title: 'Hotel Reservations',
            description: 'Exclusive rates and seamless bookings at premier luxury properties and boutique resorts globally.',
            icon: <Hotel size={32} />,
            link: '/services/hotel-reservation',
            image: '/images/hotel_hero.jpg'
        },
        {
            id: 'support',
            title: 'Travel Support',
            description: '24/7 assistance including luxury fleet rentals, visa services, and travel insurance.',
            icon: <Shield size={32} />,
            link: '/services/support',
            image: '/images/travel_support_hero_premium.png'
        }
    ];

    return (
        <div className="services-page">
            <section className="page-hero" style={{ background: 'url("/images/weddings_hero_premium.png") no-repeat center/cover' }}>
                <div className="dest-hero-overlay" />
                <div className="service-hero-content" style={{ margin: '0 auto' }}>
                    <h1>Our Expertise</h1>
                    <p>Unlock Extraordinary Experiences with TravelSmith's Signature Services</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        {serviceCategories.map((service) => (
                            <div key={service.id} className="service-hub-card glass-card">
                                <div
                                    className="hub-card-image"
                                    style={{ backgroundImage: `url(${service.image})` }}
                                ></div>
                                <div className="hub-card-content">
                                    <div className="hub-icon">{service.icon}</div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <Link to={service.link} className="btn-text">
                                        Learn More <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
