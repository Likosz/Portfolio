import React, { useState } from 'react';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group bg-[#1a1a2e] rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Overlay de imagem */}
      <div className="aspect-video w-full relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] to-transparent opacity-90" />
      </div>

      {/* Conteúdo */}
      <div className="relative p-6">
        {/* Tag de destaque */}
        {project.featured && (
          <span className="absolute top-0 right-0 bg-purple-500 text-white text-xs px-2 py-1 rounded-bl-lg">
            Destaque
          </span>
        )}

        {/* Tipo do projeto */}
        <div className="flex items-center space-x-2 mb-4">
          <FolderGit2 className="w-5 h-5 text-purple-400" />
          <span className="text-sm text-gray-400">{project.type}</span>
        </div>

        {/* Título e descrição */}
        <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          {project.description}
        </p>

        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center space-x-4 text-gray-400">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition-colors hover:scale-110 transform duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition-colors hover:scale-110 transform duration-300"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* Efeito de hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </div>
  );
};

// O código do ProjectCard permanece igual até a parte dos projetos

const WorkSection = () => {
    const [activeFilter, setActiveFilter] = useState('all');
  
    const projects = [
      {
        title: 'E-commerce Dashboard',
        description: 'Dashboard completo com análise de vendas, gestão de produtos e relatórios em tempo real',
        type: 'Web App',
        technologies: ['React', 'TypeScript', 'Tailwind', 'Node.js'],
        image: '/api/placeholder/800/400',
        github: 'https://github.com/Likosz',
        live: 'https://demo.com',
        featured: true,
        category: 'frontend'
      },
      {
        title: 'Sistema de Gestão',
        description: 'Sistema integrado para gestão empresarial com múltiplos módulos e integrações',
        type: 'Full Stack',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
        image: '/api/placeholder/800/400',
        github: 'https://github.com/Likosz',
        live: 'https://demo.com',
        featured: false,
        category: 'fullstack'
      },
      {
        title: 'API de Pagamentos',
        description: 'API RESTful para processamento de pagamentos com integração a múltiplos gateways',
        type: 'Backend',
        technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
        image: '/api/placeholder/800/400',
        github: 'https://github.com/Likosz',
        live: 'https://demo.com',
        featured: false,
        category: 'backend'
      },
      {
        title: 'Chat em Tempo Real',
        description: 'Aplicação de chat com mensagens em tempo real usando WebSocket e autenticação',
        type: 'Full Stack',
        technologies: ['React', 'Socket.io', 'Node.js', 'JWT'],
        image: '/api/placeholder/800/400',
        github: 'https://github.com/Likosz',
        live: 'https://demo.com',
        featured: false,
        category: 'fullstack'
      },
      {
        title: 'App de Gestão Financeira',
        description: 'Aplicativo para controle de finanças pessoais com gráficos e relatórios',
        type: 'Frontend',
        technologies: ['React Native', 'Redux', 'Firebase', 'Charts'],
        image: '/api/placeholder/800/400',
        github: 'https://github.com/Likosz',
        live: 'https://demo.com',
        featured: true,
        category: 'frontend'
      },
      {
        title: 'CMS Headless',
        description: 'Sistema de gerenciamento de conteúdo com API GraphQL e painel administrativo',
        type: 'Full Stack',
        technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'AWS'],
        image: '/api/placeholder/800/400',
        github: 'https://github.com/Likosz',
        live: 'https://demo.com',
        featured: false,
        category: 'fullstack'
      }
    ];
  
    const categories = [
      { id: 'all', name: 'Todos' },
      { id: 'frontend', name: 'Frontend' },
      { id: 'backend', name: 'Backend' },
      { id: 'fullstack', name: 'Full Stack' },
    ];
  
    const filteredProjects = activeFilter === 'all' 
      ? projects 
      : projects.filter(p => p.category === activeFilter);
  
   // ... resto do código permanece igual

return (
    <section id="work" className="py-12 bg-[#1a1a2e]"> {/* Reduzido de py-20 para py-12 */}
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8"> {/* Reduzido de mb-10 para mb-8 */}
          <h2 className="text-4xl font-bold mb-3"> {/* Reduzido mb-4 para mb-3 */}
            Meus <span className="text-purple-400">Projetos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Uma seleção dos meus projetos favoritos que demonstram minhas habilidades e experiência.
          </p>
        </div>
  
        {/* Filtros */}
        <div className="flex justify-center gap-4 mb-6"> {/* Reduzido de mb-8 para mb-6 */}
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-[#1a1a2e] text-gray-400 hover:bg-purple-600/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
  
        {/* Grid de projetos - ajustado o gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"> {/* Reduzido gap-6 para gap-5 */}
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
  };
  
  export default WorkSection;