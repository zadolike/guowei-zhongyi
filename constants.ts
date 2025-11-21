import { ServiceItem, Testimonial } from './types';

export const CLINIC_NAME = "狗威中医诊所";
export const CLINIC_TAGLINE = "传承千年中医智慧，守护您的身心健康";

export const SERVICES: ServiceItem[] = [
  {
    title: "精准针灸",
    description: "运用传统针刺疗法，疏通经络，调和气血，有效缓解疼痛与慢性疾病。",
    iconName: "Needle",
  },
  {
    title: "古法推拿",
    description: "结合正骨与软组织松解手法，针对颈肩腰腿痛有显著疗效。",
    iconName: "Hand",
  },
  {
    title: "特色中药",
    description: "狗威医师亲自把脉开方，精选道地药材，为您量身定制调理方案。",
    iconName: "Flask",
  },
  {
    title: "拔罐刮痧",
    description: "祛除体内湿气寒气，促进血液循环，增强机体免疫力。",
    iconName: "Cup",
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "张先生",
    comment: "多年的腰痛在狗威大夫这里调理了三次就好了，太神奇了！",
    rating: 5,
  },
  {
    name: "李女士",
    comment: "诊所环境很安静，充满了中草药的清香，让人很放松。",
    rating: 5,
  },
  {
    name: "王奶奶",
    comment: "狗威大夫态度特别好，把脉很准，开的药也不贵，良心医生。",
    rating: 5,
  }
];

export const NAV_LINKS = [
  { name: "首页", href: "#home" },
  { name: "关于狗威", href: "#about" },
  { name: "诊疗项目", href: "#services" },
  { name: "AI 问诊", href: "#ai-consult" },
  { name: "预约挂号", href: "#contact" },
];