import { useState } from 'react';
import { Plane, Car, Hotel, Shield, Anchor, MapPin, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../../components/SEO';
import './ServiceDetail.css';

export default function DMC() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What exactly is a Destination Management Company (DMC)?",
            answer: "A DMC is a professional services company with local knowledge, expertise, and resources, specializing in the design and implementation of events, activities, tours, transportation, and program logistics. TravelSmith acts as your local ground expert in India, ensuring seamless execution of all travel arrangements."
        },
        {
            question: "Why should I use a DMC like TravelSmith instead of booking directly?",
            answer: "TravelSmith provides local 'boots on the ground' expertise that online portals cannot. We have vetted vendors, negotiated rates, and 24/7 support to handle any on-site emergencies. We ensure quality control and provide access to exclusive experiences that aren't available to the general public."
        },
        {
            question: "Which regions in India does TravelSmith cover?",
            answer: "While we are headquartered in Goa, TravelSmith provides comprehensive DMC services across all major Indian destinations, including the Golden Triangle (Delhi, Agra, Jaipur), Kerala, Rajasthan, and major port cities for cruise handling."
        },
        {
            question: "How do you ensure quality control for transport and accommodation?",
            answer: "We perform regular inspections of our vehicle fleet and partner properties. All drivers undergo background checks and personality training, and hotels are vetted for safety, cleanliness, and service standards before being recommended to our clients."
        },
        {
            question: "Can TravelSmith provide customized itineraries for niche interests?",
            answer: "Yes, customization is our forte. Whether it's culinary tours, architectural walks, spiritual journeys, or wildlife photography expeditions, our local experts design itineraries that cater to the specific interests and preferences of your travelers."
        },
        {
            question: "What kind of support do you provide to tour operators and travel agents?",
            answer: "We offer white-label services, competitive B2B rates, 24/7 dedicated support for their clients on the ground, and detailed local insights to help agents sell the destination more effectively."
        },
        {
            question: "How does TravelSmith handle emergency situations or last-minute changes?",
            answer: "Our 24/7 operations team is always on standby. We have contingency plans for weather-related disruptions, medical emergencies, and last-minute itinerary adjustments, ensuring minimal impact on the traveler's experience."
        },
        {
            question: "Do you handle logistics for international cruise liners?",
            answer: "Yes, specialized cruise ground handling is one of our core strengths. We manage port clearances, shore excursions, turnarounds, and VIP transfers for international cruise brands visiting Indian ports."
        },
        {
            question: "Can you assist with MICE and large group logistics?",
            answer: "Absolutely. We specialize in Meetings, Incentives, Conferences, and Exhibitions. From venue selection and hotel room blocks to themed gala dinners and multi-vehicle transportation logistics, we manage everything for groups of any size."
        },
        {
            question: "Does TravelSmith provide sustainable and responsible travel options?",
            answer: "Absolutely. We are committed to promoting local communities and minimizing environmental impact. We recommend eco-friendly accommodations, support local artisans, and follow sustainable practices in all our ground operations."
        }
    ];

    return (
        <div className="service-detail-page">
            <SEO
                title="DMC Services Goa"
                description="TravelSmith is a premier Destination Management Company (DMC) providing expert ground handling, airport logistics, and specialized cruise support across Goa and India."
                keywords="Goa DMC, Destination Management India, Ground Handling Goa, Travel Logistics India"
            />
            <section className="service-hero dmc-hero" style={{ background: 'url("/images/hero_dmc_operations_1768320541503.png") no-repeat center/cover' }}>
                <div className="dest-hero-overlay" />
                <div className="service-hero-content">
                    <h1>DMC Services</h1>
                    <p>India's Leading Destination Management Company with Premium Local Expertise</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-text">
                            <h2>Expert Ground Handling</h2>
                            <p className="justify-text">
                                As a premier DMC, TravelSmith provides comprehensive ground handling services
                                across India. Our deep local knowledge and strong vendor relationships
                                ensure that every aspect of your destination experience is managed with
                                precision and hospitality.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> 24/7 On-ground Support</li>
                                <li><CheckCircle size={18} /> Multilingual Guide Services</li>
                                <li><CheckCircle size={18} /> Specialized Cruise Ground Handling</li>
                                <li><CheckCircle size={18} /> VIP Meet & Greet Services</li>
                            </ul>
                        </div>
                        <div className="detail-image-container">
                            <img
                                src="/images/dmc_process_workflow_1768319189365.png"
                                alt="DMC Operations"
                                className="detail-image-fixed"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Core Capabilities</h2>
                    <div className="grid grid-3">
                        <div className="service-feature-card">
                            <div className="service-icon-box">
                                <Anchor size={32} />
                            </div>
                            <h3>Cruise Operations</h3>
                            <p>Premium ground handling for international cruise liners at all major Indian ports.</p>
                        </div>
                        <div className="service-feature-card">
                            <div className="service-icon-box">
                                <MapPin size={32} />
                            </div>
                            <h3>Local Expertise</h3>
                            <p>Unmatched local insights into Goa, Rajasthan, Kerala, and major Indian cities.</p>
                        </div>
                        <div className="service-feature-card">
                            <div className="service-icon-box">
                                <Plane size={32} />
                            </div>
                            <h3>Airport Logistics</h3>
                            <p>Seamless transfers and dedicated logistics management for large groups.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-light faq-section">
                <div className="container">
                    <h2 className="text-center mb-5">Frequently Asked Questions</h2>
                    <div className="faq-container">
                        {faqData.map((item, index) => (
                            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                                <div className="faq-question" onClick={() => toggleAccordion(index)}>
                                    <h3>{item.question}</h3>
                                    {activeIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                </div>
                                <div className="faq-answer">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
