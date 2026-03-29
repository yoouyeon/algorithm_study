# Docs 참조 문서

## 문서 템플릿

````markdown
---
title: {problemId}. {제목}
description: {플랫폼} {problemId}번 풀이
date: {YYYY-MM-DD}
tags:
  - {난이도}
  - {알고리즘 유형}
---

# {{ $frontmatter.title }}

> {{ $frontmatter.description }}

## 문제

[{제목}]({문제 링크})

## 풀이

### 아이디어

<!-- 직접 작성 -->

### 코드

```{언어}
{풀이 코드}
```

### 시간 / 공간 복잡도

- 시간 복잡도: {분석 결과}
- 공간 복잡도: {분석 결과}
````

## 태그 규칙

### 난이도 태그

| 플랫폼 | 태그 |
|--------|------|
| 백준 | `bronze`, `silver`, `gold`, `platinum`, `diamond`, `ruby` |
| 프로그래머스 | `level0`, `level1`, `level2`, `level3`, `level4`, `unrated` |
| 리트코드 | `easy`, `medium`, `hard` |

### 알고리즘 유형 태그

코드를 분석하여 자동으로 태그를 추가한다.

예: `bfs`, `dfs`, `dp`, `greedy`, `binary-search`, `two-pointer`, `sliding-window`, `stack`, `queue`, `heap`, `hash`, `sort`, `string`, `math`, `graph`, `tree`, `linked-list`, `bit-manipulation`
