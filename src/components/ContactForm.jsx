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

    const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const scriptUrl = import.meta.env.VITE_CONTACT_SCRIPT_URL;

            if (!scriptUrl) {
                console.error('VITE_CONTACT_SCRIPT_URL is missing!');
                throw new Error('Contact Script URL not found in environment variables.');
            }

            await fetch(scriptUrl, {
                method: 'POST',
                mode: 'no-cors',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: JSON.stringify(formData),
            });

            setStatus('success');

            if (onSuccess) {
                setTimeout(() => onSuccess(), 2000);
            }

            setFormData({
                name: '',
                email: '',
                phone: '',
                destination: '',
                message: ''
            });

        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
            alert('Something went wrong. Please try again later.');
        } finally {
            if (status !== 'error') {
                setTimeout(() => setStatus('idle'), 5000);
            }
        }
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

            <button
                type="submit"
                className={`btn btn-primary btn-full ${status === 'loading' ? 'loading' : ''}`}
                disabled={status === 'loading' || status === 'success'}
            >
                {status === 'loading' ? (
                    'Sending...'
                ) : status === 'success' ? (
                    'Sent Successfully!'
                ) : (
                    <>
                        <Send size={20} />
                        Get a Quote
                    </>
                )}
            </button>

            {status === 'success' && (
                <div className="form-success-message">
                    Thank you! Your message has been sent to Travelsmith. We'll contact you soon.
                </div>
            )}
        </form>
    );
}
