import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080" 
          alt="TCM Clinic Ambience" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-tcm-primary/80 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-tcm-light mb-6 drop-shadow-lg animate-fade-in-up">
          望闻问切，匠心仁术
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
          狗威医师主理，融合传统智慧与现代护理，为您提供专属的健康调理方案。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-tcm-primary bg-tcm-secondary hover:bg-yellow-100 md:text-lg transition-transform hover:scale-105"
          >
            立即预约
          </a>
          <a 
            href="#ai-consult"
            className="inline-flex items-center justify-center px-8 py-3 border border-tcm-secondary text-base font-medium rounded-md text-tcm-secondary hover:bg-tcm-secondary/20 md:text-lg transition-all"
          >
            AI 智能问诊 <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;