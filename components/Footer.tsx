import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-500 py-20 border-t border-gray-100 pb-32 md:pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-16">
          <div className="space-y-6">
            {/* CI Logo for Footer */}
            <div className="flex flex-col items-start leading-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
              <div className="flex items-center gap-1.5">
                <div className="relative w-6 h-6 flex items-center justify-center scale-75">
                  <div className="absolute inset-0 border border-blue-400 rounded-full opacity-30"></div>
                  <div className="w-5 h-5 bg-gradient-to-br from-blue-600 to-black rounded-full"></div>
                </div>
                <div className="flex items-baseline">
                  <span className="text-lg font-black tracking-tighter text-gray-900">GL</span>
                  <span className="text-lg font-black tracking-tighter text-blue-500">O</span>
                  <span className="text-lg font-black tracking-tighter text-gray-900">BAL</span>
                  <span className="ml-1 text-xs font-bold text-blue-600">FM</span>
                </div>
              </div>
              <span className="text-[9px] font-black mt-1 tracking-tight text-gray-600">
                (주)글로벌금융판매
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed">
              글로벌금융판매는 전국 최고의 전문 인프라를 바탕으로 고객에게 정직한 가치를 전달하며, 파트너와 함께 동반 성장하는 국내 최대 보험 판매 전문 기업입니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-sm">
            <div className="space-y-4">
              <h4 className="text-gray-900 font-bold uppercase tracking-widest text-[10px]">Business Contact</h4>
              <div className="space-y-2">
                <p><span className="font-bold text-gray-700">상호:</span> (주)글로벌금융판매</p>
                <p><span className="font-bold text-gray-700">주소:</span> 인천광역시 남동구 구월동</p>
                <p><span className="font-bold text-gray-700">대표번호:</span> 1588-OOOO</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-gray-900 font-bold uppercase tracking-widest text-[10px]">Policy & Help</h4>
              <div className="flex flex-col gap-2">
                <span className="hover:text-blue-600 cursor-pointer transition-colors">이용약관</span>
                <span className="hover:text-blue-600 cursor-pointer transition-colors font-bold text-gray-800 underline underline-offset-4">개인정보처리방침</span>
                <span className="hover:text-blue-600 cursor-pointer transition-colors">보험상품 광고심의기준</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-100 text-[11px] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-medium tracking-tight">© 2011-2026 GLOBAL FM. All Rights Reserved.</p>
          <div className="flex items-center gap-6 font-light opacity-50">
            <span>사업자등록번호: 131-86-16703</span>
            <span>보험대리점 등록번호: 제2009091278호</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;