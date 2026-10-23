import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const resumePath = `${import.meta.env.BASE_URL}assets/SOWMIYA-T-DevOps-Engineer.pdf`;

const skills = [
  { title: 'Cloud / AWS', items: ['EC2', 'S3', 'IAM', 'RDS', 'ECR', 'Lambda', 'EventBridge', 'CloudWatch', 'Route 53', 'Elastic Load Balancing', 'KMS'] },
  { title: 'DevOps & Automation', items: ['Git', 'GitHub', 'Docker', 'Docker Compose', 'Terraform', 'GitHub Actions', 'Jenkins', 'Ansible', 'Kubernetes', 'Prometheus', 'Grafana'] },
  { title: 'Systems & Development', items: ['Linux / Ubuntu', 'Java', 'Python', 'Groovy', 'REST APIs', 'PostgreSQL', 'MySQL', 'Apache OFBiz', 'Apache Tomcat'] },
];

const experiences = [
  {
    role: 'AWS Cloud Developer', company: 'IVW Technology Solutions', date: 'Aug 2026 — Present', location: 'Chennai, India', project: 'People Management Portal',
    details: [
      'Working with Linux, Docker, and Docker Compose as part of application development and deployment workflows.',
      'Using Amazon ECR and EC2 for container image storage and application hosting.',
      'Using Terraform and GitHub Actions to support infrastructure and CI/CD workflows.',
      'Working with AWS IAM, RDS, Route 53, Elastic Load Balancing, Lambda, EventBridge, and KMS for project requirements.'
    ]
  },
  {
    role: 'Java–DevOps Engineer', company: 'Integrin Enterprise Solutions', date: 'Mar 2023 — Nov 2025', location: 'Coimbatore, India', project: 'Integrin Drug Enforcement Agency',
    details: [
      'Developed and maintained backend modules using Apache OFBiz, Java, and Groovy for enterprise workflows.',
      'Built and maintained REST APIs and managed PostgreSQL database operations.',
      'Worked with Apache Tomcat for application deployment and Git/GitHub for version control.',
      'Used Docker, AWS EC2, S3, ECR, GitHub Actions, and Terraform in application delivery and cloud infrastructure workflows.'
    ]
  }
];

const projects = [
  {
    name: 'Drug Enforcement Agency System', status: 'WORK PROJECT',
    description: 'Enterprise application work involving backend modules, REST APIs, database operations, and application-server deployment.',
    stack: ['Apache OFBiz', 'Java', 'Groovy', 'PostgreSQL', 'Tomcat', 'Docker', 'AWS']
  },
  {
    name: 'Student Management API', status: 'PERSONAL PROJECT',
    description: 'A Spring Boot REST API for student CRUD operations, containerized with Docker and deployed to an EC2 environment using Terraform and GitHub Actions.',
    stack: ['Spring Boot', 'REST API', 'Docker', 'Terraform', 'EC2', 'GitHub Actions', 'Prometheus', 'Grafana']
  },
  {
    name: 'People Management Portal', status: 'WORK PROJECT',
    description: 'Cloud development work involving application deployment and supporting AWS infrastructure services.',
    stack: ['Linux', 'Docker Compose', 'ECR', 'EC2', 'Terraform', 'GitHub Actions', 'RDS', 'Route 53']
  }
];

function SectionHeading({ eyebrow, title, id }) {
  return <div className="section-heading" id={id}><span className="prompt">$</span><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div></div>;
}

function App() {
  return (
    <div className="site-shell">
      <div className="scanline" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Sowmiya home"><span className="brand-mark">&gt;_</span><span>sowmiya<span className="muted">.sh</span></span></a>
        <nav aria-label="Main navigation">
          <a href="#about">about</a><a href="#skills">skills</a><a href="#experience">experience</a><a href="#projects">projects</a><a href="#contact">contact</a>
        </nav>
        <span className="availability"><i /> OPEN TO OPPORTUNITIES</span>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="terminal-label"><span className="live-dot" /> SYSTEM ONLINE </p>
            <p className="hero-intro">Hi, I'm</p>
            <h1>Sowmiya<br /><span>Thirugnanam</span><b className="cursor">_</b></h1>
            <h2 className="role-line"><span className="prompt">&gt;</span> AWS Cloud &amp; DevOps Engineer</h2>
            <p className="hero-summary">Building cloud foundations, automating delivery workflows, and growing reliable infrastructure skills — one deployment at a time.</p>
            <div className="hero-actions"><a className="btn btn-primary" href="#projects"><span>./</span> Explore projects <b>↘</b></a><a className="btn btn-secondary" href={resumePath} target="_blank" rel="noreferrer">Download resume <span>↗</span></a></div>
            <div className="hero-meta"><span><i className="tiny-green" /> Chennai, India</span><span>2.9 years professional experience</span><span>AWS Certified Cloud Practitioner</span></div>
          </div>
          <div className="terminal-card" aria-label="Terminal introduction">
            <div className="terminal-titlebar"><div className="window-dots"><i /><i /><i /></div><span>~/sowmiya/portfolio</span><span className="terminal-menu">•••</span></div>
            <div className="terminal-body">
              <p><span className="term-green">sowmiya@cloud</span><span className="term-muted">:</span><span className="term-blue">~</span><span className="term-muted">$</span> whoami</p>
              <p className="term-output">AWS Cloud &amp; DevOps Engineer</p>
              <p><span className="term-green">sowmiya@cloud</span><span className="term-muted">:</span><span className="term-blue">~</span><span className="term-muted">$</span> cat focus.txt</p>
              <ul className="term-list"><li>Cloud infrastructure</li><li>Containerization &amp; automation</li><li>CI/CD workflows</li><li>Monitoring &amp; observability</li></ul>
              <p><span className="term-green">sowmiya@cloud</span><span className="term-muted">:</span><span className="term-blue">~</span><span className="term-muted">$</span> aws sts get-caller-identity</p>
              <pre className="term-json">{`{\n  "learning": "always",\n  "mindset": "automate",\n  "region": "ap-south-1"\n}`}</pre>
              <p className="terminal-last"><span className="term-green">sowmiya@cloud</span><span className="term-muted">:</span><span className="term-blue">~</span><span className="term-muted">$</span> <span className="cursor-small">▌</span></p>
            </div>
            <div className="terminal-status"><span><i /> all systems nominal</span><span>UTF-8</span><span>bash</span></div>
          </div>
          <div className="hero-bottom"><span>01 / CLOUD</span><span>02 / AUTOMATION</span><span>03 / RELIABILITY</span><span className="scroll-hint">SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section className="section about-section" id="about">
          <SectionHeading eyebrow="01 — INTRODUCTION" title="About me" />
          <div className="about-grid">
            <div className="about-copy"><p className="lead">I bring <span className="highlight">2.9 years of Java backend development experience</span> and am building on that foundation with AWS cloud and DevOps practices.</p><p>My experience spans backend modules, REST APIs, databases, and application servers. I’m applying that software background to containerization, infrastructure as code, CI/CD, and cloud deployment workflows.</p><p>I’m continuing to strengthen my hands-on skills in cloud operations, automation, and monitoring while working toward cloud and DevOps engineering opportunities.</p></div>
            <div className="info-panel"><div className="panel-title"><span>profile.json</span><span className="file-type">JSON</span></div><pre>{`{\n  "name": "Sowmiya Thirugnanam",\n  "focus": [\n    "AWS Cloud",\n    "DevOps Engineering",\n    "Cloud Operations"\n  ],\n  "certification": "AWS CCP",\n  "education": "BE, Computer Science",\n  "location": "Chennai, India"\n}`}</pre></div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <SectionHeading eyebrow="02 — TOOLKIT" title="Skills & technologies" />
          <p className="section-desc">Technologies listed in my resume and used across development, cloud, and DevOps learning/workflows.</p>
          <div className="skills-grid">{skills.map((group, index) => <article className="skill-card" key={group.title}><div className="skill-card-head"><span className="skill-index">0{index + 1}</span><h3>{group.title}</h3><span className="card-chevron">↗</span></div><div className="tag-list">{group.items.map(item => <span className="tag" key={item}>{item}</span>)}</div></article>)}</div>
        </section>

        <section className="section experience-section" id="experience">
          <SectionHeading eyebrow="03 — CAREER LOG" title="Experience" />
          <div className="timeline">{experiences.map((job, index) => <article className="experience-card" key={job.company}><div className="timeline-rail"><span className="timeline-dot" /><span className="timeline-line" /></div><div className="experience-content"><div className="experience-top"><div><p className="job-index">ROLE_0{index + 1}</p><h3>{job.role}</h3><p className="company">{job.company}</p></div><div className="job-date">{job.date}<span>{job.location}</span></div></div><div className="project-label"><span>PROJECT</span> {job.project}</div><ul className="detail-list">{job.details.map(detail => <li key={detail}>{detail}</li>)}</ul></div></article>)}</div>
        </section>

        <section className="section projects-section" id="projects">
          <SectionHeading eyebrow="04 — SELECTED WORK" title="Projects" />
          <div className="projects-grid">{projects.map((project, index) => <article className="project-card" key={project.name}><div className="project-card-top"><span className="project-number">PROJECT_0{index + 1}</span><span className="project-status">{project.status}</span></div><div className="project-icon">{index === 0 ? '⌘' : index === 1 ? '☁' : '▤'}</div><h3>{project.name}</h3><p>{project.description}</p><div className="tag-list project-tags">{project.stack.map(item => <span className="tag" key={item}>{item}</span>)}</div><div className="project-footer"><span className="project-note">{project.note}</span></div></article>)}</div>
        </section>

        <section className="section certification-section" id="certifications">
          <SectionHeading eyebrow="05 — LEARNING LOG" title="Certifications & education" />
          <div className="credentials-grid"><article className="credential-card"><span className="credential-icon">✳</span><div><p className="credential-type">CERTIFICATION · JAN 2026</p><h3>AWS Certified Cloud Practitioner</h3><p>Amazon Web Services</p><span className="credential-state">CERTIFIED</span></div></article><article className="credential-card"><span className="credential-icon">⌁</span><div><p className="credential-type">TRAINING · JUN–AUG 2026</p><h3>Certified DevOps</h3><p>Greens Technology</p><span className="credential-state">COMPLETED</span></div></article><article className="credential-card"><span className="credential-icon">◌</span><div><p className="credential-type">IN PROGRESS</p><h3>AWS Solutions Architect – Associate</h3><p>Amazon Web Services</p><span className="credential-state state-learning">PURSUING</span></div></article><article className="credential-card"><span className="credential-icon">⌂</span><div><p className="credential-type">EDUCATION · 2018–2022</p><h3>BE, Computer Science and Engineering</h3><p>Government College of Engineering (IRTT), Erode</p><span className="credential-state">CGPA 8.0</span></div></article></div>
        </section>

        <section className="contact-section" id="contact"><div className="contact-terminal"><p className="eyebrow">06 — CONNECT</p><h2>Let's build something<br /><span>reliable.</span></h2><p className="contact-copy">Interested in cloud engineering, DevOps, or junior SRE opportunities? Let's connect.</p><div className="contact-actions"><a className="btn btn-primary" href="mailto:sowmiya.t2112@gmail.com">Email me <span>↗</span></a><a className="btn btn-secondary" href="https://www.linkedin.com/in/sowmiya-thirugnanam-626273218/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div><div className="contact-details"><span><b>EMAIL</b> sowmiya.t2112@gmail.com</span><span><b>PHONE</b> +91 9677674314</span><span><b>LOCATION</b> Chennai, India</span></div></div></section>
      </main>
      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">&gt;_</span><span>sowmiya<span className="muted">.sh</span></span></a><p>Built with React, curiosity, and a terminal-inspired theme.</p><a href={resumePath} target="_blank" rel="noreferrer">RESUME.PDF ↗</a><span className="copyright">© {new Date().getFullYear()} SOWMIYA THIRUGNANAM</span></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
