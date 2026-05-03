# Security Policy

## Reporting a Vulnerability

이 저장소는 정적 사이트이며 사용자 데이터를 수집하지 않습니다.
그러나 다음 항목 발견 시 비공개 보고를 부탁드립니다.

- 공개 빌드 산출물에 누출된 자격증명 · 토큰 · 사용자 PII
- 콘텐츠에 포함된 악성 링크 · XSS 페이로드
- 의존성 라이브러리의 알려진 취약점
- GitHub Actions 워크플로우의 권한 오류

## How to Report

비공개 보고 채널:

- GitHub: <https://github.com/pollmap> 의 [Private vulnerability reporting](https://docs.github.com/en/code-security/security-advisories/guidance-on-reporting-and-writing-information-about-vulnerabilities/privately-reporting-a-security-vulnerability) 사용
- 또는 GitHub Issue 에 **PUBLIC 노출 정보 없이** "security report needed" 만 적어 주시면 비공개 채널로 회신드립니다

공개 GitHub Issue 에 취약점 상세를 기재하지 마세요.

## Security Posture

- 정적 호스팅 (GitHub Pages) — 서버 사이드 코드 없음
- 환경변수 / 시크릿 사용 없음 (정적 빌드는 `process.env` 미주입)
- 외부 API 호출 없음 (현재 단계)
- meta tag 기반 보안 헤더 일부 적용 (`X-Content-Type-Options` · `Referrer-Policy` · `Permissions-Policy`)

## Disclosure Timeline

- 24h 이내: 보고 접수 확인
- 7d 이내: 영향 평가 + 대응 계획 회신
- 패치 후: 동의 시 보고자 크레딧 표기
