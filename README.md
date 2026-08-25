# Playwright Test Automation

Playwright와 TypeScript를 활용한 API 테스트 자동화 프로젝트입니다.

Postman Collection 중심으로 관리하던 API 테스트를 코드 기반 테스트로 전환하며,
테스트 코드를 Git에서 직접 관리하고 실행하는 구조를 학습하기 위해 구성했습니다.

## Tech Stack

* Playwright
* TypeScript
* Node.js
* Git / GitHub

## Project Structure

```text
playwright-test-automation/
├── tests/
│   └── api/
│       └── products.spec.ts
├── playwright.config.ts
├── package.json
└── package-lock.json
```

## API Test

### Fake Store API - Products

## Run Tests

패키지 설치:

```bash
npm install
```

전체 테스트 실행:

```bash
npx playwright test
```

Products API 테스트만 실행:

```bash
npx playwright test tests/api/products.spec.ts
```

HTML Report 확인:

```bash
npx playwright show-report
```

## Test Automation Direction

Postman에서 작성한 API 테스트를 Playwright 기반의 코드형 테스트로 전환하며 다음과 같은 방향으로 확장하고 있습니다.

```text
API 요청
  ↓
Response 검증
  ↓
테스트 코드 Git 버전 관리
  ↓
CI 자동 실행
```

향후에는 Products API 테스트 범위를 확대하고, API 테스트뿐 아니라 Playwright UI 자동화까지 확장할 예정입니다.

### Planned

* Products API 테스트 케이스 확대
* API baseURL 설정 분리
* 공통 테스트 코드 구조화
* GitHub Actions CI 구성
* Playwright UI 테스트 추가
* API + UI를 결합한 E2E 테스트 구성

## Purpose

단순한 API 호출 자동화를 넘어, 테스트 코드를 소스 코드와 동일하게 Git에서 관리하고
반복 가능한 Regression Test와 CI 기반 테스트 자동화 구조를 구성하는 것을 목표로 합니다.
