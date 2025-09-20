import Image from 'next/image';
import { skills } from '../data';
import { SkillItem } from '../types';

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 capitalize">{category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto text-center">
              {(skillList as SkillItem[]).map((skill: SkillItem) => (
                <div key={skill.name} className="p-4 shadow-lg rounded-lg bg-white flex flex-col items-center justify-center">
                  <Image src={skill.logo} alt={`${skill.name} logo`} className="h-16 w-16 mb-4 object-contain" width={64} height={64} unoptimized />
                  <h4 className="text-lg font-bold">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
