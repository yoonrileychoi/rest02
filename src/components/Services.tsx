import { FaDesktop, FaCode, FaGlobe, FaCloud, FaShieldAlt, FaHeadset } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    icon: <FaDesktop />,
    title: '컴퓨터 판매',
    desc: '최신 데스크탑, 노트북, 서버 장비 등 다양한 IT 하드웨어를 합리적인 가격에 제공합니다. 기업 맞춤형 구성 및 납품 서비스 포함.',
    tags: ['데스크탑', '노트북', '서버', '주변기기'],
    accent: 'baby-blue',
  },
  {
    icon: <FaCode />,
    title: '프로그램 개발',
    desc: '고객의 비즈니스 요구에 최적화된 맞춤형 소프트웨어를 개발합니다. ERP, 재고관리, 업무 자동화 시스템 등 다양한 솔루션.',
    tags: ['ERP', '업무 자동화', '데이터 분석', '모바일 앱'],
    accent: 'royal-pink',
  },
  {
    icon: <FaGlobe />,
    title: '웹 개발',
    desc: '반응형 웹사이트부터 대규모 웹 애플리케이션까지 전문적으로 개발합니다. SEO 최적화 및 사용자 경험(UX)을 최우선으로 고려.',
    tags: ['반응형 웹', '쇼핑몰', '포털', 'CMS'],
    accent: 'baby-pink',
  },
  {
    icon: <FaCloud />,
    title: '클라우드 솔루션',
    desc: '기업의 디지털 전환을 위한 클라우드 마이그레이션 및 관리 서비스. AWS, Azure 등 주요 플랫폼 구축 지원.',
    tags: ['AWS', 'Azure', '백업', '마이그레이션'],
    accent: 'baby-blue',
  },
  {
    icon: <FaShieldAlt />,
    title: '보안 서비스',
    desc: '네트워크 보안, 데이터 보호, 사이버 보안 컨설팅을 통해 기업의 소중한 정보 자산을 안전하게 지킵니다.',
    tags: ['방화벽', '보안 감사', 'SSL', '백신'],
    accent: 'royal-pink',
  },
  {
    icon: <FaHeadset />,
    title: 'IT 유지보수',
    desc: '365일 안정적인 IT 인프라 운영을 위한 유지보수 및 기술 지원 서비스. 빠른 응대와 전문적인 문제 해결.',
    tags: ['24/7 지원', 'AS 서비스', '원격지원', '방문수리'],
    accent: 'baby-pink',
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">서비스</h2>
        <p className="section-subtitle">
          컴퓨터 판매부터 소프트웨어 개발, 웹 개발까지 — IT의 모든 것을 한 곳에서
        </p>
        <div className="services-grid">
          {services.map(s => (
            <div key={s.title} className={`service-card service-accent-${s.accent}`}>
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">
                {s.tags.map(t => (
                  <span key={t} className="service-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
