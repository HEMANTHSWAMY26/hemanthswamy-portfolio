import { useState } from 'react';
import { LINKEDIN_URL, CONTACT_EMAIL } from '../constants';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({ loading: false, message: '' });
    const isSuccess = status.message.includes('Sent') || status.message.includes('Opening');
    const isError = status.message.includes('Oops!') || status.message.includes('Please');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, message: '' });

        const scriptURL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
        const hasValidBackend = scriptURL && !scriptURL.includes('YOUR_GOOGLE_SCRIPT_ID') && scriptURL.startsWith('http');

        if (hasValidBackend) {
            try {
                const response = await fetch(scriptURL, {
                    method: 'POST',
                    body: new FormData(e.target)
                });

                if (response.ok) {
                    setStatus({
                        loading: false,
                        message: 'Message delivered successfully! Thank you for reaching out. 🎉'
                    });
                    setFormData({ name: '', email: '', message: '' });
                } else {
                    throw new Error('Backend returned non-OK response');
                }
            } catch (error) {
                console.warn('Form backend unreachable, falling back to mail client:', error.message);
                launchMailClient();
            }
        } else {
            // Static deployment fallback: launch verified email directly without pretending a backend received it
            launchMailClient();
        }
    };

    const launchMailClient = () => {
        const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
        const body = encodeURIComponent(`${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}`);
        const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

        window.location.href = mailtoUrl;

        setStatus({
            loading: false,
            message: `Opening your email client to message Hemanth Swamy (${CONTACT_EMAIL}).`
        });

        setTimeout(() => {
            setStatus({ loading: false, message: '' });
        }, 6000);
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact-subtitle">
                    Interested in building practical AI solutions, intelligent automations, or collaborating on a project? Let's connect.
                </p>

                <form className="contact-form glass-card" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows="6"
                            required
                            className="form-input"
                        ></textarea>
                    </div>

                    <div className="submit-btn-wrapper">
                        <button
                            type="submit"
                            className={`contact-submit-btn ${status.loading ? 'is-sending' : ''} ${isSuccess ? 'is-sent' : ''}`}
                            disabled={status.loading}
                        >
                            <span className="contact-submit-label">
                                {status.loading ? 'Preparing...' : isSuccess ? 'Email Ready' : isError ? 'Try Again' : 'Send Message'}
                            </span>
                            <span className="contact-submit-icon" aria-hidden="true">
                                {status.loading ? <span className="spinner" /> : isSuccess ? <span className="checkmark">✓</span> : isError ? <span className="retry-icon">↺</span> : <span className="arrow-icon">→</span>}
                            </span>
                        </button>
                    </div>

                    {status.message && (
                        <div className="form-message success">
                            {status.message}
                        </div>
                    )}

                    <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.95rem', color: '#64748b' }}>
                        Direct Contact: <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#ff5569', fontWeight: 600, textDecoration: 'none' }}>{CONTACT_EMAIL}</a>
                        {' '}&bull;{' '}
                        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', fontWeight: 600, textDecoration: 'none' }}>LinkedIn Profile</a>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
