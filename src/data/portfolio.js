export const profile = {
  name: 'Sharmila Kethavath',
  title: 'Digital Marketing Strategist',
  location: 'Hyderabad, Telangana, India',
  email: 'kethavathsharmila@gmail.com',
  phone: '',
  linkedin: 'https://www.linkedin.com/in/sharmila-k-56477a256/',
  resume: '/resume.pdf',
  intro: 'I bring strategy, creative content and analytics together to help brands build a clearer, more useful digital presence.',
  about: 'I am a digital marketing and web professional with experience across website initiatives, content, SEO activities, social media and UI/UX work. I enjoy understanding an audience, shaping useful communication and using data to make better decisions. My background also includes web technologies and analytics tools, which helps me connect marketing ideas with how digital experiences are built and measured.'
}

export const services = [
  { title: 'Search Engine Optimisation', description: 'Keyword discovery, search intent, on-page structure, content optimisation and local visibility.', detail: 'Build a search foundation around what customers are looking for, then organise pages and content to make that information easier to discover.' },
  { title: 'Social Media Marketing', description: 'Content calendars, platform planning, creative direction and community engagement.', detail: 'Plan platform-relevant content with a consistent brand voice, useful formats and a clear publishing rhythm.' },
  { title: 'Meta Ads', description: 'Campaign planning, audience research, creative concepts and lead-generation fundamentals.', detail: 'Structure campaigns around a clear objective, audience, message and conversion action, then review the available results.' },
  { title: 'Google Ads', description: 'Search campaign structure, keyword planning, ad copy and measurement fundamentals.', detail: 'Connect search intent to relevant ad groups, landing pages and conversion tracking before evaluating performance.' },
  { title: 'Content & Blog Writing', description: 'Blog outlines, website copy, captions and helpful content for target audiences.', detail: 'Turn audience questions into clear content with useful headings, natural keyword placement and a strong next step.' },
  { title: 'Marketing Analytics', description: 'UTM planning, KPI selection, reporting and performance insights.', detail: 'Make campaign reporting easier to understand by connecting objectives with the right metrics and clear observations.' }
]

export const skillGroups = [
  { title: 'Digital Marketing', color: 'blue', items: ['SEO fundamentals', 'Keyword research', 'Social media planning', 'Content writing', 'Meta Ads concepts', 'Google Ads concepts', 'Google Analytics'] },
  { title: 'Creative & Web', color: 'violet', items: ['Canva', 'Figma', 'WordPress', 'Wix', 'HTML', 'CSS', 'JavaScript'] },
  { title: 'Data & Reporting', color: 'mint', items: ['Microsoft Excel', 'Power BI', 'Tableau', 'SQL', 'Python for analysis'] }
]

export const skills = skillGroups.flatMap(group => group.items)

export const processSteps = [
  { number: '01', title: 'Understand', description: 'Clarify the business goal, audience, offer and current digital presence before choosing a channel.' },
  { number: '02', title: 'Plan', description: 'Shape the message, content, keywords, campaign structure and measurement plan around the objective.' },
  { number: '03', title: 'Create & launch', description: 'Prepare useful content and creative assets, check links and tracking, then publish or launch.' },
  { number: '04', title: 'Measure & improve', description: 'Review the available data, identify what is working and recommend practical next steps.' }
]

export const experience = [
  {
    company: 'Vedhas Technology Solutions',
    role: 'Digital Marketing',
    period: 'September 2026 – Present',
    description: 'Currently working in digital marketing. This portfolio lists the confirmed role and dates; specific responsibilities, platforms and campaign outcomes can be added as they are documented.'
  },
  {
    company: 'Vikrics OPC Private Limited',
    role: 'Digital Marketing, Web Applications & UI/UX',
    period: 'September 2024 – July 2026',
    description: 'Contributed to website and digital initiatives across content, SEO activities, web application development and user-interface work.'
  }
]

export const certifications = [
  'Data Analytics and Visualization — Accenture North America',
  'Tableau Mastery — GUVI (with HCL)',
  'Python Programming & Excel Data Analysis — GUVI',
  'Responsive Web Design — freeCodeCamp (2023)',
  'UI/UX Design Essentials — Coursera (2023)',
  'AI Tools & ChatGPT — Be10x'
]

export const projects = [
  {
    slug: 'website-digital-initiatives',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=88',
    imageAlt: 'Analytics dashboard on a desktop screen',
    name: 'Website & Digital Initiatives',
    client: 'Vikrics OPC Private Limited',
    category: 'Digital Experience',
    status: 'Experience-based case study',
    period: 'September 2024 – July 2026',
    summary: 'A cross-functional body of work spanning website content, SEO activities, web application development and user-interface work.',
    challenge: 'The work covered several connected digital touchpoints. The individual briefs, starting metrics and priority audiences varied by initiative and are not represented as one single campaign.',
    role: 'Contributed to website and digital initiatives across content, SEO activities, web application development and UI work.',
    execution: [
      'Supported website and digital content activities.',
      'Contributed to SEO-related work and website improvements.',
      'Worked on web application development and user-interface tasks.',
      'Connected content and interface considerations with the overall website experience.'
    ],
    outcome: 'Contributions were made across the listed workstreams. Verified business outcomes and analytics have not been supplied, so no traffic, lead or revenue claims are presented.',
    tools: ['Website platforms (project-specific)', 'SEO research', 'UI/UX design', 'Web technologies'],
    metrics: [],
    evidence: 'Detailed screenshots, public URLs and analytics can be added after confirming which materials are approved to share.',
    featured: true
  },
  {
    slug: 'fashionpickhub-social-content',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=88',
    imageAlt: 'Fashion clothing display representing a fashion content brand',
    name: 'FashionPickHub — Social Content',
    client: 'FashionPickHub (self-initiated project)',
    category: 'Social Media & Content',
    status: 'Personal brand / content project',
    period: 'Project dates to be confirmed',
    summary: 'A self-initiated fashion discovery and affiliate-content concept focused on presenting product finds through social content.',
    challenge: 'Create a recognisable content identity and make product discovery easier for an audience browsing fashion ideas and recommendations.',
    role: 'Developed the FashionPickHub concept and explored social content, product presentation, captions and platform-specific discovery.',
    execution: [
      'Worked on the FashionPickHub identity and social profile direction.',
      'Explored fashion product post and short-form content ideas.',
      'Prepared caption and hashtag approaches for social discovery.',
      'Considered how content can guide interested audiences towards product information.'
    ],
    outcome: 'This is a personal content project. Verified follower growth, clicks, affiliate sales and conversion data have not been provided and are not claimed.',
    tools: ['Instagram', 'Canva', 'Social content planning'],
    metrics: [],
    evidence: 'Add selected post screenshots and approved affiliate links to demonstrate the published work.'
  },
  {
    slug: 'promotional-creative-work',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=88',
    imageAlt: 'Colourful creative design workspace with printed visual materials',
    name: 'Promotional Creative Concepts',
    client: 'Self-directed design and promotional briefs',
    category: 'Creative Content',
    status: 'Creative portfolio samples',
    period: 'Project dates to be confirmed',
    summary: 'A collection concept for promotional visuals and supporting copy across digital marketing services and travel-related communication.',
    challenge: 'Communicate an offer or travel idea quickly through a clear visual hierarchy, relevant imagery and concise supporting text.',
    role: 'Worked on promotional poster concepts and the accompanying messaging direction for digital channels.',
    execution: [
      'Explored headline, offer and contact-information hierarchy.',
      'Selected imagery and visual direction to suit the promotional topic.',
      'Prepared supporting captions and social publishing ideas.',
      'Considered mobile-first readability for social placements.'
    ],
    outcome: 'This section presents creative direction and sample work, not paid-media performance. Reach, enquiries and sales results are not claimed.',
    tools: ['Canva', 'Creative direction', 'Social copywriting'],
    metrics: [],
    evidence: 'Replace sample visuals with final approved poster files before presenting them as completed client deliverables.'
  }
]

export const blogTopics = [
  { title: 'A beginner-friendly guide to SEO', category: 'SEO', description: 'Understand how search intent, keywords and useful content work together.' },
  { title: 'Reach, impressions and engagement explained', category: 'Social Media', description: 'Learn the key metrics used to understand social media performance.' },
  { title: 'What to measure in a lead-generation campaign', category: 'Performance Marketing', description: 'A practical overview of clicks, leads, cost per lead and conversion quality.' }
]

export const testimonials = []
