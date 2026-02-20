# Algorithm Study Repository Guide

## 저장소 구조

```
├── Baekjoon/{tier}/          # 예: Bronze1, Silver3, Gold5
├── Programmers/{level}/      # 예: Level0, Level1, Level2, Level3, Level4, Unrated
├── Leetcode/{difficulty}/    # 예: Easy, Medium, Hard
└── mcp-server/               # MCP 서버
```

## 명령어

```bash
# MCP 서버 빌드 (mcp-server/에서 실행)
npm run build
```

## 문제 준비 플로우

사용자가 문제 링크를 제공하면 아래 순서로 진행한다.

### 1. 브랜치 확인

아래 명령어로 마지막 커밋 날짜와 오늘 날짜를 비교한다.

```bash
last=$(git --no-pager log --format="%cd" --date=format:"%Y-%m-%d" -1)
today=$(date +%Y-%m-%d)
```

`last != today`인 경우 `git switch -c $today`로 날짜 브랜치를 만든다. 
`last == today`인 경우 `git switch $today`로 오늘 날짜 브랜치로 이동한다.

### 2. 플랫폼 별 문제 정보 수집

#### 백준 (https://www.acmicpc.net/problem/{problemId})

- `get_baekjoon_problem(problemId)` tool 호출
- 반환값: `{ title, tier }` (tier 예: Gold5, Silver1)

#### 리트코드 (https://leetcode.com/problems/{slug}/)

- `get_leetcode_problem(slug)` tool 호출
- 반환값: `{ title, difficulty }` (difficulty 예: Easy, Medium, Hard)

#### 프로그래머스 (https://school.programmers.co.kr/learn/courses/30/lessons/{problemId})

- url에서 `problemId` 추출
- 사용자에게 난이도를 질문한다: 난이도가 몇 레벨인가요? (0~4 또는 Unrated)

### 3. 문제 파일 생성

#### 파일명 규칙

- 백준: `Baekjoon/{tier}/{problemId}_{title}.{ext}`
- 프로그래머스: `Programmers/Level{level}/{problemId}_{title}.{ext}`
- 리트코드: `Leetcode/{difficulty}/{problemId}_{slug}.{ext}`

제목의 띄어쓰기는 언더스코어(_)로 대체한다.

#### 언어

- 백준: JavaScript
- 프로그래머스: JavaScript
- 리트코드: TypeScript

예외: 사용자가 링크 뒤에 언어를 명시한 경우 해당 언어를 사용한다. (예: `https://leetcode.com/problems/two-sum/ py` → `1.two-sum.py`)

#### 파일 헤더 주석

생성하는 모든 파일 상단에 아래 주석을 추가한다.

```
⭐️ 문제 정보 ⭐️
문제 : {problemId} - {제목}
레벨 : {tier 또는 level 또는 difficulty}
링크 : {문제 링크}
```

그리고 아래 ANCHOR 주석을 추가한다.

```
ANCHOR {YYYY.MM.DD} 풀이
```

이미 파일이 존재하는 경우 기존 파일 상단 헤더 아래에 새 풀이 날짜로 ANCHOR 주석을 추가한다.

### 4. README 업데이트

각 플랫폼 디렉토리의 `README.md` 파일의 문제 목록 테이블에 새로 생성한 항목을 추가한다.
테이블은 문제 번호 오름차순으로 정렬한다.

문제 목록 테이블에 아래 형식으로 항목을 추가한다.

```md
| {problemId} | {제목} | [{파일명}]({하위 디렉토리}/{파일명}) | [🔗]({문제 링크}) |
```

예시: 

```md
| 1234 | 최단경로 | [1234_최단경로.js](Gold5/1234_최단경로.js) | [🔗](https://www.acmicpc.net/problem/1234) |
| 42586 | 기능개발 | [42586_기능개발.js](Level2/42586_기능개발.js) | [🔗](https://school.programmers.co.kr/learn/courses/30/lessons/42586) |
| 1 | Two Sum | [1.two-sum.ts](Easy/1.two-sum.ts) | [🔗](https://leetcode.com/problems/two-sum/) |
```

## 풀이 완료 후 플로우

사용자가 풀이를 완료했음을 알리면 아래 순서로 진행한다.

### 1. 커밋

아래 형식으로 풀이 코드와 README 업데이트를 커밋한다.

```
💡 {플랫폼} {problemId} - {제목}
```

예시:

- `💡 백준 1234 - 최단경로`
- `💡 프로그래머스 42586 - 기능개발`
- `💡 리트코드 1 - Two Sum`

### 2. 코드 피드백

커밋 후 아래 두가지 관점으로 피드백을 제공한다.

#### 리뷰 (correctness / performance)

- 시간복잡도 / 공간복잡도 분석, 개선 가능한 경우 제안 (예: O(n²) → O(n))
- 대안 자료구조 또는 패턴 제안 (Set/Map, 투 포인터, 슬라이딩 윈도우 등)

#### 개선 (elegance / maintainability)

- 가독성, 네이밍, 모듈화, 관용적 JS/TS 패턴 관점에서 개선 제안
- 추상적인 조언이 아닌 구체적인 리팩토링 코드 스니펫으로 제시
- 단순 스타일 변경은 명확성이나 성능 향상이 없으면 제안하지 않는다

## PR 생성

사용자가 PR 생성을 요청하면 gh cli를 사용하여 아래 형식으로 PR을 생성한다.

```bash
gh pr create \
  --title "YYYY-MM-DD 문제 풀었어요" \
  --body "오늘도 멋져요 👍✨" \
  --label "{플랫폼}" # 변경된 디렉토리 기준, 복수 가능
```

## PR 머지

사용자가 PR 머지를 요청하면 rebase 방식으로 머지한다.

## 가이드 제공

사용자가 요청하면 가이드를 제공한다.
정답을 직접 알려주지 않고 힌트와 접근 방향만 제시한다.
