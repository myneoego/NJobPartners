import React from 'react';

const Footer = () => (
  <footer className="py-12 px-4 border-t border-gray-100">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
      <div className="space-y-4">
        <div className="text-sm text-gray-500 space-y-1">
          <p>회사명 : (주)글로벌금융판매</p>
          <p>소속명 : 엠피센터지점</p>
          <p>근무주소 : 인천시 남동구 인하로507번길 97, 5층</p>
          <p>고용주체 : </p>
          <p>영업형태 : 대면</p>
          <p>담당자명,연락처 : 서정미 이사, <span className="font-bold text-gray-900">010-3273-1319</span></p>
          <p className="leading-relaxed break-keep">근무형태 : 프리랜서,위촉직,보험업법상 보험설계사를 모집하는 것으로 정규 또는 비정규직원 채용과는 무관합니다.</p>
          <div className="pt-2 mt-2 space-y-1 text-xs text-gray-400 break-keep">
            <p>* 본 채용 공고의 형태는 위촉직 보험설계사이며, 영업 형태는 대면 영업에 해당됩니다.</p>
            <p>* 보험업감독규정 제 4-32조 제5항에서 정한 비율(초년도 수수료 1,200%룰)의 범위를 준수하여 분할지급합니다.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-start md:items-end gap-4">
        <div className="text-sm text-gray-400">© Global FM. All Rights Reserved.</div>
        <div className="text-xs text-gray-400 max-w-md md:text-right">
          해당 보험모집인은 다수의 보험사와 계약 체결 및 대리, 중개하는 보험대리점입니다.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
