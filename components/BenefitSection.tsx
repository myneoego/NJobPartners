
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const BenefitSection: React.FC = () => {
  const benefits = [
    "출근 없는 100% 자율 근무 시스템",
    "전문 교육 및 멘토링 프로그램 지원",
    "경력 단절 걱정 없는 지속 가능한 수입원",
    "성과에 따른 압도적인 보상 체계",
    "본업의 커리어를 활용한 고효율 영업"
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000" 
                alt="Sophisticated Woman in Suit" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-600/10 rounded-full z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-600/10 rounded-full z-0"></div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                바쁜 일상 속에서도<br />
                <span className="text-blue-600">성장하는 수입</span>을 경험하세요
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                커리어 우먼으로서의 자부심은 지키고, <br />
                남는 시간의 가치를 극대화하는 가장 세련된 방법입니다.
              </p>
            </div>
            
            <ul className="space-y-4">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-4 text-gray-800 font-medium text-lg">
                  <div className="flex-shrink-0 text-blue-600">
                    <CheckCircle2 size={24} />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
