import { motion } from "framer-motion";

const aboutPoints = [
  "Hands-on experience simulating SOC workflows from log ingestion to ticket generation.",
  "Built detections for brute force attacks, credential abuse, traffic spikes, and reconnaissance activity.",
  "Comfortable with PCAP processing, IOC normalization, risk scoring, and analyst-facing dashboards.",
];

const trainingPoints = [
  "NIIT Master Mind Series (MMS) Information Technology Training",
  "Forage cybersecurity job simulations with SOC and detection-focused exercises",
  "Self-directed practice in log analysis, incident response, and traffic investigation",
];

export default function AboutTerminal() {
  return (
    <div className="terminal-shell section-shell">
      <div className="terminal-heading">
        <div className="terminal-dots">
          <span />
          <span />
          <span />
        </div>
        <span>about@raymond:~/profile</span>
      </div>

      <div className="terminal-body">
        <div className="prompt-line">
          <span className="prompt-user">raymond@portfolio</span>
          <span className="prompt-separator">:</span>
          <span className="prompt-path">~/profile</span>
          <span className="prompt-symbol">$</span>
          <span>cat about.md</span>
        </div>
        <div className="command-output stack-list">
          {aboutPoints.map((point) => (
            <p key={point}>{point}</p>
          ))}
        </div>

        <div className="prompt-line">
          <span className="prompt-user">raymond@portfolio</span>
          <span className="prompt-separator">:</span>
          <span className="prompt-path">~/profile</span>
          <span className="prompt-symbol">$</span>
          <span>ls training/</span>
        </div>
        <motion.div
          className="plain-list"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {trainingPoints.map((point) => (
            <div key={point} className="plain-list-row">
              <span className="list-arrow">-&gt;</span>
              <span>{point}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
