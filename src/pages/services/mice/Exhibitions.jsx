import { Link } from 'react-router-dom';
import { Layout, Rocket, Users, CheckCircle } from 'lucide-react';
import '../ServiceDetail.css';

export default function Exhibitions() {
    return (
        <div className="service-detail-page">
            <section className="service-hero" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/exhibitions_hero.jpg") no-repeat center/cover' }}>
                <div className="container">
                    <h1 style={{ color: 'white' }}>Trade Shows & Exhibitions</h1>
                    <p>Dynamic product launches, trade fairs, and exhibit design that captures attention.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-text">
                            <h2>Impactful Brand Presence</h2>
                            <p>
                                Goa is one of the most preferred destinations for MICE tourism and it is much more than just a beach holiday destination. The new integrated airport terminal, latest technologies, the superb resorts, the best of the venues and state of the art business facilities meet the global standards which welcomes large events, incentive groups, conferences & exhibitions etc. Travelsmith is specialist in MICE services and will create a lasting impression on every meeting, incentive, convention and event handled by us. Our dedicated team will work with specific objectives and will ensure that you have amazing experiences by providing end to end services.
                            </p>
                        </div>
                        <div className="detail-image-container">
                            <img
                                src="/images/exhibition_booth.jpg"
                                alt="Exhibition Hall"
                                className="detail-image-fixed"
                            />
                        </div>
                    </div>
                    <br></br><br></br>
                    <p>
                        We at Travelsmith will be able to assist you in handling all kinds of events ranging from trade show, exhibition, product launch, award ceremonies or family events. A successful event closes with an exceptional impression on pleasant memories spent and it is all carefully crafted by our team in style for you. The team of highly creative and skilled professionals undertake the task of meticulously conceptualizing, planning and executing each event. Complete arrangements of the event can be handled under one umbrella starting from conceptualizing the theme, selecting appropriate venue, designing the complete set, certification and approvals from various authorities, registrations of participation, logistics and accommodation etc. and all these elements can be provided by Travelsmith for exceptional price for holding good relations with industry partners. Every minute detail will be taken care of, leaving no room for mistakes is assurance from Travelsmith team.
                    </p>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Our Exhibition Services</h2>
                    <div className="grid grid-3">
                        <div className="card p-4 text-center">
                            <Layout className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Design & Space</h3>
                            <p>Innovative stall designs that optimize flow and visitor engagement.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Rocket className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Product Launches</h3>
                            <p>Strategic setup and production for high-impact product unveilings.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Users size={32} className="text-primary mb-3 mx-auto" />
                            <h3>Lead Management</h3>
                            <p>Integration of tech solutions for visitor tracking and lead generation.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Make Your Brand the Center of Attention</h2>
                    <p>Contact us to discuss your exhibition requirements.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg mt-4">Get a Quote</Link>
                </div>
            </section>
        </div>
    );
}
