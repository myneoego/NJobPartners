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
            <div className="flex gap-3 items-start cursor-pointer">
              <input
                type="checkbox" id="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="mt-1 w-5 h-5 rounded border-white/10 text-blue-900 focus:ring-blue-500 bg-white/5"
              />
              <label htmlFor="agreed" className="text-sm text-gray-400 leading-snug">
                개인정보 수집 및 이용에 동의합니다. (수집항목: 성함, 연락처 / 목적: N잡 파트너 가입 상담 안내 / 보유기간: 상담 완료 후 1년)
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
