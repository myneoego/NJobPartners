import React from 'react';

const Features = () => (
  <section id="features" className="py-24 bg-gray-50 px-4">
    <div className="max-w-7xl mx-auto text-center space-y-16">
      <h2 className="text-3xl font-bold">왜 글로벌금융판매 N잡 파트너인가?</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-left space-y-6 border border-gray-100">
          <div className="text-4xl">⏰</div>
          <h3 className="text-2xl font-bold">시간은 그대로, 수입만 추가</h3>
          <p className="text-gray-600 leading-relaxed">근무시간은 그대로 두고, 이미 비어 있는 시간만 활용하는 N잡 형태입니다.</p>
          <div className="grid grid-cols-2 gap-3 text-sm font-medium">
            <div className="flex items-center gap-2 text-gray-700">✓ 초기비용 부담 없음</div>
            <div className="flex items-center gap-2 text-gray-700">✓ 단계별 교육 지원</div>
            <div className="flex items-center gap-2 text-gray-700">✓ 무리 없는 진행</div>
          </div>
        </div>
        <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-left space-y-6 border border-gray-100">
          <div className="text-4xl">💼</div>
          <h3 className="text-2xl font-bold">지금의 커리어는 지키고, 수입 루트 하나 더</h3>
          <p className="text-gray-600 leading-relaxed">커리어는 그대로 두고, 선별된 방식으로 추가 수익을 만드는 구조입니다.</p>
          <div className="grid grid-cols-2 gap-3 text-sm font-medium">
            <div className="flex items-center gap-2 text-gray-700">✓ 커리어 유지 우선</div>
            <div className="flex items-center gap-2 text-gray-700">✓ 단계별 판단 가능</div>
            <div className="flex items-center gap-2 text-gray-700">✓ 교육·시스템 지원</div>
            <div className="flex items-center gap-2 text-gray-700">✓ 업무 전문성 강화</div>
          </div>
        </div>
      </div>
      <p className="text-xl font-medium text-gray-700">
        시간은 그대로 두고 수입만 추가하세요.<br />
        부담 없이 상담부터 받아보셔도 좋습니다.
      </p>
    </div>
  </section>
);

export default Features;
