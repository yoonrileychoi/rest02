import { FaArrowRight, FaPlay } from 'react-icons/fa';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          2025년 창업 · IT 전문 기업
        </div>

        <h1 className="hero-title">
          혁신적인 IT 솔루션으로<br />
          <span className="hero-title-accent">비즈니스를 성장</span>시키다
        </h1>

        <p className="hero-desc">
          컴퓨터 판매부터 맞춤형 프로그램 개발, 전문 웹 개발까지<br />
          YRC IT Solutions가 고객의 디지털 전환을 함께합니다.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            무료 상담 신청 <FaArrowRight />
          </a>
          <a href="#portfolio" className="hero-play-btn">
            <span className="play-icon"><FaPlay /></span>
            포트폴리오 보기
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">1년+</span>
            <span className="stat-label">경력</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">200+</span>
            <span className="stat-label">완료 프로젝트</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">100+</span>
            <span className="stat-label">고객사</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-line" />
        <span>스크롤</span>
      </div>
    </section>
  );
}
