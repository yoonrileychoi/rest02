import { useState } from 'react';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">연락처</h2>
        <p className="section-subtitle">
          IT 프로젝트 상담부터 장비 구매 문의까지, 언제든지 연락주세요
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <h3 className="info-heading">YJ Solutions</h3>
              <p className="info-sub">2025년부터 고객과 함께해온 신뢰의 IT 파트너</p>

              <div className="info-items">
                <div className="info-item">
                  <span className="info-icon"><FiPhone /></span>
                  <div>
                    <p className="info-label">전화 문의</p>
                    <p className="info-value">02-1234-5678</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><FiMail /></span>
                  <div>
                    <p className="info-label">이메일</p>
                    <p className="info-value">avabrownbb@gmail.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><FiMapPin /></span>
                  <div>
                    <p className="info-label">주소</p>
                    <p className="info-value">서울특별시 강남구 테헤란로 123</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><FiClock /></span>
                  <div>
                    <p className="info-label">운영시간</p>
                    <p className="info-value">평일 09:00 – 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            {sent ? (
              <div className="form-success">
                <FiSend className="success-icon" />
                <h3>문의가 접수되었습니다!</h3>
                <p>빠른 시간 내에 답변 드리겠습니다.</p>
                <button className="btn-primary" onClick={() => setSent(false)}>
                  새 문의 작성
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>이름 *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="홍길동"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>연락처</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="010-0000-0000"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>이메일 *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>문의 서비스</label>
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option value="">선택해주세요</option>
                    <option value="computer">컴퓨터 판매</option>
                    <option value="program">프로그램 개발</option>
                    <option value="web">웹 개발</option>
                    <option value="maintenance">IT 유지보수</option>
                    <option value="other">기타</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>문의 내용 *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="프로젝트 또는 구매에 대해 자세히 알려주세요..."
                    rows={5}
                    required
                  />
                </div>
                <button type="submit" className="btn-primary form-submit">
                  문의 보내기 <FiSend />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
