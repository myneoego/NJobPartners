
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800 pb-24 md:pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-baseline font-bold tracking-tighter mb-4">
              <span className="text-xl text-white">GLOBAL</span>
              <span className="text-xl text-blue-500">FM</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed">
              글로벌금융판매는 고객에게 정직한 가치를 전달하며 파트너와 함께 동반 성장하는 국내 최대 보험 판매 전문 회사입니다.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h4 className="text-white font-bold mb-4">회사정보</h4>
              <p className="text-sm">상호: 글로벌금융판매</p>
              <p className="text-sm">주소: 인천시 남동구 구월동</p>
              <p className="text-sm">대표번호: 1588-OOOO</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-bold mb-4">바로가기</h4>
              <p className="text-sm hover:text-white cursor-pointer transition-colors">이용약관</p>
              <p className="text-sm hover:text-white cursor-pointer transition-colors">개인정보처리방침</p>
              <p className="text-sm hover:text-white cursor-pointer transition-colors">광고심의기준</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-xs flex flex-col md:flex-row justify-between gap-4">
          <p>© 2024 Global Finance Sales. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span>사업자등록번호: [미입력]</span>
            <span>보험대리점 등록번호: [미입력]</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
