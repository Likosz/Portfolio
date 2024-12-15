import React, { useRef, useState, useEffect } from 'react';
import { Code, Rocket, Users, Brain, BookOpen, Coffee } from 'lucide-react';

// Componentes auxiliares permanecem os mesmos
const TimelineItem = ({ year, title, description }) => (
  <div className="relative pl-8 pb-8 group">
    <div className="absolute left-0 top-0 h-full w-0.5 bg-purple-600/20" />
    <div className="absolute left-0 top-2 -translate-x-1/2 h-4 w-4 rounded-full border-2 border-purple-600 bg-[#1a1a2e] group-hover:bg-purple-600 transition-colors duration-300" />
    <div className="text-sm text-purple-400">{year}</div>
    <h3 className="text-xl font-semibold mt-1">{title}</h3>
    <p className="text-gray-400 mt-2">{description}</p>
  </div>
);

const FeatureCard = ({ Icon, title, description }) => (
  <div className="bg-[#1a1a2e]/50 backdrop-blur-sm p-6 rounded-xl hover:bg-purple-600/10 transition-all duration-300 hover:scale-105 border border-purple-500/10">
    <Icon className="w-8 h-8 text-purple-400 mb-4" />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const timeline = [
    {
      year: '2021',
      title: 'Início da Jornada',
      description: 'Comecei meus estudos em desenvolvimento web, focando em HTML, CSS e JavaScript.'
    },
    {
      year: '2022',
      title: 'Primeiros Projetos',
      description: 'Desenvolvi projetos pessoais e comecei a trabalhar com React e Node.js.'
    },
    {
      year: '2023',
      title: 'Especialização',
      description: 'Aprofundei meus conhecimentos em desenvolvimento Full Stack e tecnologias modernas.'
    },
    {
      year: '2024',
      title: 'Novos Desafios',
      description: 'Explorando novas tecnologias e criando soluções inovadoras.'
    }
  ];

  const features = [
    {
      Icon: Code,
      title: 'Desenvolvimento Full Stack',
      description: 'Experiência com diversas tecnologias e frameworks modernos'
    },
    {
      Icon: Rocket,
      title: 'Performance',
      description: 'Foco em criar aplicações rápidas e otimizadas'
    },
    {
      Icon: Users,
      title: 'Trabalho em Equipe',
      description: 'Colaboração efetiva e comunicação clara'
    },
    {
      Icon: Brain,
      title: 'Aprendizado Contínuo',
      description: 'Sempre buscando novos conhecimentos e tecnologias'
    },
    {
      Icon: BookOpen,
      title: 'Boas Práticas',
      description: 'Código limpo e organizado seguindo padrões modernos'
    },
    {
      Icon: Coffee,
      title: 'Dedicação',
      description: 'Comprometimento com prazos e qualidade'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-32 bg-[#1a1a2e]"
    >
      {/* Partículas de background fixas */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-purple-500/5 rounded-full animate-float"
            style={{
              width: Math.random() * 10 + 'px',
              height: Math.random() * 10 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="relative text-center mb-24">
          <h2 className="text-4xl font-bold mb-4">
            Sobre <span className="text-purple-400">Mim</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Desenvolvedor apaixonado por criar experiências web incríveis e solucionar problemas através da tecnologia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <div 
            className={`transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-12">Minha Jornada</h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <TimelineItem
                  key={index}
                  {...item}
                />
              ))}
            </div>
          </div>

          {/* Características */}
          <div className="relative">
            <h3 className="text-2xl font-semibold mb-12">Características</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="transform transition-all duration-500"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible 
                      ? 'translateY(0)' 
                      : `translateY(${20 + index * 10}px)`,
                    transitionDelay: `${index * 0.1}s`
                  }}
                >
                  <FeatureCard {...feature} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;