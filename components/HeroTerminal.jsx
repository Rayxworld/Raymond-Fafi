import { motion } from "framer-motion";

const summaryLines = [
  "SOC Analyst",
  "Detection Engineer",
  "Threat Intelligence & Python Security Engineer",
];

const quickStats = [
  ["focus", "Detection engineering, SOC workflows, threat triage"],
  ["location", "Port Harcourt, Rivers, Nigeria"],
  ["core_tools", "Python, Scapy, Streamlit, Kafka, Syslog, MITRE ATT&CK"],
];

export default function HeroTerminal({ onScroll }) {
  return (
    <motion.div
      className="terminal-shell hero-shell"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div className="terminal-heading">
        <div className="terminal-dots">
          <span />
          <span />
          <span />
        </div>
        <span>raymond@portfolio:~</span>
      </div>

      <div className="terminal-body">
        <div className="prompt-line">
          <span className="prompt-user">raymond@portfolio</span>
          <span className="prompt-separator">:</span>
          <span className="prompt-path">~</span>
          <span className="prompt-symbol">$</span>
          <span>whoami</span>
        </div>
        <div className="command-output hero-output">
          <h1>Raymond Fafi</h1>
          {summaryLines.map((line) => (
            <p key={line} className="lead-line">
              {line}
            </p>
          ))}
        </div>

        <div className="prompt-line">
          <span className="prompt-user">raymond@portfolio</span>
          <span className="prompt-separator">:</span>
          <span className="prompt-path">~</span>
          <span className="prompt-symbol">$</span>
          <span>cat summary.txt</span>
        </div>
        <div className="command-output">
          <p>
            Entry-level cybersecurity professional building practical detection
            systems, network anomaly analyzers, and threat intelligence
            workflows.
          </p>
        </div>

        <div className="prompt-line">
          <span className="prompt-user">raymond@portfolio</span>
          <span className="prompt-separator">:</span>
          <span className="prompt-path">~</span>
          <span className="prompt-symbol">$</span>
          <span>printenv PROFILE</span>
        </div>
        <div className="kv-grid">
          {quickStats.map(([key, value]) => (
            <div key={key} className="kv-row">
              <span className="kv-key">{key}</span>
              <span className="kv-value">{value}</span>
            </div>
          ))}
        </div>

        <div className="terminal-actions">
          <button className="button" onClick={() => onScroll("#projects")}>
            View Projects
          </button>
          <button className="button secondary" onClick={() => onScroll("#contact")}>
            Contact
          </button>
        </div>
      </div>
    </motion.div>
  );
}
