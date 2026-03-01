import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Message sent! (Demo)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="font-display text-xs uppercase tracking-[0.3em] text-neon-purple mb-4">Get In Touch</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Have a project in mind? Let's talk about how we can bring your vision to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass p-8 rounded-2xl space-y-6"
            >
              {[
                { name: "name" as const, label: "Your Name", type: "text", placeholder: "John Doe" },
                { name: "email" as const, label: "Email Address", type: "email", placeholder: "john@example.com" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block font-display text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    value={form[field.name]}
                    onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                    placeholder={field.placeholder}
                    required
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple/50 transition-all duration-300"
                  />
                </div>
              ))}
              <div>
                <label className="block font-display text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple/50 transition-all duration-300 resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="neon-button text-foreground w-full flex items-center justify-center gap-2"
              >
                <Send size={16} /> Send Message
              </motion.button>
            </motion.form>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {[
                { icon: Mail, title: "Email", value: "saif@codifyx.com", href: "mailto:saif@codifyx.com" },
                { icon: MessageCircle, title: "WhatsApp", value: "Quick Chat", href: "https://wa.me/1234567890" },
                { icon: MapPin, title: "Location", value: "Available Worldwide", href: "#" },
              ].map((item, i) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="glass-hover p-6 flex items-center gap-5 group block"
                >
                  <div className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center group-hover:glow-purple transition-all duration-500">
                    <item.icon className="text-neon-purple group-hover:text-neon-cyan transition-colors" size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-display uppercase tracking-wider">{item.title}</p>
                    <p className="font-semibold group-hover:text-neon-cyan transition-colors">{item.value}</p>
                  </div>
                </motion.a>
              ))}

              <div className="glass p-8 rounded-2xl mt-8">
                <h3 className="font-display font-semibold mb-4">Working Hours</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Monday – Friday: 9AM – 6PM</p>
                  <p>Weekend: By Appointment</p>
                  <p className="text-neon-cyan mt-4">Response within 24 hours</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
