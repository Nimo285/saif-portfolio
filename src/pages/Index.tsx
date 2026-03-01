import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroScene from "@/components/HeroScene";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import { services, projects, testimonials } from "@/data/projects";
import { ArrowRight, Quote } from "lucide-react";

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-xs uppercase tracking-[0.3em] text-neon-cyan mb-6"
          >
            Freelance Designer · Developer · Marketer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
          >
            Designing Digital{" "}
            <span className="gradient-text">Experiences</span>{" "}
            That Convert
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Creative Designer & Developer Building Modern Brands
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/work" className="neon-button text-foreground">
              View My Work
            </Link>
            <Link to="/contact" className="neon-button-cyan">
              Hire Me
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1"
          >
            <div className="w-1 h-2 rounded-full bg-neon-cyan" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-display text-xs uppercase tracking-[0.3em] text-neon-purple mb-4">What I Do</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Services & <span className="gradient-text">Expertise</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-16"
          >
            <div>
              <p className="font-display text-xs uppercase tracking-[0.3em] text-neon-purple mb-4">Portfolio</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold">
                Featured <span className="gradient-text">Projects</span>
              </h2>
            </div>
            <Link
              to="/work"
              className="hidden md:flex items-center gap-2 text-neon-cyan font-display text-sm uppercase tracking-wider hover:gap-4 transition-all"
            >
              View All <ArrowRight size={16} />
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-display text-xs uppercase tracking-[0.3em] text-neon-purple mb-4">Testimonials</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Client <span className="gradient-text">Feedback</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-hover p-8"
              >
                <Quote className="text-neon-purple/40 mb-4" size={32} />
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neon-purple/20 flex items-center justify-center font-display text-xs text-neon-purple">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass p-12 md:p-16 text-center gradient-border rounded-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Ready to transform your digital presence? Let's collaborate and create something extraordinary.
          </p>
          <Link to="/contact" className="neon-button text-foreground inline-block">
            Start a Project
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default Index;
