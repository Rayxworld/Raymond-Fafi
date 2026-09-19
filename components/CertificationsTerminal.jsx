import { motion } from "framer-motion";

const certifications = [
  ["Ethical Hacker", "Cisco Networking Academy", "Aug 2026"],
  ["Network Defense", "Cisco Networking Academy", "Jul 2026"],
  ["Information Security (CS406), 89.80%", "Saylor Academy", "Mar 2026"],
  ["Cybersecurity Analyst Job Simulation", "TATA, via Forage", "Mar 2026"],
  ["Building Language Models on AWS", "AWS Training & Certification", "Dec 2025"],
  ["Cloud Audit Academy (Cloud Agnostic)", "AWS Training & Certification", "May 2025"],
  ["Getting Started with DevOps on AWS", "AWS Training & Certification", "May 2025"],
  ["Machine Learning: Data Preparation & Feature Engineering", "Fair Forward / atingi", "May 2025"],
  ["Cybersecurity Essentials: Protecting Your Digital World", "Tech Mahindra Foundation / atingi", "May 2025"],
  ["Technical Writing (ENGL210), 81.48%", "Saylor Academy", "Aug 2025"],
  ["Software Engineering Job Simulation", "Accenture, via Forage", "May 2025"],
  ["Data Science & Analytics", "HP LIFE Foundation", "Apr 2025"],
  ["Professional Writing (PRDV002)", "Saylor Academy", "Apr 2025"],
];

export default function CertificationsTerminal() {
  return (
    <motion.div
      className="terminal-shell section-shell"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
    >
      <div className="terminal-heading">
        <div className="terminal-dots">
          <span />
          <span />
          <span />
        </div>
        <span>certs@raymond:~/credentials</span>
      </div>

      <div className="terminal-body">
        <div className="prompt-line">
          <span className="prompt-user">raymond@portfolio</span>
          <span className="prompt-separator">:</span>
          <span className="prompt-path">~/credentials</span>
          <span className="prompt-symbol">$</span>
          <span>ls certifications/</span>
        </div>

        <div className="certification-grid">
          {certifications.map(([name, issuer, date], index) => (
            <article className="certification-item" key={name}>
              <span className="certification-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{name}</h3>
                <p>{issuer}</p>
              </div>
              <time>{date}</time>
            </article>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
