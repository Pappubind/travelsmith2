import { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import './ContactForm.css';

export default function ContactForm({ prefillDestination = '', onSuccess }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        destination: '',
        message: ''
    });

    useEffect(() => {
        if (prefillDestination) {
            setFormData(prev => ({
                ...prev,
                destination: prefillDestination
            }));
        }
    }, [prefillDestination]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        alert('Thank you for your message! We will contact you soon.');
        if (onSuccess) onSuccess();
        setFormData({
            name: '',
            email: '',
            phone: '',
            destination: '',
            message: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form-component">
            <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                />
            </div>

            <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 1234567890"
                />
            </div>

            <div className="form-group">
                <label htmlFor="destination">Destination Interest</label>
                <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="e.g. Goa, Kashmir, International"
                />
            </div>

            <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Tell us about your travel plans..."
                ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-full">
                <Send size={20} />
                Get a Quote
            </button>
        </form>
    );
}
