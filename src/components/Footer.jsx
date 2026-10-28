import { useEffect, useRef, useState } from 'react';
import { GITHUB_URL, LINKEDIN_URL } from '../constants';
import './Footer.css';

/* ── Pixel Pet Character ── */
const PixelPet = () => {
    const petRef = useRef(null);
    const posRef = useRef(10); // % position
    const dirRef = useRef(1);  // 1 = right, -1 = left
    const frameRef = useRef(0);
    const [frame, setFrame] = useState(0);
    const [pos, setPos] = useState(10);
    const [dir, setDir] = useState(1);

    useEffect(() => {
        let animId;
        let lastTime = 0;
        const SPEED = 0.018;   // % per ms
        const FRAME_INTERVAL = 200; // ms per walk frame
        let lastFrameTime = 0;

        const tick = (time) => {
            const dt = time - lastTime;
            lastTime = time;

            // Move
            posRef.current += dirRef.current * SPEED * dt;
            if (posRef.current >= 88) { posRef.current = 88; dirRef.current = -1; }
            if (posRef.current <= 2)  { posRef.current = 2;  dirRef.current = 1; }

            setPos(posRef.current);
            setDir(dirRef.current);

            // Animate walk frames
            if (time - lastFrameTime > FRAME_INTERVAL) {
                frameRef.current = (frameRef.current + 1) % 2;
                setFrame(frameRef.current);
                lastFrameTime = time;
            }

            animId = requestAnimationFrame(tick);
        };

        animId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(animId);
    }, []);

    return (
        <div
            ref={petRef}
            className={`pixel-pet ${dir === -1 ? 'flip' : ''} frame-${frame}`}
            style={{ left: `${pos}%` }}
            title="AI Product Builder — Turning ideas into intelligent products!"
        >
            <div className="pet-sprite" />
        </div>
    );
};

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            {/* Pet runway */}
            <div className="pet-runway">
                <PixelPet />
            </div>

            <div className="container">
                <div className="footer-content">
                    {/* Brand */}
                    <div className="footer-brand">
                        <h2 className="footer-logo gradient-text">Hemanth Swamy</h2>
                        <p>Turning ideas into intelligent products.</p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
                            <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
                            <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a></li>
                            <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
                            <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="footer-social">
                        <h3>Connect</h3>
                        <div className="social-links">
                            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                                <i className='bx bxl-github'></i>
                            </a>
                            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                                <i className='bx bxl-linkedin-square'></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p>© {currentYear} Hemanth Swamy — Turning ideas into intelligent products.</p>
                    <p>Built with React &amp; Vite</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
