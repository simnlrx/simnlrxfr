export const hero = {
  name: "Simon Le Roux",
  title: "Ingénieur Cybersécurité.",
  tagline: "Protégeons ensemble ce qui compte.",
}

export const profile = {
  label: "Profil",
  title: "Curieux, exigeant, pleinement engagé.",
  intro:
    "J'avance avec une vraie soif d'apprendre et l'envie de comprendre les sujets en profondeur. Sociable, dynamique et rigoureux, j'aime créer du lien autant que structurer les choses. J'assume aussi une personnalité affirmée, un peu singulière, qui apporte de l'énergie, du relief et une façon bien à moi d'aborder les projets.",
}

export const almond = {
  sectionTitle: "Aujourd'hui.",
  company: "Almond",
  website: "https://almond.eu/",
  theme: {
    "--accent": "#00FFB3",
    "--accent-soft": "rgba(53, 199, 89, 0.28)",
    "--watermark-glow": "rgba(0, 255, 179, 0.2)",
    "--section-stripe": "linear-gradient(90deg, #00FFB3, rgba(53, 199, 89, 0.25))",
    "--section-divider":
      "linear-gradient(to right, #00FFB3 0%, rgba(0, 255, 179, 0.28) 12%, var(--border) 35%, transparent 65%)",
  },
  role: "Consultant Cybersécurité",
  period: "depuis sept. 2025",
  intro:
    "Conseil et accompagnement d'organisations dans la structuration de leur sécurité. De l'audit à la mise en conformité, du diagnostic à la feuille de route.",
  activities: [
    "Assistant RSSI dans le secteur du luxe : sécurisation des sites de production industrielle, gouvernance de la sécurité et résilience opérationnelle",
    "Mise en place de contrôles permanents pour la conformité DORA dans le secteur de l\'assurance",
    "RSSI externalisé pour PME/ETI : gouvernance, gestion des risques, sensibilisation, audits techniques et organisationnels",
    "Développement d\'offres de services de cybersécurité adaptées aux besoins des clients et au contexte cyber actuel",
  ],
  stats: [
    { value: "20+", label: "clients" },
    { value: "4+", label: "référentiels" },
    { value: "10+", label: "audits" },
  ],
}

export const aprr = {
  sectionTitle: "Deux ans pour grandir.",
  company: "APRR",
  website: "https://www.aprr.com/",
  theme: {
    "--accent": "#C8202A",
    "--accent-soft": "rgba(227, 6, 19, 0.28)",
    "--watermark-glow": "rgba(200, 32, 42, 0.2)",
    "--section-stripe": "linear-gradient(90deg, #C8202A, rgba(227, 6, 19, 0.24))",
    "--section-divider":
      "linear-gradient(to right, #C8202A 0%, rgba(200, 32, 42, 0.28) 12%, var(--border) 35%, transparent 65%)",
  },
  role: "Ingénieur SSI",
  period: "sept. 2023 – août 2025",
  intro:
    "Au sein de la DISI d'APRR, j'ai eu l'opportunité de piloter des projets de sécurisation d'envergure, couvrant à la fois les aspects techniques et organisationnels de la sécurité.",
  stats: [
    { value: "6500+", label: "endpoints couverts" },
    { value: "1500+", label: "utilisateurs sensibilisés" },
    { value: "4", label: "projets menés" },
  ],
  projects: [
    {
      title: "XDR",
      description: "2 500 serveurs et des dizaines d'outils de sécurité couverts par une solution de détection étendue.",
      tags: ["XDR / EDR", "Endpoint", "Déploiement"],
    },
    {
      title: "Sensibilisation",
      description: "Programme à destination de 4 000 utilisateurs, KPI de maturité suivis.",
      tags: ["Awareness", "Pilotage", "KPI"],
    },
    {
      title: "Gouvernance",
      description: "Mise à jour des politiques et procédures de sécurité, contrôle de conformité, gestion des risques et plan d'action.",
      tags: ["PSSI", "Plan d'action"],
    },
    {
      title: "Audit et remédiation",
      description: "Rédaction des cahiers de charges, pilotage des prestataires, suivi de la remédiation.",
      tags: ["Audit technique", "Remédiation", "Priorisation"],
    },
  ],
}

export const cd21 = {
  sectionTitle: "Les fondations.",
  company: "CD21",
  website: "https://www.cotedor.fr/",
  theme: {
    "--accent": "#1B75BB",
    "--accent-soft": "rgba(29, 95, 167, 0.28)",
    "--watermark-glow": "rgba(245, 166, 35, 0.22)",
    "--section-stripe": "linear-gradient(90deg, #1B75BB 0%, #F5A623 50%, #C8102E 100%)",
    "--section-divider":
      "linear-gradient(to right, #1B75BB 0%, #F5A623 18%, #C8102E 36%, var(--border) 56%, transparent 78%)",
  },
  role: "Administrateur Réseaux & Cybersécurité",
  period: "sept. 2022 – août 2023",
  intro:
    "Alternance au Département de la Côte-d'Or — administration du SI d'une collectivité de plusieurs milliers d'agents, en charge de l'ensemble de l'infrastructure réseau et serveur.",
  pillars: [
    {
      title: "Infrastructure",
      description: "Déploiement et administration du parc serveur, services annuaires et virtualisation.",
      tags: ["Windows Server", "Linux", "Active Directory", "DNS / DHCP", "Virtualisation"],
    },
    {
      title: "Réseau",
      description: "Administration des équipements réseau du département, maintien de la connectivité.",
      tags: ["Switchs", "Routeurs", "Pare-feux", "Proxy"],
    },
    {
      title: "Sécurisation",
      description: "Renforcement de la posture sécurité sur l'ensemble du parc informatique.",
      tags: ["EDR", "802.1X", "Segmentation", "Refonte pare-feux"],
    },
  ],
}

export const skills = {
  sectionTitle: "L'arsenal.",
  groups: [
    {
      label: "Sécurité & audit",
      items: [
        "Audit technique et organisationnel",
        "Analyse de vulnérabilités",
        "Gouvernance de la sécurité",
        "XDR / EDR / SIEM",
        "IAM",
        "Chefferie de projet",
        "PKI",
        "Zero Trust",
        "802.1X",
        "Sécurité réseau",
        "Active Directory",
        "Virtualisation",
      ],
    },
    {
      label: "GRC & conformité",
      items: [
        "ISO 27001",
        "DORA",
        "NIS2",
        "PCI-DSS",
        "Gestion des risques",
        "EBIOS RM",
        "Plan d'action sécurité",
        "Sensibilisation",
      ],
    },
  ],
}

export const formations = {
  sectionTitle: "Formations.",
  intro:
    "Un parcours en alternance, construit entre socle technique, gouvernance cyber et pilotage opérationnel.",
  items: [
    {
      degree: "Master Manager Opérationnel d'Activité en Cybersécurité",
      school: "ESJO",
      location: "Dijon",
      period: "sept. 2023 – juin 2025",
      details: [
        "Gouvernance de la sécurité et gestion des risques",
        "Posture professionnelle et management d'équipe, d'activité et de projet",
        "Sécurité des systèmes d'information et des réseaux",
      ],
    },
    {
      degree: "Licence Informatique Analyste en Cybersécurité",
      school: "ESJO",
      location: "Dijon",
      period: "sept. 2022 – août 2023",
      details: [
        "Administration systèmes et réseaux",
        "Chefferie de projet informatique",
        "SOC, SIEM et réponse à incidents",
        "Pentest et analyse de vulnérabilités",
      ],
    },
  ],
  achievements: [
    {
      title: "TOEIC",
      detail: "Certification d'anglais professionnel",
    },
    {
      title: "Certification Voltaire",
      detail: "571 points",
    },
    {
      title: "WorldSkills Cyber 2024",
      detail: "Médaille d'or régionale Bourgogne-Franche-Comté",
    },
  ],
  inProgress: [
    {
      title: "ISO 27001 Lead Auditor",
      detail: "Formation en cours",
    },
    {
      title: "Cybersécurité OT / IEC 62443",
      detail: "Formation en cours sur la sécurité des environnements industriels",
    },
  ],
}

export const contact = {
  sectionTitle: "Pensons sécurité ensemble.",
  email: "contact@simnlrx.fr",
  phone: "+33 6 49 48 61 88",
  linkedin: "https://fr.linkedin.com/in/simnlrx",
  location: "Lyon",
  cta: "Me contacter",
}
