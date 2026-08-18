import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Bio.css';

const Bio = () => {
    return (
        <article className="bio-container">
            <header className="bio-header">
                <h1>Mohammed Diab</h1>
                <p className="bio-subtitle">Roboticist and artificial intelligence researcher</p>
            </header>

            <aside className="bio-infobox">
                <img src="/profile.png" alt="Mohammed Diab" className="bio-infobox-img" />
                <table>
                    <tbody>
                        <tr>
                            <th>Fields</th>
                            <td>Robotics, embodied AI, knowledge representation and reasoning</td>
                        </tr>
                        <tr>
                            <th>Institutions</th>
                            <td>All3; Humanoid; University of Plymouth; Imperial College London; Universitat Politècnica de Catalunya</td>
                        </tr>
                        <tr>
                            <th>Alma mater</th>
                            <td>Universitat Politècnica de Catalunya (PhD, 2021)</td>
                        </tr>
                        <tr>
                            <th>Thesis topic</th>
                            <td>Task and motion planning, intelligent perception, knowledge representation</td>
                        </tr>
                        <tr>
                            <th>Known for</th>
                            <td>PMK; SkillMaN; RECOVER; IEEE ORA ontology standardisation</td>
                        </tr>
                    </tbody>
                </table>
            </aside>

            <section className="bio-body">
                <p className="bio-lead">
                    <strong>Mohammed Diab</strong> is a roboticist and artificial intelligence researcher
                    whose work spans task and motion planning, knowledge representation for autonomous
                    robots, human&ndash;robot interaction, and embodied AI. Diab is Principal Autonomy
                    Engineer at All3 in London, and was previously a researcher at Humanoid, an assistant
                    professor at the University of Plymouth, and a senior postdoctoral research associate
                    in the Personal Robotics Lab at Imperial College London. The recurring theme across
                    this work is the combination of symbolic knowledge &mdash; ontologies, logical rules,
                    knowledge graphs &mdash; with learned models, in order to make robot behaviour
                    explainable and recoverable rather than opaque.
                </p>

                <h2>Education and early research</h2>
                <p>
                    Diab completed a PhD in Automatic Control, Robotics and Computer Vision at the
                    Institute of Industrial and Control Engineering (IOC), Universitat Politècnica de
                    Catalunya (UPC) in Barcelona, submitted in 2021 and graded <em>Excellent</em>. The
                    doctoral work addressed task and motion planning, intelligent perception, and
                    knowledge representation for manipulation, and was supported from 2018 by an FPI
                    research grant from the Spanish Ministry of Science &mdash; a competitively awarded
                    national research fellowship.
                </p>
                <p>
                    During the doctorate Diab undertook two research visits in 2019. The first, at the
                    Institute for Artificial Intelligence (IAI) at the University of Bremen, concerned
                    knowledge graph reasoning and autonomous decision making, and connected to the EASE
                    (Everyday Activity Science and Engineering) programme on everyday activity
                    understanding. The second, at the Third Institute of Physics &ndash; Biophysics at the
                    Georg-August University of Göttingen, focused on trajectory generation and learning
                    from demonstration, bringing a bio-inspired perspective to robotic manipulation.
                    A postdoctoral period at UPC followed in 2021.
                </p>

                <h2>Imperial College London</h2>
                <p>
                    From 2021 to 2024 Diab was a senior postdoctoral research associate in the Personal
                    Robotics Lab at Imperial College London, working within the UK Research and Innovation
                    (UKRI) Trustworthy Autonomous Systems programme on the Trust node. The research
                    problem there was inferring human internal state &mdash; intention, belief, and
                    perspective &mdash; well enough for a robot to earn and calibrate a person's trust
                    rather than simply assert reliability. Publications from this period cover cognitive
                    trust infrastructure (the TICK framework), trust-related knowledge transfer between
                    tasks, visual perspective taking in human&ndash;robot collaboration, and theory of
                    mind in human&ndash;robot navigation, alongside methodological work on psychometric
                    scale development for human&ndash;robot studies.
                </p>

                <h2>Academic and industry roles</h2>
                <p>
                    Diab was appointed assistant professor (lecturer) in Sustainable Robotics at the
                    University of Plymouth in 2024, teaching and supervising PhD and MSc students in
                    robotics and autonomous systems, with a research emphasis on long-term autonomy.
                    In parallel and subsequently, Diab held senior roles at early-stage companies:
                    principal research scientist at a stealth startup, leading a team investigating
                    retrieval-augmented generation, multi-agent systems and graph databases for
                    healthcare and financial applications; and interim chief technology officer at a
                    stealth AI startup, setting technical direction for generative AI development.
                </p>
                <p>
                    At Humanoid, Diab worked on the HMND 01 humanoid robot, applying
                    vision-language-action (VLA) models and neuro-symbolic reasoning to complex task
                    execution, and combining behaviour trees with speech-to-speech interfaces for natural
                    human&ndash;robot interaction. Since 2025, as Principal Autonomy Engineer at All3,
                    Diab has led autonomy architecture for systems including All3 Mantis, a robot designed
                    to operate on active construction sites &mdash; climbing stairs, passing through
                    narrow gaps, and placing heavy components in an environment that changes daily
                    &mdash; with a focus on foundation models, world models, and the infrastructure
                    required to run autonomous agents in the field.
                </p>

                <h2>Research contributions</h2>
                <p>
                    Diab's most cited work concerns ontologies as a substrate for robot autonomy. PMK
                    (Perception and Manipulation Knowledge), published in <em>Sensors</em> in 2019, is a
                    knowledge processing framework that semantically links perception data to high-level
                    task knowledge, aligned with the IEEE 1872 standard for ontologies in robotics and
                    automation. SkillMaN (2020) extended this into a skill-based manipulation framework in
                    which a robot draws on learned experience to execute actions such as picking up,
                    putting down, and opening a drawer. A 2019 review of ontology-based approaches to
                    robot autonomy, co-authored with Alberto Olivares-Alarcos and colleagues, has become
                    a standard reference for the area.
                </p>
                <p>
                    More recent work applies the same principles to failure handling in the era of large
                    language models. RECOVER, presented at IROS in 2024 with Cristina Cornelio, is a
                    neuro-symbolic framework that composes ontologies, logical rules and an LLM-based
                    planner to detect and recover from failures in industrial maintenance tasks in real
                    time &mdash; using symbolic structure to constrain and check what the language model
                    proposes.
                </p>
                <p>
                    As of August 2026, Diab's publications had been cited approximately 920 times, with an
                    h-index of 17 and an i10-index of 25 according to Google Scholar.
                </p>

                <h2>Standards work and professional service</h2>
                <p>
                    Diab has been a member of the IEEE Standards Association's working group on Ontologies
                    for Robotics and Automation (ORA) since 2018, contributing to the Autonomous Robots
                    subgroup as an open source product manager. Invited talks include a keynote at the
                    WORSA workshop on ontologies for robotics and automation at ICRA 2023 in London,
                    titled &ldquo;From Knowledge to Collaboration: Exploring Ontologies in Automation
                    Systems, and HRI&rdquo;, and a presentation of the PMK framework at an IROS 2018
                    workshop in Madrid on ontology-based standards for robotics and automation.
                </p>

                <h2>Selected publications</h2>
                <ul className="bio-pubs">
                    <li>
                        Cornelio, C. and Diab, M. (2024). &ldquo;RECOVER: A Neuro-Symbolic Framework for
                        Failure Detection and Recovery.&rdquo; <em>IEEE/RSJ International Conference on
                        Intelligent Robots and Systems (IROS)</em>.
                    </li>
                    <li>
                        Diab, M., Pomarlan, M., Beßler, D., Akbari, A., Rosell, J., Bateman, J. and
                        Beetz, M. (2020). &ldquo;SkillMaN &mdash; A skill-based robotic manipulation
                        framework based on perception and reasoning.&rdquo; <em>Robotics and Autonomous
                        Systems</em>.
                    </li>
                    <li>
                        Olivares-Alarcos, A., Beßler, D., Khamis, A., Goncalves, P., Habib, M. K.,
                        Bermejo-Alonso, J., Barreto, M., Diab, M. <em>et al.</em> (2019). &ldquo;A review
                        and comparison of ontology-based approaches to robot autonomy.&rdquo;
                        <em>Knowledge Engineering Review</em>.
                    </li>
                    <li>
                        Diab, M., Akbari, A., Ud Din, M. and Rosell, J. (2019). &ldquo;PMK &mdash; A
                        knowledge processing framework for autonomous robotics perception and
                        manipulation.&rdquo; <em>Sensors</em> 19(5), 1166.
                    </li>
                </ul>

                <h2>External links</h2>
                <ul className="bio-links">
                    <li>
                        <a href="https://scholar.google.com/citations?user=73pGUVsAAAAJ&hl=en" target="_blank" rel="noreferrer">
                            Google Scholar profile <FaExternalLinkAlt />
                        </a>
                    </li>
                    <li>
                        <a href="https://orcid.org/0000-0002-5743-5190" target="_blank" rel="noreferrer">
                            ORCID 0000-0002-5743-5190 <FaExternalLinkAlt />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.imperial.ac.uk/personal-robotics/people/previous-post-doctoral-researchers/dr-mohammed-diab/" target="_blank" rel="noreferrer">
                            Personal Robotics Lab, Imperial College London <FaExternalLinkAlt />
                        </a>
                    </li>
                    <li>
                        <a href="https://researchportal.plymouth.ac.uk/en/persons/mohammed-diab" target="_blank" rel="noreferrer">
                            University of Plymouth research portal <FaExternalLinkAlt />
                        </a>
                    </li>
                    <li>
                        <a href="https://recover-ontothor.github.io/" target="_blank" rel="noreferrer">
                            RECOVER project page <FaExternalLinkAlt />
                        </a>
                    </li>
                </ul>
            </section>
        </article>
    );
};

export default Bio;
