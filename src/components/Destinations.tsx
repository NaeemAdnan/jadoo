const destinations = [
  {
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80",
    city: "Rome, Italy",
    price: "৳5.42k",
    duration: "10 Days Trip"
  },
  {
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80",
    city: "London, UK",
    price: "৳4.2k",
    duration: "12 Days Trip"
  },
  {
    image: "https://images.unsplash.com/photo-1523496922380-91d5afba98a3?auto=format&fit=crop&q=80",
    city: "Full Europe",
    price: "৳15k",
    duration: "28 Days Trip"
  },
  {
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80",
    city: "Santorini, Greece",
    price: "৳6.8k",
    duration: "14 Days Trip"
  },
  {
    image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&q=80",
    city: "Tokyo, Japan",
    price: "৳7.2k",
    duration: "15 Days Trip"
  },
  {
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80",
    city: "Bali, Indonesia",
    price: "৳4.8k",
    duration: "10 Days Trip"
  }
];

export default function Destinations() {
  return (
    <section className="py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gray-500 dark:text-gray-400 uppercase">Top Selling</p>
          <h2 className="text-3xl font-bold mt-2 dark:text-white">Top Destinations</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div 
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800"
            >
              <img 
                src={destination.image} 
                alt={destination.city}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium dark:text-white">{destination.city}</span>
                  <span className="font-bold dark:text-white">{destination.price}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <span>{destination.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}