import { useState, useEffect } from 'react';
import { useMagnetic } from '../hooks/useMagnetic';
import './Hero.css';
import mainimg from '../assets/main-img.webp';
import { GITHUB_URL, LINKEDIN_URL } from '../constants';

const Hero = () => {
    const gitHubBtnRef = useMagnetic(0.3);
    const contactBtnRef = useMagnetic(0.3);
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    const roles = [
        'AI Product Builder',
        'AI Automation Specialist',
        'Generative AI Practitioner',
        'AI Workflow Developer',
        'Rapid Prototyper'
    ];

    useEffect(() => {
        const role = roles[currentRole];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < role.length) {
                    setDisplayText(role.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(role.slice(0, displayText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentRole((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRole]);

    return (
        <section id="home" className="hero">
            {/* Floating Particles */}
            <div className="hero-particles">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="hero-particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${15 + Math.random() * 10}s`,
                        }}
                    />
                ))}
            </div>

            <div className="container">
                <div className="hero-content">
                    {/* Profile Image */}
                    <div className="hero-image-container fade-in">
                        <div className="hero-image-wrapper">
                            <img
                                src={mainimg}
                                alt="Spider-Man-inspired superhero avatar used as a portfolio profile illustration."
                                className="hero-image"
                                width="300"
                                height="300"
                            />
                            <div className="image-glow"></div>
                        </div>

                        {/* Social Links */}
                        <div className="hero-socials">
                            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub Profile">
                                <i className='bx bxl-github'></i>
                            </a>
                            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn Profile">
                                <i className='bx bxl-linkedin-square'></i>
                            </a>
                        </div>
                    </div>

                    {/* Hero Text */}
                    <div className="hero-text">
                        <h1 className="hero-title slide-in-right">
                            Hi, I'm <span className="gradient-text">Hemanth Swamy</span>
                        </h1>
                        <h2 className="hero-subtitle slide-in-right" style={{ animationDelay: '0.2s' }}>
                            <span className="typed-text">{displayText}</span>
                            <span className="cursor">|</span>
                        </h2>
                        <p className="hero-description slide-in-right" style={{ animationDelay: '0.4s' }}>
                            Turning ideas into intelligent products. CSE AIML '25 graduate building practical AI-powered solutions, intelligent automations, and useful digital experiences.
                        </p>

                        {/* CTA Buttons */}
                        <div className="hero-buttons slide-in-right" style={{ animationDelay: '0.6s' }}>
                            <a
                                ref={gitHubBtnRef}
                                href={GITHUB_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                <i className='bx bxl-github'></i>
                                View GitHub
                            </a>
                            <a
                                ref={contactBtnRef}
                                href="#contact"
                                className="btn btn-secondary"
                            >
                                <i className='bx bx-envelope'></i>
                                Get In Touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <p>Scroll Down</p>
            </div>
        </section>
    );
};

export default Hero;
