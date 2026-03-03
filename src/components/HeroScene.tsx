import { motion } from "framer-motion";

const HeroScene = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    {/* Gradient base */}
    <div className="absolute inset-0 bg-background" />
    
    {/* Animated grid */}
    <div className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }}
    />

    {/* Floating orbs */}
    <motion.div
      className="absolute w-[500px] h-[500px] rounded-full"
      style={{ background: 'radial-gradient(circle, hsl(var(--accent) / 0.08), transparent 70%)' }}
      animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      initial={{ top: '10%', left: '60%' }}
    />
    <motion.div
      className="absolute w-[400px] h-[400px] rounded-full"
      style={{ background: 'radial-gradient(circle, hsl(var(--foreground) / 0.03), transparent 70%)' }}
      animate={{ x: [0, -30, 20, 0], y: [0, 40, -20, 0] }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      initial={{ top: '50%', left: '10%' }}
    />

    {/* Diagonal accent line */}
    <motion.div
      className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-accent/10 to-transparent"
      style={{ transform: 'rotate(15deg)', transformOrigin: 'top' }}
      animate={{ opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 8, repeat: Infinity }}
    />
    <motion.div
      className="absolute top-0 left-[30%] w-px h-full bg-gradient-to-b from-transparent via-foreground/5 to-transparent"
      style={{ transform: 'rotate(-10deg)', transformOrigin: 'top' }}
      animate={{ opacity: [0.2, 0.5, 0.2] }}
      transition={{ duration: 10, repeat: Infinity }}
    />

    {/* Noise texture overlay */}
    <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }} />
  </div>
);

export default HeroScene;
