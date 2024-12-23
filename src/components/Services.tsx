import { CloudSun, Plane, Radio, Settings } from 'lucide-react';

const services = [
  {
    icon: <CloudSun className="w-16 h-16 text-blue-500" />,
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it."
  },
  {
    icon: <Plane className="w-16 h-16 text-blue-500" />,
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the."
  },
  {
    icon: <Radio className="w-16 h-16 text-blue-500" />,
    title: "Local Events",
    description: "Barton vanity itself do in it. Preferd to men it engrossed listening."
  },
  {
    icon: <Settings className="w-16 h-16 text-blue-500" />,
    title: "Customization",
    description: "We deliver outsourced aviation services for military customers"
  }
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gray-500 uppercase">Category</p>
          <h2 className="text-3xl font-bold mt-2">We Offer Best Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 bg-white rounded-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}