import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const categories = ["all", "design", "development", "marketing"] as const;

const Work = () => {
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <p className="font-display text-xs uppercase tracking-[0.3em] text-neon-purple mb-4">Portfolio</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              My <span className="gradient-text">Work</span>
            </h1>
            <p className="text-muted-foreground max-w-xl text-lg">
              A curated selection of projects showcasing design, development, and marketing expertise.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full font-display text-xs uppercase tracking-wider transition-all duration-300 ${
                  filter === cat
                    ? "bg-neon-purple text-foreground glow-purple"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Work;
