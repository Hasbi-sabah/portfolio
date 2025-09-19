const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          <div className="p-4 shadow-lg rounded-lg bg-white">
            <h3 className="text-xl font-bold">JavaScript</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white">
            <h3 className="text-xl font-bold">TypeScript</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white">
            <h3 className="text-xl font-bold">React</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white">
            <h3 className="text-xl font-bold">Next.js</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white">
            <h3 className="text-xl font-bold">Tailwind CSS</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white">
            <h3 className="text-xl font-bold">Node.js</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white">
            <h3 className="text-xl font-bold">HTML5</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white">
            <h3 className="text-xl font-bold">CSS3</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
