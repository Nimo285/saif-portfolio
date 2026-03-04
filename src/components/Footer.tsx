import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border">
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display font-bold text-lg mb-4 tracking-tight">
            <span className="text-foreground">DEZI</span>
            <span className="text-accent ml-0.5">VO</span>
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs font-light">
            Designing digital experiences that convert. Creative design, development, and marketing solutions.
          </p>
        </div>

        <div>
          <h4 className="font-body text-xs uppercase tracking-widest mb-4 text-muted-foreground">Links</h4>
          <div className="flex flex-col gap-3">
            {["/", "/work", "/about", "/contact"].map((path) => (
              <Link
                key={path}
                to={path}
                className="text-muted-foreground text-sm hover:text-foreground transition-colors font-light"
              >
                {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-body text-xs uppercase tracking-widest mb-4 text-muted-foreground">Connect</h4>
          <div className="flex gap-3">
            {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          <p className="text-muted-foreground text-sm mt-4 font-light">saif@dezivo.com</p>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-8 text-center">
        <p className="text-muted-foreground text-xs font-light">
          © 2026 Dezivo. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
