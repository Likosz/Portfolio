import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Send } from 'lucide-react';

const SocialIcon = ({ Icon, href, delay }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`animate-scaleIn hover:text-purple-400 transition-colors duration-300`}
    style={{ animationDelay: `${delay}s` }}
  >
    <Icon className="w-6 h-6" />
  </a>
);

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto e conteúdo */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl font-bold animate-slideIn">
              Olá! 👋
              <br />
              Eu sou o <span className="text-purple-400">Wagner</span> e
              <br />
              sou <span className="text-purple-400">Dev Front-End</span>
            </h1>
            
            <p className="text-xl text-gray-300 animate-slideIn delay-200">
              Desenvolvedor Full Stack apaixonado por criar experiências web incríveis e
              soluções práticas de problemas.
            </p>

            {/* Botões de ação */}
            <div className="flex flex-wrap gap-4">
              <button className="animate-slideIn delay-300 bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
                Contate-me
              </button>
              
              <button className="animate-slideIn delay-400 border border-purple-600 hover:bg-purple-600/20 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
                Ver Projetos
              </button>
            </div>

            {/* Ícones sociais */}
            <div className="flex gap-6 pt-4">
              {[
                { Icon: Github, href: 'https://github.com' },
                { Icon: Linkedin, href: 'https://linkedin.com' },
                { Icon: Twitter, href: 'https://twitter.com' },
                { Icon: Instagram, href: 'https://instagram.com' },
                { Icon: Send, href: '#contact' }
              ].map((social, index) => (
                <SocialIcon 
                  key={social.href} 
                  {...social} 
                  delay={0.5 + (index * 0.1)}
                />
              ))}
            </div>
          </div>

          {/* Área do Avatar */}
          <div className="relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* Balão de diálogo */}
              <div className="absolute -top-16 right-0 animate-bounce-slow">
                <div className="relative">
                  {/* Triângulo do balão */}
                  <div className="absolute bottom-0 right-12 w-4 h-4 bg-white transform rotate-45 translate-y-2" />
                  {/* Conteúdo do balão */}
                  <div className="relative bg-white text-gray-900 px-4 py-2 rounded-xl shadow-lg animate-fade-in-dialog">
                    <p className="font-medium">Seja bem-vindo! ❤️</p>
                  </div>
                </div>
              </div>

              {/* Círculo de fundo */}
              <div className="absolute inset-0 bg-purple-800 rounded-full animate-pulse-slow" />
              
              {/* Efeito de brilho */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-purple-800/30 rounded-full filter blur-xl animate-pulse-slow" />
              
              {/* Círculo decorativo */}
              <div className="absolute inset-0 border-2 border-purple-400/30 rounded-full animate-spin"
                   style={{ animationDuration: '20s' }} />
              
              {/* Seu avatar */}
              <img
                src="/avatar.png"
                alt="Avatar Profile"
                className="relative w-full h-full object-contain p-4 animate-float"
                style={{ 
                  imageRendering: 'pixelated',
                  transform: 'scale(1.2)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;