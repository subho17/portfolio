import { Brain, Search, Shield, Cpu, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI-Driven Smart Rental Discovery System",
    description: "A comprehensive platform revolutionizing the rental search experience with AI-powered recommendations and fraud detection.",
    status: "In Development",
    problemStatement: "Traditional rental platforms lack intelligent filtering, personalized recommendations, and protection against fraudulent listings.",
    solution: "An AI-powered system that provides smart recommendations, detects fake listings, and streamlines the rental discovery process.",
    features: [
      { icon: Search, text: "Region-based intelligent search with advanced filters" },
      { icon: Brain, text: "AI-powered personalized recommendations" },
      { icon: Shield, text: "Machine learning-based fake listing detection" },
      { icon: Cpu, text: "NLP-driven rule extraction and rent prediction" },
    ],
    techStack: ["React", "Node.js", "MongoDB", "Python", "TensorFlow", "NLP"],
    links: {
      github: "https://github.com/subho17",
      live: null,
    },
  },
  {
    title: "Autism Support & Assistance Platform",
    description: "A calm, accessible web platform providing structured tools and resources for individuals with autism, caregivers, and educators.",
    status: "Featured",
    problemStatement: "Many digital tools are overwhelming or inaccessible for neurodiverse users; caregivers need centralized, reliable resources.",
    solution: "An accessibility-first platform offering predictable UI, routines, communication aids, and caregiver dashboards with future AI personalization.",
    features: [
      { icon: Search, text: "Minimal, predictable navigation for reduced cognitive load" },
      { icon: Brain, text: "AI-ready personalization for routines and learning" },
      { icon: Shield, text: "Privacy-first design and caregiver controls" },
      { icon: Cpu, text: "Modular components for scalable assistive tools" },
    ],
    techStack: ["React", "Vite", "Tailwind CSS", "TypeScript", "AI-ready"],
    links: {
      github: "https://github.com/subho17",
      live: null,
    },
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My Work</p>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-8 md:p-10 glow-border max-w-5xl mx-auto"
            >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 mb-3">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs text-accent font-medium">{project.status}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">{project.title}</h3>
              </div>
              <div className="flex gap-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-muted hover:bg-primary/20 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-muted hover:bg-primary/20 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-muted-foreground mb-8 text-lg">{project.description}</p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-primary">Problem Statement</h4>
                <p className="text-muted-foreground">{project.problemStatement}</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-primary">Proposed Solution</h4>
                <p className="text-muted-foreground">{project.solution}</p>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-semibold text-foreground mb-4">Key Features</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                    <feature.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm text-primary font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
