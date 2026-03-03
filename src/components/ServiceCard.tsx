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
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="glass-hover p-8 group cursor-pointer"
    >
      <div className="w-12 h-12 rounded-md bg-accent/5 border border-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-all duration-500">
        <Icon className="text-accent/70 group-hover:text-accent transition-colors duration-500" size={22} />
      </div>
      <h3 className="font-display text-base font-semibold mb-3 group-hover:text-accent transition-colors duration-300 tracking-tight">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed font-light">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
