import { 
    FaReact, 
    FaNodeJs, 
    FaFire, 
    FaGithub, 
    FaLinkedin,
    FaTwitter,
    FaInstagram 
  } from 'react-icons/fa';
  import { 
    SiTypescript, 
    SiNextdotjs, 
    SiTailwindcss,
    SiFirebase,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiRedux
  } from 'react-icons/si';
  import { BiMessageDetail } from 'react-icons/bi';
  
  export const navigationLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Work', path: '#work' },
    { name: 'Contact', path: '#contact' }
  ];
  
  export const skills = [
    { 
      name: 'ReactJS', 
      Icon: FaReact, 
      category: 'frontend', 
      expertise: 90,
      color: '#61DAFB'
    },
    { 
      name: 'Node.js', 
      Icon: FaNodeJs, 
      category: 'backend', 
      expertise: 85,
      color: '#339933'
    },
    { 
      name: 'TypeScript', 
      Icon: SiTypescript, 
      category: 'language', 
      expertise: 88,
      color: '#3178C6'
    },
    { 
      name: 'Firebase', 
      Icon: SiFirebase, 
      category: 'backend', 
      expertise: 82,
      color: '#FFCA28'
    },
    { 
      name: 'Next.js', 
      Icon: SiNextdotjs, 
      category: 'frontend', 
      expertise: 85,
      color: '#000000'
    },
    { 
      name: 'TailwindCSS', 
      Icon: SiTailwindcss, 
      category: 'styling', 
      expertise: 90,
      color: '#06B6D4'
    },
    { 
      name: 'MongoDB', 
      Icon: SiMongodb, 
      category: 'database', 
      expertise: 80,
      color: '#47A248'
    },
    { 
      name: 'PostgreSQL', 
      Icon: SiPostgresql, 
      category: 'database', 
      expertise: 85,
      color: '#4169E1'
    },
    { 
      name: 'Redux', 
      Icon: SiRedux, 
      category: 'state', 
      expertise: 88,
      color: '#764ABC'
    }
  ];
  
  export const socialLinks = [
    { Icon: FaGithub, url: 'https://github.com' },
    { Icon: FaLinkedin, url: 'https://linkedin.com' },
    { Icon: FaTwitter, url: 'https://twitter.com' },
    { Icon: FaInstagram, url: 'https://instagram.com' },
    { Icon: BiMessageDetail, url: '#contact' }
  ];