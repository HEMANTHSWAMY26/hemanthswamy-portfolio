import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Experience.css';

const experiences = [
    {
        id: 'infosys-internship',
        step: '01',
        role: 'AI / RAG Intern',
        organization: 'Infosys Springboard',
        period: 'Feb 2025 – Mar 2025',
        dates: 'February 5, 2025 – March 25, 2025',
        mode: 'Remote',
        badge: 'Certified Internship',
        badgeColor: '#f59e0b',
        icon: 'bx bx-brain',
        officialTitle: 'Internship 5.0 (B4) RAG and AI Agents for Healthcare',
        summary: 'Participated in the selective Infosys Springboard Internship 5.0 program, diving deep into Retrieval-Augmented Generation (RAG) and autonomous AI agent architectures.',
        highlights: [
            'Engineered retrieval pipelines connecting Large Language Models to contextual domain data using RAG methodologies.',
            'Experimented with PandasAI Agent to enable natural language querying and analytical synthesis over complex tabular datasets.',
            'Implemented prototype workflows utilizing Python, Groq API, and Llama model families for high-throughput inference.',
            'Successfully completed and verified the capstone mandatory assignment on AI agents for healthcare use cases.'
        ],
        tags: ['Retrieval-Augmented Generation (RAG)', 'AI Agents', 'PandasAI Agent', 'Groq API', 'Llama Models', 'Python', 'Healthcare Workflows'],
        actions: [
            {
                label: 'View Certificate',
                icon: 'bx bx-file',
                href: '/infosys_internship_certificate.pdf',
                primary: true,
                external: true
            },
            {
                label: 'Verify on Wingspan',
                icon: 'bx bx-check-shield',
                href: 'https://verify.onwingspan.com',
                primary: false,
                external: true
            }
        ]
    },
    {
        id: 'onecompiler-community',
        step: '02',
        role: 'Vibe Coding Community Builder',
        organization: 'OneCompiler',
        period: '2025',
        dates: '2025',
        mode: 'Remote',
        badge: 'Community & Ecosystem',
        badgeColor: '#06b6d4',
        icon: 'bx bx-group',
        summary: 'Selected as a community advocate for OneCompiler to champion next-generation app building and introduce developers to rapid vibe-coding paradigms.',
        highlights: [
            'Promoted OneCompiler\'s cloud-native sandbox and vibe-coding tools to students and aspiring software builders.',
            'Demonstrated practical app-building workflows, helping peers understand how to rapidly turn conceptual ideas into working software.',
            'Guided community members on platform features, assisted with environment setups, and encouraged hands-on experimentation.',
            'Fostered active developer participation, shared technical insights, and aggregated feedback for platform tooling.'
        ],
        tags: ['Community Building', 'Vibe Coding', 'Developer Enablement', 'Rapid Prototyping', 'Technical Mentorship'],
        actions: [
            {
                label: 'Visit OneCompiler',
                icon: 'bx bx-globe',
                href: 'https://onecompiler.com/',
                primary: false,
                external: true
            }
        ]
    },
    {
        id: 'freelance-ai-automation',
        step: '03',
        role: 'Independent AI Automation & Solutions Builder',
        organization: 'Freelance & Independent Projects',
        period: '2025 – Present',
        dates: '2025 – Present',
        mode: 'Remote / Independent',
        badge: 'Current Direction',
        badgeColor: '#10b981',
        isCurrent: true,
        icon: 'bx bx-rocket',
        summary: 'Building practical, production-ready AI automations and intelligent workflows that eliminate operational bottlenecks for businesses and modern creators.',
        highlights: [
            'Engineering automated lead generation and enrichment pipelines linking web scrapers with Google Sheets, Streamlit, and CRM databases.',
            'Designing deterministic email workflows, automated inbox triage, and context-aware follow-up systems that run autonomously.',
            'Developing Model Context Protocol (MCP) tool connectors and custom REST APIs for secure, authenticated AI agent queries.',
            'Combining modern LLM platforms (Google Gemini, Groq) with robust backend logic to build practical decision-support systems.'
        ],
        tags: ['AI Workflow Automation', 'Lead Generation', 'Email Automation', 'AI Agents & MCP', 'Python', 'FastAPI', 'Streamlit', 'API Integration'],
        actions: [
            {
                label: 'View Automation Projects',
                icon: 'bx bx-rocket',
                href: '#projects',
                primary: true,
                external: false
            },
            {
                label: 'GitHub Workflows',
                icon: 'bx bxl-github',
                href: 'https://github.com/HEMANTHSWAMY26',
                primary: false,
                external: true
            }
        ]
    }
];

const Experience = () => {
    const [sectionRef, isSectionVisible] = useScrollReveal({ threshold: 0.02, rootMargin: '50px' });

    return (
        <section
            id="experience"
            className={`section experience-section ${isSectionVisible ? 'active reveal-active' : ''}`}
            ref={sectionRef}
            aria-label="Experience & Professional Journey"
        >
            <div className="container experience-container">
                {/* Section Header */}
                <div className="experience-header">
                    <span className="experience-badge">
                        <i className="bx bx-briefcase-alt-2"></i> Professional Pathway
                    </span>
                    <h2 className="experience-main-title">
                        Experience &amp; <span className="gradient-text">Professional Journey</span>
                    </h2>
                    <p className="experience-main-subtitle">
                        From learning AI systems to building practical automation solutions.
                    </p>

                    {/* Progression flow bar */}
                    <div className="experience-progression-bar" aria-hidden="true">
                        <div className="prog-step">
                            <span className="prog-dot"></span>
                            <span className="prog-label">AI &amp; RAG Foundations</span>
                        </div>
                        <div className="prog-arrow"><i className="bx bx-right-arrow-alt"></i></div>
                        <div className="prog-step">
                            <span className="prog-dot"></span>
                            <span className="prog-label">Community &amp; Vibe Coding</span>
                        </div>
                        <div className="prog-arrow"><i className="bx bx-right-arrow-alt"></i></div>
                        <div className="prog-step active">
                            <span className="prog-dot pulse"></span>
                            <span className="prog-label">Practical AI Automation (Present)</span>
                        </div>
                    </div>
                </div>

                {/* Timeline */}
                <div className="experience-timeline">
                    <div className="timeline-spine" aria-hidden="true"></div>

                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`timeline-item ${exp.isCurrent ? 'current-item' : ''}`}
                            style={{ '--item-delay': `${index * 0.15}s` }}
                        >
                            {/* Milestone Node */}
                            <div className="timeline-node">
                                <div
                                    className="node-icon-wrapper"
                                    style={{ '--node-color': exp.badgeColor }}
                                >
                                    <i className={exp.icon}></i>
                                </div>
                                <span className="node-step">{exp.step}</span>
                            </div>

                            {/* Experience Card */}
                            <div className="timeline-card-wrapper">
                                <div className="experience-card">
                                    {/* Card Header */}
                                    <div className="exp-card-header">
                                        <div className="exp-role-group">
                                            <div className="exp-badge-row">
                                                <span
                                                    className="exp-status-pill"
                                                    style={{
                                                        backgroundColor: `${exp.badgeColor}15`,
                                                        color: exp.badgeColor,
                                                        borderColor: `${exp.badgeColor}40`
                                                    }}
                                                >
                                                    {exp.isCurrent && <span className="live-pulse"></span>}
                                                    {exp.badge}
                                                </span>
                                                <span className="exp-mode-pill">
                                                    <i className="bx bx-laptop"></i> {exp.mode}
                                                </span>
                                            </div>
                                            <h3 className="exp-role-title">{exp.role}</h3>
                                            <h4 className="exp-org-name">
                                                <i className="bx bx-buildings"></i> {exp.organization}
                                            </h4>
                                        </div>

                                        <div className="exp-period-badge">
                                            <i className="bx bx-calendar"></i>
                                            <span>{exp.period}</span>
                                        </div>
                                    </div>

                                    {/* Official Certificate / Subtitle Note if present */}
                                    {exp.officialTitle && (
                                        <div className="exp-official-note">
                                            <i className="bx bx-certification"></i>
                                            <span><strong>Program:</strong> {exp.officialTitle}</span>
                                        </div>
                                    )}

                                    {/* Summary */}
                                    <p className="exp-summary">{exp.summary}</p>

                                    {/* Highlights Checklist */}
                                    <div className="exp-highlights-block">
                                        <h5 className="exp-highlights-title">Key Contributions &amp; Focus</h5>
                                        <ul className="exp-highlights-list">
                                            {exp.highlights.map((point, i) => (
                                                <li key={i}>
                                                    <i className="bx bx-check-circle"></i>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Technologies & Skills */}
                                    <div className="exp-tags-wrapper">
                                        {exp.tags.map((tag) => (
                                            <span key={tag} className="exp-tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="exp-actions">
                                        {exp.actions.map((act) => (
                                            <a
                                                key={act.label}
                                                href={act.href}
                                                target={act.external ? '_blank' : undefined}
                                                rel={act.external ? 'noopener noreferrer' : undefined}
                                                className={`btn ${act.primary ? 'btn-primary' : 'btn-secondary'} exp-action-btn`}
                                            >
                                                <i className={act.icon}></i>
                                                <span>{act.label}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
