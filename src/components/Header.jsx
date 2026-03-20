import React from 'react';
import logo from '../assets/logo.png';

const Header = () => (
  <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={logo} alt="글로벌금융판매 로고" className="h-10 w-auto object-contain" />
        <span className="text-gray-300 text-sm">|</span>
        <span className="text-gray-900 text-3xl font-extrabold tracking-tight">N잡 파트너스</span>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-sm font-medium hover:text-blue-700 transition-colors">주요혜택</a>
        <a href="#system" className="text-sm font-medium hover:text-blue-700 transition-colors">지원시스템</a>
        <a href="#apply" className="bg-blue-900 text-white text-sm font-bold py-2 px-6 rounded-md hover:bg-blue-800 transition-all">간편지원하기</a>
      </nav>
    </div>
  </header>
);

export default Header;
