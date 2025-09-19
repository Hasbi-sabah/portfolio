const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="max-w-4xl mx-auto">
          {/* Placeholder for experience items */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold">Software Engineer</h3>
            <p className="text-xl text-gray-600">Tech Company | 2022 - Present</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Developed and maintained web applications using React and Next.js.</li>
              <li>Collaborated with cross-functional teams to deliver high-quality software.</li>
              <li>Implemented responsive designs with Tailwind CSS.</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold">Junior Developer</h3>
            <p className="text-xl text-gray-600">Startup Inc. | 2020 - 2022</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Assisted in the development of new features for the company's flagship product.</li>
              <li>Fixed bugs and improved application performance.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
