import { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Portfolio.css';

const categories = ['전체', '웹 개발', '프로그램 개발', '쇼핑몰'];

const projects = [
  {
    title: '제조업 ERP 시스템',
    category: '프로그램 개발',
    desc: '중소 제조업체 맞춤형 ERP 시스템 개발 — 재고, 생산, 영업 통합 관리',
    tags: ['C#', '.NET', 'SQL Server'],
    color: 'pink',
  },
  {
    title: '의류 쇼핑몰 플랫폼',
    category: '쇼핑몰',
    desc: '반응형 쇼핑몰 구축, 결제 시스템 및 재고 관리 연동',
    tags: ['React', 'Node.js', 'MySQL'],
    color: 'blue',
  },
  {
    title: '병원 예약 관리 시스템',
    category: '프로그램 개발',
    desc: '환자 예약, 진료 기록, 처방전 관리 통합 솔루션',
    tags: ['Java', 'Spring', 'Oracle'],
    color: 'pink',
  },
  {
    title: '지역 관광 포털 사이트',
    category: '웹 개발',
    desc: '관광지 정보, 숙박 예약, 지역 행사 안내 포털 구축',
    tags: ['Vue.js', 'Laravel', 'PostgreSQL'],
    color: 'blue',
  },
  {
    title: '물류 배송 추적 앱',
    category: '프로그램 개발',
    desc: '실시간 배송 상태 추적 및 자동화 알림 시스템',
    tags: ['React Native', 'Firebase', 'Node.js'],
    color: 'pink',
  },
  {
    title: '부동산 중개 플랫폼',
    category: '웹 개발',
    desc: '매물 검색, 비교, 중개사 연결 종합 부동산 플랫폼',
    tags: ['Next.js', 'Python', 'MongoDB'],
    color: 'blue',
  },
];

export default function Portfolio() {
  const [active, setActive] = useState('전체');

  const filtered = active === '전체' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">포트폴리오</h2>
        <p className="section-subtitle">
          다양한 산업 분야에서 실현한 성공적인 IT 프로젝트 사례들
        </p>

        <div className="portfolio-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filtered.map(p => (
            <div key={p.title} className={`portfolio-card card-${p.color}`}>
              <div className="card-visual">
                <div className="card-visual-inner">
                  <span className="card-category">{p.category}</span>
                </div>
              </div>
              <div className="card-body">
                <h3 className="card-title">{p.title}</h3>
                <p className="card-desc">{p.desc}</p>
                <div className="card-footer">
                  <div className="card-tags">
                    {p.tags.map(t => <span key={t} className="card-tag">{t}</span>)}
                  </div>
                  <button className="card-link">
                    <FaExternalLinkAlt />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
