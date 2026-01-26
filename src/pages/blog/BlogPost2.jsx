import { Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, Heart, MapPin } from 'lucide-react';
import './BlogPost.css';

export default function BlogPost2() {
    return (
        <div className="blog-post-page">
            <section className="post-hero" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/blog_wedding_hero.png")' }}>
                <div className="container">
                    <Link to="/blog" className="back-link">
                        <ArrowLeft size={20} /> Back to Blog
                    </Link>
                    <div className="post-hero-content">
                        <span className="post-category">Weddings</span>
                        <h1>Why Goa is the Perfect Wedding Destination in 2024</h1>
                        <div className="post-meta">
                            <span className="meta-item"><Calendar size={16} /> Jan 10, 2024</span>
                            <span className="meta-item"><User size={16} /> Staff Writer</span>
                        </div>
                    </div>
                </div>
            </section>

            <article className="post-content">
                <div className="container">
                    <div className="post-body">
                        <p className="lead">
                            Picture this: golden sand beneath your feet, the Arabian Sea glistening in the background, and your loved ones gathered under a canopy of stars as you exchange vows. This isn't just a dream—it's a Goan wedding with TravelSmith.
                        </p>

                        <h2>The Magic of Goan Weddings</h2>
                        <p>
                            Goa has emerged as India's premier destination wedding location, and for good reason. Beyond its stunning beaches and luxury resorts, Goa offers a unique blend of Portuguese charm, Indian hospitality, and world-class infrastructure that makes wedding planning both effortless and enchanting.
                        </p>

                        <div className="post-image">
                            <img src="/images/blog_wedding_venue.png" alt="Beach wedding setup" />
                            <p className="image-caption">Beachfront ceremonies create unforgettable moments</p>
                        </div>

                        <h2>Top Wedding Venues in Goa</h2>

                        <h3><MapPin size={18} style={{ display: 'inline-block', verticalAlign: 'middle' }} /> Beach-Front Luxury</h3>
                        <p>
                            Our collection of beachfront properties offers intimate settings for couples seeking barefoot elegance. From boutique resorts in South Goa to grand estates in North Goa, each venue provides direct beach access, stunning sunset views, and the gentle sound of waves as your wedding soundtrack.
                        </p>

                        <div className="venue-highlight">
                            <h4>Featured Venues:</h4>
                            <ul>
                                <li><strong>Taj Exotica Resort & Spa</strong> - Mediterranean-style luxury on Benaulim Beach</li>
                                <li><strong>Park Hyatt Goa Resort & Spa</strong> - Indo-Portuguese architecture meets modern elegance</li>
                                <li><strong>Alila Diwa Goa</strong> - Contemporary design with traditional Goan touches</li>
                                <li><strong>The Leela Goa</strong> - 75 acres of tropical paradise in South Goa</li>
                            </ul>
                        </div>

                        <h3><Heart size={18} style={{ display: 'inline-block', verticalAlign: 'middle' }} /> Heritage Properties</h3>
                        <p>
                            For couples seeking old-world charm, Goa's heritage properties offer a romantic backdrop steeped in history. These restored Portuguese mansions and colonial estates provide an intimate, exclusive setting with character and sophistication.
                        </p>

                        <div className="post-image">
                            <img src="/images/weddings_hero_premium.png" alt="Heritage venue" />
                            <p className="image-caption">Colonial architecture adds timeless elegance</p>
                        </div>

                        <h2>The TravelSmith Wedding Experience</h2>
                        <p>
                            Planning a destination wedding can be overwhelming, but with TravelSmith, you'll have a dedicated team handling every detail. From venue selection and vendor coordination to guest accommodation and transportation, we orchestrate seamless celebrations that exceed expectations.
                        </p>

                        <blockquote>
                            "Our mission is to transform your wedding vision into reality while you relax and enjoy every moment with your loved ones." — TravelSmith Wedding Team
                        </blockquote>

                        <div className="post-highlight">
                            <h3>Comprehensive Wedding Services:</h3>
                            <ul>
                                <li>Venue selection and booking across Goa's finest properties</li>
                                <li>Complete decor design and execution</li>
                                <li>Catering coordination with diverse menu options</li>
                                <li>Photography and videography arrangements</li>
                                <li>Entertainment booking - from DJs to traditional performers</li>
                                <li>Guest accommodation and transportation management</li>
                                <li>Legal documentation and marriage registration assistance</li>
                                <li>Pre-wedding and post-wedding event planning</li>
                            </ul>
                        </div>

                        <h2>Beyond the Wedding Day</h2>
                        <p>
                            What makes Goa exceptional is that your wedding becomes part of a larger celebration. Your guests can enjoy water sports, explore historic churches, savor world-class cuisine, or simply relax on pristine beaches. We curate welcome dinners, farewell brunches, and optional excursions that make your wedding a multi-day experience your guests will treasure.
                        </p>

                        <div className="post-image">
                            <img src="/images/blog_wedding_hero.png" alt="Wedding celebration" />
                            <p className="image-caption">Multi-day celebrations create cherished memories</p>
                        </div>

                        <h2>The Best Time for Goa Weddings</h2>
                        <p>
                            While Goa's pleasant weather extends from November to March, each month offers unique advantages. November and December provide cooler evenings perfect for outdoor ceremonies, while January and February offer crystal-clear skies and optimal beach conditions. We'll help you choose the perfect dates based on your preferences and guest convenience.
                        </p>

                        <h2>Start Your Forever in Paradise</h2>
                        <p>
                            Your wedding day should be magical, memorable, and stress-free. With Goa's natural beauty, world-class amenities, and TravelSmith's expertise, you can focus on what truly matters—celebrating your love surrounded by those who matter most.
                        </p>

                        <div className="post-footer">
                            <div className="post-share">
                                <Share2 size={20} />
                                <span>Share this article</span>
                            </div>
                            <Link to="/contact" className="btn btn-primary">Plan Your Wedding</Link>
                        </div>
                    </div>
                </div>
            </article>

            <section className="related-posts">
                <div className="container">
                    <h2>Related Articles</h2>
                    <div className="related-grid">
                        <Link to="/blog/1" className="related-card">
                            <img src="/images/blog_mice_hero.png" alt="MICE" />
                            <h3>Future of Corporate Travel in Goa</h3>
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
