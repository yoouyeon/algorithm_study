# Algorithm Study Repository Guide

## 저장소 구조

```
├── Baekjoon/{tier}/          # 예: Bronze1, Silver3, Gold5
├── Programmers/{level}/      # 예: Level0, Level1, Level2, Level3, Level4, Unrated
├── Leetcode/{difficulty}/    # 예: Easy, Medium, Hard
├── docs/                     # VitePress 풀이 위키
└── mcp-server/               # MCP 서버
```

## 명령어

```bash
# MCP 서버 빌드 (mcp-server/에서 실행)
npm run build
```

## 풀이 프로세스

`/prep <url>` → 풀이 → `/done` → `/docs` → `/pr` → `/merge`

## Skills

| 커맨드 | 설명 |
|--------|------|
| `/prep <url> [language]` | 문제 풀이 준비 (브랜치 확인 → 문제 수집 → 파일 생성 → README 업데이트) |
| `/done` | 풀이 완료 (ANCHOR 업데이트 → 커밋 → 코드 피드백) |
| `/docs` | 풀이 문서 생성 |
| `/pr` | PR 생성 |
| `/merge` | PR rebase 머지 |
| `/guide [문제 설명]` | 단계적 힌트 제공 |
