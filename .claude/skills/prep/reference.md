# Prep 참조 문서

## 파일명 규칙

- 백준: `Baekjoon/{tier}/{problemId}_{title}.js`
- 프로그래머스: `Programmers/Level{level}/{problemId}_{title}.js`
- 리트코드: `Leetcode/{difficulty}/{problemId}_{slug}.ts`

제목의 띄어쓰기는 언더스코어(`_`)로 대체한다.

### 언어

| 플랫폼 | 기본 언어 |
|--------|-----------|
| 백준 | JavaScript |
| 프로그래머스 | JavaScript |
| 리트코드 | TypeScript |

사용자가 링크 뒤에 언어를 명시한 경우 해당 언어를 사용한다.
예: `https://leetcode.com/problems/two-sum/ py` → `1_two-sum.py`

## 파일 헤더 형식

문제 메타정보는 `/* */`, ANCHOR는 `//` 주석으로 분리한다.
시작 시간(`HH:MM`)은 풀이 소요 시간 계산을 위해 임시로 기록한다.

```ts
/*
⭐️ 문제 정보 ⭐️
문제 : {problemId} - {제목}
레벨 : {tier 또는 level 또는 difficulty}
링크 : {문제 링크}
*/

// ANCHOR {YYYY.MM.DD} {HH:MM} 풀이
```

### 예시

```ts
/*
⭐️ 문제 정보 ⭐️
문제 : 387 - First Unique Character in a String
레벨 : Easy
링크 : https://leetcode.com/problems/first-unique-character-in-a-string
*/

// ANCHOR 2026.03.22 14:26 풀이
```

## README 테이블 형식

각 플랫폼 디렉토리의 `README.md` 문제 목록 테이블에 추가한다.
테이블은 문제 번호 오름차순으로 정렬한다.

```md
| {problemId} | {제목} | [{파일명}]({하위 디렉토리}/{파일명}) | [🔗]({문제 링크}) |
```

### 예시

```md
| 1234 | 최단경로 | [1234_최단경로.js](Gold5/1234_최단경로.js) | [🔗](https://www.acmicpc.net/problem/1234) |
| 42586 | 기능개발 | [42586_기능개발.js](Level2/42586_기능개발.js) | [🔗](https://school.programmers.co.kr/learn/courses/30/lessons/42586) |
| 1 | Two Sum | [1_two-sum.ts](Easy/1_two-sum.ts) | [🔗](https://leetcode.com/problems/two-sum/) |
```
