import { Car, Shield, Clock, Users, CheckCircle, MapPin, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';
import './ServiceDetail.css';

export default function VehicleRental() {
    return (
        <div className="service-detail-page">
            <SEO
                title="Car & Coach Rental Goa"
                description="Premium car and coach rental services in Goa. From luxury sedans to large capacity coaches, we provide safe and comfortable logistics for all group sizes."
                keywords="Car Rental Goa, Coach Rental Goa, Luxury Car Hire Goa, TravelSmith Transport"
            />
            <section className="service-hero vehicle-hero" style={{ background: 'url("/images/transport_fleet_management_1768319247924.png") no-repeat center/cover' }}>
                <div className="dest-hero-overlay" />
                <div className="service-hero-content">
                    <h1>Car & Coach Rental</h1>
                    <p>Premium Transportation Solutions for Individual and Group Travel</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-text">
                            <h2>Safe & Comfortable Logistics</h2>
                            <p>
                                We at Travelsmith not only provide you car rental service but also peace of mind. Our Executive is always available to assist you to select appropriate, suitable car / coach for your tour in Goa. The complete guidance with the itinerary planning will be provided to you without any hassle. We at Travelsmith are awarded to handle car / coach rental services for some of the premier and large events taking place in Goa. The most experienced team will assist you, right from the preliminary planning to the end of the event with meticulously operation plan.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> GPS Tracked Fleet</li>
                                <li><CheckCircle size={18} /> Professionally Trained Chauffeurs</li>
                                <li><CheckCircle size={18} /> Airport & Port Transfers</li>
                                <li><CheckCircle size={18} /> 24/7 Dispatch Support</li>
                            </ul>
                        </div>
                        <div className="detail-image-container">
                            <img
                                src="/images/luxury_fleet_tracking_1768320649638.png"
                                alt="Modern Fleet"
                                className="detail-image-fixed"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Our Fleet Excellence</h2>
                    <div className="grid grid-3">
                        <div className="service-feature-card">
                            <div className="service-icon-box">
                                <Shield size={40} />
                            </div>
                            <h3>Safety First</h3>
                            <p>Regular maintenance and strict adherence to safety protocols for all vehicles.</p>
                        </div>
                        <div className="service-feature-card">
                            <div className="service-icon-box">
                                <Users size={40} />
                            </div>
                            <h3>Group Travel</h3>
                            <p>Spacious and modern coaches perfect for corporate groups and wedding guests.</p>
                        </div>
                        <div className="service-feature-card">
                            <div className="service-icon-box">
                                <Clock size={40} />
                            </div>
                            <h3>Punctuality</h3>
                            <p>Committed to timely pickups and efficient route planning for seamless travel.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2 vehicles-booking-container" style={{ alignItems: 'start', gap: '2rem' }}>
                        {/* Vehicle List Column */}
                        <div className="vehicle-list">
                            <h2 className="mb-5">Our Premium Fleet</h2>

                            <div className="fleet-category mb-5">
                                <h3 className="category-title mb-3 text-xl font-bold text-gray-700 border-b pb-2">Compact & Sedan</h3>
                                <div className="grid grid-3 gap-3">
                                    {['Swift', 'Camry'].map((vehicle) => (
                                        <div key={vehicle} className="compact-vehicle-card">
                                            <div className="compact-vehicle-icon">
                                                <Car size={20} />
                                            </div>
                                            <div className="compact-vehicle-info">
                                                <h4>{vehicle}</h4>
                                                <div className="availability-tag">
                                                    <CheckCircle size={10} /> Available
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="fleet-category mb-5">
                                <h3 className="category-title mb-3 text-xl font-bold text-gray-700 border-b pb-2">SUV & Premium</h3>
                                <div className="grid grid-3 gap-3">
                                    {['Fortuner', 'BMW X3', 'Audi Q5'].map((vehicle) => (
                                        <div key={vehicle} className="compact-vehicle-card">
                                            <div className="compact-vehicle-icon">
                                                <Shield size={20} />
                                            </div>
                                            <div className="compact-vehicle-info">
                                                <h4>{vehicle}</h4>
                                                <div className="availability-tag">
                                                    <CheckCircle size={10} /> Available
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="fleet-category mb-5">
                                <h3 className="category-title mb-3 text-xl font-bold text-gray-700 border-b pb-2">Luxury Class</h3>
                                <div className="grid grid-3 gap-3">
                                    {['BMW', 'Audi', 'Mercedes'].map((vehicle) => (
                                        <div key={vehicle} className="compact-vehicle-card luxury">
                                            <div className="compact-vehicle-icon">
                                                <Car size={20} />
                                            </div>
                                            <div className="compact-vehicle-info">
                                                <h4>{vehicle}</h4>
                                                <div className="availability-tag">
                                                    <CheckCircle size={10} /> Available
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="fleet-category mb-5">
                                <h3 className="category-title mb-3 text-xl font-bold text-gray-700 border-b pb-2">Group Travel</h3>
                                <div className="grid grid-3 gap-3">
                                    {['Traveller', 'Bus (35)', 'Bus (45)'].map((vehicle) => (
                                        <div key={vehicle} className="compact-vehicle-card">
                                            <div className="compact-vehicle-icon">
                                                <Users size={20} />
                                            </div>
                                            <div className="compact-vehicle-info">
                                                <h4>{vehicle}</h4>
                                                <div className="availability-tag">
                                                    <CheckCircle size={10} /> Available
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Booking Form Column */}
                        <div className="booking-form-container sticky top-4">
                            <div className="glass-card" style={{
                                background: 'white',
                                padding: '2.5rem',
                                borderRadius: '2rem',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.12)',
                                borderTop: '4px solid var(--primary-orange)',
                                border: 'none'
                            }}>
                                <h2 className="text-center" style={{
                                    color: 'var(--primary-blue-dark)',
                                    fontSize: '1.85rem',
                                    fontWeight: '800',
                                    marginBottom: '2rem'
                                }}>Secure Your Journey</h2>
                                <form className="booking-form space-y-4">
                                    <div className="form-group">
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                                        <input type="text" className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition" placeholder="John Doe" />
                                    </div>

                                    <div className="form-group">
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                                        <input type="email" className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition" placeholder="john@example.com" />
                                    </div>

                                    <div className="grid grid-2 gap-4">
                                        <div className="form-group">
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
                                            <input type="tel" className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg" placeholder="+91..." />
                                        </div>
                                        <div className="form-group">
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">Country</label>
                                            <input type="text" className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg" placeholder="India" />
                                        </div>
                                    </div>

                                    <div className="grid grid-2 gap-4">
                                        <div className="form-group">
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">From Date</label>
                                            <input type="date" className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg" />
                                        </div>
                                        <div className="form-group">
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">To Date</label>
                                            <input type="date" className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Preferred Vehicle</label>
                                        <select className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg appearance-none">
                                            <option value="" disabled selected>Select a vehicle</option>
                                            <optgroup label="Compact & Sedan">
                                                <option value="swift">Swift</option>
                                                <option value="camry">Camry</option>
                                            </optgroup>
                                            <optgroup label="SUV & Premium">
                                                <option value="fortuner">Fortuner</option>
                                                <option value="bmw_x3">BMW X3</option>
                                                <option value="audi_q5">Audi Q5</option>
                                            </optgroup>
                                            <optgroup label="Luxury">
                                                <option value="bmw">BMW</option>
                                                <option value="audi">Audi</option>
                                                <option value="mercedes">Mercedes</option>
                                            </optgroup>
                                            <optgroup label="Large Groups">
                                                <option value="traveller">Traveller</option>
                                                <option value="bus_35">Bus (35 Seater)</option>
                                                <option value="bus_45">Bus (45 Seater)</option>
                                            </optgroup>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Service Type</label>
                                        <select className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg appearance-none">
                                            <option value="" disabled selected>Select service type</option>
                                            <option value="airport">Airport Transfer</option>
                                            <option value="sightseeing">Sightseeing Tour</option>
                                            <option value="outstation">Outstation Trip</option>
                                            <option value="wedding">Wedding/Event Logistics</option>
                                        </select>
                                    </div>

                                    <button
                                        type="submit"
                                        className="booking-btn"
                                        style={{
                                            width: '100%',
                                            background: 'var(--primary-blue)',
                                            color: 'white',
                                            padding: '1.125rem',
                                            borderRadius: '0.75rem',
                                            fontWeight: '800',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '12px',
                                            border: 'none',
                                            marginTop: '1rem',
                                            boxShadow: '0 10px 20px rgba(11, 60, 93, 0.15)'
                                        }}
                                    >
                                        CONFIRM BOOKING
                                        <ArrowRight size={18} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
