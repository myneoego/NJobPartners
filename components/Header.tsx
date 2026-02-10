
import React from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Simulated CI Logo based on the provided image colors */}
          <div className="flex items-baseline font-bold tracking-tighter">
            <span className={`text-2xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>GLOBAL</span>
            <span className="text-2xl text-blue-500">FM</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'}`}>모집안내</a>
          <a href="#" className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'}`}>수익모델</a>
          <button 
            onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
            className={`px-5 py-2 rounded-full font-bold transition-all ${isScrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-700 hover:bg-gray-100'}`}
          >
            지원하기
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
