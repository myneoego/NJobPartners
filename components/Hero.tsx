
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-gray-900">
      {/* Background Image - Professional Career Woman */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1920" 
          alt="Professional Career Woman"
          className="w-full h-full object-cover opacity-60 object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-400/30 text-blue-400 font-bold text-sm mb-6 animate-fade-in">
            글로벌금융판매 N잡 파트너스 모집
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
            내 커리어는 <span className="text-blue-500">그대로</span>,<br />
            수입은 <span className="text-blue-500">추가로</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
            지금 하고 있는 일은 바꾸지 마세요. <br />
            일상이 수익이 되는 스마트한 라이프스타일을 제안합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl shadow-blue-600/20"
            >
              1분 만에 파트너 신청하기 <ChevronRight size={20} />
            </button>
            <button 
              className="px-8 py-5 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm rounded-xl font-bold text-lg transition-all"
            >
              상세 수익 모델 확인
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
