import ServiceSummary from "@/models/ServiceSummary.interface"

export const HomeContent: ServiceSummary[] = [
  {
    title: "Start Business",
    description: "Get your business officially registered with the government. We assist you in registering:",
    types: [
      "Private Limited Company",
      "Public Limited Company",
      "One Person Company",
      "Limited Liability Partnership (LLP)",
      "Partnership Firm",
      "Proprietorship Firm"
    ],
    price: 1999,
    href: "/start-business"
  },
  {
    title: "Registration",
    description: "Make your business compliant and legally recognized by obtaining necessary registrations. We provide:",
    types: [
      "GST Registration",
      "MSME/Udyam Registration",
      "Import-Export Code (IEC)",
      "FSSAI Food License"
    ],
    price: 1999,
    href: "/registration"
  },
  {
    title: "Trademark",
    description: "Secure your brand identity by registering and protecting your trademarks. We offer services in:",
    types: [
      "Trademark Registration",
      "Trademark Objection",
      "Trademark Hearing",
      "Trademark Opposition",
      "Trademark Rectification",
      "Trademark Renewal",
      "Trademark Restoration",
      "Trademark Assignment"
    ],
    price: 1999,
    href: "/trademark"
  },
  {
    title: "ACCOUNTING & TAXES",
    description: "Our Accounting & Taxes services ensure that your business remains compliant with all applicable financial regulations, minimizing tax liabilities, and optimizing your financial performance.",
    types: [
      "Accounting & Bookkeeping Services",
      "Income Tax Filing (ITR)",
      "Tax Planning and Advisory",
      "More..."
      // "Income Tax Notice Reply",
      // "TDS Return Filing",
      // "GST Cancellation",
      // "GST Return Filing",
      // "Input Tax Credit (ITC) Reconciliation"
    ],
    price: 1999,
    href: "/accounting-taxes"
  }
];