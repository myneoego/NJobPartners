
import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  ShieldCheck, 
  Smartphone, 
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

// Sub-components
import Header from './components/Header';
import Hero from './components/Hero';
import BenefitSection from './components/BenefitSection';
import FeatureCards from './components/FeatureCards';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header isScrolled={isScrolled} />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Main Copy Section - From User Request */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-700 rounded-full mb-2">
                  <Clock size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                  퇴근 후,<br />돈 되는 선택 하나
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  퇴근 후나 주말, 그냥 쉬기엔 아쉽고 무리하긴 싫은 시간 있잖아요. 본업은 그대로 두고, 남는 시간만 활용하는 구조입니다.
                </p>
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-700 rounded-full mb-2">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                  시간은 그대로,<br />수입만 추가
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  지금 쓰는 시간에서 수입이 조금 더 나온다면 어떨까요? 근무시간을 늘리거나 본업을 흔드는 구조는 아닙니다.
                </p>
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-700 rounded-full mb-2">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                  지금의 커리어는 지키고,<br />수입 루트 하나 더
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  커리어 유지를 전제로 설계된 구조입니다. 선별된 방식으로만 추가 수익을 만듭니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <BenefitSection />
        <FeatureCards />
        <ApplicationForm />
      </main>

      <Footer />

      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 md:hidden z-50">
        <button 
          onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-2xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          지금 바로 상담 신청하기 <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default App;
