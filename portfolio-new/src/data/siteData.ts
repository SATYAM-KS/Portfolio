export interface ServiceItem {
  id: string;
  className: string;
  icon: string;
  title: string;
  description: string;
  items?: string[];
  techStack: string[];
}

export interface TimelineItem {
  period: string;
  role: string;
  description: string;
  icon: string;
}

export interface AwardItem {
  title: string;
  counter: string;
  clientIcon: string;
  awardImage: string;
}

export interface ReviewItem {
  name: string;
  handle: string;
  avatar: string;
  text: string;
}

export interface PricingPlan {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  projects: string;
  pages: string;
  responsive: string;
  seo: string;
  delivery: string;
  isPopular?: boolean;
}

export interface SocialItem {
  id: string;
  name: string;
  handle: string;
  followers: string;
  url: string;
  icon: string;
  verified?: boolean;
}

export const siteConfig = {
  name: "Aydem Clarke",
  nickname: "Ace",
  title: "Full-Stack Developer",
  tagline: "I craft innovative websites, brands, and strategies that drive real impact.",
  location: "Based in London, UK",
  coordinates: "62.328° N - 15.845° E",
  status: "Available for a new project",
  experienceYears: "9+",
  experienceLabel: "Years of making the web work.",
  avatarMain: "/images/839bd8ab490ece9581185abd34170211_aiden.jpg",
  avatarSecondary: "/images/73b23eef6a7e495776240b9b6b65fb71_aidem-2.jpg",
  signatureImage: "/images/sign.svg",
  heroImages: [
    "/images/img1.webp",
    "/images/img3.webp",
    "/images/img2.webp"
  ],
  heroVideo: {
    poster: "/images/video-poster-00001.jpg",
    mp4: "/images/video-transcode.mp4",
    webm: "/images/video-transcode.webm"
  },
  contact: {
    phone: "+(123) 586 666 999",
    email: "hello@example.com",
    calendarUrl: "https://cal.com/"
  }
};

export const clientLogos: string[] = [
  "/images/client-1.svg",
  "/images/client-2.svg",
  "/images/client-3.svg",
  "/images/client-4.svg",
  "/images/client-5.svg",
  "/images/client-6.svg",
  "/images/client-7.svg",
  "/images/client-8.svg",
  "/images/client-1.svg",
  "/images/client-7.svg",
  "/images/client-11.svg",
  "/images/client-12.svg",
  "/images/client-13.svg",
  "/images/client-14.svg",
  "/images/client-15.svg",
  "/images/client-16.svg"
];

export const servicesData: ServiceItem[] = [
  {
    id: "full-stack",
    className: "one",
    icon: "/images/icon-1.svg",
    title: "Full-Stack web development",
    description: "Robust frontend & backend solutions.",
    items: [
      "Frontend Development",
      "Backend Architecture",
      "Database Design",
      "API Integration"
    ],
    techStack: [
      "/images/2.svg",
      "/images/5.svg",
      "/images/4.svg",
      "/images/3.svg"
    ]
  },
  {
    id: "custom-design",
    className: "two",
    icon: "/images/icon-2.svg",
    title: "Custom web design",
    description: "Creating visually stunning, user-friendly websites tailored to your brand’s identity.",
    techStack: [
      "/images/6.svg",
      "/images/7.svg",
      "/images/8.svg",
      "/images/9.svg"
    ]
  },
  {
    id: "seo-optimization",
    className: "three",
    icon: "/images/icon-3.svg",
    title: "SEO optimization",
    description: "Optimizing websites to boost search engine rankings and drive organic traffic.",
    techStack: [
      "/images/10.svg",
      "/images/11.svg",
      "/images/12.svg"
    ]
  }
];

export const timelineData: TimelineItem[] = [
  {
    period: "2022 – Present",
    role: "Lead Full-Stack Developer",
    description: "Focused on performance optimization, system design, and full-stack development using React, Node.js, and AWS.",
    icon: "/images/timeline1.svg"
  },
  {
    period: "2019 – 2022",
    role: "Senior Frontend Developer",
    description: "Designed and developed UI/UX for multiple SaaS platforms and eCommerce sites. Worked with Tailwind CSS and GSAP.",
    icon: "/images/timeline2.svg"
  },
  {
    period: "2016 – 2019",
    role: "Web Developer",
    description: "Handled frontend and backend development for client projects using Laravel and Bootstrap.",
    icon: "/images/timeline-203.svg"
  },
  {
    period: "2014 – 2016",
    role: "Junior Developer",
    description: "Contributed to small features, bug fixes, and documentation using HTML, CSS, PHP, and jQuery.",
    icon: "/images/timeline-204.svg"
  }
];

export const awardsData: AwardItem[] = [
  {
    title: "Site of the day / No-Code honor",
    counter: "4X",
    clientIcon: "/images/client-1.svg",
    awardImage: "/images/award-201-20-1-.webp"
  },
  {
    title: "Red dot design awards",
    counter: "2X",
    clientIcon: "/images/client-17.svg",
    awardImage: "/images/award-1.webp"
  },
  {
    title: "Site of the month",
    counter: "3X",
    clientIcon: "/images/client-5.svg",
    awardImage: "/images/award-201-20-2-.webp"
  },
  {
    title: "Site of the month / Honorable mention",
    counter: "2X",
    clientIcon: "/images/client-4.svg",
    awardImage: "/images/award-2.webp"
  }
];

export const workingOnItems: string[] = [
  "Landing page kit",
  "Design newsletter",
  "Filming a video",
  "Creating a component library",
  "Writing a blog",
  "Branding template"
];

export const reviewsData: ReviewItem[] = [
  {
    name: "Sarah Head",
    handle: "@headS",
    avatar: "/images/avatar-1.webp",
    text: "Professional, skilled, and fun to work with. Made complex things feel simple."
  },
  {
    name: "Emily Reed",
    handle: "@emieed",
    avatar: "/images/avatar-4.webp",
    text: "A game-changer for our startup. Brought both strategy and execution to the table."
  },
  {
    name: "Chris Max",
    handle: "@maxicris",
    avatar: "/images/avatar-2.webp",
    text: "Handled everything from UX to backend without missing a beat."
  },
  {
    name: "Louis Ferguson",
    handle: "@louis",
    avatar: "/images/avatar-10.webp",
    text: "A game-changer for our startup. Brought both strategy and execution to the table."
  },
  {
    name: "Jessica Moore",
    handle: "@jessica",
    avatar: "/images/avatar-9.webp",
    text: "Everything is now in one place, and the experience is incredibly smooth."
  },
  {
    name: "Matteo Rossi",
    handle: "@matteo",
    avatar: "/images/avatar-11.webp",
    text: "If you’re looking for a design that looks great and performs even better."
  },
  {
    name: "Noah Thompson",
    handle: "@thompson",
    avatar: "/images/avatar-5.webp",
    text: "We felt heard every step of the way—and the final product exceeded expectations."
  },
  {
    name: "Arjun Mehta",
    handle: "@arjun",
    avatar: "/images/avatar-7.webp",
    text: "The website they built increased our lead conversion rate within the first month."
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter Plan",
    monthlyPrice: 799,
    annualPrice: 900,
    projects: "1 Project",
    pages: "Up to 5 pages/screens",
    responsive: "Responsive Design",
    seo: "Basic SEO setup",
    delivery: "2 Week Delivery",
    isPopular: false
  },
  {
    name: "Pro Plan",
    monthlyPrice: 899,
    annualPrice: 1100,
    projects: "5 Project",
    pages: "Up to 15 pages/screens",
    responsive: "Responsive Design",
    seo: "Basic SEO setup",
    delivery: "5 Week Delivery",
    isPopular: true
  }
];

export const socialLinks: SocialItem[] = [
  {
    id: "x",
    name: "X (Twitter)",
    handle: "@theaydemclarke",
    followers: "6.9K+ followers",
    url: "https://x.com/",
    icon: "/images/x-1.svg",
    verified: true
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "@aydemclarke",
    followers: "5K+ connections",
    url: "https://www.linkedin.com/",
    icon: "/images/linkedin.svg",
    verified: true
  },
  {
    id: "instagram",
    name: "Instagram",
    handle: "@itsaydemclarke",
    followers: "10K+ followers",
    url: "https://www.instagram.com/",
    icon: "/images/instagram-1.svg",
    verified: true
  },
  {
    id: "facebook",
    name: "Facebook",
    handle: "@codedbyaydem",
    followers: "12K+ followers",
    url: "https://www.facebook.com/",
    icon: "/images/facebook-1.svg",
    verified: false
  }
];
