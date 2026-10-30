import { useEffect, useRef } from 'react';
import profileImg from '../assets/hemanth_profile.png';
import { GITHUB_URL } from '../constants';
import './AboutMe.css';

const achievements = [
    {
        icon: 'bx bx-trophy',
        title: 'Hackathon Builder',
        detail: 'Built KisanVue AI for Google Cloud\'s "Build with AI: Code for Communities" Hackathon.',
        color: '#f59e0b',
    },
    {
        icon: 'bx bx-brain',
        title: 'AI Product Building',
        detail: 'Turning ideas into working prototypes with Google Gemini, Groq, and modern AI development tools.',
        color: '#6366f1',
    },
    {
        icon: 'bx bx-git-merge',
        title: 'Workflow Automation',
        detail: 'Engineering deterministic decision pipelines, automated lead enrichment, and MCP tool connectors.',
        color: '#10b981',
    },
    {
        icon: 'bx bx-bar-chart-alt-2',
        title: 'Applied ML & Analytics',
        detail: 'Trained and evaluated classification models using Scikit-learn, Pandas, and Python.',
        color: '#ec4899',
    },
    {
        icon: 'bx bx-rocket',
        title: 'Rapid Prototyping',
        detail: 'Combining modern AI workflows with full-stack engineering to quickly validate real-world solutions.',
        color: '#06b6d4',
    },
    {
        icon: 'bx bx-graduation',
        title: 'Academic Foundation',
        detail: 'B.Tech in CSE (AIML) from Malla Reddy College of Engineering (MRCE), graduating in 2025.',
        color: '#8b5cf6',
    },
];

const AboutMe = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('am-visible');
                });
            },
            { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
        );
        const els = sectionRef.current?.querySelectorAll('.am-reveal');
        els?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="about-me-section" ref={sectionRef} aria-label="About Hemanth Swamy">
            {/* Subtle background accents */}
            <div className="am-bg-blob am-blob-1" />
            <div className="am-bg-blob am-blob-2" />

            <div className="container am-outer">

                {/* ── TOP: two-column intro + photo ── */}
                <div className="am-top-row am-reveal">
                    {/* Left — text */}
                    <div className="am-left">
                        <span className="am-eyebrow">
                            <i className="bx bx-user-circle" /> Who am I
                        </span>
                        <div className="am-heading-wrapper">
                            <h2 className="am-heading">
                                I'm <span className="am-name-highlight">Hemanth Swamy</span>
                            </h2>
                            <span className="am-nickname">~ <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">HEMANTHSWAMY26</a></span>
                        </div>
                        <p className="am-bio">
                            I'm <strong>Amidepuram Hemanth Swamy</strong>, a 2025 Computer Science graduate specializing in <strong>Artificial Intelligence and Machine Learning</strong>. I'm passionate about building practical AI-powered products, intelligent automations, and useful digital experiences.
                        </p>
                        <p className="am-bio">
                            I enjoy turning ideas into working prototypes with modern AI tools, experimenting with AI workflows, and solving real-world problems through technology. My focus areas include <strong>AI-powered applications</strong>, <strong>workflow automation</strong>, <strong>AI agents</strong>, and rapid product development. Based in <strong>India</strong>, looking for opportunities where I can contribute, keep learning, and grow while building impactful technology.
                        </p>
                        <div className="am-quick-tags">
                            <span className="am-tag"><i className="bx bx-map-pin" /> India</span>
                            <span className="am-tag"><i className="bx bx-graduation" /> CSE AIML '25</span>
                            <span className="am-tag am-tag-available">
                                <i className="bx bx-circle" /> Open to Opportunities
                            </span>
                            <span className="am-tag"><i className="bx bx-code-alt" /> AI Product Builder</span>
                        </div>
                    </div>

                    {/* Right — photo */}
                    <div className="am-right">
                        <div className="am-photo-frame">
                            <img src={profileImg} alt="Hemanth Swamy — portrait photograph" className="am-photo" width="300" height="300" loading="lazy" />
                            <div className="am-photo-badge">
                                <i className="bx bx-code-alt" />
                                <span>AI Product Builder</span>
                            </div>
                            <div className="am-photo-deco am-deco-1" />
                            <div className="am-photo-deco am-deco-2" />
                        </div>
                    </div>
                </div>

                {/* ── Achievements Grid ── */}
                <div className="am-achievements-block am-reveal" style={{ '--am-delay': '0.1s' }}>
                    <h3 className="am-sub-heading">
                        <i className="bx bx-medal" /> Highlights &amp; Core Strengths
                    </h3>
                    <div className="am-achievements-grid">
                        {achievements.map((a, i) => (
                            <div
                                key={a.title}
                                className="am-ach-card"
                                style={{ '--ach-color': a.color, '--ach-delay': `${i * 0.07}s` }}
                            >
                                <div className="am-ach-icon">
                                    <i className={a.icon} />
                                </div>
                                <div className="am-ach-text">
                                    <h4>{a.title}</h4>
                                    <p>{a.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutMe;
