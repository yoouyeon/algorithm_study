# Prep 참조 문서

## 파일명 규칙

- 백준: `Baekjoon/{tier}/{problemId}_{title}.js`
- 프로그래머스: `Programmers/Level{level}/{problemId}_{title}.js`
- 리트코드: `Leetcode/{difficulty}/{problemId}_{slug}.ts`

제목의 띄어쓰기는 언더스코어(`_`)로 대체한다.

### 언어

- 백준 기본 언어 : JavaScript
- 프로그래머스 기본 언어 : JavaScript
- 리트코드 기본 언어 : TypeScript

사용자가 링크 뒤에 언어를 명시한 경우 해당 언어를 사용한다.

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

## README 리스트 형식

각 플랫폼 디렉토리의 `README.md` 해당 난이도 섹션에 문제 번호 오름차순으로 추가한다.

```md
- [{problemId}. {제목}]({문제 링크}) — [풀이]({하위 디렉토리}/{파일명})
```

### 섹션 구분

- 백준 : `## Bronze` / `## Silver` / `## Gold`
- 리트코드 : `## Easy` / `## Medium` / `## Hard`
- 프로그래머스 : `## Level 0` ~ `## Level 4`
