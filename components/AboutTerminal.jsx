import { motion } from "framer-motion";

const aboutPoints = [
  "Security analyst focused on turning noisy logs, network signals, and public exposure data into clear decisions.",
  "Designed and ran a passive internet exposure study across 75 organizations in 15 African countries.",
  "Over a year teaching cybersecurity fundamentals, translating CIA triad, malware, phishing, and incident response into practical labs.",
];

const trainingPoints = [
  "Cybersecurity & Digital Defense Instructor at Dreckline Technologies, 2025-present",
  "NIIT Master Mind Series (MMS) Information Technology Training",
  "48+ GitHub repositories covering detection rules, traffic investigation, and security automation",
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
          <span>cat profile.md</span>
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
          <span>cat experience.log</span>
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
