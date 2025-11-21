import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Loader2, Sparkles } from 'lucide-react';
import { Sender, ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      text: '您好！我是狗威诊所的 AI 健康助手。有什么不舒服，或者想了解什么养生知识吗？',
      sender: Sender.Bot,
      timestamp: Date.now(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: input,
      sender: Sender.User,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMessage.text);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: Sender.Bot,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat Error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={toggleChat}
          className={`${
            isOpen ? 'hidden' : 'flex'
          } items-center justify-center w-14 h-14 rounded-full bg-tcm-accent text-white shadow-lg hover:bg-red-800 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tcm-accent`}
          aria-label="Open AI Chat"
        >
          <MessageSquare className="w-7 h-7" />
        </button>
      </div>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 w-full sm:w-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden transition-all duration-300 transform border border-gray-200 ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        style={{ maxHeight: '80vh', height: '500px' }}
      >
        {/* Header */}
        <div className="bg-tcm-primary p-4 flex items-center justify-between text-white">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-tcm-secondary" />
            </div>
            <div>
              <h3 className="font-bold text-sm">AI 狗威</h3>
              <p className="text-xs text-emerald-100">24小时在线健康咨询</p>
            </div>
          </div>
          <button onClick={toggleChat} className="text-emerald-100 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === Sender.User ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === Sender.User
                    ? 'bg-tcm-primary text-white rounded-tr-none shadow-sm'
                    : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none shadow-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin text-tcm-primary" />
                <span className="text-xs text-gray-500">AI 正在思考...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="输入症状或健康问题..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-tcm-primary focus:ring-1 focus:ring-tcm-primary text-sm transition-shadow"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-tcm-secondary text-tcm-primary p-2 rounded-full hover:bg-yellow-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-[10px] text-gray-400 text-center mt-2">
            AI 建议仅供参考，身体不适请务必就医。
          </p>
        </div>
      </div>
    </>
  );
};

export default ChatBot;