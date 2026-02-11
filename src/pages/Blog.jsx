import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import './Blog.css';

export default function Blog() {
    const blogPosts = [
        {
            id: 1,
            title: "Navigating the Future of Corporate Travel in Goa",
            excerpt: "How TravelSmith is redefining MICE experiences with sustainable practices and local immersion.",
            date: "Jan 15, 2024",
            author: "Travel Expert",
            image: "/images/blog_mice_hero.png",
            category: "MICE"
        },
        {
            id: 2,
            title: "Why Goa is the Perfect Wedding Destination in 2024",
            excerpt: "Exploring the most romantic beach-front venues and heritage properties for your special day.",
            date: "Jan 10, 2024",
            author: "Staff Writer",
            image: "/images/blog_wedding_hero.png",
            category: "Weddings"
        },
        {
            id: 3,
            title: "Exploring the Spiritual Heart of the Himalayas",
            excerpt: "A deep dive into the Chardham Yatra and the transformative power of Indian pilgrimage.",
            date: "Jan 05, 2024",
            author: "Travel Expert",
            image: "/images/chardham-yatra.jpg",
            category: "Destinations"
        },
        {
            id: 4,
            title: "The Art of Bespoke Travel: Our Design Philosophy",
            excerpt: "How we craft personalized itineraries that balance luxury with authentic local experiences.",
            date: "Dec 20, 2023",
            author: "Travel Expert",
            image: "/images/india_hero_premium.png",
            category: "Insights"
        }
    ];

    return (
        <div className="blog-page">
            <section className="page-hero" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/goa_hero_premium_1768747320920.png") no-repeat center/cover' }}>
                <div className="container">
                    <h1>The TravelSmith Blog</h1>
                    <p>Insights, Stories, and Inspiration for the Discerning Traveler</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="blog-grid">
                        {blogPosts.map(post => (
                            <article key={post.id} className="blog-card">
                                <div className="blog-card-image">
                                    <img src={post.image} alt={post.title} />
                                    <span className="blog-category">{post.category}</span>
                                </div>
                                <div className="blog-card-content">
                                    <div className="blog-meta">
                                        <span className="meta-item"><Calendar size={14} /> {post.date}</span>
                                        <span className="meta-item"><User size={14} /> {post.author}</span>
                                    </div>
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                    <Link to={`/blog/${post.id}`} className="read-more">
                                        Read Full Story <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="blog-newsletter">
                <div className="container">
                    <div className="newsletter-box">
                        <h2>Subscribe to Our Journey</h2>
                        <p>Get exclusive travel insights and luxury destination updates directly in your inbox.</p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Enter your email address" required />
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
