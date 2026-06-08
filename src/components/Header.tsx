import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const navLinks = [
  { label: '홈', href: '#home' },
  { label: '회사소개', href: '#about' },
  { label: '서비스', href: '#services' },
  { label: '포트폴리오', href: '#portfolio' },
  { label: '연락처', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#home" className="logo">
          <span className="logo-main">YJ</span>
          <span className="logo-sub">Solutions</span>
        </a>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary nav-cta" onClick={() => setMenuOpen(false)}>
            문의하기
          </a>
        </nav>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="메뉴 열기/닫기"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}
