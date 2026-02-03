import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plane, Shield, DollarSign, Award, Users, Heart, Star, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Counter from '../components/Counter';
import './Home.css';

export default function Home() {
    const scrollRef = useRef(null);
    const isDragging = useRef(false);
    const isHovered = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId;

        const autoScroll = () => {
            if (!scrollContainer) return;

            if (!isDragging.current && !isHovered.current) {
                // Smooth constant increment
                scrollContainer.scrollLeft += 0.5; // Reduced speed for a more relaxed feel

                const totalWidth = scrollContainer.scrollWidth;
                const halfWidth = totalWidth / 2;

                if (halfWidth > 0 && scrollContainer.scrollLeft >= halfWidth) {
                    scrollContainer.scrollLeft -= halfWidth;
                }
            }
            animationFrameId = requestAnimationFrame(autoScroll);
        };

        animationFrameId = requestAnimationFrame(autoScroll);
        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
    };

    const handleMouseLeave = () => {
        isDragging.current = false;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 2;
        const newScrollLeft = scrollLeft.current - walk;

        const halfWidth = scrollRef.current.scrollWidth / 2;

        // Handle wrapping during drag
        if (newScrollLeft >= halfWidth) {
            scrollRef.current.scrollLeft = newScrollLeft - halfWidth;
            startX.current = e.pageX - scrollRef.current.offsetLeft; // Reset reference
            scrollLeft.current = scrollRef.current.scrollLeft;
        } else if (newScrollLeft < 0) {
            scrollRef.current.scrollLeft = newScrollLeft + halfWidth;
            startX.current = e.pageX - scrollRef.current.offsetLeft; // Reset reference
            scrollLeft.current = scrollRef.current.scrollLeft;
        } else {
            scrollRef.current.scrollLeft = newScrollLeft;
        }
    };

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
                        <Link to="/destinations/goa" className="btn btn-primary">Get a Quote</Link>
                        <Link to="/contact" className="btn btn-outline">Talk to Our Team</Link>
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
                                unforgettable, safe, and personalized travel experiences. Based in the scenic heart of Goa,
                                we bridge the gap between local nuances and global standards, ensuring every journey
                                we curate is nothing short of extraordinary.
                            </p>
                            <p>
                                We are officially recognized by the <strong>Department of Tourism Goa</strong> and hold
                                prestigious memberships with <strong>IATO</strong> and <strong>TTAG</strong>. Our
                                signature expertise in <strong>cruise liner ground handling</strong> and high-end
                                <strong> M.I.C.E management</strong> has made us the trusted partner for international
                                tour operators and corporate giants alike. Whether it's a bespoke leisure tour,
                                a grand destination wedding, or seamless airport logistics, we deliver with
                                unwavering precision and local flair.
                            </p>
                            <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
                        </div>
                        <div className="about-intro-stats">
                            <div className="stat-card">
                                <Award size={40} className="stat-icon" />
                                <h3><Counter end={12} suffix="+" /> Years</h3>
                                <p>Experience</p>
                            </div>
                            <div className="stat-card">
                                <Users size={40} className="stat-icon" />
                                <h3><Counter end={5000} suffix="+" /></h3>
                                <p>Happy Clients</p>
                            </div>
                            <div className="stat-card">
                                <Heart size={40} className="stat-icon" />
                                <h3><Counter end={100} suffix="%" /></h3>
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

                    <div
                        className="auto-scroll-carousel"
                        style={{ marginTop: '2rem' }}
                        ref={scrollRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={() => { handleMouseLeave(); isHovered.current = false; }}
                        onMouseEnter={() => { isHovered.current = true; }}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                    >
                        <div className="auto-scroll-track">
                            {/* Specified Destinations */}
                            <div className="destination-card">
                                <div className="destination-image" style={{ backgroundImage: 'url(/images/dudhsagar_waterfalls_custom.png)' }} />
                                <div className="destination-content">
                                    <h3>Dudhsagar Waterfalls</h3>
                                    <ul className="destination-features">
                                        <li>🌊 Milky Splendor</li>
                                        <li>🚜 Off-road Jeep Drive</li>
                                        <li>🏊 Cool Spring Swim</li>
                                        <li>🐒 Jungle Experience</li>
                                    </ul>
                                    <Link to="/destinations/goa" className="btn btn-primary">
                                        Explore Falls <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>

                            <div className="destination-card">
                                <div className="destination-image" style={{ backgroundImage: 'url(/images/fishing_trip_custom.png)' }} />
                                <div className="destination-content">
                                    <h3>Fishing Trip</h3>
                                    <ul className="destination-features">
                                        <li>🎣 Deep Sea Trawling</li>
                                        <li>🚢 Trawling Experience</li>
                                        <li>🔥 Catch & Grill Barbeque</li>
                                        <li>🌊 Arabian Sea Journey</li>
                                    </ul>
                                    <Link to="/destinations/goa" className="btn btn-primary">
                                        Explore Fishing <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>

                            <div className="destination-card">
                                <div className="destination-image" style={{ backgroundImage: 'url(/images/dandeli_wildlife_custom.png)' }} />
                                <div className="destination-content">
                                    <h3>Dandeli Wildlife</h3>
                                    <ul className="destination-features">
                                        <li>🐆 Jungle Safari</li>
                                        <li>🛶 White Water Rafting</li>
                                        <li>🌲 Lush Green Forests</li>
                                        <li>🦉 Rare Bird Species</li>
                                    </ul>
                                    <Link to="/destinations/goa" className="btn btn-primary">
                                        Explore Dandeli <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>

                            <div className="destination-card">
                                <div className="destination-image" style={{ backgroundImage: 'url(/images/hampi_ruins_custom.png)' }} />
                                <div className="destination-content">
                                    <h3>Hampi Tour</h3>
                                    <ul className="destination-features">
                                        <li>🏛️ Ancient Ruins</li>
                                        <li>🏰 Vijayanagara Legacy</li>
                                        <li>🗿 Stone Architecture</li>
                                        <li>🌅 Breathtaking Sunsets</li>
                                    </ul>
                                    <Link to="/destinations/goa" className="btn btn-primary">
                                        Explore Hampi <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>

                            <div className="destination-card">
                                <div className="destination-image" style={{ backgroundImage: 'url(/images/kayaking_goa_custom.png)' }} />
                                <div className="destination-content">
                                    <h3>Kayaking</h3>
                                    <ul className="destination-features">
                                        <li>🚣‍♂️ Mangrove Expeditions</li>
                                        <li>🌅 Solitude & Serenity</li>
                                        <li>🦋 Backwater Life</li>
                                        <li>🛶 Quiet River Trails</li>
                                    </ul>
                                    <Link to="/destinations/goa" className="btn btn-primary">
                                        Explore Kayaking <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>

                            <div className="destination-card">
                                <div className="destination-image" style={{ backgroundImage: 'url(/images/diving_custom.png)' }} />
                                <div className="destination-content">
                                    <h3>Diving</h3>
                                    <ul className="destination-features">
                                        <li>🤿 Under Water World</li>
                                        <li>🪸 Attractive Corals</li>
                                        <li>🚢 Ship Wreckages</li>
                                        <li>🛡️ Safe for Beginners</li>
                                    </ul>
                                    <Link to="/destinations/goa" className="btn btn-primary">
                                        Explore Diving <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>

                            <div className="destination-card">
                                <div className="destination-image" style={{ backgroundImage: 'url(/images/island_fantasy_custom.png)' }} />
                                <div className="destination-content">
                                    <h3>Island Fantasy</h3>
                                    <ul className="destination-features">
                                        <li>🐬 Dolphin Spotting</li>
                                        <li>🤿 Snorkeling Fun</li>
                                        <li>🏝️ Grande Island Visit</li>
                                        <li>🔥 Beach Barbeque</li>
                                    </ul>
                                    <Link to="/destinations/goa" className="btn btn-primary">
                                        Explore Island <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>

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
                                    <Link to="/destinations/goa" className="btn btn-primary">
                                        Explore Goa <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>

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
                                    <Link to="/destinations/india" className="btn btn-primary">
                                        Explore India <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>

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
                                    <Link to="/destinations/international" className="btn btn-primary">
                                        Explore International <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>

                            {/* Duplicate set for seamless loop */}
                            <div className="destination-card">
                                <div className="destination-image" style={{ backgroundImage: 'url(/images/dudhsagar_waterfalls_custom.png)' }} />
                                <div className="destination-content">
                                    <h3>Dudhsagar Waterfalls</h3>
                                    <ul className="destination-features">
                                        <li>🌊 Milky Splendor</li>
                                        <li>🚜 Off-road Jeep Drive</li>
                                        <li>🏊 Cool Spring Swim</li>
                                        <li>🐒 Jungle Experience</li>
                                    </ul>
                                    <Link to="/destinations/goa" className="btn btn-primary">
                                        Explore Falls <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>

                            <div className="destination-card">
                                <div className="destination-image" style={{ backgroundImage: 'url(/images/fishing_trip_custom.png)' }} />
                                <div className="destination-content">
                                    <h3>Fishing Trip</h3>
                                    <ul className="destination-features">
                                        <li>🎣 Deep Sea Trawling</li>
                                        <li>🚢 Trawling Experience</li>
                                        <li>🔥 Catch & Grill Barbeque</li>
                                        <li>🌊 Arabian Sea Journey</li>
                                    </ul>
                                    <Link to="/destinations/goa" className="btn btn-primary">
                                        Explore Fishing <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>

                            <div className="destination-card">
                                <div className="destination-image" style={{ backgroundImage: 'url(/images/dandeli_wildlife_custom.png)' }} />
                                <div className="destination-content">
                                    <h3>Dandeli Wildlife</h3>
                                    <ul className="destination-features">
                                        <li>🐆 Jungle Safari</li>
                                        <li>🛶 White Water Rafting</li>
                                        <li>🌲 Lush Green Forests</li>
                                        <li>🦉 Rare Bird Species</li>
                                    </ul>
                                    <Link to="/destinations/goa" className="btn btn-primary">
                                        Explore Dandeli <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>

                            <div className="destination-card">
                                <div className="destination-image" style={{ backgroundImage: 'url(/images/hampi_ruins_custom.png)' }} />
                                <div className="destination-content">
                                    <h3>Hampi Tour</h3>
                                    <ul className="destination-features">
                                        <li>🏛️ Ancient Ruins</li>
                                        <li>🏰 Vijayanagara Legacy</li>
                                        <li>🗿 Stone Architecture</li>
                                        <li>🌅 Breathtaking Sunsets</li>
                                    </ul>
                                    <Link to="/destinations/goa" className="btn btn-primary">
                                        Explore Hampi <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>

                            <div className="destination-card">
                                <div className="destination-image" style={{ backgroundImage: 'url(/images/kayaking_goa_custom.png)' }} />
                                <div className="destination-content">
                                    <h3>Kayaking</h3>
                                    <ul className="destination-features">
                                        <li>🚣‍♂️ Mangrove Expeditions</li>
                                        <li>🌅 Solitude & Serenity</li>
                                        <li>🦋 Backwater Life</li>
                                        <li>🛶 Quiet River Trails</li>
                                    </ul>
                                    <Link to="/destinations/goa" className="btn btn-primary">
                                        Explore Kayaking <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>

                            <div className="destination-card">
                                <div className="destination-image" style={{ backgroundImage: 'url(/images/diving_custom.png)' }} />
                                <div className="destination-content">
                                    <h3>Diving</h3>
                                    <ul className="destination-features">
                                        <li>🤿 Under Water World</li>
                                        <li>🪸 Attractive Corals</li>
                                        <li>🚢 Ship Wreckages</li>
                                        <li>🛡️ Safe for Beginners</li>
                                    </ul>
                                    <Link to="/destinations/goa" className="btn btn-primary">
                                        Explore Diving <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>

                            <div className="destination-card">
                                <div className="destination-image" style={{ backgroundImage: 'url(/images/island_fantasy_custom.png)' }} />
                                <div className="destination-content">
                                    <h3>Island Fantasy</h3>
                                    <ul className="destination-features">
                                        <li>🐬 Dolphin Spotting</li>
                                        <li>🤿 Snorkeling Fun</li>
                                        <li>🏝️ Grande Island Visit</li>
                                        <li>🔥 Beach Barbeque</li>
                                    </ul>
                                    <Link to="/destinations/goa" className="btn btn-primary">
                                        Explore Island <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>

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
                                    <Link to="/destinations/goa" className="btn btn-primary">
                                        Explore Goa <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>

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
                                    <Link to="/destinations/india" className="btn btn-primary">
                                        Explore India <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>

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
                                    <Link to="/destinations/international" className="btn btn-primary">
                                        Explore International <ArrowRight size={18} />
                                    </Link>
                                </div>
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


            {/* Testimonials */}
            <section className="section-gray">
                <div className="container">
                    <h2 className="section-title">Happy Travelers</h2>
                    <p className="section-subtitle">Watch our clients share their TravelSmith journey</p>
                    <div className="video-grid-home">
                        <div className="video-card-home">
                            <div className="video-wrapper">
                                <iframe
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="Expertly Planned Goa Vacation"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="video-info-home">
                                <div className="video-rating">
                                    <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={16} />
                                    <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={16} />
                                    <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={16} />
                                    <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={16} />
                                    <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={16} />
                                </div>
                                <h3>Expertly Planned Goa Vacation</h3>
                                <p className="video-caption-home">"Our group had an amazing time exploring hidden gems in Goa. The logistics were flawless."</p>
                            </div>
                        </div>

                        <div className="video-card-home">
                            <div className="video-wrapper">
                                <iframe
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="A Dream Destination Wedding"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="video-info-home">
                                <div className="video-rating">
                                    <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={16} />
                                    <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={16} />
                                    <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={16} />
                                    <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={16} />
                                    <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={16} />
                                </div>
                                <h3>A Dream Destination Wedding</h3>
                                <p className="video-caption-home">"TravelSmith turned our wedding vision into reality. Every detail was handled with perfection."</p>
                            </div>
                        </div>

                        <div className="video-card-home">
                            <div className="video-wrapper">
                                <iframe
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="Seamless Corporate Conference"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="video-info-home">
                                <div className="video-rating">
                                    <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={16} />
                                    <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={16} />
                                    <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={16} />
                                    <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={16} />
                                    <Star fill="var(--primary-orange)" stroke="var(--primary-orange)" size={16} />
                                </div>
                                <h3>Seamless Corporate Conference</h3>
                                <p className="video-caption-home">"Professional, efficient, and proactive. Our annual conference was a huge success."</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-5">
                        <Link to="/testimonials" className="btn btn-secondary">Watch All Stories</Link>
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
