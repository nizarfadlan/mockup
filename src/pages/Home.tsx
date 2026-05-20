import { ArrowUpRight, Box, Code2, Layout } from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Inline GitHub icon (not available in lucide-react 1.16)
const Github: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// --- PROJECTS DATA ---
const projects = [
  {
    id: "qbuilder",
    title: "QBuilder Landing Page",
    description:
      "Visual builder for data teams. Crafted with parallax effects, glassmorphism, and interactive stateful animations.",
    path: "/projects/qbuilder",
    icon: Layout,
    tags: ["Landing Page", "React", "Motion"],
    status: "Draft",
    theme: {
      light: "rgba(56, 189, 248, 0.15)",
      border: "group-hover:border-sky-500/50",
      iconText: "text-sky-400",
    },
  },
  // {
  //   id: "analytics-dash",
  //   title: "SaaS Analytics Dashboard",
  //   description: "High-performance metrics dashboard featuring custom charts, dynamic grids, and local state management.",
  //   path: "/projects/analytics-dash",
  //   icon: Activity,
  //   tags: ["Dashboard", "UI/UX", "Data"],
  //   status: "Beta",
  //   theme: {
  //     light: "rgba(167, 139, 250, 0.15)",
  //     border: "group-hover:border-purple-500/50",
  //     iconText: "text-purple-400"
  //   }
  // },
  // {
  //   id: "ai-prompt",
  //   title: "AI Prompt Interface",
  //   description: "Generative chat interface exploration with seamless transitions, skeleton loading, and markdown integration.",
  //   path: "/projects/ai-prompt",
  //   icon: Sparkles,
  //   tags: ["AI", "Interaction", "Minimal"],
  //   status: "Draft",
  //   theme: {
  //     light: "rgba(251, 146, 60, 0.15)",
  //     border: "group-hover:border-orange-500/50",
  //     iconText: "text-orange-400"
  //   }
  // },
  // {
  //   id: "dev-tools",
  //   title: "DevTools UI Kit",
  //   description: "A collection of UI components for internal developer tools. Focused on code readability and accessibility.",
  //   path: "/projects/dev-tools",
  //   icon: Terminal,
  //   tags: ["Design System", "Components"],
  //   status: "Concept",
  //   theme: {
  //     light: "rgba(52, 211, 153, 0.15)",
  //     border: "group-hover:border-emerald-500/50",
  //     iconText: "text-emerald-400"
  //   }
  // }
];

interface ProjectTheme {
  light: string;
  border: string;
  iconText: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  path: string;
  icon: React.ElementType;
  tags: string[];
  status: string;
  theme: ProjectTheme;
}

// Project Card Component with Spotlight & Abstract Cover
const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const Icon = project.icon;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <Link
      to={project.path}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative block animate-fade-up"
      style={{ animationDelay: `${index * 150}ms`, opacity: 0 }}
    >
      {/* Spotlight Effect (Follows Mouse) */}
      <div
        className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.15), transparent 40%)`,
        }}
      />

      <div
        className={`relative h-full bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6 transition-all duration-500 z-10 flex flex-col ${project.theme.border} group-hover:shadow-2xl group-hover:shadow-black`}
      >
        {/* Top Section: Abstract "Art Cover" */}
        <div className="relative w-full h-40 bg-white/[0.02] border border-white/5 rounded-2xl mb-6 overflow-hidden flex items-center justify-center">
          {/* Subtle Dot Pattern inside cover */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "12px 12px",
            }}
          ></div>

          {/* Gradient Orb / Abstract Glow */}
          <div
            className="absolute w-32 h-32 rounded-full blur-[40px] transition-all duration-700 ease-out group-hover:scale-150 group-hover:blur-[50px]"
            style={{ backgroundColor: project.theme.light }}
          />

          {/* Main Icon */}
          <div
            className={`relative z-10 ${project.theme.iconText} transition-transform duration-500 group-hover:scale-110`}
          >
            <Icon strokeWidth={1.5} className="w-12 h-12" />
          </div>

          {/* Status Badge */}
          <div className="absolute top-3 right-3 px-2 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-md text-[10px] font-medium tracking-wider text-zinc-400 uppercase">
            {project.status}
          </div>
        </div>

        {/* Bottom Section: Text Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zinc-100 transition-colors flex justify-between items-center">
            {project.title}
            <ArrowUpRight className="w-5 h-5 text-zinc-600 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-white transition-all duration-300" />
          </h3>

          <p className="text-sm text-zinc-500 leading-relaxed mb-6 flex-1">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[11px] font-medium text-zinc-400 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function Home() {
  // Set body to dark theme (Home page is always dark)
  useEffect(() => {
    const prev = document.body.className;
    document.body.className = "bg-[#050505] text-zinc-300 antialiased";
    return () => {
      document.body.className = prev;
    };
  }, []);

  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Landing Page", "Dashboard", "UI/UX", "AI"];

  // Filter Logic
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <div className="relative min-h-screen flex flex-col font-sans">
      {/* Main Backgrounds */}
      <div className="fixed inset-0 z-0 bg-grid opacity-50"></div>
      <div className="fixed inset-0 z-0 noise-bg"></div>

      {/* Subtle Top Ambient Light */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Header Navigation */}
      <header className="relative z-50 border-b border-white/5 bg-[#050505]/60 backdrop-blur-xl sticky top-0">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white text-black rounded flex items-center justify-center font-bold">
              <Box className="w-4 h-4" />
            </div>
            <span className="font-semibold text-white tracking-tight text-sm">
              UI Lab{" "}
              <span className="text-zinc-500 font-normal">/ Nizar Fadlan</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
            <a
              href="https://nizarfadlan.dev"
              className="text-zinc-400 hover:text-white transition-colors hidden sm:block"
            >
              Back to Site
            </a>
            <a
              href="https://github.com/nizarfadlan"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-3 py-1.5 rounded-lg transition-all"
            >
              <Github className="w-4 h-4" />{" "}
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Area */}
      <main className="relative z-10 flex-1 w-full max-w-[1200px] mx-auto px-6 pt-24 pb-32">
        <div className="max-w-2xl mb-20 animate-fade-up">
          <div className="inline-flex items-center gap-2 text-zinc-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <Code2 className="w-4 h-4 text-white" /> Frontend Explorations
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-[1.1] mb-6">
            Crafting prototypes, <br />
            <span className="text-zinc-500">one pixel at a time.</span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed font-light">
            A curated collection of user interfaces and interaction experiments.
            Built purely with HTML, Tailwind CSS, and React without build steps
            for instant deployment.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          className="flex items-center gap-2 mb-10 overflow-x-auto pb-4 scrollbar-hide animate-fade-up"
          style={{ animationDelay: "100ms", opacity: 0 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeFilter === filter
                  ? "bg-white text-black"
                  : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-zinc-500 text-sm animate-fade-up">
            No mockups found in this category.
          </div>
        )}
      </main>

      {/* Minimalist Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-[#050505]">
        <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500 font-medium">
          <p>UI Experiments &amp; Prototypes. </p>
          <p className="mt-2 md:mt-0">
            © {new Date().getFullYear()} Nizar Fadlan.
          </p>
        </div>
      </footer>
    </div>
  );
}
