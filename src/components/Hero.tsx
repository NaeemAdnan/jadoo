import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6">
          <p className="text-red-500 font-semibold uppercase">
            Best Destinations around the world
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Travel, enjoy and live a new and full life
          </h1>
          <p className="text-gray-600">
            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening.
          </p>
          <div className="flex items-center space-x-6">
            <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
              Find out more
            </button>
            <button className="flex items-center space-x-2 group">
              <div className="p-4 bg-red-500 rounded-full group-hover:bg-red-600">
                <Play className="w-4 h-4 text-white" />
              </div>
              <span>Play Demo</span>
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img 
            src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&q=80"
            alt="Traveler with backpack"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}