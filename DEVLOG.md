# YJ Solutions 개발일지

## 프로젝트 개요

- **프로젝트명**: YJ Solutions 공식 웹사이트
- **저장소**: https://github.com/yoonrileychoi/rest02
- **라이브 URL**: https://yoonrileychoi.github.io/rest02/
- **기술 스택**: React 19, TypeScript, Vite 8, CSS Modules
- **배포 방식**: GitHub Pages (gh-pages 수동 배포)

---

## 개발 내역

### 1. 초기 세팅

- React 19 + TypeScript + Vite 8 기반 프로젝트 구성
- 라우터: react-router-dom v7
- 아이콘: react-icons
- 애니메이션: framer-motion
- GitHub Pages 배포를 위한 vite.config.ts base 경로 /rest02/ 설정

---

### 2. 전체 디자인 리디자인 (네오브루탈리스트)

참고 사이트: sowieso.wero-wallet.eu/nl-en/merchant

#### 컬러 팔레트

| 변수 | 색상 | 용도 |
|------|------|------|
| --hot-pink | #ff158a | 주요 강조색, 버튼 |
| --yellow | #fff48d | 배경, 푸터 |
| --light-pink | #fd74fd | 그라디언트 |
| --mint | #7af7f7 | 아이콘 배경 |
| --dark | #1d1c1c | 테두리, 그림자, 텍스트 |

#### 네오브루탈리스트 스타일 원칙

- 테두리: 1px solid #1d1c1c
- 그림자: blur 없는 오프셋 그림자 (0 6px 0 #1d1c1c)
- 버튼 active 시 그림자 제거 + 이동 효과

---

### 3. 폰트

- Google Fonts (Inter, Noto Sans KR, Montserrat) → Pretendard Variable 전체 교체
- CDN: cdn.jsdelivr.net/npm/pretendard@1.3.9/dist/web/variable/pretendardvariable.css

---

### 4. 아이콘

- react-icons/fa (Font Awesome Solid) → react-icons/fi (Feather Icons, 얇은 선 스타일)
- 전체 아이콘 outlined 스타일로 통일하여 감성적인 느낌으로 개선

---

### 5. 컴포넌트별 변경사항

#### Hero
- 레이아웃: 이미지 상단 + 텍스트 하단
- 히어로 이미지: Cisco SVG (smb-landing-hero-3038x1896.svg) 로컬 저장
- 히어로 배경: 핫핑크 → 노랑 애니메이션 그라디언트 (10s infinite)
- 헤드라인: "혁신적인" → "감각적인" 으로 수정
- "포트폴리오 보기" 버튼: 호버 시 검정 테두리 + 오프셋 그림자
- "무료 상담신청" 버튼: 호버 시 brightness(0.85) 어둡게

#### Header
- 기본: 투명 배경, 다크 텍스트
- 스크롤 시: 흰색 배경 + blur + 미세 그림자

#### Services
- 아이콘 배경: 블루 계열 → 민트 / 핑크 계열로 교체

#### Footer
- 배경: 다크(#1d1c1c) → 노랑(#fff48d)
- 텍스트: 흰색 → 다크
- 소셜 버튼: 흰 배경 + 다크 테두리 + 핑크 호버

#### 전체 CSS
- 파란색 rgba(30, 64, 175, ...) 값 → 다크 또는 핑크 계열로 전면 교체

---

### 6. 배포 설정

gh-pages 패키지 설치 후 package.json scripts에 deploy 추가:

  "deploy": "npm run build && gh-pages -d dist"

배포 실행:

  npm run deploy

---

## 커밋 히스토리

| 커밋 | 내용 |
|------|------|
| Initial commit | 프로젝트 초기 생성 |
| feat: YJ Solutions 회사 웹사이트 초기 구축 | 전체 컴포넌트 및 페이지 구성 |
| design: 네오브루탈리스트 리디자인 및 콘텐츠 업데이트 | 컬러, 폰트, 아이콘, 레이아웃 전면 개편 |
| docs: 개발일지 추가 | DEVLOG.md 작성 |

---

## 앞으로 수정 시

개발 서버 실행:
  npm run dev

빌드 + 배포 (한 번에):
  npm run deploy
