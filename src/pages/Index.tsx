import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroScene from "@/components/HeroScene";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import { services, projects, testimonials } from "@/data/projects";
import { ArrowRight, Quote, Minus } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-px bg-accent mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-8"
          >
            Design · Development · Strategy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[0.95] mb-8 tracking-tight"
          >
            Building Digital{" "}
            <span className="gradient-text">Experiences</span>{" "}
            That Matter
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-12 font-light"
          >
            Creative designer & developer crafting modern brands and high-performance digital products.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/work" className="neon-button">
              View Work
            </Link>
            <Link to="/contact" className="neon-button-cyan">
              Get in Touch
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="w-px h-12 bg-gradient-to-b from-transparent via-muted-foreground/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mb-20"
          >
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-4 mb-4">
              <Minus className="text-accent" size={20} />
              <p className="font-body text-xs uppercase tracking-[0.3em] text-accent">Services</p>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-display font-bold">
              What I Do
            </motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="flex items-end justify-between mb-20"
          >
            <div>
              <motion.div variants={fadeUp} custom={0} className="flex items-center gap-4 mb-4">
                <Minus className="text-accent" size={20} />
                <p className="font-body text-xs uppercase tracking-[0.3em] text-accent">Portfolio</p>
              </motion.div>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-display font-bold">
                Selected Work
              </motion.h2>
            </div>
            <motion.div variants={fadeUp} custom={2}>
              <Link
                to="/work"
                className="hidden md:flex items-center gap-3 text-muted-foreground font-body text-sm uppercase tracking-wider hover:text-accent transition-colors duration-300"
              >
                All Projects <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.slice(0, 3).map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mb-20"
          >
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-4 mb-4">
              <Minus className="text-accent" size={20} />
              <p className="font-body text-xs uppercase tracking-[0.3em] text-accent">Testimonials</p>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-display font-bold">
              Client Words
            </motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="glass-hover p-8 group"
              >
                <Quote className="text-accent/30 mb-6" size={28} />
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center font-display text-xs text-accent font-bold">
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
            Let's Create Something{" "}
            <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto font-light">
            Ready to elevate your digital presence? Let's collaborate on your next project.
          </p>
          <Link to="/contact" className="neon-button inline-block">
            Start a Project
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default Index;
