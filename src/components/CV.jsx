import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaGlobe, FaMapMarkerAlt, FaGraduationCap, FaYoutube } from 'react-icons/fa';
import './CV.css';

const CV = () => {
    return (
        <div className="cv-container">
            <header className="cv-header">
                <div className="header-content">
                    <h1>Mohammed Diab<span className="dot">.</span></h1>
                    <h2>PhD | Principal Autonomy Engineer</h2>
                    <div className="contact-info-bar">
                        <span className="info-item"><FaMapMarkerAlt /> London Area, United Kingdom</span>
                        <span className="info-item"><a href="mailto:m.diab.phd@gmail.com"><FaEnvelope /> m.diab.phd@gmail.com</a></span>
                        <span className="info-item"><a href="https://www.linkedin.com/in/mohammed-diab-5b8312152" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a></span>
                        <span className="info-item"><a href="https://github.com/mdiab" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a></span>
                        <span className="info-item"><a href="https://mohammeddiab1.github.io" target="_blank" rel="noreferrer"><FaGlobe /> Website</a></span>
                        <span className="info-item"><a href="https://scholar.google.com/citations?user=73pGUVsAAAAJ&hl=en" target="_blank" rel="noreferrer"><FaGraduationCap /> Google Scholar</a></span>
                        <span className="info-item"><a href="https://www.youtube.com/@mohammeddiab4017" target="_blank" rel="noreferrer"><FaYoutube /> YouTube</a></span>
                    </div>
                </div>
            </header>

            <main className="cv-main">
                <section className="cv-section summary">
                    <h3>Executive Summary</h3>
                    <p>
                        Principle Autonomy Engineer with extensive experience in both industry and academia.
                        Expertise in <strong>Foundation models, World Models, Embodied AI, Neuro-symbolic reasoning, LLM, VLA, VLM, and HRI</strong>.
                        Proven track record of leading research and engineering teams at <strong>All3, Humanoid</strong>, and stealth startups.
                        <strong>PhD in Automatic Control, Robotics, and Computer Vision</strong> from UPC, Barcelona.
                        My work bridges the gap between classical robotics and modern AI, focusing on creating safe, explainable, and trustworthy autonomous systems.
                        Active contributor to the <strong>IEEE Standards Association</strong> for professional robotics ontologies.
                    </p>
                </section>

                <section className="cv-section experience">
                    <h3>Professional Experience</h3>

                    <div className="cv-item">
                        <div className="cv-item-header">
                            <h4>Principal Autonomy Engineer</h4>
                            <span className="cv-date">Nov 2025 - Present</span>
                        </div>
                        <h5 className="cv-org">All3 | London Area</h5>
                        <ul>
                            <li>Leading autonomy engineering initiatives and advanced robotics development.</li>
                            <li>Architecting autonomy for systems like <strong>All3 Mantis</strong>.</li>
                            <li>Focused on Foundation models, World models, and infrastructure for autonomous agents.</li>
                        </ul>
                    </div>

                    <div className="cv-item">
                        <div className="cv-item-header">
                            <h4>Senior AI Engineer</h4>
                            <span className="cv-date">Jan 2025 - Oct 2025</span>
                        </div>
                        <h5 className="cv-org">Humanoid | London Area</h5>
                        <ul>
                            <li>Developed state-of-the-art technology for <strong>HMND 01</strong>, a next-generation humanoid robot.</li>
                            <li>Implemented <strong>Vision-Language-Action (VLA)</strong> models and <strong>Neuro-symbolic reasoning</strong> for complex task execution.</li>
                            <li>Utilized Behaviour Trees and Speech-to-Speech technologies for natural human-robot interaction.</li>
                        </ul>
                    </div>

                    <div className="cv-item">
                        <div className="cv-item-header">
                            <h4>Assistant Professor (Lecturer) in Sustainable Robotics</h4>
                            <span className="cv-date">Feb 2024 - Jan 2025</span>
                        </div>
                        <h5 className="cv-org">University of Plymouth</h5>
                        <ul>
                            <li>Conducted academic leadership and research in sustainable and autonomous robotics.</li>
                            <li>Supervised PhD and MSc students in advanced robotics topics.</li>
                            <li>Led research initiatives focusing on long-term autonomy.</li>
                        </ul>
                    </div>

                    <div className="cv-item">
                        <div className="cv-item-header">
                            <h4>Chief Technology Officer (CTO)</h4>
                            <span className="cv-date">Sep 2024 - Nov 2024</span>
                        </div>
                        <h5 className="cv-org">Stealth AI Startup</h5>
                        <ul>
                            <li>Provided strategic direction for the development of generative AI models.</li>
                            <li>Oversaw technical architecture and roadmap for AI-driven products.</li>
                        </ul>
                    </div>

                    <div className="cv-item">
                        <div className="cv-item-header">
                            <h4>Principal Research Scientist</h4>
                            <span className="cv-date">Feb 2024 - Aug 2024</span>
                        </div>
                        <h5 className="cv-org">Stealth Startup</h5>
                        <ul>
                            <li>Led a team of five developers exploring <strong>Retrieval-Augmented Generation (RAG)</strong> systems.</li>
                            <li>Focused on Generative AI applications for the healthcare and financial sectors.</li>
                            <li>Developed expertise in Multi-agent systems and graph databases (Neo4j).</li>
                        </ul>
                    </div>

                    <div className="cv-item">
                        <div className="cv-item-header">
                            <h4>Senior Postdoctoral Research Associate</h4>
                            <span className="cv-date">Jul 2021 - Jan 2024</span>
                        </div>
                        <h5 className="cv-org">Imperial College London (Personal Robotics Lab)</h5>
                        <ul>
                            <li><strong>TAS (Trustworthy Autonomous Systems):</strong> Developed methods for inferring human behavior to enhance trust in HRI.</li>
                            <li>Focused on personalization algorithms, LLMs, and semantic search for robotics.</li>
                        </ul>
                    </div>

                    <div className="cv-item">
                        <div className="cv-item-header">
                            <h4>Postdoctoral Researcher</h4>
                            <span className="cv-date">Jan 2021 - May 2021</span>
                        </div>
                        <h5 className="cv-org">Universitat Politècnica de Catalunya (UPC)</h5>
                        <ul>
                            <li>Specialized in Task and Motion Planning (TAMP) and Ontology Engineering for robotics.</li>
                        </ul>
                    </div>
                </section>

                <section className="cv-section projects-list">
                    <h3>Research & Selected Publications</h3>
                    <div className="cv-project">
                        <strong><a href="https://recover-ontothor.github.io/" target="_blank" rel="noreferrer">RECOVER: Neurosymbolic Framework (IROS 2024)</a></strong><br />
                        A neurosymbolic framework combining ontologies, logical rules, and LLM-based planners for real-time failure detection and recovery in industrial maintenance.
                    </div>
                    <div className="cv-project">
                        <strong><a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=73pGUVsAAAAJ&citation_for_view=73pGUVsAAAAJ:eQOLeE2rZwMC" target="_blank" rel="noreferrer">SkillMaN: Skill-Based Manipulation</a></strong><br />
                        Integrated perception and reasoning framework enabling robots to perform complex tasks like "pick-up", "put-down", and "open-drawer" through learned skills.
                    </div>
                    <div className="cv-project">
                        <strong><a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=73pGUVsAAAAJ&citation_for_view=73pGUVsAAAAJ:qjMakFHDy7sC" target="_blank" rel="noreferrer">PMK: Perception and Manipulation Knowledge</a></strong><br />
                        Ontology-based knowledge processing framework (IEEE-1872 standard) for semantic linking of perception data with high-level knowledge.
                    </div>
                    <div className="cv-project">
                        <strong><a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=73pGUVsAAAAJ&citation_for_view=73pGUVsAAAAJ:Y0pCki6q_DkC" target="_blank" rel="noreferrer">Ontology-based Approaches to Robot Autonomy</a></strong><br />
                        A comprehensive review and comparison of ontology-based approaches to enhance robot autonomy and interoperability.
                    </div>
                    <div className="cv-project">
                        <strong><a href="https://www.open-ease.org/" target="_blank" rel="noreferrer">EASE (Everyday Activity Science and Engineering)</a></strong><br />
                        Collaborative research on everyday activity science and engineering (Bremen, Germany).
                    </div>
                </section>

                <section className="cv-section education">
                    <h3>Education</h3>
                    <div className="cv-item">
                        <div className="cv-item-header">
                            <h4>Ph.D. in Automatic Control, Robotics, and Computer Vision</h4>
                            <span className="cv-date">2016 - 2021</span>
                        </div>
                        <h5 className="cv-org">Universitat Politècnica de Catalunya (UPC)</h5>
                        <p><strong>Grade:</strong> Excellent | <strong>Focus:</strong> TAMP, Intelligent Perception, Knowledge Representation.</p>
                    </div>
                    <div className="cv-item">
                        <div className="cv-item-header">
                            <h4>Research Fellow (Short Visit)</h4>
                            <span className="cv-date">Nov 2019 - Dec 2019</span>
                        </div>
                        <h5 className="cv-org">Georg-August-Universität Göttingen</h5>
                        <p><strong>Focus:</strong> Trajectory generation and Learning from Demonstration (LfD).</p>
                    </div>
                    <div className="cv-item">
                        <div className="cv-item-header">
                            <h4>Research Fellow (Short Visit)</h4>
                            <span className="cv-date">Jan 2019 - Mar 2019</span>
                        </div>
                        <h5 className="cv-org">University of Bremen (IAI)</h5>
                        <p><strong>Focus:</strong> Knowledge Graph Reasoning and Autonomic decision making.</p>
                    </div>
                </section>

                <section className="cv-section speaking">
                    <h3>Invited Talks & Keynotes</h3>
                    <div className="cv-item">
                        <div className="cv-item-header">
                            <h4>Keynote Speaker</h4>
                            <span className="cv-date">2023</span>
                        </div>
                        <h5 className="cv-org">WORSA 2023 Workshop (ICRA 2023) | London, UK</h5>
                        <p><strong>Workshop:</strong> Ontologies for Robotics and Automation.</p>
                        <p><strong>Talk:</strong> "From Knowledge to Collaboration: Exploring Ontologies in Automation Systems, and HRI".</p>
                    </div>
                    <div className="cv-item">
                        <div className="cv-item-header">
                            <h4>Oral Presentation</h4>
                            <span className="cv-date">Oct 5, 2018</span>
                        </div>
                        <h5 className="cv-org">IEEE IROS 2018 Workshop | Madrid, Spain</h5>
                        <p><strong>Workshop:</strong> Collaboratively Working towards Ontology-based Standards for Robotics and Automation.</p>
                        <p><strong>Talk:</strong> "PMK - Knowledge-based Reasoning Framework for Autonomous Robotic Perception and Manipulation".</p>
                    </div>
                </section>

                <section className="cv-section awards">
                    <h3>Honors & Awards</h3>
                    <div className="cv-item">
                        <div className="cv-item-header">
                            <h4>FPI Research Grant</h4>
                            <span className="cv-date">Sep 2018 - Aug 2022</span>
                        </div>
                        <h5 className="cv-org">Government of Spain (Ministry of Science)</h5>
                        <p>Awarded prestigious FPI grant as a Research Associate at Universitat Politècnica de Catalunya.</p>
                    </div>
                </section>

                <section className="cv-section activities">
                    <h3>Professional Activities</h3>
                    <div className="cv-item">
                        <div className="cv-item-header">
                            <h4>Open Source Product Manager / Member</h4>
                            <span className="cv-date">Jan 2018 - Present</span>
                        </div>
                        <h5 className="cv-org">IEEE Standards Association</h5>
                        <ul>
                            <li>Member of the "Autonomous Robots" subgroup within the IEEE Working Group on Ontologies for Robotics and Automation (ORA).</li>
                        </ul>
                    </div>
                </section>

                <section className="cv-section skills">
                    <h3>Core Competencies</h3>

                    <div className="skills-category">
                        <h4>AI & Machine Learning</h4>
                        <div className="skills-grid">
                            <span className="skill-tag">Foundation Models</span>
                            <span className="skill-tag">LLM / VLM / VLA</span>
                            <span className="skill-tag">Neuro-symbolic Reasoning</span>
                            <span className="skill-tag">RAG / Generative AI</span>
                            <span className="skill-tag">Multi-agent Systems</span>
                        </div>
                    </div>

                    <div className="skills-category">
                        <h4>Robotics & Autonomy</h4>
                        <div className="skills-grid">
                            <span className="skill-tag">Task & Motion Planning</span>
                            <span className="skill-tag">HRI (Trust/Safety)</span>
                            <span className="skill-tag">World Models</span>
                            <span className="skill-tag">ROS / ROS2</span>
                            <span className="skill-tag">Behaviour Trees</span>
                        </div>
                    </div>

                    <div className="skills-category">
                        <h4>Knowledge Engineering</h4>
                        <div className="skills-grid">
                            <span className="skill-tag">Ontologies (IEEE ORA)</span>
                            <span className="skill-tag">Knowledge Graphs</span>
                            <span className="skill-tag">Neo4j</span>
                            <span className="skill-tag">Semantic Search</span>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="cv-footer">
                <button className="print-btn" onClick={() => window.print()}>Print CV</button>
            </footer>
        </div>
    );
};

export default CV;
