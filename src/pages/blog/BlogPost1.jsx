import { Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import './BlogPost.css';

export default function BlogPost1() {
    return (
        <div className="blog-post-page">
            <section className="post-hero" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/blog_mice_hero.png")' }}>
                <div className="container">
                    <Link to="/blog" className="back-link">
                        <ArrowLeft size={20} /> Back to Blog
                    </Link>
                    <div className="post-hero-content">
                        <span className="post-category">MICE</span>
                        <h1>Navigating the Future of Corporate Travel in Goa</h1>
                        <div className="post-meta">
                            <span className="meta-item"><Calendar size={16} /> Jan 15, 2024</span>
                            <span className="meta-item"><User size={16} /> Deepak Lotlikar</span>
                        </div>
                    </div>
                </div>
            </section>

            <article className="post-content">
                <div className="container">
                    <div className="post-body">
                        <p className="lead">
                            As the corporate world evolves, so too must the way we approach business events, meetings, and incentive travel. At TravelSmith, we're pioneering a new era of MICE experiences in Goa that blend sustainability, local culture, and unforgettable moments.
                        </p>

                        <h2>The Changing Landscape of MICE Tourism</h2>
                        <p>
                            The traditional model of corporate events—sterile conference rooms, standardized catering, and cookie-cutter team-building activities—is rapidly becoming obsolete. Today's businesses seek experiences that not only achieve their professional objectives but also create lasting memories and strengthen team bonds in authentic ways.
                        </p>

                        <div className="post-image">
                            <img src="/images/blog_mice_conference.png" alt="Modern conference setup" />
                            <p className="image-caption">Modern conference facilities meet Goan hospitality</p>
                        </div>

                        <h2>Why Goa is Leading the Way</h2>
                        <p>
                            Goa offers a unique combination of world-class infrastructure, stunning natural beauty, and a rich cultural heritage. Our state-of-the-art venues are complemented by pristine beaches, historic sites, and vibrant local communities that welcome corporate groups with open arms.
                        </p>

                        <blockquote>
                            "MICE tourism in Goa isn't just about booking a venue—it's about crafting an experience that resonates with your team long after they return home." — Deepak Lotlikar, Founder & CEO
                        </blockquote>

                        <h2>Sustainable Practices at the Forefront</h2>
                        <p>
                            At TravelSmith, we're committed to minimizing the environmental impact of corporate events. From zero-waste catering options to carbon-neutral transportation, we integrate sustainability into every aspect of our MICE offerings. Our partnerships with eco-certified hotels and venues ensure that your corporate event supports local communities while protecting Goa's natural beauty.
                        </p>

                        <div className="post-highlight">
                            <h3>Our Sustainable MICE Initiatives:</h3>
                            <ul>
                                <li>Digital-first event materials to reduce paper waste</li>
                                <li>Farm-to-table catering featuring local, seasonal ingredients</li>
                                <li>Electric and hybrid vehicle fleet for group transportation</li>
                                <li>Partnerships with eco-certified venues and hotels</li>
                                <li>Community engagement programs that benefit local residents</li>
                            </ul>
                        </div>

                        <h2>Local Immersion: The TravelSmith Difference</h2>
                        <p>
                            What sets our MICE experiences apart is our emphasis on authentic local engagement. Instead of generic team-building exercises, we offer activities that connect participants with Goan culture—from cooking classes with local chefs to heritage walks through Old Goa, from traditional music performances to workshops with local artisans.
                        </p>

                        <div className="post-image">
                            <img src="/images/blog_mice_teambuilding.png" alt="Team building activity" />
                            <p className="image-caption">Cultural team-building experiences create lasting bonds</p>
                        </div>

                        <h2>Technology Meets Tradition</h2>
                        <p>
                            While we celebrate Goa's rich heritage, we also embrace cutting-edge event technology. Our venues feature high-speed internet, advanced AV systems, live streaming capabilities, and hybrid event solutions that seamlessly connect in-person and virtual participants.
                        </p>

                        <h2>Looking Ahead</h2>
                        <p>
                            The future of corporate travel in Goa is bright. As more organizations recognize the value of meaningful, sustainable, and culturally rich experiences, we're excited to lead the way in transforming how businesses gather, connect, and celebrate.
                        </p>

                        <p>
                            Whether you're planning a small board meeting or a large-scale conference, TravelSmith is your partner in creating MICE experiences that exceed expectations while honoring our commitment to sustainability and local engagement.
                        </p>

                        <div className="post-footer">
                            <div className="post-share">
                                <Share2 size={20} />
                                <span>Share this article</span>
                            </div>
                            <Link to="/contact" className="btn btn-primary">Plan Your Event</Link>
                        </div>
                    </div>
                </div>
            </article>

            <section className="related-posts">
                <div className="container">
                    <h2>Related Articles</h2>
                    <div className="related-grid">
                        <Link to="/blog/2" className="related-card">
                            <img src="/images/blog_wedding_hero.png" alt="Wedding" />
                            <h3>Why Goa is the Perfect Wedding Destination</h3>
                        </Link>
                        <Link to="/blog/4" className="related-card">
                            <img src="/images/goa_hero_premium_1768747320920.png" alt="Travel" />
                            <h3>The Art of Bespoke Travel</h3>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
