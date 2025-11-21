export enum Sender {
  User = 'user',
  Bot = 'bot',
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: Sender;
  timestamp: number;
}

export interface ServiceItem {
  title: string;
  description: string;
  iconName: string; // Mapping to Lucide icons
}

export interface Testimonial {
  name: string;
  comment: string;
  rating: number;
}