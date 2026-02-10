import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-white">
      {/* Background Image - The high-end professional model from the original first build */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <div className="w-full md:w-3/4 h-full relative">
          <img 
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1920" 
            alt="Sophisticated Professional"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle gradient to blend with white background on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent md:block hidden"></div>
          {/* Mobile overlay */}
          <div className="absolute inset-0 bg-white/60 md:hidden"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-50 border-l-4 border-blue-600 text-blue-700 font-bold text-sm mb-8">
            <span className="uppercase tracking-widest text-[10px]">Premium N-Job</span>
            <span>글로벌금융판매 파트너스</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight text-gray-900 animate-fade-in">
            당신의 <span className="text-blue-600 underline decoration-blue-200 decoration-8 underline-offset-8">여유 시간</span>이<br />
            가치 있는 수입이 됩니다
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed font-normal max-w-lg animate-fade-in" style={{animationDelay: '0.2s'}}>
            직장은 그대로, 수입은 플러스.<br />
            스마트한 전문직 여성들을 위한 <br />
            최상의 비즈니스 파트너십을 제안합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <button 
              onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-gray-900 hover:bg-black text-white rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-2xl"
            >
              지금 바로 시작하기 <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;