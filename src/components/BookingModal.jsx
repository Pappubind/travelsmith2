import { X } from 'lucide-react';
import { useEffect } from 'react';
import ContactForm from './ContactForm';
import './BookingModal.css';

export default function BookingModal({ isOpen, onClose, destination }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container glass-card" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Close modal">
                    <X size={24} />
                </button>
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Book Your Experience</h2>
                        <p>Share your details, and we'll craft the perfect journey for you.</p>
                        {destination && (
                            <div className="selected-destination">
                                Selected: <strong>{destination}</strong>
                            </div>
                        )}
                    </div>
                    <ContactForm prefillDestination={destination} onSuccess={onClose} />
                </div>
            </div>
        </div>
    );
}
