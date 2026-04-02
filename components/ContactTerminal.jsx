import { motion } from "framer-motion";

const contactLines = [
  ["email", "fafiraymond7@gmail.com", "mailto:fafiraymond7@gmail.com"],
  ["phone", "+234 802 308 5321", "tel:+2348023085321"],
  ["location", "Port Harcourt, Rivers, Nigeria", ""],
  ["github", "github.com/Rayxworld", "https://github.com/Rayxworld"],
];

export default function ContactTerminal() {
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
        <span>contact@raymond:~/reach-me</span>
      </div>

      <div className="terminal-body">
        <div className="prompt-line">
          <span className="prompt-user">raymond@portfolio</span>
          <span className="prompt-separator">:</span>
          <span className="prompt-path">~/reach-me</span>
          <span className="prompt-symbol">$</span>
          <span>cat contact.txt</span>
        </div>

        <div className="kv-grid">
          {contactLines.map(([key, value, href]) => (
            <div key={key} className="kv-row">
              <span className="kv-key">{key}</span>
              {href ? (
                <a
                  className="kv-value link-accent"
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {value}
                </a>
              ) : (
                <span className="kv-value">{value}</span>
              )}
            </div>
          ))}
        </div>

        <div className="prompt-line">
          <span className="prompt-user">raymond@portfolio</span>
          <span className="prompt-separator">:</span>
          <span className="prompt-path">~/reach-me</span>
          <span className="prompt-symbol">$</span>
          <span>echo "Available for security engineering and SOC analyst roles"</span>
        </div>

        <div className="command-output">
          <p>Available for security engineering and SOC analyst roles.</p>
        </div>
      </div>
    </motion.div>
  );
}
