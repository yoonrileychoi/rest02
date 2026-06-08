# YJ Solutions 개발일지

## 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 프로젝트명 | YJ Solutions 공식 웹사이트 |
| 창립일 | 2025년 6월 8일 |
| 기술 스택 | React 19, TypeScript, Vite, CSS Modules |
| 레포지토리 | https://github.com/yoonrileychoi/rest02 |

---

## 2026-06-08 — 초기 개발 (v0.1.0)

### 환경 구성
- GitHub 레포지토리 클론 (`yoonrileychoi/rest02`)
- Vite + React + TypeScript 프로젝트 초기화
- 추가 라이브러리 설치: `react-router-dom`, `framer-motion`, `react-icons`

### 디자인 시스템
- **주 컬러**: Dark Pink (`#8B1A4A`), Royal Pink (`#C0396B`)
- **포인트 컬러**: Baby Blue (`#89C4E1`), Baby Pink (`#F4B8C8`)
- CSS 변수 기반 디자인 토큰 정의 (`src/styles/variables.css`)
- 글로벌 스타일 및 공통 컴포넌트 스타일 작성 (`src/styles/global.css`)

### 구현 컴포넌트

#### Header
- 고정(fixed) 네비게이션 바
- 스크롤 감지 시 배경 블러 처리
- 모바일 햄버거 메뉴

#### Hero
- 풀스크린 히어로 섹션
- 다크 핑크 그라디언트 배경 + 애니메이션 블롭
- 회사 핵심 통계 (경력 / 프로젝트 / 고객사)

#### About
- 회사 소개 텍스트 및 핵심 가치
- 창립일 표시 (2025년 6월 8일)
- 연혁 타임라인 (2025 창립 → 웹 개발 → 클라우드)
- 누적 고객사 100+, 완료 프로젝트 200+ 통계 카드

#### Services
- 6개 서비스 카드 그리드 (3열)
  - 컴퓨터 판매 / 프로그램 개발 / 웹 개발
  - 클라우드 솔루션 / 보안 서비스 / IT 유지보수
- 호버 애니메이션 및 상단 컬러 액센트 바

#### Portfolio
- 카테고리 필터 (전체 / 웹 개발 / 프로그램 개발 / 쇼핑몰)
- 6개 프로젝트 카드 (3열 그리드)
- 기술 태그 표시

#### Contact
- 회사 정보 카드 (전화 / 이메일 / 주소 / 운영시간)
- 이메일: avabrownbb@gmail.com
- 문의 폼 (이름 / 연락처 / 이메일 / 서비스 선택 / 메시지)
- 폼 제출 완료 상태 UI

#### Footer
- 4열 그리드 레이아웃
- 소셜 링크 (GitHub, LinkedIn, Instagram)
- 저작권 표시: © 2025 – 2026 YJ Solutions

### 반응형 대응
- 1024px 이하: 3열 → 2열 전환
- 768px 이하: 모바일 메뉴, 단일 컬럼 레이아웃

---

## TODO

- [ ] 실제 포트폴리오 이미지 적용
- [ ] 문의 폼 백엔드 연동
- [ ] 애니메이션 (framer-motion) 추가
- [ ] SEO 메타태그 보완
- [ ] 다국어 지원 (한/영)
