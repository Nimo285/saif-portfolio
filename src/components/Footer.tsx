import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display font-bold text-lg mb-4">
            <span className="gradient-text">CODIFY</span> X
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Designing digital experiences that convert. Creative design, development, and marketing solutions.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-wider mb-4 text-neon-cyan">Quick Links</h4>
          <div className="flex flex-col gap-3">
            {["/", "/work", "/about", "/contact"].map((path) => (
              <Link
                key={path}
                to={path}
                className="text-muted-foreground text-sm hover:text-foreground transition-colors"
              >
                {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-wider mb-4 text-neon-cyan">Connect</h4>
          <div className="flex gap-4">
            {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 glass-hover rounded-lg flex items-center justify-center text-muted-foreground hover:text-neon-cyan transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <p className="text-muted-foreground text-sm mt-4">saif@codifyx.com</p>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-8 text-center">
        <p className="text-muted-foreground text-xs">
          © 2026 Codify X. All rights reserved. Designed & built by Saif Asif.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
