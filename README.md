# Fillsa 탈퇴 웹

이 프로젝트는 **Fillsa** 서비스의 계정 탈퇴 플로우를 제공합니다.
[Vite](https://vitejs.dev/)로 부트스트랩된 React 애플리케이션이며, Tailwind CSS로 스타일링되어 있습니다.

## 주요 기능

* 카카오, 구글 소셜 로그인 버튼 제공
* 탈퇴 성공 및 실패 페이지 구현
* 클라이언트 캐시 초기화 및 쿼리 파라미터 기반 에러 코드 처리

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 모드 실행
npm run dev

# 프로덕션 빌드
npm run build
```

빌드 완료 후, 프로덕션 환경에서 미리보기를 하려면 다음 명령어를 실행하세요:

```bash
npm run preview
```

## 환경 변수 설정

프로젝트 루트 디렉토리에 `.env` 파일을 생성하고 아래 값을 설정해주세요:

```env
VITE_KAKAO_JS_KEY=<카카오 JavaScript 키>
VITE_GOOGLE_CLIENT_ID=<구글 클라이언트 ID>
VITE_API_BASE_URL=<백엔드 API 베이스 URL>
VITE_HOME_URL=<Fillsa 홈 URL>
VITE_SUPPORT_EMAIL=<고객지원 이메일 주소>
```

해당 값들은 OAuth 콜백 처리 및 UI 내 링크 구성에 필요합니다.

## 프로젝트 구조

* `src/` – 애플리케이션 소스 코드

  * `pages/` – 로그인, 성공, 실패 페이지
  * `components/` – 공통 React 컴포넌트
  * `hooks/` – 전역에서 사용하는 유틸리티 훅
  * `lib/` – Kakao SDK 로더 등 헬퍼 라이브러리

정적 리소스(예: 아이콘 등)는 `public/` 디렉토리에 위치합니다.

## 라이선스

이 저장소는 Fillsa 내부 사용을 목적으로 합니다.
