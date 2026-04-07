---
name: prep
description: 알고리즘 문제 풀이를 준비한다. 브랜치 확인 → 문제 정보 수집 → 파일 생성 → README 업데이트
argument-hint: "<url> [language]"
allowed-tools: Bash(bash .claude/skills/prep/scripts/*), mcp__algorithm__get_leetcode_problem, mcp__algorithm__get_backjoon_problem
---

$ARGUMENTS를 파싱하여 url과 풀이 언어를 추출한다.

## 1. 브랜치 확인

브랜치 상태: !`bash .claude/skills/prep/scripts/branch-check.sh`

- `last != today`인 경우: `git switch -c $today`로 날짜 브랜치를 만든다.
- `last == today`인 경우: `git switch $today`로 오늘 날짜 브랜치로 이동한다.

## 2. 플랫폼 별 문제 정보 수집

URL을 분석하여 플랫폼을 판단한다.

### 백준 (https://www.acmicpc.net/problem/{problemId})

- `get_baekjoon_problem(problemId)` tool 호출
- 반환값: `{ title, tier }` (tier 예: Gold5, Silver1)

### 리트코드 (https://leetcode.com/problems/{slug}/)

- `get_leetcode_problem(slug)` tool 호출
- 반환값: `{ title, difficulty }` (difficulty 예: Easy, Medium, Hard)

### 프로그래머스 (https://school.programmers.co.kr/learn/courses/30/lessons/{problemId})

- url에서 `problemId` 추출
- 데이터 페칭을 시도하지 않는다 (501 에러 발생)
- 사용자에게 문제 제목을 질문한다: 문제 제목이 무엇인가요?
- 사용자에게 난이도를 질문한다: 난이도가 몇 레벨인가요? (0~4 또는 Unrated)

## 3. 문제 파일 생성

파일명 규칙, 언어 설정, 파일 헤더 형식은 [reference.md](reference.md)를 참고한다. 예시는 [examples.md](examples.md)를 참고한다.

이미 파일이 존재하는 경우 기존 파일 상단 헤더 아래에 새 풀이 날짜로 ANCHOR 주석을 추가한다.

## 4. README 업데이트

README 테이블 형식은 [reference.md](reference.md)를, 테이블 예시는 [examples.md](examples.md)를 참고한다.
테이블은 문제 번호 오름차순으로 정렬한다.
