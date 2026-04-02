import Head from "next/head";
import Link from "next/link";
import { useCallback } from "react";
import HeroTerminal from "../components/HeroTerminal";
import AboutTerminal from "../components/AboutTerminal";
import SkillNodeMap from "../components/SkillNodeMap";
import ProjectNodeMap from "../components/ProjectNodeMap";
import ContactTerminal from "../components/ContactTerminal";

const projects = [
  {
    name: "Brute Force Detection System",
    description:
      "Log-based detection engine for brute force and credential stuffing attacks with SOC-style alerting.",
    features: [
      "Sliding-window detection for repeated authentication failures",
      "Severity, confidence, and MITRE ATT&CK T1110 enrichment",
      "Automated incident tickets with remediation guidance",
    ],
    stack: "Python | Streamlit | MITRE ATT&CK | Log Analysis",
    link: "https://github.com/Rayxworld/Brute-Force-Attack-Detection-System-using-Python-and-Log-Analysis",
  },
  {
    name: "Network Anomaly Detector",
    description:
      "PCAP-driven anomaly detection system for port scanning, traffic spikes, and suspicious network behavior.",
    features: [
      "Synthetic PCAP generation with Scapy for realistic testing",
      "Detection logic mapped to MITRE ATT&CK T1595 and T1499",
      "Alert export to Syslog and Kafka for SIEM-style workflows",
    ],
    stack: "Python | Scapy | Kafka | Syslog | Streamlit | Pytest",
    link: "https://github.com/Rayxworld/Network-Traffic-Anomaly-Detection-System-using-Python-and-PCAP-Analysis",
  },
  {
    name: "Threat Intel Engine",
    description:
      "Threat intelligence aggregation and risk scoring pipeline for normalizing and prioritizing IOCs.",
    features: [
      "Multi-source JSON and CSV IOC normalization",
      "Deduplication and cross-source correlation to reduce noise",
      "Weighted risk scoring for analyst-ready prioritization",
    ],
    stack: "Python | JSON | CSV | Streamlit | Threat Intelligence",
    link: "https://github.com/Rayxworld/Threat-Intelligence-Engine",
  },
  {
    name: "SOC Simulation Toolkit",
    description:
      "A practical portfolio of dashboards, detections, and incident simulation workflows built for SOC practice.",
    features: [
      "Alert enrichment and analyst-facing dashboards",
      "Incident workflow simulation from ingestion to triage",
      "Reusable Python-based security engineering patterns",
    ],
    stack: "Python | Streamlit | Pandas | Security Analytics",
    link: "https://github.com/Rayxworld",
  },
];

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const handleScroll = useCallback((targetId) => {
    const target = document.querySelector(targetId);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      <Head>
        <title>Raymond Fafi | SOC Analyst & Detection Engineer</title>
        <meta
          name="description"
          content="Raymond Fafi - SOC Analyst, Detection Engineer, and Python security builder focused on threat detection and incident workflows."
        />
      </Head>

      <header className="site-header">
        <Link href="#hero" className="logo">
          Raymond Fafi
        </Link>
        <nav className="nav-bar">
          {navLinks.map((link) => (
            <button
              key={link.href}
              className="button secondary"
              onClick={() => handleScroll(link.href)}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </header>

      <section id="hero" className="hero">
        <HeroTerminal onScroll={handleScroll} />
      </section>

      <section id="about" className="section about terminal-window">
        <div className="section-heading">
          <span>01</span>
          <h2>About Me</h2>
        </div>
        <AboutTerminal />
      </section>

      <section id="skills" className="section skills terminal-window">
        <div className="section-heading">
          <span>02</span>
          <h2>Skills</h2>
        </div>
        <SkillNodeMap />
      </section>

      <section id="projects" className="section projects terminal-window">
        <div className="section-heading">
          <span>03</span>
          <h2>Projects</h2>
        </div>
        <p className="section-description">
          Interactive project nodes highlight hands-on security engineering work
          across detection, traffic analysis, and threat intelligence.
        </p>
        <ProjectNodeMap projects={projects} />
      </section>

      <section id="contact" className="section contact terminal-window">
        <div className="section-heading">
          <span>04</span>
          <h2>Contact Me</h2>
        </div>
        <ContactTerminal />
      </section>
    </>
  );
}
