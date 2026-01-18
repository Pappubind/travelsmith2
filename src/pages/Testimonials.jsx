import { Star } from 'lucide-react';
import './Testimonials.css';

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Amit Naik",
            location: "Mumbai, India",
            rating: 5,
            text: "TravelSmith made our Goa vacation absolutely unforgettable! From the moment we landed to our departure, every detail was meticulously planned. Their team's attention to detail and personalized service exceeded all expectations. The beach resort they recommended was perfect, and the local experiences were authentic and amazing."
        },
        {
            id: 2,
            name: "Alisha Dias",
            location: "Pune, India",
            rating: 5,
            text: "Our destination wedding in Goa was a dream come true, thanks to TravelSmith! They handled everything from venue selection to guest accommodations with such professionalism and care. Every guest complimented us on the seamless arrangements. We couldn't have asked for a better partner for our special day."
        },
        {
            id: 3,
            name: "Ajay Kamat",
            location: "Bangalore, India",
            rating: 5,
            text: "Outstanding MICE management for our annual corporate event. TravelSmith coordinated a 3-day conference for 200+ delegates with precision and professionalism. The venue selection, logistics, team-building activities, and hospitality were top-notch. Our management and team members were thoroughly impressed."
        },
        {
            id: 4,
            name: "Priya Sharma",
            location: "Delhi, India",
            rating: 5,
            text: "We booked a Golden Triangle tour with TravelSmith and it was phenomenal! The guides were knowledgeable, hotels were luxurious, and every day brought new wonderful experiences. Their expertise in showcasing India's heritage was evident. Highly recommend for anyone looking for premium India tours."
        },
        {
            id: 5,
            name: "Rohan Desai",
            location: "Ahmedabad, India",
            rating: 5,
            text: "TravelSmith organized our family trip to Kashmir and it was spectacular! They took care of every single detail - from permits to accommodations to daily itineraries. The Dal Lake houseboat experience and Gulmarg adventure were highlights. Professional, reliable, and truly caring service."
        },
        {
            id: 6,
            name: "Sneha Patel",
            location: "Surat, India",
            rating: 5,
            text: "Exceptional service for our European tour! TravelSmith's international travel expertise made our 15-day Europe vacation seamless. Hotel bookings, city tours, transfers - everything was perfectly coordinated. Their 24/7 support gave us peace of mind throughout the journey. Will definitely book again!"
        }
    ];

    return (
        <div className="testimonials-page">
            {/* Hero */}
            <section className="page-hero" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1920")' }}>
                <div className="container">
                    <h1>Client Testimonials</h1>
                    <p>Hear What Our Happy Travelers Say</p>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="section-light">
                <div className="container">
                    <div className="testimonials-main-grid">
                        {testimonials.map(testimonial => (
                            <div key={testimonial.id} className="testimonial-card-full">
                                <div className="testimonial-stars-row">
                                    {[...Array(testimonial.rating)].map((_, idx) => (
                                        <Star
                                            key={idx}
                                            fill="var(--primary-orange)"
                                            stroke="var(--primary-orange)"
                                            size={20}
                                        />
                                    ))}
                                </div>

                                <p className="testimonial-text-full">"{testimonial.text}"</p>

                                <div className="testimonial-author-full">
                                    <strong>{testimonial.name}</strong>
                                    <span>{testimonial.location}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="testimonials-cta">
                <div className="container">
                    <h2>Ready to Create Your Own Story?</h2>
                    <p>Join thousands of happy travelers who trust TravelSmith</p>
                    <a href="/contact" className="btn btn-primary btn-lg">Start Your Journey</a>
                </div>
            </section>
        </div>
    );
}
