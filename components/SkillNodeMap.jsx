const skillGroups = [
  {
    title: "Programming & Scripting",
    items: ["Python", "Bash", "PowerShell", "Linux"],
  },
  {
    title: "Detection & SOC",
    items: [
      "Log Analysis",
      "Brute Force Detection",
      "Credential Stuffing",
      "Incident Response Simulation",
      "Risk Scoring",
    ],
  },
  {
    title: "Network & Threat Intel",
    items: [
      "PCAP Analysis",
      "Scapy",
      "IOC Analysis",
      "Threat Intelligence",
      "MITRE ATT&CK",
    ],
  },
  {
    title: "Pipelines & Dashboards",
    items: ["Kafka", "Syslog", "JSON Export", "Pandas", "Altair", "Streamlit", "Pytest"],
  },
];

export default function SkillNodeMap() {
  return (
    <div className="terminal-shell section-shell">
      <div className="terminal-heading">
        <div className="terminal-dots">
          <span />
          <span />
          <span />
        </div>
        <span>skills@raymond:~/toolbox</span>
      </div>

      <div className="terminal-body">
        <div className="prompt-line">
          <span className="prompt-user">raymond@portfolio</span>
          <span className="prompt-separator">:</span>
          <span className="prompt-path">~/toolbox</span>
          <span className="prompt-symbol">$</span>
          <span>tree skills --depth 2</span>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-card">
              <p className="skill-card-title">{group.title}</p>
              <div className="tag-list">
                {group.items.map((item) => (
                  <span key={item} className="tag-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
