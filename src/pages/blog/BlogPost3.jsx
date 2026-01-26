import { Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, Mountain } from 'lucide-react';
import './BlogPost.css';

export default function BlogPost3() {
    return (
        <div className="blog-post-page">
            <section className="post-hero" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/chardham-yatra.jpg")' }}>
                <div className="container">
                    <Link to="/blog" className="back-link">
                        <ArrowLeft size={20} /> Back to Blog
                    </Link>
                    <div className="post-hero-content">
                        <span className="post-category">Destinations</span>
                        <h1>Exploring the Spiritual Heart of the Himalayas</h1>
                        <div className="post-meta">
                            <span className="meta-item"><Calendar size={16} /> Jan 05, 2024</span>
                            <span className="meta-item"><User size={16} /> Travel Expert</span>
                        </div>
                    </div>
                </div>
            </section>

            <article className="post-content">
                <div className="container">
                    <div className="post-body">
                        <p className="lead">
                            The Chardham Yatra isn't just a pilgrimage—it's a journey of transformation, self-discovery, and profound spiritual awakening. Join us as we explore the sacred circuit that has drawn seekers for millennia to the majestic Himalayas.
                        </p>

                        <h2>Understanding the Chardham</h2>
                        <p>
                            The Chardham—literally "four abodes"—refers to four sacred sites in Uttarakhand: Yamunotri, Gangotri, Kedarnath, and Badrinath. Hindu tradition holds that visiting these shrines in a single journey cleanses the soul and paves the path to moksha (liberation). But even for those not seeking spiritual enlightenment, the Chardham Yatra offers breathtaking natural beauty and cultural immersion unlike any other journey.
                        </p>

                        <div className="post-image">
                            <img src="/images/chardham-2025.jpg" alt="Himalayan temple" />
                            <p className="image-caption">Ancient temples nestle among snow-capped peaks</p>
                        </div>

                        <h2>The Sacred Four: A Deeper Look</h2>

                        <h3><Mountain size={18} style={{ display: 'inline-block', verticalAlign: 'middle' }} /> Yamunotri - Source of the Yamuna</h3>
                        <p>
                            The westernmost shrine marks the source of the sacred Yamuna River. Reaching Yamunotri requires a trek through pristine mountain landscapes, past hot springs and waterfalls. The journey itself becomes a meditation, as modern distractions fall away and the mind settles into the rhythm of footsteps on ancient paths.
                        </p>

                        <h3><Mountain size={18} style={{ display: 'inline-block', verticalAlign: 'middle' }} /> Gangotri - Origin of the Ganges</h3>
                        <p>
                            At 3,100 meters, the Gangotri temple stands as a testament to India's devotion to the Ganges, the nation's most sacred river. Pilgrims gather here to take holy water from the source and to witness the raw power of glacial rivers carving through rock that has stood for millions of years.
                        </p>

                        <div className="post-image">
                            <img src="/images/mount-everest.jpg" alt="Mountain river" />
                            <p className="image-caption">Sacred rivers flow from Himalayan glaciers</p>
                        </div>

                        <h3><Mountain size={18} style={{ display: 'inline-block', verticalAlign: 'middle' }} /> Kedarnath - Abode of Lord Shiva</h3>
                        <p>
                            Perhaps the most challenging yet rewarding of the four, Kedarnath sits at 3,583 meters and requires either a 16-kilometer trek or helicopter access. The stone temple, one of the twelve Jyotirlingas, has stood for over a thousand years, surviving avalanches, floods, and the harsh Himalayan winters. The resilience of both the structure and the pilgrims who visit it speaks to the enduring power of faith.
                        </p>

                        <h3><Mountain size={18} style={{ display: 'inline-block', verticalAlign: 'middle' }} /> Badrinath - The Final Destination</h3>
                        <p>
                            The easternmost shrine, dedicated to Lord Vishnu, stands in the shadow of the Neelkanth peak. Badrinath's vibrant temple complex buzzes with activity during the pilgrimage season, as thousands gather to receive blessings and complete their sacred circuit.
                        </p>

                        <blockquote>
                            "The mountains are calling and I must go. But in the Himalayas, the mountains don't just call—they transform." — Travel Expert
                        </blockquote>

                        <div className="post-highlight">
                            <h3>The TravelSmith Chardham Experience:</h3>
                            <ul>
                                <li>Carefully paced itineraries for acclimatization and comfort</li>
                                <li>Expert guides versed in both spiritual significance and mountain safety</li>
                                <li>Comfortable accommodations in ashrams and mountain lodges</li>
                                <li>Helicopter options for those with mobility constraints</li>
                                <li>Small group sizes for a more intimate experience</li>
                                <li>Medical support and emergency protocols throughout</li>
                                <li>Cultural immersion opportunities in Himalayan villages</li>
                            </ul>
                        </div>

                        <h2>Beyond Faith: The Transformative Power</h2>
                        <p>
                            While the Chardham Yatra holds deep religious significance, its transformative power extends beyond faith. The journey strips away pretense, challenges physical limits, and creates space for introspection. Whether you're seeking spiritual fulfillment, adventure, or simply a break from modern life's relentless pace, the Chardham offers something profound.
                        </p>

                        <div className="post-image">
                            <img src="/images/dal_lake.jpg" alt="Himalayan landscape" />
                            <p className="image-caption">The journey transforms pilgrims and travelers alike</p>
                        </div>

                        <h2>Planning Your Journey</h2>
                        <p>
                            The Chardham circuit is typically accessible from May to November, with peak season running from June to September. However, we recommend May or September for those seeking a quieter experience with better weather stability. Our team handles all logistics—from permits and accommodations to meals and transportation—allowing you to focus entirely on the journey itself.
                        </p>

                        <h2>Preparing for the Trek</h2>
                        <p>
                            Physical preparation is important but shouldn't be intimidating. We recommend starting a regular walking routine 2-3 months before departure, gradually building stamina. Our pre-trip briefings cover everything from packing essentials to altitude adjustment, ensuring you arrive prepared and confident.
                        </p>

                        <h2>Ready for Transformation?</h2>
                        <p>
                            The Chardham Yatra awaits. Whether this is your first Himalayan journey or you're a seasoned mountain traveler, we'll craft an experience that honors the sacred nature of these sites while providing the comfort, safety, and support you need to fully embrace the journey.
                        </p>

                        <div className="post-footer">
                            <div className="post-share">
                                <Share2 size={20} />
                                <span>Share this article</span>
                            </div>
                            <Link to="/contact" className="btn btn-primary">Start Your Journey</Link>
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
