const skillGroups = [
  {
    title: "Programming & Scripting",
    items: ["Python", "SQL", "Bash", "PowerShell", "Linux", "Git/GitHub"],
  },
  {
    title: "Detection & SOC",
    items: [
      "SIEM Concepts",
      "Log Analysis",
      "Alert Triage",
      "Brute Force Detection",
      "Credential Stuffing",
      "Incident Response",
      "Risk Scoring",
      "MITRE ATT&CK",
    ],
  },
  {
    title: "Network & Threat Intel",
    items: [
      "Wireshark",
      "PCAP Analysis",
      "Scapy",
      "Vulnerability Scanning",
      "Attack Surface Mapping",
      "IOC Analysis",
      "Threat Intelligence",
      "DNS Security",
    ],
  },
  {
    title: "Data & Dashboards",
    items: ["Kafka", "Syslog", "JSON/CSV ETL", "Pandas", "NumPy", "scikit-learn", "Streamlit", "Pytest"],
  },
  {
    title: "Cloud & Platforms",
    items: ["AWS DevOps", "Cloud Audit", "Windows Security", "CyberChef", "Hashcat", "Maltego", "Shodan"],
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
