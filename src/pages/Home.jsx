import { Link } from 'react-router-dom';
import { Plane, Shield, DollarSign, Award, Users, Heart, Star } from 'lucide-react';
import SEO from '../components/SEO';
import './Home.css';

export default function Home() {
    return (
        <div className="home">
            <SEO
                title="Home"
                description="TravelSmith is your trusted Destination Management Company (DMC) in Goa, India. We specialize in personalized travel, MICE, and cruise handling."
                keywords="TravelSmith, DMC Goa, India Travel, Luxury Tours, MICE Management"
            />
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay" />
                <div className="container hero-content">
                    <h1 className="animate-fade-in">WELCOME TO TRAVELSMITH</h1>
                    <h2 className="hero-subtitle animate-fade-in">Your Trusted Destination Management Company (DMC)</h2>
                    <p className="hero-description animate-fade-in">
                        Crafting safe, personalized and premium travel experiences across Goa, India
                        and international destinations since 2012.
                    </p>
                    <div className="hero-buttons animate-fade-in">
                        <Link to="/destinations/goa" className="btn btn-primary">Explore Destinations</Link>
                        <Link to="/contact" className="btn btn-outline">Plan With Us</Link>
                    </div>
                </div>
            </section>

            {/* About TravelSmith Short Intro */}
            <section className="section-light">
                <div className="container">
                    <div className="about-intro">
                        <div className="about-intro-content">
                            <h2>About TravelSmith</h2>
                            <p>
                                Established in <strong>2012</strong>, TravelSmith has emerged as a premier
                                <strong> Destination Management Company (DMC)</strong> specializing in creating
                                unforgettable travel experiences.
                            </p>
                            <p>
                                We are recognized by the <strong>Department of Tourism Goa</strong>,
                                members of <strong>IATO</strong> and <strong>TTAG</strong>, and pride ourselves
                                on our expertise in <strong>cruise liner ground handling</strong> and delivering
                                personalized service across corporate and leisure travel.
                            </p>
                            <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
                        </div>
                        <div className="about-intro-stats">
                            <div className="stat-card">
                                <Award size={40} className="stat-icon" />
                                <h3>12+ Years</h3>
                                <p>Experience</p>
                            </div>
                            <div className="stat-card">
                                <Users size={40} className="stat-icon" />
                                <h3>5000+</h3>
                                <p>Happy Clients</p>
                            </div>
                            <div className="stat-card">
                                <Heart size={40} className="stat-icon" />
                                <h3>100%</h3>
                                <p>Customer Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Destination Overview */}
            <section className="section-gray">
                <div className="container">
                    <h2 className="section-title">Explore Our Destinations</h2>
                    <p className="section-subtitle">
                        From pristine beaches to heritage wonders and global adventures
                    </p>

                    <div className="grid grid-3 destinations-grid">
                        {/* Goa */}
                        <div className="destination-card">
                            <div className="destination-image goa-bg"></div>
                            <div className="destination-content">
                                <h3>Goa</h3>
                                <ul className="destination-features">
                                    <li>🏖️ Pristine Beaches</li>
                                    <li>⛪ Historic Temples & Churches</li>
                                    <li>🌅 Scenic Beauty</li>
                                    <li>🎉 Vibrant Nightlife</li>
                                </ul>
                                <Link to="/destinations/goa" className="btn btn-primary">Explore Goa</Link>
                            </div>
                        </div>

                        {/* India */}
                        <div className="destination-card">
                            <div className="destination-image india-bg"></div>
                            <div className="destination-content">
                                <h3>India</h3>
                                <ul className="destination-features">
                                    <li>🏰 Premium Heritage Tours</li>
                                    <li>⛰️ High-End Destinations</li>
                                    <li>🕌 Cultural Experiences</li>
                                    <li>✨ Luxury Circuits</li>
                                </ul>
                                <Link to="/destinations/india" className="btn btn-primary">Explore India</Link>
                            </div>
                        </div>

                        {/* International */}
                        <div className="destination-card">
                            <div className="destination-image international-bg"></div>
                            <div className="destination-content">
                                <h3>International</h3>
                                <ul className="destination-features">
                                    <li>🌍 Global Destinations</li>
                                    <li>🏨 Luxury Accommodations</li>
                                    <li>🚢 Cruise Experiences</li>
                                    <li>✈️ Curated Itineraries</li>
                                </ul>
                                <Link to="/destinations/international" className="btn btn-primary">Explore International</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-light">
                <div className="container">
                    <h2 className="section-title">Why Choose TravelSmith?</h2>
                    <div className="grid grid-3 why-choose-grid">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <Award size={48} />
                            </div>
                            <h3>12+ Years Experience</h3>
                            <p>
                                Over a decade of expertise in crafting memorable travel experiences
                                with in-depth destination knowledge.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <Shield size={48} />
                            </div>
                            <h3>Ease of Search</h3>
                            <p>
                                Seamless booking process with personalized assistance to help you
                                find the perfect travel package.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <DollarSign size={48} />
                            </div>
                            <h3>Right Price</h3>
                            <p>
                                Competitive pricing with transparent costs and excellent value for
                                premium travel experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services */}
            <section className="section-gray">
                <div className="container">
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle">
                        Comprehensive travel solutions tailored to your needs
                    </p>

                    <div className="grid grid-2 services-grid">
                        <div className="service-card">
                            <Plane size={40} className="service-icon" />
                            <h3>DMC Services</h3>
                            <p>Ground handling, hotel contracting, transportation, and destination experiences.</p>
                            <Link to="/services#dmc">Learn More →</Link>
                        </div>

                        <div className="service-card">
                            <Users size={40} className="service-icon" />
                            <h3>M.I.C.E Management</h3>
                            <p>Meetings, incentives, conferences & events tailored to corporate requirements.</p>
                            <Link to="/services#mice">Learn More →</Link>
                        </div>

                        <div className="service-card">
                            <Heart size={40} className="service-icon" />
                            <h3>Destination Weddings</h3>
                            <p>End-to-end wedding coordination with venue selection and guest handling.</p>
                            <Link to="/services#weddings">Learn More →</Link>
                        </div>

                        <div className="service-card">
                            <Shield size={40} className="service-icon" />
                            <h3>Travel Support Services</h3>
                            <p>Car/coach rentals, hotel reservations, and visa & travel assistance.</p>
                            <Link to="/services#travel">Learn More →</Link>
                        </div>
                    </div>

                    <div className="text-center mt-5">
                        <Link to="/services" className="btn btn-primary">View All Services</Link>
                    </div>
                </div>
            </section>

            {/* Featured Packages */}
            <section className="section-light">
                <div className="container">
                    <h2 className="section-title">Featured Packages</h2>
                    <p className="section-subtitle">Handpicked destinations for your next adventure</p>

                    <div className="grid grid-4 packages-grid">
                        <div className="package-card">
                            <div className="package-image kashmir-bg"></div>
                            <div className="package-content">
                                <h3>Jammu & Kashmir</h3>
                                <p>Experience heaven on earth with stunning valleys and serene lakes.</p>
                                <Link to="/packages" className="package-link">Know More →</Link>
                            </div>
                        </div>

                        <div className="package-card">
                            <div className="package-image goa-package-bg"></div>
                            <div className="package-content">
                                <h3>Goa</h3>
                                <p>Sun, sand, and sea with vibrant culture and historic charm.</p>
                                <Link to="/packages" className="package-link">Know More →</Link>
                            </div>
                        </div>

                        <div className="package-card">
                            <div className="package-image hyderabad-bg"></div>
                            <div className="package-content">
                                <h3>Hyderabad</h3>
                                <p>Discover the city of pearls with rich heritage and modern marvels.</p>
                                <Link to="/packages" className="package-link">Know More →</Link>
                            </div>
                        </div>

                        <div className="package-card">
                            <div className="package-image rajasthan-bg"></div>
                            <div className="package-content">
                                <h3>Rajasthan</h3>
                                <p>Royal palaces, desert safaris, and colorful cultural experiences.</p>
                                <Link to="/packages" className="package-link">Know More →</Link>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-5">
                        <Link to="/packages" className="btn btn-primary">View All Packages</Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section-gray">
                <div className="container">
                    <h2 className="section-title">What Our Clients Say</h2>
                    <div className="grid grid-3 testimonials-grid">
                        <div className="testimonial-card">
                            <div className="testimonial-stars">
                                <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={20} />
                                <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={20} />
                                <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={20} />
                                <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={20} />
                                <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={20} />
                            </div>
                            <p className="testimonial-text">
                                "TravelSmith made our Goa vacation absolutely unforgettable! Their attention to
                                detail and personalized service exceeded all expectations."
                            </p>
                            <div className="testimonial-author">
                                <strong>Amit Naik</strong>
                                <span>Mumbai, India</span>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-stars">
                                <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={20} />
                                <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={20} />
                                <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={20} />
                                <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={20} />
                                <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={20} />
                            </div>
                            <p className="testimonial-text">
                                "Professional, reliable, and truly caring. Our destination wedding was flawlessly
                                executed. Thank you TravelSmith!"
                            </p>
                            <div className="testimonial-author">
                                <strong>Alisha Dias</strong>
                                <span>Pune, India</span>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-stars">
                                <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={20} />
                                <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={20} />
                                <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={20} />
                                <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={20} />
                                <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={20} />
                            </div>
                            <p className="testimonial-text">
                                "Outstanding MICE management for our corporate event. Every detail was handled
                                with precision and professionalism."
                            </p>
                            <div className="testimonial-author">
                                <strong>Ajay Kamat</strong>
                                <span>Bangalore, India</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-5">
                        <Link to="/testimonials" className="btn btn-secondary">Read More Testimonials</Link>
                    </div>
                </div>
            </section>

            {/* Call To Action */}
            <section className="cta-section">
                <div className="container cta-content">
                    <h2>Plan Your Next Journey with TravelSmith</h2>
                    <p>Let us craft a personalized travel experience that you'll cherish forever</p>
                    <Link to="/contact" className="btn btn-primary btn-lg">Contact Us Today</Link>
                </div>
            </section>
        </div>
    );
}
