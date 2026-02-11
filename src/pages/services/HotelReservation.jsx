import { Hotel, Star, Globe, DollarSign, CheckCircle, Headphones } from 'lucide-react';
import SEO from '../../components/SEO';
import './ServiceDetail.css';

export default function HotelReservation() {
    return (
        <div className="service-detail-page">
            <SEO
                title="Hotel Reservations Worldwide"
                description="Secure the best rates for luxury hotels and boutique resorts in Goa and globally. Exclusive deals and seamless booking service for corporate and leisure travel."
                keywords="Hotel Booking Goa, Luxury Resorts Goa, TravelSmith Reservations, Hotel Deals India"
            />
            <section className="service-hero hotel-hero" style={{ background: 'url("/images/hotel_hero.jpg") no-repeat center/cover' }}>
                <div className="dest-hero-overlay" />
                <div className="service-hero-content">
                    <h1>Worldwide Hotel Reservation</h1>
                    <p>Exclusive Rates and Seamless Bookings at Premier Properties Globally</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-text">
                            <h2>Curated Accommodation Solutions</h2>
                            <p className="justify-text">
                                Travelsmith ensures that our partners have the best rates. The process starts right from the initial contract negotiations stage to last minute offers special deals. Sourcing room allocations and making favorable conditions for our partners are some of the keys areas we focus on. Believing in commitment and passion to deliver service has built trusted relationships with a wide network of hoteliers and resort owners making us a perfect local partner for your representations. Our dedicated Reservations team with flawless planning will take special care to ensure that bookings are handled with great efficiency and effectively. We proactively manage special requests, allotments and stop sale requests. Every single booking is plays an important role for us.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Best Price Guarantee</li>
                                <li><CheckCircle size={18} /> Corporate & Leisure Rates</li>
                                <li><CheckCircle size={18} /> Instant Confirmations</li>
                                <li><CheckCircle size={18} /> Personalized Recommendations</li>
                            </ul>
                        </div>
                        <div className="detail-image-container">
                            <img
                                src="/images/luxury_hotel.jpg"
                                alt="Luxury Hotel Stay"
                                className="detail-image-fixed"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Why Book With Us?</h2>
                    <div className="grid grid-3">
                        <div className="service-feature-card">
                            <div className="service-icon-box">
                                <Globe size={40} />
                            </div>
                            <h3>Global Network</h3>
                            <p>Partnerships with leading hotel chains and boutique properties worldwide.</p>
                        </div>
                        <div className="service-feature-card">
                            <div className="service-icon-box">
                                <DollarSign size={40} />
                            </div>
                            <h3>Exclusive Rates</h3>
                            <p>Access to negotiated prices that are not available to the general public.</p>
                        </div>
                        <div className="service-feature-card">
                            <div className="service-icon-box">
                                <Headphones size={40} />
                            </div>
                            <h3>24/7 Support</h3>
                            <p>Dedicated assistance for cancellations, modifications, and special requests.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
