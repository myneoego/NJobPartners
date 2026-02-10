
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const BenefitSection: React.FC = () => {
  const benefits = [
    "근무 시간과 장소에 구애받지 않는 완전 자율 시스템",
    "기존 전문직 여성 커리어와 연계한 고품격 컨설팅",
    "업계 최고 수준의 투명한 수수료 체계",
    "전문가 1:1 멘토링 및 체계적인 모바일 교육 지원",
    "글로벌금융판매만의 강력한 브랜드 파워와 상품 경쟁력"
  ];

  return (
    <section id="benefits" className="py-32 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-5/12 order-2 md:order-1">
            <div className="space-y-10">
              <div>
                <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-4 block">Our Values</span>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                  성공하는 여성들의<br />
                  <span className="text-blue-600">새로운 선택</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  우리는 단순한 영업을 넘어, 고객의 인생을 함께 고민하는 금융 전문가를 지향합니다. 당신의 품격에 어울리는 업무 환경을 제공합니다.
                </p>
              </div>
              
              <ul className="space-y-6">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 text-blue-600 mt-1">
                      <CheckCircle2 size={24} className="group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg leading-snug">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="w-full md:w-7/12 order-1 md:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-50 rounded-[2.5rem] transform -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200" 
                alt="Professional Consultation" 
                className="rounded-[2rem] shadow-2xl relative z-10 w-full h-[600px] object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
