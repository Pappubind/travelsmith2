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

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        if (prefillDestination) {
            setFormData(prev => ({ ...prev, destination: prefillDestination }));
        }
    }, [prefillDestination]);

    // ---------- VALIDATION FUNCTION ----------
    const validateField = (name, value) => {
        let error = '';

        if (name === 'name') {
            if (!value.trim()) error = 'Name is required';
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

        if (name === 'message') {
            if (!value.trim()) error = 'Message required';
            else if (value.length < 10) error = 'Min 10 characters';
        }

        return error;
    };

    // ---------- HANDLE CHANGE ----------
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // if field already touched → revalidate live
        if (touched[name]) {
            const error = validateField(name, value);
            setErrors(prev => ({ ...prev, [name]: error }));
        }
    };

    // ---------- ON BLUR ----------
    const handleBlur = (e) => {
        const { name, value } = e.target;

        setTouched(prev => ({ ...prev, [name]: true }));

        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    // ---------- FINAL SUBMIT VALIDATION ----------
    const validateAll = () => {
        let newErrors = {};

        Object.keys(formData).forEach(field => {
            if (field === 'destination') return;

            const error = validateField(field, formData[field]);
            if (error) newErrors[field] = error;
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateAll()) return;

        setStatus('loading');

        try {
            const scriptUrl = import.meta.env.VITE_CONTACT_SCRIPT_URL;

            await fetch(scriptUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify(formData),
            });

            setStatus('success');

            setFormData({
                name: '',
                email: '',
                phone: '',
                destination: '',
                message: ''
            });

            setTouched({});
            setErrors({});

        } catch {
            setStatus('error');
            alert("Something went wrong");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form-component">

            <div className="form-group">
                <label>Name *</label>
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.name && errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="form-group">
                <label>Email *</label>
                <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.email && errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
                <label>Phone *</label>
                <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.phone && errors.phone && <span className="error">{errors.phone}</span>}
            </div>

            <div className="form-group">
                <label>Destination</label>
                <input
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label>Message *</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows="4"
                />
                {touched.message && errors.message && <span className="error">{errors.message}</span>}
            </div>

            <button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={status === 'loading'}
            >
                {status === 'loading' ? 'Sending...' : (
                    <>
                        <Send size={20} />
                        Get a Quote
                    </>
                )}
            </button>

            {status === 'success' && (
                <div className="form-success-message">
                    Message sent successfully!
                </div>
            )}
        </form>
    );
}