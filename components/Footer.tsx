import React from 'react';
import { Phone, MapPin, Clock, Instagram } from 'lucide-react';
import { CLINIC_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-tcm-dark text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-tcm-secondary mb-4">
              {CLINIC_NAME}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              专注于传统中医理疗，致力于为每一位患者提供个性化、有温度的医疗服务。让健康自然回归。
            </p>
            <div className="flex space-x-4">
               {/* Social placeholders */}
               <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-tcm-secondary hover:text-tcm-primary cursor-pointer transition-colors">
                 <span className="font-bold text-xs">WX</span>
               </div>
               <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-tcm-secondary hover:text-tcm-primary cursor-pointer transition-colors">
                 <Instagram className="w-4 h-4" />
               </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">
              联系方式
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-tcm-secondary mr-3 mt-1 flex-shrink-0" />
                <span>贵港市港北区xx街道xx号<br/>狗威中医馆</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-tcm-secondary mr-3 flex-shrink-0" />
                <span>(010) 8888-6666</span>
              </li>
              <li className="flex items-center">
                <span className="text-tcm-secondary font-bold mr-3 w-5 text-center">@</span>
                <span>contact@gouweiclinic.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">
              营业时间
            </h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>周一 至 周五</span>
                <span className="text-white">09:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>周六</span>
                <span className="text-white">10:00 - 18:00</span>
              </li>
              <li className="flex justify-between text-gray-500">
                <span>周日</span>
                <span>休息</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div className="flex items-center text-tcm-secondary mb-2">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm font-bold">预约提示</span>
              </div>
              <p className="text-xs">为了减少等待时间，建议您提前一天通过电话或AI助手预约。</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {CLINIC_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;