import { Link } from 'react-router-dom';
import { Plane, Users, Heart, Shield, ArrowRight } from 'lucide-react';
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
            <section className="page-hero" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("/images/mice_hero_premium.png")' }}>
                <div className="container">
                    <h1>Our Expertise</h1>
                    <p>Unlock Extraordinary Experiences with TravelSmith's Signature Services</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        {serviceCategories.map((service) => (
                            <div key={service.id} className="service-hub-card">
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
