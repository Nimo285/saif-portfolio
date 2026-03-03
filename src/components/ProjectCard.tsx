import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
  >
    <Link to={`/work/${project.slug}`}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="glass-hover overflow-hidden group cursor-pointer"
      >
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <span className="absolute top-4 right-4 px-3 py-1 text-[10px] font-body uppercase tracking-widest rounded-sm bg-background/60 backdrop-blur-sm text-muted-foreground border border-border">
            {project.category}
          </span>
        </div>
        <div className="p-6 flex items-start justify-between">
          <div>
            <h3 className="font-display text-base font-semibold mb-1 group-hover:text-accent transition-colors tracking-tight">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm font-light">{project.description}</p>
          </div>
          <ArrowUpRight className="text-muted-foreground/40 group-hover:text-accent transition-colors mt-1 flex-shrink-0 ml-4" size={18} />
        </div>
      </motion.div>
    </Link>
  </motion.div>
);

export default ProjectCard;
