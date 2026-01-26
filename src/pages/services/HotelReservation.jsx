import { Hotel, Star, Globe, DollarSign, CheckCircle, Headphones } from 'lucide-react';
import './ServiceDetail.css';

export default function HotelReservation() {
    return (
        <div className="service-detail-page">
            <section className="service-hero hotel-hero" style={{ background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/hotel_hero.jpg") no-repeat center/cover' }}>
                <div className="container">
                    <h1 style={{ color: "white" }}>Worldwide Hotel Reservation</h1>
                    <p>Exclusive Rates and Seamless Bookings at Premier Properties Globally</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-text">
                            <h2>Curated Accommodation Solutions</h2>
                            <p>
                                Through our extensive network of global partners and direct hotel
                                contracting, TravelSmith provides access to competitive rates at
                                thousands of hotels worldwide. From luxury resorts to corporate
                                hotels, we find the perfect stay for your needs.
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
                        <div className="card p-4 text-center">
                            <Globe size={40} className="text-primary mb-3 mx-auto" />
                            <h3>Global Network</h3>
                            <p>Partnerships with leading hotel chains and boutique properties worldwide.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <DollarSign size={40} className="text-primary mb-3 mx-auto" />
                            <h3>Exclusive Rates</h3>
                            <p>Access to negotiated prices that are not available to the general public.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Headphones size={40} className="text-primary mb-3 mx-auto" />
                            <h3>24/7 Support</h3>
                            <p>Dedicated assistance for cancellations, modifications, and special requests.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
