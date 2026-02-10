import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, TrendingUp, ShieldCheck } from 'lucide-react';

import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import BenefitSection from './components/BenefitSection.tsx';
import FeatureCards from './components/FeatureCards.tsx';
import ApplicationForm from './components/ApplicationForm.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col antialiased bg-white">
      <Header isScrolled={isScrolled} />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Simple Intro Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
              <div className="space-y-4">
                <div className="text-blue-600 mb-2"><Clock size={32} /></div>
                <h3 className="text-xl font-bold text-gray-900">완전 자율 근무</h3>
                <p className="text-gray-500 leading-relaxed">퇴근 후, 주말 등 당신이 원하는 시간에만 스마트하게 업무를 진행하세요.</p>
              </div>
              <div className="space-y-4">
                <div className="text-blue-600 mb-2"><TrendingUp size={32} /></div>
                <h3 className="text-xl font-bold text-gray-900">안정적 추가 수익</h3>
                <p className="text-gray-500 leading-relaxed">본업의 밸런스를 해치지 않으면서 투명한 수수료 체계로 수익을 창출합니다.</p>
              </div>
              <div className="space-y-4">
                <div className="text-blue-600 mb-2"><ShieldCheck size={32} /></div>
                <h3 className="text-xl font-bold text-gray-900">최상의 지원 인프라</h3>
                <p className="text-gray-500 leading-relaxed">국내 최대 GA의 노하우와 모바일 시스템으로 어디서든 편리하게 일하세요.</p>
              </div>
            </div>
          </div>
        </section>

        <BenefitSection />
        <FeatureCards />
        <ApplicationForm />
      </main>

      <Footer />

      {/* Mobile Sticky Button */}
      <div className="fixed bottom-6 left-4 right-4 md:hidden z-50">
        <button 
          onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg shadow-2xl flex items-center justify-center gap-2 active:scale-95 transition-all"
        >
          지금 상담 신청하기 <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default App;