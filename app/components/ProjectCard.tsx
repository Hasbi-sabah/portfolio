interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, link }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
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
