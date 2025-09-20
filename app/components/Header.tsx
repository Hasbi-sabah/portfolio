import Link from 'next/link';
import { navigation } from '../data';
import { NavigationItem } from '../types';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">My Portfolio</Link>
        <nav>
          <ul className="flex space-x-4">
            {navigation.map((item: NavigationItem) => (
              <li key={item.name}>
                <Link href={item.href} passHref>
                  <Button variant="ghost" className="hover:text-gray-400">{item.name}</Button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
