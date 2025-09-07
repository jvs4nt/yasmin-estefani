interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  link: string;
}

const ProjectCard = ({ title, subtitle, description, link }: ProjectCardProps) => {
  const handleClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      onClick={handleClick}
      className="flex-none w-80 h-64 bg-card border border-border rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
      style={{ boxShadow: 'var(--card-shadow)' }}
    >
      <div className="h-full flex flex-col justify-between">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            {subtitle}
          </p>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;