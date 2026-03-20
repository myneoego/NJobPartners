import React from 'react';

const Footer = () => (
  <footer className="py-12 px-4 border-t border-gray-100">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
      <div className="space-y-4">
        <div className="font-bold text-lg">글로벌금융판매</div>
        <div className="text-sm text-gray-500 space-y-1">
          <p>주소: 인천시 남동구 구월동</p>
          <p>사업자 번호: 131-86-16703</p>
          <p>보험대리점 등록번호: 제2009091278호</p>
          <p>대표번호: <span className="font-bold text-gray-900">1588-OOOO</span></p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-start md:items-end gap-4">
        <div className="text-sm text-gray-400">© Global Finance Sales. All Rights Reserved.</div>
        <div className="text-xs text-gray-400 max-w-md md:text-right">
          해당 보험모집인은 다수의 보험사와 계약 체결 및 대리, 중개하는 보험대리점입니다.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
