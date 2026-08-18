export interface Project {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  service: string;
  releaseDate: string;
  client: string;
  location: string;
  liveUrl?: string;
  bannerImage: string;
  overview: string[];
  highlights: string[];
  galleryImages: string[];
  processText: string[];
  testimonial: {
    quote: string;
    author: string;
  };
}

export const projectsData: Project[] = [
  {
    slug: "quicktask-productivity-app",
    title: "QuickTask - Productivity App",
    category: "Branding",
    tagline: "A sleek, mobile-first productivity app built for teams and individuals to manage tasks, collaborate, and stay focused.",
    service: "Branding",
    releaseDate: "October 15, 2025",
    client: "QuickTask Inc.",
    location: "San Francisco, USA",
    liveUrl: "https://webflow.com/templates/designers/webestica",
    bannerImage: "/images/05.webp",
    overview: [
      "QuickTask is a modern productivity app designed to help individuals and teams organize their tasks, set priorities, and collaborate in real time. Our goal was to create a sleek, intuitive interface that reduces friction and increases focus—making daily task management feel effortless.",
      "We began with in-depth user research to understand how different people manage tasks—from solo freelancers to team leads. Based on these insights, we designed a flexible yet powerful task board with customizable workflows, smart reminders, and priority tagging."
    ],
    highlights: [
      "A minimal, distraction-free UI that works beautifully in both light and dark mode.",
      "Drag-and-drop task boards for seamless workflow management.",
      "A collaborative space where users can assign tasks, set deadlines, and add comments in real time.",
      "Mobile-first design, optimized for both iOS and Android platforms."
    ],
    galleryImages: [
      "/images/gallery-5-.webp",
      "/images/gallery-6-.webp"
    ],
    processText: [
      "Our process began with user interviews to understand productivity pain points—like task overload, lack of prioritization, and poor collaboration tools. These insights guided the creation of intuitive flows and a minimal interface that supports focus, not distraction.",
      "We also worked closely with QuickTask’s internal dev team to ensure seamless handoff using structured design systems, scalable components, and export-ready specs. Usability testing helped refine microinteractions, especially in the task management flow and calendar views."
    ],
    testimonial: {
      quote: "The interface is slick, fast, and intuitive. Our team loved the process and the final product. We saw immediate user engagement after launch.",
      author: "David Carter – @david.designs"
    }
  },
  {
    slug: "brandora-creative-agency-website",
    title: "Brandora – Creative Agency Website",
    category: "UI/UX design",
    tagline: "A clean and scalable CRM dashboard built to streamline sales tracking and boost team productivity.",
    service: "UI/UX design",
    releaseDate: "October 15, 2025",
    client: "Toronto, Canada",
    location: "Tech Co.",
    liveUrl: "https://webflow.com/templates/designers/webestica",
    bannerImage: "/images/01.webp",
    overview: [
      "Brandora is a boutique creative agency with a bold visual identity. They needed a website that reflected their energy, creativity, and premium positioning—without sacrificing performance or usability.",
      "We created a high-impact visual experience with smooth animations, crisp typography, and an editorial layout that highlights their case studies and team culture. Built in Webflow, the site is easy for their internal team to update and maintain."
    ],
    highlights: [
      "Interactive homepage with scroll-triggered animations",
      "Custom CMS setup for portfolio and blog content",
      "Engaging 'About Us' and team spotlight sections",
      "Fully responsive, with mobile-optimized interactions"
    ],
    galleryImages: [
      "/images/gallery-1.webp",
      "/images/gallery-2.webp"
    ],
    processText: [
      "The core goal was to reduce complexity while keeping advanced features accessible. We redesigned the architecture of the dashboard to highlight only the most relevant metrics per user role—allowing sales reps, managers, and executives to view only what matters to them.",
      "Using card-based modules, we enabled users to personalize their dashboard layouts. We also integrated visual cues (color states, progress rings, tooltips) to create a more intuitive experience."
    ],
    testimonial: {
      quote: "They understood our vision from day one. The result feels bold, stylish, and totally us. Also, the CMS setup makes updates super easy.",
      author: "Sofia Mendes – @sofia.codes"
    }
  },
  {
    slug: "bloom-crm-sales-dashboard",
    title: "Bloom CRM – Sales Dashboard",
    category: "SaaS Web Design",
    tagline: "A bold, interactive agency website that captures Brandora’s creative energy and showcases their best work.",
    service: "SaaS Web Design",
    releaseDate: "October 15, 2025",
    client: "Brandora Studio",
    location: "Berlin, Germany",
    liveUrl: "https://webflow.com/templates/designers/webestica",
    bannerImage: "/images/02.webp",
    overview: [
      "Bloom CRM is a powerful sales tool designed to simplify the way businesses manage customer relationships, leads, and conversions. We were brought in to redesign the dashboard experience to make it cleaner, more actionable, and easier to navigate.",
      "Our team crafted a sleek, responsive UI that puts the most important metrics front and center—without overwhelming the user. The layout allows sales teams to track progress, manage pipelines, and view performance insights in real time."
    ],
    highlights: [
      "Clean dashboard layout with quick access to leads, deals, and performance data",
      "Custom chart components for visualizing KPIs",
      "Modular UI components for scalability",
      "Smooth dark mode integration for long work sessions"
    ],
    galleryImages: [
      "/images/gallery-3.webp",
      "/images/gallery-4.webp"
    ],
    processText: [
      "Brandora’s vision was clear: bold, vibrant, and confident—but never chaotic. We embraced a grid-based editorial layout, using oversized typography and a dramatic black-and-white palette accented with bursts of color.",
      "To showcase their client stories, we developed a CMS-powered case study layout that balances media with storytelling. Each case study page features scroll-triggered interactions and smart image sequencing to create visual depth."
    ],
    testimonial: {
      quote: "The dashboard design is a huge upgrade—elegant, functional, and easy to navigate. Our team productivity improved right away.",
      author: "Arjun Mehta – @arjun.techie"
    }
  },
  {
    slug: "shoppr-e-commerce-landing-page",
    title: "Shoppr – E-commerce Landing Page",
    category: "UI Design",
    tagline: "A conversion-focused e-commerce landing page that combines storytelling, product visuals, and strong CTAs.",
    service: "UI Design",
    releaseDate: "October 15, 2025",
    client: "Shoppr Retail",
    location: "London, UK",
    liveUrl: "https://webflow.com/templates/designers/webestica",
    bannerImage: "/images/03.webp",
    overview: [
      "Shoppr is a fast-growing e-commerce startup specializing in curated lifestyle products. They needed a high-converting landing page for an upcoming product launch—something that not only looked great but also drove results.",
      "We designed a visually rich landing page focused on storytelling, social proof, and smooth navigation. The goal was to guide users naturally from interest to purchase with minimal friction."
    ],
    highlights: [
      "Bold hero section with call-to-action and product showcase",
      "Smooth scroll sections highlighting features, reviews, and FAQs",
      "High-conversion layout tailored for paid ad traffic",
      "Mobile-first responsive design for all screen sizes"
    ],
    galleryImages: [
      "/images/gallery-2-.webp",
      "/images/gallery-2-.webp"
    ],
    processText: [
      "Shoppr’s primary ask was clarity and conversion. We started with A/B-tested wireframes to test layout structures, product highlight hierarchy, and CTA placement. Once the structure was validated, we moved into high-fidelity design with polished photography, layered shadows, and conversion-focused copy.",
      "We integrated urgency elements (limited-time banners, real-time inventory indicators) along with trust badges and user reviews to build buyer confidence. Performance optimization was a key focus, with compressed images, lazy loading, and mobile-first prioritization."
    ],
    testimonial: {
      quote: "Our launch outperformed expectations, and we hit 130% of our sales goal. The landing page was fast, clean, and persuasive.",
      author: "Aisha Khan – @aishak.design"
    }
  },
  {
    slug: "insightly-analytics-saas-website",
    title: "Insightly – Analytics SaaS Website",
    category: "Webflow Development",
    tagline: "A modern SaaS website for a real-time analytics platform—designed to inform, engage, and convert.",
    service: "Webflow Development",
    releaseDate: "October 15, 2025",
    client: "Insightly Analytics",
    location: "Singapore",
    liveUrl: "https://webflow.com/templates/designers/webestica",
    bannerImage: "/images/04.webp",
    overview: [
      "Insightly is a data analytics platform helping companies visualize and act on real-time business data. They approached us to redesign their marketing website to better communicate their value, showcase product features, and improve lead generation.",
      "We created a structured, conversion-optimized website with modular sections tailored for SaaS audiences—from founders to enterprise buyers."
    ],
    highlights: [
      "Feature-rich product sections with animated illustrations",
      "Integrated blog and resource center powered by CMS",
      "Use-case focused layouts that speak to multiple industries",
      "Built in Framer with interactive components and fast performance"
    ],
    galleryImages: [
      "/images/gallery-4-.webp",
      "/images/gallery-1-.webp"
    ],
    processText: [
      "For Insightly, the challenge was visualizing complex data systems in a way that’s understandable for non-technical decision-makers. We started by crafting personas and use-case narratives, and then mapped out a multi-tier navigation that allows users to explore the platform based on their role or goals.",
      "Each section was built with modular blocks that could easily be reused across new pages or A/B tests. We included real product screenshots, interactive feature demos, and animated illustrations to keep the site dynamic."
    ],
    testimonial: {
      quote: "They brought structure and creativity together in one clean experience. The site not only looks great, it’s already converting better.",
      author: "Noah Thompson – @noah.creates"
    }
  }
];
