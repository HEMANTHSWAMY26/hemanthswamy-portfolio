import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { certificationsData, CERTIFICATION_CATEGORIES } from '../data/certificationsData';
import './Certifications.css';

const Certifications = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [sectionRef, isSectionVisible] = useScrollReveal({ threshold: 0.02, rootMargin: '50px' });

    const filteredCertifications = activeFilter === 'all'
        ? certificationsData
        : certificationsData.filter(cert => cert.category === activeFilter);

    return (
        <section
            id="certifications"
            className={`section certifications-section ${isSectionVisible ? 'active reveal-active' : ''}`}
            ref={sectionRef}
            aria-label="Certifications & Continuous Learning"
        >
            <div className="container certifications-container">
                {/* Header */}
                <div className="certifications-header">
                    <span className="certifications-badge">
                        <i className="bx bx-award"></i> Verified Credentials
                    </span>
                    <h2 className="certifications-main-title">
                        Certifications &amp; <span className="gradient-text">Continuous Learning</span>
                    </h2>
                    <p className="certifications-main-subtitle">
                        Building knowledge, validating skills, and staying current with evolving technology.
                    </p>

                    {/* Stats Ribbon */}
                    <div className="cert-stats-ribbon" aria-hidden="true">
                        <div className="cert-stat-item">
                            <i className="bx bx-check-shield"></i>
                            <span><strong>7</strong> Verified Credentials</span>
                        </div>
                        <div className="cert-stat-divider"></div>
                        <div className="cert-stat-item">
                            <i className="bx bx-file"></i>
                            <span><strong>5</strong> Verified Certificates</span>
                        </div>
                        <div className="cert-stat-divider"></div>
                        <div className="cert-stat-item">
                            <i className="bx bx-buildings"></i>
                            <span><strong>Top Issuers:</strong> Microsoft, IBM, Infosys, McKinsey</span>
                        </div>
                    </div>

                    {/* Category Filter Tabs */}
                    <div className="cert-filter-tabs" role="tablist" aria-label="Certification categories">
                        {CERTIFICATION_CATEGORIES.map(category => (
                            <button
                                key={category.id}
                                role="tab"
                                aria-selected={activeFilter === category.id}
                                className={`cert-filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                                onClick={() => setActiveFilter(category.id)}
                            >
                                {category.label}
                                {category.id !== 'all' && (
                                    <span className="cert-tab-count">
                                        {certificationsData.filter(c => c.category === category.id).length}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="certifications-grid">
                    {filteredCertifications.map((cert, index) => (
                        <div
                            key={cert.id}
                            className="cert-card-wrapper"
                            style={{ '--cert-delay': `${index * 0.08}s` }}
                        >
                            <div className="certification-card">
                                {/* Top Header */}
                                <div className="cert-card-top">
                                    <div
                                        className="cert-icon-box"
                                        style={{ '--icon-color': cert.typeColor }}
                                    >
                                        <i className={cert.icon}></i>
                                    </div>
                                    <div className="cert-meta-tags">
                                        <span
                                            className="cert-type-pill"
                                            style={{
                                                backgroundColor: `${cert.typeColor}15`,
                                                color: cert.typeColor,
                                                borderColor: `${cert.typeColor}30`
                                            }}
                                        >
                                            {cert.type}
                                        </span>
                                        <span className="cert-date-pill">
                                            <i className="bx bx-calendar"></i> {cert.issueDate}
                                        </span>
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="cert-card-body">
                                    <h3 className="cert-title">{cert.title}</h3>
                                    <h4 className="cert-issuer">
                                        <i className="bx bx-buildings"></i> {cert.issuer}
                                    </h4>

                                    {cert.credentialId && (
                                        <div className="cert-id-badge">
                                            <span className="cert-id-label">Credential ID:</span>
                                            <span className="cert-id-val">{cert.credentialId}</span>
                                        </div>
                                    )}

                                    <p className="cert-description">{cert.description}</p>

                                    {/* Skills Pills */}
                                    <div className="cert-skills-wrap">
                                        {cert.skills.map(skill => (
                                            <span key={skill} className="cert-skill-tag">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="cert-card-footer">
                                    {cert.certificateFile && (
                                        <a
                                            href={cert.certificateFile}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary cert-btn"
                                            title="View verified PDF certificate"
                                        >
                                            <i className="bx bx-file"></i>
                                            <span>View Certificate</span>
                                        </a>
                                    )}

                                    {cert.credentialUrl && (
                                        <a
                                            href={cert.credentialUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`btn ${cert.certificateFile ? 'btn-secondary' : 'btn-primary'} cert-btn`}
                                            title="Verify credential on issuer portal"
                                        >
                                            <i className="bx bx-link-external"></i>
                                            <span>Verify Credential</span>
                                        </a>
                                    )}

                                    {!cert.certificateFile && !cert.credentialUrl && (
                                        <div className="cert-verified-badge" title="Verified learning curriculum">
                                            <i className="bx bx-check-circle"></i>
                                            <span>Verified Coursework</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;

