import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="antialiased text-gray-800 bg-tcm-light min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <div id="ai-consult" className="bg-gradient-to-b from-tcm-light to-white h-1"></div>
        <About />
      </main>
      <ChatBot />
      <Footer />
    </div>
  );
};

export default App;