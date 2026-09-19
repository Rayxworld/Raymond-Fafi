import { motion } from "framer-motion";

const summaryLines = [
  "SOC Analyst / Detection Engineer",
  "Threat Detection & Security Research",
  "Python Security Tooling",
];

const quickStats = [
  ["focus", "Log analysis, threat detection, alert triage"],
  ["base", "Port Harcourt, Nigeria / open to remote"],
  ["toolbox", "Python, Wireshark, Scapy, Streamlit, AWS, MITRE ATT&CK"],
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
            Security analyst with hands-on detection engineering experience,
            published security research, and a talent for making technical
            findings useful to both analysts and non-technical teams.
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
          <button className="button button-primary" onClick={() => onScroll("#projects")}>
            Explore the work
          </button>
          <button className="button secondary" onClick={() => onScroll("#contact")}>
            Contact
          </button>
        </div>
      </div>
    </motion.div>
  );
}
