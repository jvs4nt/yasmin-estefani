import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ProjectCard from './ProjectCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    slidesToScroll: 1,
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const projects = [
    {
      title: "E-commerce Platform",
      subtitle: "React & Node.js",
      description: "Uma plataforma completa de e-commerce com sistema de pagamentos, gerenciamento de estoque e painel administrativo. Desenvolvida com React, Node.js e MongoDB.",
      link: "https://github.com/example/ecommerce"
    },
    {
      title: "App Mobile Fitness",
      subtitle: "React Native",
      description: "Aplicativo móvel para acompanhamento de exercícios e dieta. Inclui sistema de notificações, gráficos de progresso e integração com wearables.",
      link: "https://github.com/example/fitness-app"
    },
    {
      title: "Dashboard Analytics",
      subtitle: "Vue.js & Python",
      description: "Dashboard interativo para análise de dados empresariais com gráficos em tempo real, relatórios automáticos e sistema de alertas personalizáveis.",
      link: "https://github.com/example/dashboard"
    },
    {
      title: "API REST Microserviços",
      subtitle: "Docker & Kubernetes",
      description: "Arquitetura de microserviços robusta com containerização, orquestração e monitoramento. Inclui documentação completa e testes automatizados.",
      link: "https://github.com/example/microservices"
    },
    {
      title: "Sistema de Chat",
      subtitle: "WebSocket & Redis",
      description: "Sistema de chat em tempo real com salas privadas, compartilhamento de arquivos e notificações push. Suporta milhares de usuários simultâneos.",
      link: "https://github.com/example/chat-system"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Projetos
            </h2>
            <p className="text-muted-foreground text-lg">
              Alguns dos meus trabalhos recentes
            </p>
          </div>
          
          <div className="hidden md:flex space-x-2">
            <button
              onClick={scrollPrev}
              className="p-2 rounded-lg border border-border hover:bg-accent transition-colors"
              aria-label="Projeto anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-2 rounded-lg border border-border hover:bg-accent transition-colors"
              aria-label="Próximo projeto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;