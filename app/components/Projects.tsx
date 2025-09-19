import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'This is a description of project one.',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      link: '#',
    },
    {
      title: 'Project Two',
      description: 'This is a description of project two.',
      technologies: ['TypeScript', 'Node.js', 'Express'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
