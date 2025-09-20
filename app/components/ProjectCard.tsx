import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  screenshots: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, link, screenshots }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {screenshots.map((screenshot, index) => (
          <Image key={index} src={screenshot} alt={`${title} screenshot ${index + 1}`} className="rounded-lg" width={500} height={300} />
        ))}
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="mb-4">
        {technologies.map((tech) => (
          <span key={tech} className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2" role="listitem">{tech}</span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
    </div>
  );
};

export default ProjectCard;
