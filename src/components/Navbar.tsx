import { Menu } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        <a href="/" className="text-2xl font-bold dark:text-white">Jadoo</a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#destinations" className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">Destinations</a>
          <a href="#hotels" className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">Hotels</a>
          <a href="#flights" className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">Flights</a>
          <a href="#bookings" className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">Bookings</a>
          <button className="px-4 py-2 dark:text-white">Login</button>
          <button className="px-4 py-2 border border-black dark:border-white rounded-md hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black">
            Sign up
          </button>
          <ThemeToggle />
          <select className="bg-transparent dark:text-white">
            <option>EN</option>
          </select>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu className="dark:text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 dark:text-white">
          <a href="#destinations" className="block hover:text-blue-600">Destinations</a>
          <a href="#hotels" className="block hover:text-blue-600">Hotels</a>
          <a href="#flights" className="block hover:text-blue-600">Flights</a>
          <a href="#bookings" className="block hover:text-blue-600">Bookings</a>
          <button className="block w-full px-4 py-2">Login</button>
          <button className="block w-full px-4 py-2 border border-black dark:border-white rounded-md">
            Sign up
          </button>
          <select className="bg-transparent w-full">
            <option>EN</option>
          </select>
        </div>
      )}
    </nav>
  );
}