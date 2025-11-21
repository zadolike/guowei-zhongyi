import React from 'react';
import { SERVICES } from '../constants';
import { Activity, Hexagon, Leaf, Flame } from 'lucide-react';

// Helper to render icons dynamically based on name
const IconMap: Record<string, React.ElementType> = {
  Needle: Activity, // Abstract representation for Acupuncture
  Hand: Hexagon,    // Structure/Bone representation for Massage
  Flask: Leaf,      // Herbs
  Cup: Flame,       // Cupping/Heat
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-tcm-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-tcm-primary sm:text-4xl">
            诊疗项目
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            我们提供全方位的中医理疗服务，从内调到外治，全面呵护您的健康。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = IconMap[service.iconName];
            return (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-tcm-secondary group"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-tcm-primary/10 group-hover:bg-tcm-primary transition-colors duration-300">
                  <Icon className="h-8 w-8 text-tcm-primary group-hover:text-tcm-light" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2 font-serif">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;