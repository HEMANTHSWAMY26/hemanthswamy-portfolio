import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Loader from './Loader';
import { certificationsData } from '../data/certificationsData';
import './Certifications.css';

const CARDS_PER_PAGE = 3;

const Certifications = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [isTabSwitching, setIsTabSwitching] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const [isExpanding, setIsExpanding] = useState(false);

    const [sectionRef, isSectionVisible] = useScrollReveal({ threshold: 0.05 });
    const currentYear = new Date().getFullYear();

    const handleTabChange = (tabId) => {
        if (tabId === activeTab) return;
        setIsTabSwitching(true);
        setShowAll(false);
        setTimeout(() => {
            setActiveTab(tabId);
            setIsTabSwitching(false);
        }, 300);
    };

    const handleExpand = () => {
        setIsExpanding(true);
        setTimeout(() => {
            setShowAll(true);
            setIsExpanding(false);
        }, 800);
    };

    const handleCollapse = () => {
        setShowAll(false);
        const el = document.getElementById('certifications');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const filteredCertifications = activeTab === 'all'
        ? certificationsData
        : certificationsData.filter(cert => cert.category === activeTab);

    const visibleCertifications = showAll
        ? filteredCertifications
        : filteredCertifications.slice(0, CARDS_PER_PAGE);

    const hasMore = filteredCertifications.length > CARDS_PER_PAGE;

    return (
        <section
            id="certifications"
            className={`section certifications-section reveal ${isSectionVisible ? 'active' : ''}`}
            ref={sectionRef}
        >
            <div className="container certifications-container">
                {/* === HERO HEADER + TABS (Matches Projects Hero Header) === */}
                <div className="cert-hero-header">
                    <span className="cert-badge">
                        <i className="bx bx-award"></i> Verified Credentials {currentYear}
                    </span>
                    <h2 className="cert-main-title">Certifications &amp; Continuous Learning</h2>
                    <p className="cert-main-subtitle">
                        Building knowledge, validating skills, and staying current with evolving technology through industry-verified programs and rigorous coursework.
                    </p>

                    {/* Filter Tabs */}
                    <div className="cert-tabs">
                        <button
                            className={`cert-tab ${activeTab === 'all' ? 'active' : ''}`}
                            onClick={() => handleTabChange('all')}
                        >
                            <i className="bx bx-award"></i> All Credentials
                        </button>
                        <button
                            className={`cert-tab ${activeTab === 'ai-ml' ? 'active' : ''}`}
                            onClick={() => handleTabChange('ai-ml')}
                        >
                            <i className="bx bx-brain"></i> AI &amp; Agents
                        </button>
                        <button
                            className={`cert-tab ${activeTab === 'programming' ? 'active' : ''}`}
                            onClick={() => handleTabChange('programming')}
                        >
                            <i className="bx bxl-python"></i> Python &amp; Data
                        </button>
                        <button
                            className={`cert-tab ${activeTab === 'professional-dev' ? 'active' : ''}`}
                            onClick={() => handleTabChange('professional-dev')}
                        >
                            <i className="bx bx-briefcase-alt-2"></i> Professional Dev
                        </button>
                    </div>
                </div>

                {/* === TAB CONTENT (Matches Projects Tab Content) === */}
                <div className={`tab-content ${isTabSwitching ? 'switching' : ''}`}>
                    {isTabSwitching ? (
                        <div className="selection-loader-container">
                            <Loader />
                        </div>
                    ) : (
                        <>
                            <div className="cert-grid">
                                {visibleCertifications.map((cert, index) => (
                                    <div
                                        key={cert.id}
                                        className="cert-project-card"
                                        style={{ '--card-index': index % CARDS_PER_PAGE }}
                                    >
                                        {/* Image Preview Banner */}
                                        <div className="cert-card-image">
                                            {cert.image && (
                                                <img
                                                    src={cert.image}
                                                    alt={cert.title}
                                                    loading="lazy"
                                                />
                                            )}
                                            <span
                                                className="cert-type-tag"
                                                style={{
                                                    backgroundColor: `${cert.typeColor}E6`,
                                                    borderColor: cert.typeColor
                                                }}
                                            >
                                                {cert.type}
                                            </span>
                                        </div>

                                        {/* Card Body */}
                                        <div className="cert-card-body">
                                            <div className="cert-card-header">
                                                <div className="cert-title-group">
                                                    <h4 className="cert-card-title">{cert.title}</h4>
                                                    <div className="cert-card-meta">
                                                        <span className="cert-meta-issuer">
                                                            <i className="bx bx-buildings"></i> {cert.issuer}
                                                        </span>
                                                        <span className="cert-meta-dot">•</span>
                                                        <span className="cert-meta-date">
                                                            <i className="bx bx-calendar"></i> {cert.issueDate}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Top Right Action Icons */}
                                                <div className="cert-card-actions">
                                                    {cert.certificateFile && (
                                                        <a
                                                            href={cert.certificateFile}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="cert-action-link primary"
                                                            title="View Verified PDF Certificate"
                                                            aria-label={`View PDF Certificate for ${cert.title}`}
                                                        >
                                                            <i className="bx bx-file"></i>
                                                        </a>
                                                    )}
                                                    {cert.credentialUrl && (
                                                        <a
                                                            href={cert.credentialUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="cert-action-link secondary"
                                                            title="Verify Credential Portal"
                                                            aria-label={`Verify credential for ${cert.title}`}
                                                        >
                                                            <i className="bx bx-link-external"></i>
                                                        </a>
                                                    )}
                                                    {!cert.certificateFile && !cert.credentialUrl && (
                                                        <span
                                                            className="cert-action-badge"
                                                            title="Verified Coursework"
                                                        >
                                                            <i className="bx bx-check-circle"></i>
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {cert.credentialId && (
                                                <div className="cert-card-id">
                                                    <span className="id-label">ID:</span>
                                                    <span className="id-val">{cert.credentialId}</span>
                                                </div>
                                            )}

                                            <p className="cert-card-desc">{cert.description}</p>

                                            {cert.skills && (
                                                <div className="cert-card-tech">
                                                    {cert.skills.map((s, i) => (
                                                        <span key={i} className="tech-tag">{s}</span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Show More / Show Less (Matches Projects Panel Expand) */}
                            {hasMore && (
                                <div className="panel-expand-wrapper">
                                    {!showAll ? (
                                        isExpanding ? (
                                            <Loader />
                                        ) : (
                                            <button
                                                className="panel-expand-btn"
                                                onClick={handleExpand}
                                            >
                                                <span>Show More ({filteredCertifications.length - CARDS_PER_PAGE} More)</span>
                                                <i className="bx bx-chevron-down"></i>
                                            </button>
                                        )
                                    ) : (
                                        <button
                                            className="panel-expand-btn"
                                            onClick={handleCollapse}
                                        >
                                            <span>Show Less</span>
                                            <i className="bx bx-chevron-up"></i>
                                        </button>
                                    )}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
