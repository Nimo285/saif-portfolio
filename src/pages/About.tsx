import { motion } from "framer-motion";

const skills = [
  { name: "UI/UX Design", level: 95 },
  { name: "React / Next.js", level: 90 },
  { name: "TypeScript", level: 88 },
  { name: "Tailwind CSS", level: 92 },
  { name: "SEO & Analytics", level: 85 },
  { name: "Video Editing", level: 80 },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Figma",
  "Node.js", "Three.js", "Framer Motion", "Photoshop", "Illustrator",
  "After Effects", "Premiere Pro", "Google Ads", "SEMrush",
];

const timeline = [
  { year: "2024–Present", title: "Founder, Codify X", desc: "Running a full-service creative agency." },
  { year: "2023", title: "Senior Freelance Developer", desc: "Building SaaS products and web apps for startups." },
  { year: "2022", title: "Creative Designer", desc: "Designing brand identities for tech companies." },
  { year: "2021", title: "Started Freelancing", desc: "Began offering design and marketing services." },
];

const About = () => (
  <main className="pt-24">
    {/* Intro */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-neon-purple mb-4">About Me</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            I'm <span className="gradient-text">Saif Asif</span>
          </h1>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              A passionate freelance graphic designer, web developer, and digital marketer with a vision
              for creating digital experiences that don't just look stunning — they convert.
            </p>
            <p>
              Through my agency Codify X, I help brands build powerful online presences with cutting-edge
              design, performant code, and data-driven marketing strategies.
            </p>
            <p>
              I believe great design is more than aesthetics — it's about solving problems, telling stories,
              and creating lasting impressions in the digital landscape.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-neon-purple via-neon-cyan to-neon-pink p-[2px]">
              <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                <span className="font-display text-6xl gradient-text font-bold">SA</span>
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-br from-neon-purple/20 via-transparent to-neon-cyan/20 rounded-3xl blur-xl -z-10 animate-pulse-glow" />
          </div>
        </motion.div>
      </div>
    </section>

    {/* Skills */}
    <section className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-neon-purple mb-4">Expertise</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">Skills & <span className="gradient-text">Abilities</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold">{skill.name}</span>
                <span className="text-xs text-neon-cyan font-display">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                  className="h-full rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Tech Stack */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-neon-purple mb-4">Technologies</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">Tech <span className="gradient-text">Stack</span></h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="glass-hover px-5 py-3 cursor-pointer"
            >
              <span className="text-sm font-body">{tech}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding bg-card/30">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-neon-purple mb-4">Journey</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">My <span className="gradient-text">Timeline</span></h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-purple via-neon-cyan to-neon-pink" />
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} ml-12 md:ml-0`}
            >
              <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                <div className="glass-hover p-6">
                  <span className="font-display text-xs text-neon-cyan">{item.year}</span>
                  <h3 className="font-display font-semibold mt-1 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
              <div className="absolute left-[-2rem] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-neon-purple glow-purple mt-8" />
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default About;
