import Service from "@/models/Service";

export const services: Service[] = [
  {
    id: "start-business",
    name: "Start Business",
    heading: "Start Your Business with Confidence",
    subHeading: "Expert Guidance for Setting Up Your Business Entity in India.",
    cta: "Book a Free Consultation.",
    types: [
      {
        name: "Private Limited Company",
        descriptions: [
          "A Private Limited Company is the most preferred business structure for startups and small businesses due to its limited liability protection, ease of fundraising, and separate legal identity.",
          "Register a Pvt Ltd company in India with minimal hassle."
        ],
        features: [
          "Limited liability protection",
          "Easy fundraising & investment opportunities",
          "Separate legal identity",
          "Perpetual existence"
        ],
        price: 9999
      },
      {
        name: "Public Limited Company",
        descriptions: [
          "Suitable for large businesses looking to raise capital from investors."
        ],
        features: [
          "Ideal for large-scale businesses",
          "Can raise funds from the public",
          "Strict regulatory compliance ensures transparency",
          "Separate legal identity & perpetual succession"
        ],
        price: 0 // Custom pricing
      },
      {
        name: "One Person Company",
        descriptions: [
          "Perfect for solo entrepreneurs who want corporate status with limited liability."
        ],
        features: [
          "Limited liability for a single owner",
          "Better credibility than sole proprietorship",
          "No mandatory annual general meetings",
          "Easy to convert into Pvt Ltd"
        ],
        price: 7999
      },
      {
        name: "Limited Liability Partnership (LLP)",
        descriptions: [
          "Ideal for small businesses, an LLP offers limited liability with fewer compliance requirements."
        ],
        features: [
          "Limited liability for partners",
          "No minimum capital requirement",
          "Lesser compliance than Pvt Ltd",
          "Tax benefits over traditional partnerships"
        ],
        price: 5999
      },
      {
        name: "Partnership Firm",
        descriptions: [
          "The simplest form of business, best for individual entrepreneurs."
        ],
        features: [
          "Easy to start with minimal paperwork",
          "Full control & decision-making power",
          "Lower compliance costs",
          "Ideal for freelancers & small traders"
        ],
        price: 3999
      },
      {
        name: "Proprietorship Firm",
        descriptions: [
          "The simplest form of business, best for individual entrepreneurs."
        ],
        features: [
          "Easy to start with minimal paperwork",
          "Full control & decision-making power",
          "Lower compliance costs",
          "Ideal for freelancers & small traders"
        ],
        price: 2999
      }
    ]
  }
];
