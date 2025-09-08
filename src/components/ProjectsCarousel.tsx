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
      title: "Análise com Data Science",
      subtitle: "Google Colab",
      description: "Treinando conhecimentos de Data Science com Python, Pandas e Matplotlib. Análise de dados reais para insights valiosos.",
      link: "https://colab.research.google.com/drive/1GlhpMnae5hM2w1rHGuvVeTjuLfHx1Cfj?usp=sharing"
    },
    {
      title: "Chatbot com Python",
      subtitle: "Python",
      description: "Desenvolvemos um chatbot dinâmico utilizando Python e a API do Gemini, projetado para responder às pessoas usuárias com base na definição de personas, permitindo uma interação personalizada.",
      link: "https://github.com/yaesg17/Python-Gemini"
    },
    {
      title: "Praticando Power BI",
      subtitle: "Power BI",
      description: "Aprendi a transformar dados e métricas em dashboards claros e impactantes. Explorando diferentes tipos de gráficos – colunas, linhas, mapas e KPIs – e aprendi a personalizar a aparência dos visuais, aplicando temas, cores e formatações.",
      link: "https://cdn3.gnarususercontent.com.br/4589-Praticando%20Power%20BI%20Criando%20Visualiza%C3%A7%C3%B5es%20Estrat%C3%A9gicas%20para%20Responder%20Perguntas%20de%20Neg%C3%B3cio/projeto-final-praticando-powerbi-dataviz.zip"
    },
    {
      title: "Análise e Transformação de Dados com Data Science",
      subtitle: "Google Colab",
      description: "Realizei uma análise de dados utilizando Python e a biblioteca Pandas, explorando um conjunto de dados e extraindo insights valiosos.",
      link: "https://colab.research.google.com/drive/18O2zAsQQ-yC46SdC9kbfjqiCdPqBMLxh?usp=sharing"
    },
    {
      title: "Praticando Python",
      subtitle: "Python",
      description: "Sistema de gerenciamento de pedidos, treinando os princípios SOLID e padrões de design para organização de software. O sistema simula um processo de pagamento e envio de notificações e-mail e SMS.",
      link: "https://github.com/yaesg17/treinando-python"
    }
  ];

  const pythonProjects = projects.filter(project => project.subtitle === "Python");
  const googleColabProjects = projects.filter(project => project.subtitle === "Google Colab");
  const powerBIProjects = projects.filter(project => project.subtitle === "Power BI");

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Python
            </h2>
            {/* <p className="text-muted-foreground text-lg">
              Conheça alguns dos meus estudos recentes:
            </p> */}
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
            {pythonProjects.map((project, index) => (
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
      <div className="max-w-7xl mx-auto mt-16">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Data Science
            </h2>
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
            {googleColabProjects.map((project, index) => (
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
      <div className="max-w-7xl mx-auto mt-16">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Power BI
            </h2>
            {/* <p className="text-muted-foreground text-lg">
              Conheça alguns dos meus estudos recentes:
            </p> */}
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
            {powerBIProjects.map((project, index) => (
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