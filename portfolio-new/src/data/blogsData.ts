export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  bannerImage: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      image?: string;
      list?: string[];
    }[];
  };
}

export const blogsData: BlogPost[] = [
  {
    slug: "dark-mode-isnt-just-a-trend--its-smart-ux",
    title: "Dark Mode Isn’t Just a Trend—It’s Smart UX",
    category: "UX/UI Design",
    date: "October 11, 2025",
    excerpt: "Dark Mode offers more than a sleek look—it reduces eye strain, saves battery, and improves accessibility, making it a smart, user-friendly design choice.",
    bannerImage: "/images/blog-1.webp",
    content: {
      intro: "Dark mode started as a visual novelty, but in 2025, it's a UX standard. From mobile apps to SaaS dashboards, users increasingly expect the ability to switch between light and dark themes.",
      sections: [
        {
          heading: "1. Reduces Eye Strain",
          body: "In low-light environments, bright screens can cause discomfort and fatigue. Dark mode offers a softer visual experience that’s easier on the eyes, especially for users who work long hours or browse at night."
        },
        {
          heading: "2. Improves Battery Life",
          body: "On OLED screens, dark pixels use significantly less power. Apps with dark mode can extend device battery life—a small but meaningful improvement in mobile UX.",
          image: "/images/blog-7.webp"
        },
        {
          heading: "3. Caters to User Preference",
          body: "Modern users want personalization. Offering light/dark toggle options makes your interface feel more tailored. This also shows that your brand values flexibility and user choice."
        },
        {
          heading: "4. Looks Sleek & Modern",
          body: "Let’s face it—dark UIs often look more sophisticated. Used correctly, they can make your interface feel premium. Combined with minimalistic design and strong contrast, dark mode enhances focus on key content."
        }
      ]
    }
  },
  {
    slug: "how-to-build-a-scalable-portfolio-site-with-webflow",
    title: "How to Build a Scalable Portfolio Site with Webflow",
    category: "No-Code",
    date: "October 15, 2025",
    excerpt: "Learn how to design and develop a professional, scalable portfolio site using Webflow.",
    bannerImage: "/images/blog-2.webp",
    content: {
      intro: "Creating a professional online presence is essential for freelancers, creatives, and agencies. But not everyone has the time—or technical skills—to build a site from scratch. That’s where Webflow comes in. Webflow empowers you to build fully responsive, high-performing websites without touching a single line of code.",
      sections: [
        {
          heading: "1. Start with a Clean Structure",
          body: "Use the Webflow Designer to create a modular layout that ensures scalability as your site grows.",
          list: [
            "A reusable header and footer",
            "Dynamic CMS collections for portfolio items and blog posts",
            "Utility classes to speed up your design process"
          ]
        },
        {
          heading: "2. Use CMS Collections for Portfolio Items",
          body: "Instead of hard-coding projects, set up a CMS Collection. Each new portfolio item can then be created just by filling out a form—no need to redesign or duplicate pages."
        },
        {
          heading: "3. Optimize for Performance & SEO",
          body: "Webflow’s hosting includes built-in SSL, CDN, and fast load speeds. Ensure your meta tags, alt tags, and semantic structure are finely tuned."
        },
        {
          heading: "4. Add Interactions & Animations",
          body: "Webflow’s Interactions panel lets you animate elements on scroll, hover, or click—adding polish and professionalism to your site.",
          image: "/images/blog-6.webp"
        },
        {
          heading: "5. Make It Client-Ready",
          body: "Use Editor Mode to let clients update content safely without editing the design. Add simple, branded guides or tooltips for ease of use."
        }
      ]
    }
  },
  {
    slug: "my-favorite-tools-for-full-stack-development-in-2025",
    title: "My favorite tools for Full-Stack development in 2025",
    category: "Development",
    date: "October 11, 2025",
    excerpt: "My top full-stack tools in 2025 for building fast, scalable, and efficient web apps.",
    bannerImage: "/images/blog-3.webp",
    content: {
      intro: "In 2025, full-stack development has reached a point where performance, scalability, and developer experience are no longer trade-offs—they’re built-in expectations. With an ever-expanding ecosystem of tools, the key is to choose ones that not only solve problems today but also scale with tomorrow’s challenges.",
      sections: [
        {
          heading: "1. Next.js 15 & React 19",
          body: "Next.js continues to dominate the React ecosystem with improved server actions, edge rendering, and built-in image optimizations. It’s a complete framework for modern full-stack applications."
        },
        {
          heading: "2. Tailwind CSS 4",
          body: "Tailwind remains unmatched in utility-first styling. Smarter JIT compilation, dark mode variants, and CSS variable support drastically reduce custom CSS code while ensuring design consistency."
        },
        {
          heading: "3. Supabase",
          body: "An open-source Firebase alternative, Supabase gives you instant APIs, authentication, edge functions, and real-time databases—all built on PostgreSQL."
        },
        {
          heading: "4. PlanetScale",
          body: "Built on Vitess, PlanetScale makes MySQL databases production-grade and developer-friendly with database branching and automated horizontal scaling."
        },
        {
          heading: "5. Zod + TypeScript",
          body: "For data validation and type safety, Zod alongside TypeScript enforces runtime validation of your API inputs/outputs while giving you strong static typing."
        },
        {
          heading: "6. Vercel",
          body: "When it comes to deployment, one-click deploys, preview environments for every pull request, and global CDN performance make it the premier hosting platform."
        }
      ]
    }
  },
  {
    slug: "why-every-business-needs-a-developer-who-understands-design",
    title: "Why every business needs a developer Who understands design",
    category: "Design Thinking",
    date: "October 11, 2025",
    excerpt: "A developer who understands design bridges the gap between functionality and user experience—ensuring products are not only built well but also look great and feel intuitive to use.",
    bannerImage: "/images/blog-5.webp",
    content: {
      intro: "In today's digital-first world, good design isn't just a luxury—it’s a business imperative. Yet, many companies still operate with a clear divide between designers and developers. This divide often leads to miscommunication, misalignment, and missed opportunities.",
      sections: [
        {
          heading: "1. They Bring Designs to Life—Accurately",
          body: "It’s one thing to receive a beautiful Figma file; it’s another to translate that file into a responsive, pixel-perfect, accessible web experience. A design-savvy developer respects spacing, typography, color systems, and interaction flows."
        },
        {
          heading: "2. They Prioritize User Experience",
          body: "Great developers think beyond code. They anticipate how users will interact with an interface, asking if touch targets are accessible, modal focus is handled, and transitions enhance rather than distract.",
          image: "/images/blog-4.webp"
        },
        {
          heading: "3. They Reduce Development Cycles",
          body: "When a developer understands the rationale behind design decisions, fewer revisions are needed. They can suggest alternative implementations that preserve the design intent while improving performance or accessibility."
        },
        {
          heading: "4. They Empower Small Teams",
          body: "Startups, agencies, and lean teams benefit hugely from hybrid roles. A developer who knows design can wear multiple hats, reducing the need for constant hand-offs."
        },
        {
          heading: "5. They Help Maintain Design Systems",
          body: "Design systems are the backbone of scalable UI. Developers who understand design principles are better at building and maintaining component libraries."
        }
      ]
    }
  }
];
