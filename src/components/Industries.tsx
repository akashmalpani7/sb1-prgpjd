import React from 'react';
import { Building2, Stethoscope, ShoppingBag, Plane } from 'lucide-react';

const industries = [
  {
    icon: Building2,
    name: "Finance",
    description: "Automate customer support for banking, insurance, and investment services.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    icon: Stethoscope,
    name: "Healthcare",
    description: "Streamline patient communication and appointment scheduling.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    icon: ShoppingBag,
    name: "Retail",
    description: "Enhance shopping experience with personalized recommendations.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    icon: Plane,
    name: "Travel",
    description: "Simplify booking process and provide 24/7 travel assistance.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800&h=600"
  }
];

export default function Industries() {
  return (
    <section id="solutions" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Solutions for Every Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored AI solutions that understand your industry's unique challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-2xl"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={industry.image}
                  alt={industry.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 p-8 flex flex-col justify-end">
                <div className="flex items-center text-white mb-2">
                  <industry.icon className="h-6 w-6 mr-2" />
                  <h3 className="text-2xl font-bold">{industry.name}</h3>
                </div>
                <p className="text-white/90">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}