import { Link } from 'react-router-dom';
import './Packages.css';

export default function Packages() {
    const packages = [
        {
            id: 1,
            name: "Jammu & Kashmir",
            description: "Experience heaven on earth with stunning valleys, serene Dal Lake, and snow-capped mountains.",
            highlights: ["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg"],
            duration: "5N / 6D",
            bgClass: "kashmir-hero"
        },
        {
            id: 2,
            name: "Goa",
            description: "Sun, sand, and sea with vibrant culture, historic churches, and unforgettable beaches.",
            highlights: ["Beaches", "Water Sports", "Heritage Sites", "Nightlife"],
            duration: "3N / 4D",
            bgClass: "goa-hero"
        },
        {
            id: 3,
            name: "Hyderabad",
            description: "Discover the city of pearls with rich Nizami heritage, modern IT hub, and delicious biryani.",
            highlights: ["Charminar", "Golconda Fort", "Ramoji Film City", "Hussain Sagar"],
            duration: "2N / 3D",
            bgClass: "hyderabad-hero"
        },
        {
            id: 4,
            name: "Rajasthan",
            description: "Royal palaces, magnificent forts, desert safaris, and colorful cultural experiences.",
            highlights: ["Jaipur", "Udaipur", "Jaisalmer", "Jodhpur"],
            duration: "7N / 8D",
            bgClass: "rajasthan-hero"
        }
    ];

    return (
        <div className="packages-page">
            {/* Hero */}
            <section className="page-hero" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("/images/india_hero_premium.png")' }}>
                <div className="container">
                    <h1>Tour Packages</h1>
                    <p>Handpicked Destinations for Your Next Adventure</p>
                </div>
            </section>

            {/* Packages Grid */}
            <section className="section-light">
                <div className="container">
                    <div className="packages-grid-main">
                        {packages.map(pkg => (
                            <div key={pkg.id} className="package-card-detailed">
                                <div className={`package-card-hero ${pkg.bgClass}`}></div>
                                <div className="package-card-body">
                                    <div className="package-duration">{pkg.duration}</div>
                                    <h2>{pkg.name}</h2>
                                    <p>{pkg.description}</p>

                                    <div className="package-highlights">
                                        <h4>Highlights:</h4>
                                        <ul>
                                            {pkg.highlights.map((highlight, idx) => (
                                                <li key={idx}>✓ {highlight}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Link to="/contact" className="btn btn-primary">Know More</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Package CTA */}
            <section className="custom-package-cta">
                <div className="container">
                    <h2>Looking for a Custom Package?</h2>
                    <p>Let us create a personalized itinerary tailored to your preferences</p>
                    <Link to="/contact" className="btn btn-primary btn-lg">Request Custom Package</Link>
                </div>
            </section>
        </div>
    );
}
