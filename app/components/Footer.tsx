import { personalInfo } from '../data';
import { SocialLink } from '../types';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          {personalInfo.social.map((link: SocialLink) => (
            <Button key={link.name} asChild variant="link" className="text-white hover:text-gray-400">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
