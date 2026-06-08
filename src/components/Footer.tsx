import { FiGithub, FiLinkedin, FiInstagram, FiHeart } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-main">YJ</span>
              <span className="logo-sub">Solutions</span>
            </div>
            <p className="footer-tagline">
              2025년부터 고객의 IT 파트너로 신뢰를 쌓아온<br />
              종합 IT 솔루션 기업입니다.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="GitHub"><FiGithub /></a>
              <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
              <a href="#" aria-label="Instagram"><FiInstagram /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>서비스</h4>
            <ul>
              <li><a href="#services">컴퓨터 판매</a></li>
              <li><a href="#services">프로그램 개발</a></li>
              <li><a href="#services">웹 개발</a></li>
              <li><a href="#services">클라우드 솔루션</a></li>
              <li><a href="#services">IT 유지보수</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>회사</h4>
            <ul>
              <li><a href="#about">회사소개</a></li>
              <li><a href="#portfolio">포트폴리오</a></li>
              <li><a href="#contact">채용정보</a></li>
              <li><a href="#contact">파트너십</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>연락처</h4>
            <ul>
              <li>02-1234-5678</li>
              <li>avabrownbb@gmail.com</li>
              <li>서울 강남구 테헤란로 123</li>
              <li>평일 09:00 – 18:00</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 – 2026 YJ Solutions. All rights reserved.</p>
          <p className="footer-made">
            Made with <FiHeart className="heart" /> by YJ Team
          </p>
        </div>
      </div>
    </footer>
  );
}
