// Credenziali di Laura Zanoni per lo schema Person (hasCredential).
// Fonte: certificati e titoli forniti da Nick. Un dato incerto non si scrive.
// Ateneo della laurea in Podiatria: UManresa (Nick, 9/11/2026, AT-1620). UManresa è il campus di Manresa della
// Universitat de Vic – Universitat Central de Catalunya, che rilascia il titolo. Nomi letti il 9/11/2026 su
// umanresa.cat/ca/umanresa («UManresa és un campus de la Universitat de Vic – Universitat Central de Catalunya (UVic-UCC)»).
export const ATENEO_PODIATRIA = {
  "@type": "CollegeOrUniversity",
  "name": "Universitat de Vic – Universitat Central de Catalunya",
  "alternateName": "UVic-UCC",
  "department": { "@type": "CollegeOrUniversity", "name": "UManresa", "url": "https://www.umanresa.cat/" },
  "address": { "@type": "PostalAddress", "addressLocality": "Manresa", "addressCountry": "ES" }
};

export const hasCredential = [
  {
    "@type": "EducationalOccupationalCredential",
    "name": "Laurea in Podologia",
    "credentialCategory": "degree",
    "dateCreated": "2006",
    "recognizedBy": { "@type": "CollegeOrUniversity", "name": "Università degli Studi di Perugia" }
  },
  {
    "@type": "EducationalOccupationalCredential",
    "name": "Master in Posturologia clinica",
    "credentialCategory": "master",
    "dateCreated": "2011",
    "recognizedBy": { "@type": "CollegeOrUniversity", "name": "Università di Pisa" }
  },
  {
    "@type": "EducationalOccupationalCredential",
    "name": "Diploma in Osteopatia",
    "credentialCategory": "diploma",
    "dateCreated": "2018",
    "recognizedBy": { "@type": "EducationalOrganization", "name": "CRESO", "url": "https://creso.academy/" }
  },
  {
    "@type": "EducationalOccupationalCredential",
    "name": "Corso di Ecografía Podológica",
    "description": "Attività accreditata dalla Comisión de Formación Continuada del Sistema Nacional de Salud (Aragón), 1,6 crediti. Huesca, 31 ottobre 2024.",
    "credentialCategory": "certificate",
    "dateCreated": "2024-10-31",
    "recognizedBy": { "@type": "EducationalOrganization", "name": "World Academy of Podiatric Science (WAPS)" }
  },
  {
    "@type": "EducationalOccupationalCredential",
    "name": "Laurea in Podiatria",
    "credentialCategory": "degree",
    "dateCreated": "2026",
    "recognizedBy": ATENEO_PODIATRIA
  }
];

// Profili esterni che sono Laura (sameAs dello schema Person), uno solo per layout e pagina di Laura.
// MioDottore: profilo base gratuito di Laura (AT-109, 15/10/2026), URL canonico letto il 9/11/2026.
export const sameAsLaura = [
  "https://www.miodottore.it/profilo/laura-zanoni-3",
  "https://www.istitutozaccagnini.it/istituto/docenti/zanoni-laura",
  "https://it.linkedin.com/in/laura-zanoni-121255169",
  "https://www.facebook.com/p/Clinica-Risorgimento-Forl%C3%AC-61566933374873/",
  "https://www.google.com/maps?cid=16692031514607331278"
];
