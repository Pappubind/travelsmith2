import { Link } from 'react-router-dom';
import { Presentation, CheckCircle, MapPin, Users, Clock } from 'lucide-react';
import '../ServiceDetail.css';

export default function Meetings() {
    return (
        <div className="service-detail-page">
            <section className="service-hero" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/meeting_room.jpg") no-repeat center/cover' }}>
                <div className="container">
                    <h1 style={{ color: "white" }}>Executive Meetings</h1>
                    <p>High-stakes board meetings, corporate retreats, and strategic planning sessions.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-image-container">
                            <img
                                src="/images/meeting_room.jpg"
                                alt="Modern Meeting Room"
                                className="detail-image-fixed"
                            />
                        </div>
                        <div className="detail-text">
                            <h2>Strategic Corporate Meetings</h2>
                            <p>
                                Goa is one of the most preferred destinations for MICE tourism and it is much more than just a beach holiday destination. The new integrated airport terminal, latest technologies, the superb resorts, the best of the venues and state of the art business facilities meet the global standards which welcomes large events, incentive groups, conferences & exhibitions etc. Travelsmith is specialist in MICE services and will create a lasting impression on every meeting, incentive, convention and event handled by us. Our dedicated team will work with specific objectives and will ensure that you have an amazing experience by providing end to end services.
                            </p>
                        </div>
                    </div>
                    <br></br>
                    <p>
                        Travelsmith team purely understands the value of time for an individual participating in a meeting travelling miles away. We will provide complete assistance on arranging meetings at the destination for different category of people, for example – clients to customers; dealers to agents or retailers, zonal gathering etc which will serve multiple needs. The services start from day one while carefully selecting the appropriate hotel / resort, venue and activities fallowed by holding accurate meeting agenda. Start to end event assistance will be provided right from the arrival services at the airport with personalized desk and special welcome. To hold the meeting with the best interest of every delegate is the key role of our experts and that’s where we step in to maximize the delegate presence by creating innovative, ideal and an elegant ambience and state of the art audio / video equipment which even can transform a boring meeting into a stimulating brainstorming and interesting session.<br></br>
                        <br></br> Special pre-post tours around Goa are organized by the active team of the Travelsmith desk at venue for spouse and delegates. Excellent customer service and every minute attention, tastefully designed delegate kits, an elegant ambience, immaculately attired chauffeurs in comfortable cars will add a special touch to every delegate attending the meeting. Through our exceptional relationship with airlines, airport authorities, chain resorts, celebrity artist and local vendors, we are able to handle your entire project with great care and at leading price.
                    </p>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Our Approach to Meetings</h2>
                    <div className="grid grid-3">
                        <div className="card p-4">
                            <MapPin className="text-primary mb-3" />
                            <h3>Prime Locations</h3>
                            <p>Access to India's most prestigious corporate hubs and serene retreat locations in Goa.</p>
                        </div>
                        <div className="card p-4">
                            <Users className="text-primary mb-3" />
                            <h3>Personalized Care</h3>
                            <p>On-site coordinators to manage every detail during your meeting.</p>
                        </div>
                        <div className="card p-4">
                            <Clock className="text-primary mb-3" />
                            <h3>Efficiency First</h3>
                            <p>Meticulous timing and layout planning to maximize your executive's time.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Planning Your Next Executive Session?</h2>
                    <p>Let us handle the logistics while you focus on the vision.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg mt-4">Consult with Our Team</Link>
                </div>
            </section>
        </div>
    );
}
