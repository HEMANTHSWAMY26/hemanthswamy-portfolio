import { useEffect, useRef } from 'react';
import './ToolsSection.css';

const ToolsSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('tools-visible');
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const scrollToProjects = (e) => {
        e.preventDefault();
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="tools-section" ref={sectionRef}>
            <div className="container">
                <div className="tools-inner">
                    {/* Left content */}
                    <div className="tools-content">
                        <div className="tools-badge">
                            <i className="bx bx-rocket" />
                            <span>Live Products &amp; Automations</span>
                        </div>

                        <h2 className="tools-heading">
                            Explore My{' '}
                            <span className="tools-highlight">Tools &amp; Workflows</span>
                        </h2>

                        <p className="tools-description">
                            I build practical AI applications and automated pipelines — designed to solve real-world problems with robust logic and clean interfaces. Explore my active projects and prototypes below.
                        </p>

                        <div className="tools-features">
                            <div className="tools-feature-item">
                                <i className="bx bx-check-circle" />
                                <span>Publicly deployed &amp; verifiable</span>
                            </div>
                            <div className="tools-feature-item">
                                <i className="bx bx-check-circle" />
                                <span>Built with modern AI tools &amp; frameworks</span>
                            </div>
                            <div className="tools-feature-item">
                                <i className="bx bx-check-circle" />
                                <span>Open source on GitHub</span>
                            </div>
                        </div>

                        <a
                            href="#projects"
                            onClick={scrollToProjects}
                            className="tools-cta-btn"
                            id="tools-cta-primary"
                        >
                            <span>Browse Featured Projects</span>
                            <i className="bx bx-arrow-back bx-rotate-180" />
                        </a>
                    </div>

                    {/* Right visual card */}
                    <div className="tools-visual">
                        <a href="#projects" onClick={scrollToProjects} style={{ textDecoration: 'none' }}>
                            <div className="tools-card">
                                <div className="tools-card-header">
                                    <div className="tools-dots">
                                        <span className="dot dot-red" />
                                        <span className="dot dot-yellow" />
                                        <span className="dot dot-green" />
                                    </div>
                                    <span className="tools-card-title">ai-products.js</span>
                                </div>
                                <div className="tools-card-body">
                                    <div className="code-line">
                                        <span className="code-keyword">const</span>{' '}
                                        <span className="code-var">products</span>{' '}
                                        <span className="code-op">=</span>{' '}
                                        <span className="code-bracket">[</span>
                                    </div>
                                    <div className="code-line code-indent">
                                        <span className="code-string">"KisanVue AI"</span>
                                        <span className="code-op">,</span>
                                    </div>
                                    <div className="code-line code-indent">
                                        <span className="code-string">"FlowPilot AI"</span>
                                        <span className="code-op">,</span>
                                    </div>
                                    <div className="code-line code-indent">
                                        <span className="code-string">"Lead Gen Automation"</span>
                                        <span className="code-op">,</span>
                                    </div>
                                    <div className="code-line code-indent code-blink">
                                        <span className="code-string">"StudySprint"</span>
                                    </div>
                                    <div className="code-line">
                                        <span className="code-bracket">]</span>
                                    </div>
                                    <div className="code-line code-spacer" />
                                    <div className="code-line">
                                        <span className="code-keyword">export default</span>{' '}
                                        <span className="code-var">products</span>
                                    </div>
                                </div>
                                <div className="tools-card-glow" />
                            </div>
                        </a>

                        {/* Floating stat chips */}
                        <div className="tools-chip tools-chip-1">
                            <i className="bx bxs-zap" />
                            <span>Live &amp; Deployed</span>
                        </div>
                        <div className="tools-chip tools-chip-2">
                            <i className="bx bxs-star" />
                            <span>Verified Repos</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToolsSection;
