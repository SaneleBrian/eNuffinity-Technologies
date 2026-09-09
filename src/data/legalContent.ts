export type LegalPolicyId = "privacy" | "terms" | "popia" | "cookies";

export type LegalSection = {
  heading: string;
  body: string[];
};

export type LegalPolicy = {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
};

const COMPANY = "eNuffinity Technologies (PTY) LTD";
const LAST_UPDATED = "9 September 2026";

export const legalPolicies: Record<LegalPolicyId, LegalPolicy> = {
  privacy: {
    title: "Privacy Policy",
    lastUpdated: LAST_UPDATED,
    sections: [
      {
        heading: "1. Who we are",
        body: [
          `${COMPANY} ("eNuffinity", "we", "us") is a software development company based in Sandton, Gauteng, South Africa. This policy explains what personal information we collect through this website, why we collect it, and how it is protected.`,
        ],
      },
      {
        heading: "2. Information we collect",
        body: [
          "When you submit our contact form, we collect the information you choose to provide: first name, last name, work email, phone number (optional), company name (optional), project type, and your project details.",
          "We do not collect payment information, ID numbers, or any special category of personal information through this website.",
        ],
      },
      {
        heading: "3. How we use your information",
        body: [
          "Information submitted through the contact form is used solely to respond to your enquiry, schedule a discovery call, and prepare a project proposal. We do not sell, rent, or share your information with third parties for marketing purposes.",
          "Contact form submissions are delivered to us via a transactional email service (EmailJS) and are not used to build an advertising profile.",
        ],
      },
      {
        heading: "4. Legal basis & retention",
        body: [
          "We process your information based on your consent (given when you submit the form) and our legitimate interest in responding to business enquiries. We retain enquiry data only for as long as necessary to respond to you and, where a project proceeds, for the duration of the resulting business relationship plus any period required by South African law.",
        ],
      },
      {
        heading: "5. Your rights",
        body: [
          "Under POPIA and, where applicable, the GDPR, you may request access to, correction of, or deletion of your personal information at any time. To exercise these rights, email hello@enuffinity.co.za.",
        ],
      },
      {
        heading: "6. Contact",
        body: [
          "Questions about this policy can be sent to hello@enuffinity.co.za or +27 64 666 4311.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms and Conditions",
    lastUpdated: LAST_UPDATED,
    sections: [
      {
        heading: "1. Acceptance of terms",
        body: [
          `By accessing this website or engaging ${COMPANY} for services, you agree to these Terms and Conditions. If you do not agree, please do not use this site or our services.`,
        ],
      },
      {
        heading: "2. Website use",
        body: [
          "This website and its content (text, graphics, logos, and code) are the property of eNuffinity Technologies unless otherwise stated, and may not be reproduced without written permission.",
          "Package prices displayed on this site are indicative starting prices for planning purposes only. Final scope and pricing are confirmed in a written proposal after a discovery call.",
        ],
      },
      {
        heading: "3. Engagements & payment",
        body: [
          "Project engagements are governed by a separate written agreement or statement of work signed by both parties, which takes precedence over the general descriptions on this website.",
          "Unless otherwise agreed in writing, source code and deliverables are transferred to the client upon receipt of full payment.",
        ],
      },
      {
        heading: "4. Limitation of liability",
        body: [
          "eNuffinity Technologies provides this website on an \"as is\" basis and makes no warranties regarding uninterrupted or error-free operation. To the maximum extent permitted by South African law, we are not liable for indirect or consequential loss arising from use of this website.",
        ],
      },
      {
        heading: "5. Governing law",
        body: [
          "These terms are governed by the laws of the Republic of South Africa, and any disputes fall under the jurisdiction of the South African courts.",
        ],
      },
      {
        heading: "6. Contact",
        body: [
          "For questions about these terms, contact hello@enuffinity.co.za.",
        ],
      },
    ],
  },
  popia: {
    title: "POPIA Compliance",
    lastUpdated: LAST_UPDATED,
    sections: [
      {
        heading: "1. Our commitment",
        body: [
          `${COMPANY} is committed to complying with the Protection of Personal Information Act 4 of 2013 (POPIA), which regulates how South African organisations may collect, use, store, and share personal information.`,
        ],
      },
      {
        heading: "2. Conditions for lawful processing",
        body: [
          "We only process personal information you voluntarily submit (via the contact form), for the specific, explicit purpose of responding to your enquiry, and we do not process more information than is necessary for that purpose (data minimisation) — for example, our contact form no longer asks for budget details that aren't required to start a conversation.",
        ],
      },
      {
        heading: "3. Security safeguards",
        body: [
          "This site is served over HTTPS/TLS. Contact form submissions are transmitted via an encrypted, reputable transactional email provider. Access to any resulting client information is restricted to the people directly involved in delivering your project.",
        ],
      },
      {
        heading: "4. Your rights as a data subject",
        body: [
          "You have the right to access, correct, or request deletion of personal information we hold about you, and to object to processing you did not consent to. Submit such requests to hello@enuffinity.co.za.",
        ],
      },
      {
        heading: "5. Information Regulator",
        body: [
          "If you believe your POPIA rights have been infringed, you may lodge a complaint with South Africa's Information Regulator (www.justice.gov.za/inforeg).",
        ],
      },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    lastUpdated: LAST_UPDATED,
    sections: [
      {
        heading: "1. What we use",
        body: [
          "This website uses browser local storage (not third-party tracking cookies) for two strictly necessary, functional purposes: remembering your light/dark theme preference, and remembering that you have responded to the cookie notice, so we don't ask again on every visit.",
        ],
      },
      {
        heading: "2. What we don't use",
        body: [
          "We do not currently use advertising cookies, third-party analytics trackers, or cross-site tracking of any kind. If this changes in the future, we will update this policy and ask for your consent before enabling anything beyond strictly necessary storage.",
        ],
      },
      {
        heading: "3. Managing storage",
        body: [
          "Because we only use local storage (not cookies) for these preferences, you can clear them at any time via your browser's site data settings, or by clicking \"Decline\" on the cookie notice.",
        ],
      },
      {
        heading: "4. Contact",
        body: [
          "Questions about this policy can be sent to hello@enuffinity.co.za.",
        ],
      },
    ],
  },
};
