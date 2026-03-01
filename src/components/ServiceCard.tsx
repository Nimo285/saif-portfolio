import { motion } from "framer-motion";
import { Palette, Code, TrendingUp, Film, Cpu, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Palette, Code, TrendingUp, Film, Cpu,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const ServiceCard = ({ title, description, icon, index }: ServiceCardProps) => {
  const Icon = iconMap[icon] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-hover p-8 group cursor-pointer"
    >
      <div className="w-14 h-14 rounded-xl bg-neon-purple/10 flex items-center justify-center mb-6 group-hover:glow-purple transition-all duration-500">
        <Icon className="text-neon-purple group-hover:text-neon-cyan transition-colors duration-500" size={28} />
      </div>
      <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-neon-cyan transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
