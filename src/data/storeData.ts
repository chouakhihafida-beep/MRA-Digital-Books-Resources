export interface DigitalEdition {
  id: string;
  indexNumber: string;
  title: string;
  subtitle: string;
  priceLabel: string;
  categoryKey: 'reflection' | 'action';
  categoryLabel: string;
  format: string;
  shortDescription: string;
  detailedOverview: string;
  keyHighlights: string[];
  audienceNote: string;
  gumroadUrl: string;
  coverImage: string;
  thumbnailImage: string;
  coverAlt: string;
}

export const STORE_INFO = {
  brandName: 'MRA Digital',
  fullTitle: 'MRA – Digital Books & Resources',
  authorCredit: 'Prepared by Mohammed Rfiq · Presented by MRA',
  welcomeQuote: 'Hi, there how are you ? Welcome to my store',
  gumroadUrl: 'https://najisaid.gumroad.com/',
  heroImage: '/src/assets/images/hero_editorial_books_1795309179273.jpg',
  heroImageAlt: 'Curated hardcover and digital book editions resting on a sunlit stone desk',
};

export const STORE_SPECS = [
  {
    index: '02',
    label: 'Published Digital Editions',
    detail: 'Practical business and marketing guides on Gumroad',
  },
  {
    index: 'PDF / EPUB',
    label: 'Instant Digital Delivery',
    detail: 'Immediate access and file download right after checkout',
  },
  {
    index: '$3.99+',
    label: 'Flexible Fair Pricing',
    detail: 'Pay-what-you-want pricing starting from $3.99 on Gumroad',
  },
  {
    index: 'Multi',
    label: 'Read on Any Device',
    detail: 'Formatted cleanly for desktop, tablet, and mobile reading',
  },
];

export const DIGITAL_EDITIONS: DigitalEdition[] = [
  {
    id: 'worth-talking-about',
    indexNumber: '01',
    title: 'Worth talking about',
    subtitle: 'How to Create Products, Ideas, and Experiences People Notice, Choose, and Recommend',
    priceLabel: '$3.99+',
    categoryKey: 'reflection',
    categoryLabel: 'Positioning & Word of Mouth',
    format: 'Ebook · PDF / EPUB',
    shortDescription:
      'A practical 10-chapter guide for founders, marketers, makers, and small-business owners built around the five-link Share Chain framework: Relevance, Difference, Proof, Experience, and Retelling.',
    detailedOverview:
      'A good product can still be ignored if people cannot see why it matters to them. Worth Talking About walks through how to define your audience by their real situation, back your promise with verifiable proof, design the customer experience, and turn your offer into a simple story people can retell.',
    keyHighlights: [
      'Introduces the five-link Share Chain: Relevance, Difference, Proof, Experience, and Retelling.',
      'Includes ready-to-use tools: a 30-day Shareability Sprint, diagnostic tables, experiment cards, and a scorecard.',
      'Provides a master worksheet and a 10-point ethical promotion checklist with zero hype.',
    ],
    audienceNote: 'Prepared by Mohammed Rfiq · Presented by MRA for founders, makers, and small businesses.',
    gumroadUrl: 'https://najisaid.gumroad.com/l/dzveg?layout=profile',
    coverImage: '/src/assets/images/gumroad_worth_talking_about_cover.png',
    thumbnailImage: '/src/assets/images/gumroad_worth_talking_about_thumb.png',
    coverAlt: 'Official Gumroad cover banner for Worth Talking About by Mohammed Rfiq and MRA',
  },
  {
    id: 'belief-into-action',
    indexNumber: '02',
    title: 'BELIEF INTO ACTION',
    subtitle: 'A Practical Guide to Turning Purpose into Marketing, Sales, and Measurable Business Results',
    priceLabel: '$4.90+',
    categoryKey: 'action',
    categoryLabel: 'Strategy & Execution',
    format: 'Digital Guide · PDF',
    shortDescription:
      'A hands-on guide for entrepreneurs, marketers, and sales professionals introducing the Purpose → Practice → Proof framework to connect brand values with daily business decisions.',
    detailedOverview:
      'What if your business purpose could shape the way you market, sell, serve customers, and grow? BELIEF INTO ACTION connects what your business stands for with what it actually does—covering customer understanding, authentic messaging, customer experience, innovation, and measurable performance.',
    keyHighlights: [
      'Built around the three-part framework: Purpose → Practice → Proof.',
      'Shows how to align organizational values with everyday marketing and sales decisions.',
      'Covers customer trust, experience improvement, and tracking measurable business results.',
    ],
    audienceNote: 'Prepared by Mohammed Rfiq · Presented by MRA for entrepreneurs, marketers, and sales teams.',
    gumroadUrl: 'https://najisaid.gumroad.com/l/BIA?layout=profile',
    coverImage: '/src/assets/images/gumroad_belief_into_action_cover.png',
    thumbnailImage: '/src/assets/images/gumroad_belief_into_action_thumb.png',
    coverAlt: 'Official Gumroad cover banner for BELIEF INTO ACTION by Mohammed Rfiq and MRA',
  },
];

export const EDITORIAL_PILLARS = [
  {
    number: '01.',
    title: 'Frameworks Built for Real Business Decisions',
    description:
      'Both titles move past vague theory—giving founders, marketers, and small teams concrete systems like the Share Chain and Purpose → Practice → Proof.',
  },
  {
    number: '02.',
    title: 'Immediate Digital Access on Gumroad',
    description:
      'Once checkout is completed on Gumroad, your PDF or EPUB files are delivered immediately with permanent library access whenever you want to revisit them.',
  },
  {
    number: '03.',
    title: 'Transparent Pay-What-You-Want Pricing',
    description:
      'Purchases, receipts, and downloads run directly through Gumroad’s official checkout with clear minimum pricing starting at $3.99 and $4.90.',
  },
];
