import { Facebook, Github, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Jadoo.</h3>
            <p className="text-gray-600">
              Book your trip in minute, get full control for much longer.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#about">About</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#mobile">Mobile</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#help">Help/FAQ</a></li>
              <li><a href="#press">Press</a></li>
              <li><a href="#affiliates">Affiliates</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">More</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#airlinefees">Airline Fees</a></li>
              <li><a href="#airline">Airline</a></li>
              <li><a href="#lowfare">Low fare tips</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            All rights reserved@jadoo.com and MD Abu Naeem
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com/abu.naeem.adnan" className="text-gray-600 hover:text-blue-600">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/abu.naeem.adnan/" className="text-gray-600 hover:text-pink-600">
              <Instagram />
            </a>
            <a href="https://github.com/NaeemAdnan" className="text-gray-600 hover:text-blue-400">
              <Github />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}