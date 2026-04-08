---
name: docs
description: 풀이 문서를 docs/ 디렉토리에 생성한다
argument-hint: "<filename>"
context: fork
agent: docs-writer
---

$ARGUMENTS에서 파일명(예: `54_spiral-matrix.ts`)을 추출한다.
파일명이 주어지지 않은 경우 사용자에게 파일명을 질문한다.

해당 파일명으로 저장소 내에서 풀이 코드 파일을 찾아 읽고, 풀이 문서를 생성한다.
풀이 문서 템플릿과 태그 규칙은 [reference.md](reference.md)를 참고한다.

## 제약

- `아이디어` 섹션은 `<!-- 직접 작성 -->` 주석만 남기고 내용을 채우지 않는다.
- 풀이 코드 파일은 읽기만 하고 수정하지 않는다.

## 저장 경로

- 백준: `docs/baekjoon/{problemId}.md`
- 프로그래머스: `docs/programmers/{problemId}.md`
- 리트코드: `docs/leetcode/{problemId}.md`

## 재풀이 시 규칙

docs 파일이 이미 존재하는 경우, **날짜(`date`)와 기존 풀이 내용은 수정하지 않는다.**

새 풀이 섹션(`## 풀이 2` 등)만 파일 하단에 추가한다.
