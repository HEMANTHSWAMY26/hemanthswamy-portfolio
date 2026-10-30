/**
 * Certifications and Professional Learning Data
 * Verified from LinkedIn, official certificates, and academic resumes.
 */

export const CERTIFICATION_CATEGORIES = [
    { id: 'all', label: 'All Credentials' },
    { id: 'ai-ml', label: 'AI & Machine Learning' },
    { id: 'programming', label: 'Programming & Data' },
    { id: 'professional-dev', label: 'Professional Development' }
];

export const certificationsData = [
    {
        id: 'infosys-rag-ai-agents',
        title: 'Internship 5.0 (B4) RAG and AI Agents for Healthcare',
        issuer: 'Infosys Springboard',
        category: 'ai-ml',
        type: 'Professional Certification',
        typeColor: '#f59e0b',
        icon: 'bx bx-code-block',
        issueDate: 'April 15, 2025',
        credentialId: 'Internship 5.0 (B4)',
        credentialUrl: 'https://verify.onwingspan.com',
        certificateFile: '/infosys_internship_certificate.pdf',
        image: '/cert_preview_infosys.png',
        skills: ['Retrieval-Augmented Generation (RAG)', 'AI Agents', 'PandasAI Agent', 'Groq API', 'Llama Models', 'Python'],
        description: 'Rigorous project and evaluation credential validating hands-on implementation of RAG pipelines, autonomous agent architectures, and natural language tabular querying.'
    },
    {
        id: 'mckinsey-forward-program',
        title: 'McKinsey.org Forward Online Learning Program',
        issuer: 'McKinsey & Company',
        category: 'professional-dev',
        type: 'Professional Development',
        typeColor: '#10b981',
        icon: 'bx bx-line-chart',
        issueDate: 'July 7, 2025',
        credentialId: null,
        credentialUrl: null,
        certificateFile: '/mckinsey_forward_certificate.pdf',
        image: '/cert_preview_mckinsey.png',
        skills: ['Structured Problem Solving', 'Digital Toolkit', 'Adaptability & Resilience', 'Influential Communication'],
        description: 'Selected participant in McKinsey & Company\'s flagship global Forward initiative, mastering the McKinsey problem-solving framework, agile collaboration, and future-of-work digital capabilities.'
    },
    {
        id: 'ibm-python-101-data-science',
        title: 'Python 101 for Data Science',
        issuer: 'IBM / Cognitive Class',
        category: 'programming',
        type: 'Course Completion',
        typeColor: '#06b6d4',
        icon: 'bx bx-terminal',
        issueDate: 'February 2024',
        credentialId: 'PY0101EN',
        credentialUrl: 'https://cognitiveclass.ai/courses/python-for-data-science',
        certificateFile: '/ibm_python_101_certificate.pdf',
        image: '/cert_preview_ibm.png',
        skills: ['Python', 'Data Science', 'Pandas', 'NumPy', 'Data Structures', 'Data Analysis'],
        description: 'Foundational programming credential verifying proficiency in Python syntax, mathematical data operations, tabular data manipulation with Pandas, and data science workflows.'
    },
    {
        id: 'udemy-python-complete-beginners',
        title: 'Python for Complete Beginners',
        issuer: 'Udemy',
        category: 'programming',
        type: 'Course Completion',
        typeColor: '#8b5cf6',
        icon: 'bx bxl-python',
        issueDate: 'July 6, 2025',
        credentialId: 'UC-4ea6dfbe-3a6d-45f6-8054-6bc765703a06',
        credentialUrl: 'https://ude.my/UC-4ea6dfbe-3a6d-45f6-8054-6bc765703a06',
        certificateFile: '/udemy_python_complete_beginners.pdf',
        image: '/cert_preview_udemy_1.png',
        skills: ['Python Basics', 'Control Flow', 'Object-Oriented Programming', 'Algorithm Design'],
        description: 'Comprehensive 3.5-hour structured training course covering Python programming primitives, procedural logic, and modular code development.'
    },
    {
        id: 'udemy-python-for-beginners',
        title: 'Python for Beginners',
        issuer: 'Udemy',
        category: 'programming',
        type: 'Course Completion',
        typeColor: '#ec4899',
        icon: 'bx bxl-python',
        issueDate: 'July 9, 2025',
        credentialId: 'UC-cc3db673-b909-49c1-bc2a-5bb95ac0feba',
        credentialUrl: 'https://ude.my/UC-cc3db673-b909-49c1-bc2a-5bb95ac0feba',
        certificateFile: '/udemy_python_for_beginners.pdf',
        image: '/cert_preview_udemy_2.png',
        skills: ['Python Programming', 'Data Types', 'Functions', 'Problem Solving'],
        description: 'Hands-on practical course focusing on Python fundamentals, functional abstractions, and software development essentials.'
    },
    {
        id: 'ms-career-essentials-genai',
        title: 'Career Essentials in Generative AI',
        issuer: 'Microsoft & LinkedIn',
        category: 'ai-ml',
        type: 'Professional Certification',
        typeColor: '#6366f1',
        icon: 'bx bx-brain',
        issueDate: '2024',
        credentialId: null,
        credentialUrl: null,
        certificateFile: null,
        image: '/cert_preview_ms_genai.svg',
        skills: ['Generative AI', 'Large Language Models (LLMs)', 'AI Ethics', 'Prompt Engineering', 'AI Productivity'],
        description: 'Comprehensive foundational credential covering generative artificial intelligence concepts, core LLM mechanics, ethical considerations, and real-world workplace applications.'
    },
    {
        id: 'ms-fundamentals-genai-ml',
        title: 'Fundamentals of Generative AI & Machine Learning',
        issuer: 'Microsoft',
        category: 'ai-ml',
        type: 'Professional Certification',
        typeColor: '#3b82f6',
        icon: 'bx bx-chip',
        issueDate: '2024',
        credentialId: null,
        credentialUrl: null,
        certificateFile: null,
        image: '/cert_preview_ms_ml.svg',
        skills: ['Machine Learning', 'Generative AI', 'Neural Networks', 'Azure AI Concepts', 'Data Modeling'],
        description: 'Technical evaluation of machine learning fundamentals, deep learning architectures, generative model paradigms, and automated data pipelines.'
    }
];

