
import React from 'react';
import { Smartphone, ShieldCheck, TrendingUp } from 'lucide-react';

const FeatureCards: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">왜 글로벌금융판매인가요?</h2>
        <p className="text-gray-600 text-lg">최고의 파트너에게 드리는 최고의 지원 환경</p>
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-3 gap-8">
        <div className="p-10 rounded-3xl bg-gray-50 border border-gray-100 transition-all hover:shadow-xl hover:translate-y-[-8px]">
          <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-600/20">
            <Smartphone size={28} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">모바일 원스톱 업무</h3>
          <p className="text-gray-600 leading-relaxed">
            언제 어디서나 스마트폰 하나로 상품 비교, 설계, 청약까지 가능합니다.
          </p>
        </div>

        <div className="p-10 rounded-3xl bg-blue-600 border border-blue-500 transition-all hover:shadow-xl hover:translate-y-[-8px] text-white">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-8 shadow-lg shadow-white/10">
            <ShieldCheck size={28} />
          </div>
          <h3 className="text-xl font-bold mb-4">국내 최대 GA 인프라</h3>
          <p className="text-white/80 leading-relaxed">
            30여 개 보험사의 상품을 비교 분석하여 고객에게 최적의 솔루션을 제공합니다.
          </p>
        </div>

        <div className="p-10 rounded-3xl bg-gray-50 border border-gray-100 transition-all hover:shadow-xl hover:translate-y-[-8px]">
          <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-600/20">
            <TrendingUp size={28} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">업계 최고 수준 수수료</h3>
          <p className="text-gray-600 leading-relaxed">
            투명한 수수료 체계와 성과급으로 당신의 노력에 정직하게 보답합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
