import React from 'react';
import { Github, Linkedin, Twitter, Instagram, MessageSquare } from 'lucide-react';
import { socialLinks } from '../../constants/data';

const iconComponents = {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  MessageSquare
};

const SocialLinks = () => {
  return (
    <div className="flex gap-6 pt-4 animate-slideIn">
      {socialLinks.map(({ Icon, url }) => {
        const IconComponent = iconComponents[Icon];
        return (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-scale text-gray-400 hover:text-purple-400 transition-colors"
          >
            <IconComponent className="w-6 h-6" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;