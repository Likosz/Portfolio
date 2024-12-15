import React from 'react';

const SkillCard = ({ skill, isVisible, style }) => {
  const { name, Icon, category, expertise, color } = skill;

  return (
    <div 
      className="group animate-scaleIn bg-[#1a1a2e] p-6 rounded-xl hover:bg-purple-600/10 transition-all duration-300 hover:scale-105"
      style={style}
    >
      <div className="flex items-center space-x-4">
        <div className="text-3xl group-hover:animate-float">
          <Icon className="w-8 h-8" style={{ color: color }} />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-400">{category}</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{
              width: isVisible ? `${expertise}%` : '0%',
              backgroundColor: color
            }}
          />
        </div>
        <p className="text-right text-sm text-gray-400 mt-1">{expertise}%</p>
      </div>
    </div>
  );
};

export default SkillCard;