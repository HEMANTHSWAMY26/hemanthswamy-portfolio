import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Skills.css';

const Skills = () => {
    const [sectionRef, isSectionVisible] = useScrollReveal({ threshold: 0.1 });
    const [selectedSkill, setSelectedSkill] = useState(null);

    const marqueeRows = [
        {
            direction: 'forward',
            skills: [
                {
                    name: 'Generative AI',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                    category: 'AI & Data',
                    level: 'Practical',
                    experience: 'Applied Project Use',
                    description: 'Building practical solutions with Gemini, Groq, and OpenAI APIs, including multimodal understanding and RAG workflows.'
                },
                {
                    name: 'Python',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                    category: 'Languages',
                    level: 'Core Language',
                    experience: 'Active Project Stack',
                    description: 'Primary programming language for AI applications, FastAPI backends, data processing pipelines, and ML experiments.'
                },
                {
                    name: 'Prompt Engineering',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                    category: 'AI & Data',
                    level: 'Applied Skill',
                    experience: 'Structured System Prompts',
                    description: 'Designing deterministic, structured, and context-aware prompts for automated policy engines, extraction, and agents.'
                },
                {
                    name: 'FastAPI',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
                    category: 'Backend',
                    level: 'Core Framework',
                    experience: 'REST & ASGI Services',
                    description: 'Building high-performance async backends with Pydantic validation, OpenAPI specs, and threaded concurrency locks.'
                },
                {
                    name: 'LLM Applications',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                    category: 'AI & Data',
                    level: 'Focus Area',
                    experience: 'Working Prototypes',
                    description: 'Integrating LLMs into end-to-end user workflows, document analysis tools, and decision-support platforms.'
                },
                {
                    name: 'JavaScript',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                    category: 'Frontend & Web',
                    level: 'Web Standard',
                    experience: 'Practical Implementation',
                    description: 'ES6+ development for responsive web interfaces, DOM interactions, and API consumption.'
                },
            ]
        },
        {
            direction: 'reverse',
            skills: [
                {
                    name: 'React',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                    category: 'Frontend',
                    level: 'Component Stack',
                    experience: 'Modern SPAs & UIs',
                    description: 'Building interactive component-based frontends, state management with hooks, and responsive dashboards.'
                },
                {
                    name: 'Machine Learning',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                    category: 'AI & Data',
                    level: 'Applied ML',
                    experience: 'Model Training & Evaluation',
                    description: 'Supervised classification, feature engineering, and evaluation metrics using Scikit-learn.'
                },
                {
                    name: 'Scikit-learn',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                    category: 'AI & Data',
                    level: 'ML Library',
                    experience: 'Classification & Tuning',
                    description: 'Implemented algorithms including KNeighborsClassifier for healthcare risk prediction models.'
                },
                {
                    name: 'Java',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
                    category: 'Languages',
                    level: 'Academic & Internship',
                    experience: 'OOP & Core Systems',
                    description: 'Object-oriented programming, data structures, and foundational software engineering.'
                },
                {
                    name: 'HTML5',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
                    category: 'Frontend',
                    level: 'Web Standard',
                    experience: 'Semantic Markup',
                    description: 'Semantic page structure, responsive layouts, and web accessibility standards.'
                },
                {
                    name: 'CSS3',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
                    category: 'Frontend',
                    level: 'Web Styling',
                    experience: 'Flexbox, Grid & Animation',
                    description: 'Responsive styling, CSS grid, flexbox layouts, media queries, and transition animations.'
                },
            ]
        },
        {
            direction: 'forward',
            skills: [
                {
                    name: 'Pandas',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
                    category: 'Data Analysis',
                    level: 'Data Processing',
                    experience: 'ETL & Normalization',
                    description: 'Data transformation, cleaning, deduplication, and feature preparation for machine learning and reporting.'
                },
                {
                    name: 'NumPy',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
                    category: 'Data Analysis',
                    level: 'Scientific Computing',
                    experience: 'Array Operations',
                    description: 'Numerical analysis, vectorized computations, and matrix operations in data pipelines.'
                },
                {
                    name: 'SQL & MySQL',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
                    category: 'Databases',
                    level: 'Relational DB',
                    experience: 'Queries & Schemas',
                    description: 'Writing relational queries, joins, filtering, and structuring relational database models.'
                },
                {
                    name: 'Supabase',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
                    category: 'Backend / DB',
                    level: 'Cloud Backend',
                    experience: 'Auth & Realtime Sync',
                    description: 'PostgreSQL-backed serverless platform used for real-time collaboration and session management.'
                },
                {
                    name: 'Bootstrap',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
                    category: 'Frontend',
                    level: 'UI Toolkit',
                    experience: 'Grid & Prototyping',
                    description: 'Rapid UI prototyping, grid layout structuring, and responsive interface components.'
                },
                {
                    name: 'NLP',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                    category: 'AI & Data',
                    level: 'NLP Foundations',
                    experience: 'Text Processing',
                    description: 'Text parsing, tokenization, entity extraction, and sentiment analysis workflows.'
                },
            ]
        },
        {
            direction: 'reverse',
            skills: [
                {
                    name: 'AI Agents & MCP',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                    category: 'AI Architecture',
                    level: 'Emerging Tech',
                    experience: 'Protocol Implementation',
                    description: 'Building Model Context Protocol (MCP) servers with controlled read-only tools and PII boundaries.'
                },
                {
                    name: 'Workflow Automation',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                    category: 'Automation',
                    level: 'System Design',
                    experience: 'Pipelines & Sync',
                    description: 'Designing end-to-end scraper pipelines, automated data deduplication, and Google Sheets integrations.'
                },
                {
                    name: 'Git & GitHub',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
                    category: 'Tools',
                    level: 'Version Control',
                    experience: 'Branching & Collaboration',
                    description: 'Source code management, branch workflows, pull requests, and multi-repo project maintenance.'
                },
                {
                    name: 'VS Code',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
                    category: 'Tools',
                    level: 'Primary IDE',
                    experience: 'Daily Development',
                    description: 'Configuring productive development environments with debuggers, linters, and extensions.'
                },
                {
                    name: 'Jupyter & Colab',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
                    category: 'Tools',
                    level: 'Notebooks',
                    experience: 'EDA & Model Prototyping',
                    description: 'Exploratory data analysis, iterative model training, and quick visualization in cloud environments.'
                },
                {
                    name: 'Excel & Microsoft 365',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                    category: 'Productivity',
                    level: 'Data & Reporting',
                    experience: 'Spreadsheet Analysis',
                    description: 'Structured spreadsheet management, formula calculation, and tabular data workflows.'
                },
            ]
        }
    ];

    const MarqueeRow = ({ skills, direction }) => {
        const doubledSkills = [...skills, ...skills];

        return (
            <div className={`marquee-row ${direction === 'reverse' ? 'reverse' : ''}`}>
                <div className="marquee-track">
                    {doubledSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-bubble"
                            onClick={() => setSelectedSkill(skill)}
                            role="button"
                            tabIndex={0}
                            aria-label={`View details for ${skill.name}`}
                        >
                            <img src={skill.icon} alt={skill.name} loading="lazy" />
                            <span className="skill-name">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <section
            id="skills"
            className={`section skills-section reveal ${isSectionVisible ? 'active' : ''}`}
            ref={sectionRef}
        >
            <div className="container">
                <h2 className="section-title">Skills &amp; Expertise</h2>

                <div className="skills-layout-wrapper">
                    <div className="skills-visual">
                        <div className="visual-card glass-card">
                            <img
                                src="/skills-visual.svg"
                                alt="AI and Engineering Technical Visual"
                                className="pinterest-gif"
                                loading="lazy"
                                width="400"
                                height="500"
                            />
                            <div className="visual-overlay"></div>
                        </div>
                    </div>

                    <div className="skills-marquee-container">
                        {marqueeRows.map((row, index) => (
                            <MarqueeRow
                                key={index}
                                skills={row.skills}
                                direction={row.direction}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Reactive Detail Overlay */}
            <div
                className={`reactive-detail-overlay ${selectedSkill ? 'active' : ''}`}
                onClick={() => setSelectedSkill(null)}
            >
                {selectedSkill && (
                    <div className="detail-content" onClick={(e) => e.stopPropagation()}>
                        <i
                            className="bx bx-x close-detail"
                            onClick={() => setSelectedSkill(null)}
                            role="button"
                            tabIndex={0}
                            aria-label="Close skill details"
                        ></i>

                        <div className="detail-header">
                            <img src={selectedSkill.icon} alt={selectedSkill.name} className="detail-icon" />
                            <div className="detail-info">
                                <span className="detail-category">{selectedSkill.category}</span>
                                <h2>{selectedSkill.name}</h2>
                            </div>
                        </div>

                        <div className="detail-body">
                            <p>{selectedSkill.description}</p>

                            <div className="skill-stats">
                                <div className="stat-item">
                                    <span className="stat-label">Proficiency Focus</span>
                                    <span className="stat-value">{selectedSkill.level}</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-label">Application</span>
                                    <span className="stat-value">{selectedSkill.experience}</span>
                                </div>
                            </div>

                            <div className="detail-actions">
                                <a 
                                    href="#projects" 
                                    className="see-projects-btn" 
                                    onClick={() => setSelectedSkill(null)}
                                >
                                    <span>Explore Related Projects</span>
                                    <i className='bx bx-right-arrow-alt'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Skills;
