import React, { useState } from 'react';
import { Car, Shield, Clock, Users, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import SEO from '../../components/SEO';
import './ServiceDetail.css';

export default function VehicleRental() {

    const today = new Date().toISOString().split("T")[0];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        fromDate: '',
        toDate: '',
        vehicle: '',
        serviceType: ''
    });

    const [status, setStatus] = useState('idle');
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    // ---------------- VALIDATION ----------------
    const validateField = (name, value) => {
        let error = '';

        if (name === 'name') {
            if (!value.trim()) error = 'Name required';
            else if (value.length < 3) error = 'Min 3 characters';
        }

        if (name === 'email') {
            if (!value.trim()) error = 'Email required';
            else if (!/^\S+@\S+\.\S+$/.test(value)) error = 'Invalid email';
        }

        if (name === 'phone') {
            if (!value.trim()) error = 'Phone required';
            else if (!/^[0-9+ ]{10,15}$/.test(value)) error = 'Invalid phone';
        }

        if (name === 'country') {
            if (!value.trim()) error = 'Country required';
        }

        if (name === 'fromDate') {
            if (!value) error = 'Select start date';
            else if (value < today) error = 'Cannot select past date';
        }

        if (name === 'toDate') {
            if (!value) error = 'Select end date';
            else if (value < formData.fromDate) error = 'End date must be after start';
        }

        if (name === 'vehicle') {
            if (!value) error = 'Select vehicle';
        }

        if (name === 'serviceType') {
            if (!value) error = 'Select service';
        }

        return error;
    };

    const validateAll = () => {
        let newErrors = {};
        Object.keys(formData).forEach(field => {
            const err = validateField(field, formData[field]);
            if (err) newErrors[field] = err;
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // ---------------- CHANGE ----------------
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value,
            ...(name === "fromDate" ? { toDate: '' } : {})
        }));

        if (touched[name]) {
            const err = validateField(name, value);
            setErrors(prev => ({ ...prev, [name]: err }));
        }
    };

    // ---------------- BLUR ----------------
    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        const err = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: err }));
    };

    // ---------------- SUBMIT ----------------
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateAll()) return;

        setStatus('loading');

        try {
            const scriptUrl = import.meta.env.VITE_VEHICLE_SCRIPT_URL;

            await fetch(scriptUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify({ ...formData, formType: 'Vehicle Rental Booking' }),
            });

            setStatus('success');

            setFormData({
                name: '',
                email: '',
                phone: '',
                country: '',
                fromDate: '',
                toDate: '',
                vehicle: '',
                serviceType: ''
            });

            setTouched({});
            setErrors({});
            setTimeout(() => setStatus('idle'), 5000);

        } catch {
            setStatus('error');
            alert("Something went wrong");
        }
    };

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
                            <p className="justify-text">
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
                                <form className="booking-form space-y-4" onSubmit={handleSubmit}>

                                    {/* NAME */}
                                   <div className="form-group">
                                        <label>Full Name</label>
                                        <input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg"
                                        />
                                        {touched.name && errors.name && <span className="error">{errors.name}</span>}
                                    </div>

                                   {/* EMAIL */}
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg"
                                        />
                                        {touched.email && errors.email && <span className="error">{errors.email}</span>}
                                    </div>

                                    {/* PHONE */}
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg"
                                        />
                                        {touched.phone && errors.phone && <span className="error">{errors.phone}</span>}
                                    </div>

                                         {/* COUNTRY */}
                                    <div className="form-group">
                                        <label>Country</label>
                                        <input
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg"
                                        />
                                        {touched.country && errors.country && <span className="error">{errors.country}</span>}
                                    </div>

                                    {/* DATES */}
                                    <div className="grid grid-2 gap-4">
                                        <div className="form-group">
                                            <label>From Date</label>
                                            <input
                                                type="date"
                                                name="fromDate"
                                                min={today}
                                                value={formData.fromDate}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg"
                                            />
                                            {touched.fromDate && errors.fromDate && <span className="error">{errors.fromDate}</span>}
                                        </div>

                                        <div className="form-group">
                                            <label>To Date</label>
                                            <input
                                                type="date"
                                                name="toDate"
                                                min={formData.fromDate || today}
                                                value={formData.toDate}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg"
                                            />
                                            {touched.toDate && errors.toDate && <span className="error">{errors.toDate}</span>}
                                        </div>
                                    </div>
                                    {/* VEHICLE */}
                                    <div className="form-group">
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Preferred Vehicle</label>
                                        <select
                                            name="vehicle"
                                            value={formData.vehicle}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required
                                            className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg appearance-none"
                                        >
                                            <option value="" disabled>Select a vehicle</option>
                                            <optgroup label="Compact & Sedan">
                                                <option value="Swift">Swift</option>
                                                <option value="Camry">Camry</option>
                                            </optgroup>
                                            <optgroup label="SUV & Premium">
                                                <option value="Fortuner">Fortuner</option>
                                                <option value="BMW X3">BMW X3</option>
                                                <option value="Audi Q5">Audi Q5</option>
                                            </optgroup>
                                            <optgroup label="Luxury">
                                                <option value="BMW">BMW</option>
                                                <option value="Audi">Audi</option>
                                                <option value="Mercedes">Mercedes</option>
                                            </optgroup>
                                            <optgroup label="Large Groups">
                                                <option value="Traveller">Traveller</option>
                                                <option value="Bus (35 Seater)">Bus (35 Seater)</option>
                                                <option value="Bus (45 Seater)">Bus (45 Seater)</option>
                                            </optgroup>
                                        </select>
                                         {touched.vehicle && errors.vehicle && <span className="error">{errors.vehicle}</span>}
                                    </div>
                                    {/* SERVICE */}
                                    <div className="form-group">
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Service Type</label>
                                        <select
                                            name="serviceType"
                                            value={formData.serviceType}
                                            onChange={handleChange}
                                             onBlur={handleBlur}
                                            required
                                            className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg appearance-none"
                                        >
                                            <option value="" disabled>Select service type</option>
                                            <option value="Airport Transfer">Airport Transfer</option>
                                            <option value="Sightseeing Tour">Sightseeing Tour</option>
                                            <option value="Outstation Trip">Outstation Trip</option>
                                            <option value="Wedding/Event Logistics">Wedding/Event Logistics</option>
                                        </select>
                                         {touched.serviceType && errors.serviceType && <span className="error">{errors.serviceType}</span>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'loading' || status === 'success'}
                                        className={`booking-btn ${status === 'success' ? 'success' : ''}`}
                                        style={{
                                            width: '100%',
                                            background: status === 'success' ? '#10b981' : 'var(--primary-blue)',
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
                                            boxShadow: '0 10px 20px rgba(11, 60, 93, 0.15)',
                                            cursor: (status === 'loading' || status === 'success') ? 'not-allowed' : 'pointer',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <Loader2 className="animate-spin" size={18} />
                                                PROCESSING...
                                            </>
                                        ) : status === 'success' ? (
                                            <>
                                                <CheckCircle size={18} />
                                                CONFIRMED!
                                            </>
                                        ) : (
                                            <>
                                                CONFIRM BOOKING
                                                <ArrowRight size={18} />
                                            </>
                                        )}
                                    </button>

                                    {status === 'success' && (
                                        <p className="text-center mt-3 text-green-600 font-medium animate-fade-in">
                                            Booking request sent successfully!
                                        </p>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

