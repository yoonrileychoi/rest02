import { FaCheckCircle, FaCalendarAlt, FaUsers, FaTrophy } from 'react-icons/fa';
import './About.css';

const milestones = [
  { year: '2025', title: '회사 창립', desc: 'YJ Solutions 컴퓨터 판매 전문점으로 시작' },
  { year: '2007', title: '프로그램 개발 확장', desc: '맞춤형 소프트웨어 개발 사업 시작' },
  { year: '2012', title: '웹 개발 사업 진출', desc: '웹사이트 및 웹 애플리케이션 개발 본격화' },
  { year: '2020', title: '클라우드 서비스 도입', desc: '클라우드 기반 솔루션으로 서비스 확장' },
];

const values = [
  '고객 중심의 맞춤형 IT 솔루션 제공',
  '20년 이상 쌓아온 신뢰와 전문성',
  '최신 기술 트렌드를 반영한 혁신 개발',
  '합리적인 비용으로 최고의 결과 제공',
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">회사 소개</h2>
        <p className="section-subtitle">
          2025년 창립 이래 IT 산업의 최전선에서 고객과 함께 성장해온 YJ Solutions입니다
        </p>

        <div className="about-grid">
          <div className="about-info">
            <div className="about-card">
              <div className="about-icon-row">
                <span className="about-icon"><FaCalendarAlt /></span>
                <div>
                  <p className="about-label">창립일</p>
                  <p className="about-value">2025년 6월 8일</p>
                </div>
              </div>
              <div className="about-divider" />
              <p className="about-text">
                YJ Solutions는 2025년 6월 8일, 컴퓨터 판매 전문점으로 시작하여
                현재는 프로그램 개발, 웹 개발 등 종합 IT 서비스를 제공하는 기업으로 성장했습니다.
                20여 년의 경험을 바탕으로 중소기업부터 대기업까지 다양한 고객의 디지털 혁신을 지원합니다.
              </p>
              <ul className="about-values">
                {values.map(v => (
                  <li key={v}>
                    <FaCheckCircle className="check-icon" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>

            <div className="about-stats-row">
              <div className="mini-stat">
                <FaUsers className="mini-icon" />
                <span className="mini-num">100+</span>
                <span className="mini-label">누적 고객사</span>
              </div>
              <div className="mini-stat">
                <FaTrophy className="mini-icon" />
                <span className="mini-num">200+</span>
                <span className="mini-label">완료 프로젝트</span>
              </div>
            </div>
          </div>

          <div className="timeline">
            <h3 className="timeline-title">회사 연혁</h3>
            {milestones.map((m, i) => (
              <div key={m.year} className="timeline-item">
                <div className="timeline-dot" />
                {i < milestones.length - 1 && <div className="timeline-line" />}
                <div className="timeline-body">
                  <span className="timeline-year">{m.year}</span>
                  <h4 className="timeline-event">{m.title}</h4>
                  <p className="timeline-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
