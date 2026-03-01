import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="pt-24 section-padding text-center">
        <h1 className="text-3xl font-display font-bold mb-4">Project not found</h1>
        <Link to="/work" className="text-neon-cyan">← Back to Work</Link>
      </main>
    );
  }

  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <Link to="/work" className="inline-flex items-center gap-2 text-muted-foreground hover:text-neon-cyan transition-colors mb-8 font-display text-sm uppercase tracking-wider">
            <ArrowLeft size={16} /> Back to Work
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="px-3 py-1 text-xs font-display uppercase tracking-wider rounded-full bg-neon-purple/20 text-neon-purple border border-neon-purple/30">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">{project.title}</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl overflow-hidden mb-12"
          >
            <img src={project.image} alt={project.title} className="w-full aspect-video object-cover" />
          </motion.div>

          <div className="grid gap-12">
            {[
              { label: "The Problem", content: project.problem },
              { label: "The Solution", content: project.solution },
            ].map((section, i) => (
              <motion.div
                key={section.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <h2 className="font-display text-xl font-semibold text-neon-cyan mb-3">{section.label}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </motion.div>
            ))}

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <h2 className="font-display text-xl font-semibold text-neon-cyan mb-4">Tools Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool) => (
                  <span key={tool} className="glass px-4 py-2 text-sm font-body">{tool}</span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <h2 className="font-display text-xl font-semibold text-neon-cyan mb-4">Results</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.results.map((r) => (
                  <div key={r} className="glass-hover p-5">
                    <p className="text-foreground font-semibold">{r}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
