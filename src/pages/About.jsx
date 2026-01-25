import { Award, Users, Heart, Globe, Shield, Target, Clock, Lightbulb, Search, BadgeCheck, DollarSign, Headphones } from 'lucide-react';
import './About.css';

export default function About() {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="page-hero" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("/images/image.png")' }}>
                <div className="container">
                    <h1>About TravelSmith</h1>
                    <p>Your Trusted Global Destination Management Partner Since 2012</p>
                </div>
            </section>

            {/* Company Overview */}
            <section className="section-light">
                <div className="container">
                    <div className="company-overview">
                        <div className="overview-content">
                            <h2>Our Story</h2>
                            <p>
                                <strong>Travelsmith Adventure Pvt Ltd</strong> was incorporated in the year <strong>2012</strong> under the companies act 1956.
                                We are a young hearted company with passionate travel professionals committed to provide safe and personalized services.
                            </p>
                            <p>
                                Since its inception, the company has been a leader in <strong>International Cruise liner ground handling</strong>.
                                Our fast service, innovation, and friendliness have attracted many tour operators, hoteliers, and trade partners to work
                                under one umbrella with receptiveness to new ideas, flexibility, and adaptability to our clients’ needs.
                            </p>
                            <p>
                                We believe in being immersed and involved in local culture, meeting people, visiting hotels, venues, and restaurants,
                                and building the network which provides access to the very best a destination has to offer.
                            </p>
                        </div>
                        <div className="overview-stats">
                            <div className="stat-box">
                                <h3>12+</h3>
                                <p>Years of Excellence</p>
                            </div>
                            <div className="stat-box">
                                <h3>5000+</h3>
                                <p>Happy Clients</p>
                            </div>
                            <div className="stat-box">
                                <h3>100+</h3>
                                <p>Trade Partners</p>
                            </div>
                            <div className="stat-box">
                                <h3>100%</h3>
                                <p>Commitment</p>
                            </div>
                        </div>
                    </div>
                    <div className="md-profile">
                        <div className="team-image-container">
                            <img src="/images/team.jpg" alt="TravelSmith Team" className="team-photo" />
                        </div>
                        <div className="md-content">
                            <h3>Leadership</h3>
                            <p>
                                The company is headed by <strong>Managing Director Deepak Lotlikar</strong>, who brings along more than a decade of experience
                                and which takes to drive the company into the cutting edge world. As an independently owned business, we provide
                                extremely flexible & personalized service.
                            </p>
                            <p className="mt-3">
                                Travelsmith service key asset is undoubtedly its team – a dedicated group of individual professionals who are committed to provide flawless service.
                                We listen to your needs and work with you applying our extensive knowledge and experience to deliver best travel solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services Summary */}
            <section className="section-gray">
                <div className="container">
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle text-center max-w-800 mx-auto mb-5">
                        The services offered by us are of impeccable nature and our commitment to excellence is the hallmark of Travelsmith.
                    </p>
                    <div className="grid grid-3 services-summary">
                        <div className="service-summary-card">
                            <Globe size={40} className="icon" />
                            <h3>Cruise Handling</h3>
                            <p>Serving International Cruise liner ground handling since 2012.</p>
                        </div>
                        <div className="service-summary-card">
                            <Users size={40} className="icon" />
                            <h3>M.I.C.E</h3>
                            <p>Professional Meetings, Incentives, Conferences & Events Management.</p>
                        </div>
                        <div className="service-summary-card">
                            <Heart size={40} className="icon" />
                            <h3>Weddings & More</h3>
                            <p>Destination Weddings, Car & Coach Rentals, and bespoke travel solutions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Expanded */}
            <section className="section-light">
                <div className="container">
                    <h2 className="section-title">Why Choose TravelSmith?</h2>
                    <div className="grid grid-3 why-choose-grid-expanded">
                        <div className="why-card">
                            <Clock className="why-icon" size={40} />
                            <h3>Experience</h3>
                            <p>Our experienced and knowledgeable staff is always available to assist even after office hours.</p>
                        </div>
                        <div className="why-card">
                            <Lightbulb className="why-icon" size={40} />
                            <h3>Best Solutions</h3>
                            <p>We are proactive in finding solutions for the best achievement for our associates and clients goals.</p>
                        </div>
                        <div className="why-card">
                            <Search className="why-icon" size={40} />
                            <h3>Ease of Search</h3>
                            <p>Clear up to date information with several search criteria to find suitable holiday packages easily & accurately.</p>
                        </div>
                        <div className="why-card">
                            <BadgeCheck className="why-icon" size={40} />
                            <h3>Accurate Information</h3>
                            <p>Correct identification of hotel/resort according to their star categorization and location.</p>
                        </div>
                        <div className="why-card">
                            <DollarSign className="why-icon" size={40} />
                            <h3>Right Price</h3>
                            <p>Our commitment to right price extends not just to room rate but to every service we provide.</p>
                        </div>
                        <div className="why-card">
                            <Headphones className="why-icon" size={40} />
                            <h3>Assistance</h3>
                            <p>Our diligent and efficient team members are accessible at all times for your assistance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recognition & Affiliations */}
            <section className="section-gray">
                <div className="container">
                    <h2 className="section-title">Recognition & Affiliations</h2>
                    <div className="grid grid-3 recognition-grid">
                        <div className="recognition-card">
                            <Award size={48} className="recognition-icon" />
                            <h3>Dept. of Tourism Goa</h3>
                            <p>Officially recognized and approved by the Department of Tourism Goa.</p>
                        </div>
                        <div className="recognition-card">
                            <Shield size={48} className="recognition-icon" />
                            <h3>IATO</h3>
                            <p>Member of the Indian Association of Tour Operators.</p>
                        </div>
                        <div className="recognition-card">
                            <Users size={48} className="recognition-icon" />
                            <h3>TTAG</h3>
                            <p>Member of the Travel & Tourism Association of Goa.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
