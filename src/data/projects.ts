export interface Project {
  slug: string;
  title: string;
  category: "design" | "development" | "marketing";
  description: string;
  image: string;
  problem: string;
  solution: string;
  tools: string[];
  results: string[];
}

export const projects: Project[] = [
  {
    slug: "nexus-brand",
    title: "Nexus Brand Identity",
    category: "design",
    description: "Complete brand identity for a tech startup including logo, guidelines, and collateral.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    problem: "Nexus lacked a cohesive brand identity that could compete in the crowded SaaS market.",
    solution: "Created a futuristic brand system with dynamic logo variations, a bold color palette, and comprehensive brand guidelines.",
    tools: ["Figma", "Illustrator", "After Effects"],
    results: ["200% increase in brand recognition", "Consistent visual identity across 12 platforms"],
  },
  {
    slug: "aurora-dashboard",
    title: "Aurora Analytics Dashboard",
    category: "development",
    description: "Real-time analytics dashboard with interactive data visualization and AI insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    problem: "Complex data was difficult for stakeholders to understand and act upon.",
    solution: "Built an intuitive dashboard with real-time charts, AI-powered insights, and customizable widgets.",
    tools: ["React", "TypeScript", "D3.js", "Node.js"],
    results: ["40% faster decision-making", "95% user satisfaction score"],
  },
  {
    slug: "pulse-marketing",
    title: "Pulse Digital Campaign",
    category: "marketing",
    description: "Multi-channel digital marketing campaign driving 300% ROI for an e-commerce brand.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    problem: "Low online visibility and poor conversion rates across digital channels.",
    solution: "Implemented a data-driven SEO strategy combined with targeted social media and PPC campaigns.",
    tools: ["Google Ads", "SEMrush", "Meta Ads", "Analytics"],
    results: ["300% ROI", "150% increase in organic traffic", "2x conversion rate"],
  },
  {
    slug: "vortex-webapp",
    title: "Vortex Web Application",
    category: "development",
    description: "SaaS platform for project management with real-time collaboration features.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    problem: "Teams needed a unified platform for managing projects across different departments.",
    solution: "Developed a full-stack web application with real-time collaboration, task management, and reporting.",
    tools: ["Next.js", "Supabase", "Tailwind CSS", "WebSockets"],
    results: ["50% reduction in project delays", "10,000+ active users"],
  },
  {
    slug: "cipher-branding",
    title: "Cipher Creative Suite",
    category: "design",
    description: "UI/UX design for a creative tools platform serving digital artists.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
    problem: "Existing creative tools had steep learning curves and outdated interfaces.",
    solution: "Designed an intuitive interface with contextual toolbars, smart guides, and a modern dark theme.",
    tools: ["Figma", "Photoshop", "Principle"],
    results: ["60% reduction in onboarding time", "4.8/5 app store rating"],
  },
  {
    slug: "echo-seo",
    title: "Echo SEO Transformation",
    category: "marketing",
    description: "Complete SEO overhaul resulting in first-page Google rankings for 50+ keywords.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=600&fit=crop",
    problem: "Website was invisible on search engines with virtually no organic traffic.",
    solution: "Technical SEO audit, content strategy overhaul, and a link-building campaign.",
    tools: ["Ahrefs", "Google Search Console", "Screaming Frog"],
    results: ["First page rankings for 50+ keywords", "400% organic traffic increase"],
  },
];

export const testimonials = [
  {
    name: "Alex Chen",
    role: "CEO, Nexus Technologies",
    text: "Saif transformed our entire brand identity. The attention to detail and creative vision exceeded all expectations.",
    avatar: "AC",
  },
  {
    name: "Maria Santos",
    role: "Marketing Director, Pulse",
    text: "The ROI from Saif's digital marketing campaign was phenomenal. A true strategist who delivers results.",
    avatar: "MS",
  },
  {
    name: "James Walker",
    role: "CTO, Vortex Labs",
    text: "Exceptional development skills combined with stunning design sensibility. Saif is the complete package.",
    avatar: "JW",
  },
];

export const services = [
  {
    title: "Graphic Design",
    description: "Brand identities, UI/UX, illustrations, and visual systems that captivate and convert.",
    icon: "Palette",
  },
  {
    title: "Web Development",
    description: "High-performance websites and web applications built with cutting-edge technologies.",
    icon: "Code",
  },
  {
    title: "SEO & Marketing",
    description: "Data-driven strategies that boost visibility, traffic, and conversions across all channels.",
    icon: "TrendingUp",
  },
  {
    title: "Video Editing",
    description: "Cinematic video production and editing that tells compelling brand stories.",
    icon: "Film",
  },
  {
    title: "SaaS & AI Solutions",
    description: "Custom SaaS platforms and AI-powered tools that automate and scale businesses.",
    icon: "Cpu",
  },
];
