import React from 'react';
import heroImg from '../assets/n-job_partner_01.png';

const Hero = () => (
  <section className="pt-32 pb-20 px-4">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6">
        <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-sm font-bold">
          직장인·주부를 위한 스마트한 부업
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          퇴근 후,<br />
          <span className="text-blue-900">돈 되는 선택</span> 하나
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          퇴근 후나 주말, 그냥 쉬기엔 아쉽고 무리하긴 싫은 시간 있잖아요.<br />
          남는 시간만 활용해 수익이 생기는 구조입니다.
        </p>
        <div className="space-y-3">
          {['초기비용 없이 시작', '교육·자료·시스템 지원', '본업에 지장 없음'].map((item) => (
            <div key={item} className="flex items-center gap-2 text-gray-700 font-medium">
              <span className="text-blue-600 font-bold">✓</span> {item}
            </div>
          ))}
        </div>
        <a href="#apply" className="inline-block bg-blue-900 text-white text-lg font-bold py-4 px-10 rounded-lg hover:bg-blue-800 transition-all transform hover:-translate-y-1 shadow-xl">
          자세히 알아보기
        </a>
      </div>
      <div className="flex-1 relative">
        <div className="absolute -inset-4 bg-blue-100 rounded-2xl rotate-3 -z-10"></div>
        <img
          src={heroImg}
          alt="Hero"
          className="rounded-2xl shadow-2xl w-full h-[600px] object-cover object-top"
        />
      </div>
    </div>
  </section>
);

export default Hero;
