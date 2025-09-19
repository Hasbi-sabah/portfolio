const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
