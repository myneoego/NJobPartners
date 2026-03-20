import React from 'react';
import systemImg from '../assets/n-job_partner_02.jpg';

const SupportSystem = () => (
  <section id="system" className="py-24 px-4 bg-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <div className="flex-1">
        <img 
          src={systemImg} 
          alt="System" 
          className="rounded-2xl shadow-2xl w-full"
        />
      </div>
      <div className="flex-1 space-y-8">
        <h2 className="text-3xl font-bold leading-tight">성공을 위한 완벽한 지원 시스템</h2>
        <p className="text-gray-600 leading-relaxed">
          보험은 어렵다는 편견을 버리세요. 초보자도 바로 시작할 수 있도록 글로벌금융판매만의 노하우가 담긴 교육 프로그램을 제공합니다.
        </p>
        <div className="space-y-6">
          {[
            { id: '01', title: '실무 밀착형 교육', desc: '온/오프라인 교육을 통해 상품 지식부터 상담 기술까지 단계별로 전수합니다.' },
            { id: '02', title: '영업 지원 데이터', desc: '고객 맞춤형 제안서와 최신 마케팅 자료를 실시간으로 지원합니다.' },
            { id: '03', title: '1:1 전담 멘토링', desc: '전문 파트너가 배정되어 실무의 어려움을 함께 해결하고 성장을 돕습니다.' }
          ].map((item) => (
            <div key={item.id} className="flex gap-6 p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <span className="text-2xl font-bold text-blue-600">{item.id}</span>
              <div className="space-y-1">
                <h4 className="text-lg font-bold">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SupportSystem;
