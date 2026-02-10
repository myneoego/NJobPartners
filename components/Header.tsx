
import React from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-start leading-none">
            <div className="flex items-center gap-1">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-blue-500 rounded-full opacity-20"></div>
                <div className="w-5 h-5 bg-gradient-to-tr from-blue-700 to-blue-300 rounded-full shadow-inner"></div>
                <div className="absolute -left-1 top-0 w-4 h-6 border-l-2 border-t-2 border-blue-400 rounded-tl-full"></div>
              </div>
              <div className="flex items-baseline">
                <span className={`text-xl font-black tracking-tighter ${isScrolled ? 'text-gray-900' : 'text-white'}`}>GL</span>
                <span className="text-xl font-black tracking-tighter text-blue-500">O</span>
                <span className={`text-xl font-black tracking-tighter ${isScrolled ? 'text-gray-900' : 'text-white'}`}>BAL</span>
                <span className="ml-1 text-sm font-bold text-blue-600">FM</span>
              </div>
            </div>
            <span className={`text-[10px] font-bold mt-1 ${isScrolled ? 'text-gray-800' : 'text-white/90'}`}>
              (주)글로벌금융판매
            </span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#benefits" className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'}`}>모집안내</a>
          <button 
            onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
            className={`px-5 py-2 rounded-full font-bold transition-all shadow-lg ${isScrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-700 hover:bg-gray-100'}`}
          >
            지원하기
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
