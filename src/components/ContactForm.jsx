import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    agreed: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('성함과 연락처를 모두 입력해주세요.');
      return;
    }
    if (!formData.agreed) {
      alert('개인정보 수집 및 이용에 동의해야 신청이 가능합니다.');
      return;
    }

    setIsSubmitting(true);

    // 연락처 포맷팅: 숫자로만 된 경우 010-0000-0000 형식으로 변환
    const formatPhoneNumber = (val) => {
      const nums = val.replace(/[^\d]/g, '');
      if (nums.length === 11) {
        return `${nums.slice(0, 3)}-${nums.slice(3, 7)}-${nums.slice(7)}`;
      } else if (nums.length === 10) {
        return `${nums.slice(0, 3)}-${nums.slice(3, 6)}-${nums.slice(6)}`;
      }
      return val;
    };

    const templateParams = {
      name: formData.name,
      phone: formatPhoneNumber(formData.phone),
      subject: `[N잡 파트너스 간편 지원]${formData.name}`,
      from_name: 'N잡 파트너스'
    };

    try {
      await emailjs.send(
        'service_i7rcbmc',
        'template_18hifwk',
        templateParams,
        'FzzHQhVk1tMzm__2T'
      );
      alert('신청이 성공적으로 접수되었습니다. 곧 연락드리겠습니다!');
      setFormData({ name: '', phone: '', agreed: false });
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('발송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="apply" className="py-24 px-4 bg-[#0f172a] text-white">
      <div className="max-w-3xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">N잡 파트너스 간편지원</h2>
          <p className="text-gray-400">성함과 연락처만 남겨주시면 자세한 안내를 위해 상담원이 연락드립니다.</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm space-y-8 text-left">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-bold text-gray-300">성함</label>
              <input
                type="text" id="name" placeholder="홍길동"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all placeholder:text-gray-600 text-white"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-bold text-gray-300">연락처</label>
              <input
                type="text" id="phone" placeholder="010-0000-0000"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all placeholder:text-gray-600 text-white"
                required
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-300">개인정보 수집 및 이용 안내</label>
              <div className="w-full h-32 px-4 py-3 bg-white/5 border border-white/10 rounded-xl overflow-y-auto text-xs text-gray-400 leading-relaxed scrollbar-thin scrollbar-thumb-white/20">
                &lt;개인정보 수집 및 이용에 대한 안내&gt;<br /><br />
                1. 개인정보 수집·이용 목적, 수집항목, 수집방법에 관한 사항<br />
                가. 개인정보의 수집 및 이용목적<br />
                글로벌금융판매는 N잡 파트너스 채용 상담을 위해 아래와 같은 최소한의 개인정보를 필수항목으로 수집하고 있습니다.<br />
                나. 수집하는 개인정보 항목<br />
                ο 필수항목 : 이름, 휴대폰 번호<br />
                ο 기타 : 서비스 이용과정이나 사업처리 과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다.(쿠키, 방문 일시, 서비스 이용 기록)<br />
                다. 개인정보 수집방법<br />
                N잡 파트너스 채용 상담 문의 시 입력란에 직접 입력하는 방식<br /><br />
                2. 개인정보의 보유 및 이용기간, 파기절차 및 방법<br />
                가. 보유 및 이용기간<br />
                개인정보의 보유 및 이용 기간 : 동의일로부터 1년<br />
                (단, 이용자가 개인정보의 수집·이용 등에 대한 동의 철회, 개인정보 삭제 또는 파기 요청이 있는 경우 해당 개인정보를 즉시 파기합니다.)<br />
                나. 파기절차 및 방법<br />
                전자적 파일 형태로 저장된 개인정보는 기록을 복원할 수 없는 기술적 방법을 사용하여 영구 삭제합니다.<br /><br />
                개인정보 보호 담당부서<br />
                부서: MP총괄<br />
                연락처: 1588-0306
              </div>
            </div>
            <div className="flex gap-3 items-start cursor-pointer">
              <input
                type="checkbox" id="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="mt-1 w-5 h-5 rounded border-white/10 text-blue-900 focus:ring-blue-500 bg-white/5"
              />
              <label htmlFor="agreed" className="text-sm text-gray-400 leading-snug">
                개인정보 수집 및 이용에 동의합니다.
              </label>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-5 rounded-xl text-lg font-bold transition-all transform hover:scale-[1.02] shadow-lg ${isSubmitting ? 'bg-gray-600' : 'bg-blue-900 hover:bg-blue-800'} text-white`}
            >
              {isSubmitting ? '전송 중...' : '신청하기'}
            </button>
            <p className="text-center text-xs text-gray-500">* 입력하신 정보는 상담 목적으로만 사용되며, 철저히 보호됩니다.</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
