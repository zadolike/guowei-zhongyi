import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative mb-12 lg:mb-0">
            <div className="absolute inset-0 bg-tcm-secondary/20 transform translate-x-4 translate-y-4 rounded-lg"></div>
            <img 
              src="https://picsum.photos/600/800" 
              alt="Gouwei Doctor" 
              className="relative rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Text Side */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-tcm-primary mb-6">
              关于主理人 — 狗威
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                “狗威”这个名字听起来或许有些随性，但在中医界，这是一块响当当的金字招牌。
              </p>
              <p className="mb-4">
                出生于中医世家，狗威医师自幼跟随祖父识药辨方。二十余年的临床经验，让他练就了一双“透视眼”和一双“回春手”。他坚持“医者仁心”，不仅仅是治疗身体的病痛，更注重疏导患者的情志。
              </p>
              <p className="mb-6">
                虽然诊所不大，但这里充满了人情味。狗威常说：“最好的医生是人体自身的自愈力，我的作用就是帮大家把这扇门打开。”
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-tcm-light rounded-lg border-l-4 border-tcm-accent">
                  <span className="block text-2xl font-bold text-tcm-primary">20+</span>
                  <span className="text-sm text-gray-500">年临床经验</span>
                </div>
                <div className="p-4 bg-tcm-light rounded-lg border-l-4 border-tcm-accent">
                  <span className="block text-2xl font-bold text-tcm-primary">5000+</span>
                  <span className="text-sm text-gray-500">康复案例</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;