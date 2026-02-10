
import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    currentJob: '',
    agreement: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreement) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', currentJob: '', agreement: false });
    }, 1500);
  };

  return (
    <section id="application-form" className="py-24 bg-gray-100">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden">
          <div className="bg-blue-700 p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">N잡 파트너스 간편 신청</h2>
            <p className="text-blue-100 text-lg">상담 신청을 남겨주시면 담당자가 24시간 이내에 연락드립니다.</p>
          </div>
          
          <div className="p-8 md:p-12">
            {isSuccess ? (
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">신청이 완료되었습니다!</h3>
                <p className="text-gray-600 mb-8">빠른 시일 내에 전문 상담원이 연락드리겠습니다.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold"
                >
                  확인
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">이름</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="성함을 입력해주세요"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">연락처</label>
                  <input 
                    type="tel" 
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="010-0000-0000"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="job" className="block text-sm font-bold text-gray-700 mb-2">현재 직업 (선택)</label>
                  <input 
                    type="text" 
                    id="job"
                    value={formData.currentJob}
                    onChange={(e) => setFormData({...formData, currentJob: e.target.value})}
                    placeholder="예: 직장인, 프리랜서 등"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="flex items-start gap-3 py-2">
                  <input 
                    type="checkbox" 
                    id="agreement"
                    required
                    checked={formData.agreement}
                    onChange={(e) => setFormData({...formData, agreement: e.target.checked})}
                    className="mt-1 w-5 h-5 accent-blue-600"
                  />
                  <label htmlFor="agreement" className="text-sm text-gray-600 leading-tight">
                    개인정보 수집 및 마케팅 활용에 동의합니다. (성함 및 연락처는 파트너 상담 목적으로만 사용됩니다.)
                  </label>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-extrabold text-xl shadow-xl transition-all flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'active:scale-95'}`}
                >
                  {isSubmitting ? '전송 중...' : '파트너 상담 신청하기'} <Send size={22} />
                </button>
              </form>
            )}
          </div>
        </div>
        
        <p className="text-center text-gray-500 text-sm mt-8">
          * 제출하신 정보는 보안 정책에 따라 안전하게 보호됩니다.
        </p>
      </div>
    </section>
  );
};

export default ApplicationForm;
