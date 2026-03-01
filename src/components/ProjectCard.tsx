import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Link to={`/work/${project.slug}`}>
      <motion.div
        whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="glass-hover overflow-hidden group cursor-pointer"
        style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
      >
        <div className="relative overflow-hidden aspect-video">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          <span className="absolute top-4 right-4 px-3 py-1 text-xs font-display uppercase tracking-wider rounded-full bg-neon-purple/20 text-neon-purple border border-neon-purple/30">
            {project.category}
          </span>
        </div>
        <div className="p-6">
          <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-neon-cyan transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm">{project.description}</p>
        </div>
      </motion.div>
    </Link>
  </motion.div>
);

export default ProjectCard;
