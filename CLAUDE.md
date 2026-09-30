# Algorithm Study Repository Guide

이 저장소는 LeetCode 풀이에 집중한다 (백준/프로그래머스는 과거 기록만 남아있고 더 이상 갱신하지 않음).
문제 풀이 파일·문서 관리는 `leetlog` 플러그인이 담당하고, 브랜치/PR/머지 흐름은 로컬 스킬이 담당한다.

## 저장소 구조

```
├── Baekjoon/{tier}/          # 과거 기록 (더 이상 갱신 안 함)
├── Programmers/{level}/      # 과거 기록 (더 이상 갱신 안 함)
├── Leetcode/{difficulty}/    # LeetCode 풀이 코드. 예: Easy, Medium, Hard (leetlog 플러그인 관리)
├── docs/                     # 풀이 문서
│   ├── baekjoon/, programmers/, leetcode/   # 과거 기록
│   └── {id}_{slug}.md        # leetlog 플러그인이 생성하는 새 LeetCode 문서 (루트에 flat하게 쌓임)
├── .leetlog.json             # leetlog 플러그인 설정 (default_language: typescript, solutions_dir: Leetcode)
└── mcp-server/               # MCP 서버 (현재 활성 워크플로에서는 사용하지 않음)
```

## 명령어

```bash
# MCP 서버 빌드 (mcp-server/에서 실행, 현재 워크플로에서는 미사용)
npm run build
```

## 풀이 프로세스

`/branch` → `/leetlog:prep <url>` → 풀이 → `/leetlog:done` → `/leetlog:docs` → `/pr` → `/merge`

막히면 `/leetlog:hint`로 단계적 힌트를 받는다. leetlog 플러그인은 브랜치·PR·머지를 다루지 않으므로 이 세 단계는 로컬 스킬이 담당한다.

## Skills

로컬 스킬 (브랜치/PR/머지 흐름, 플랫폼 무관):

| 커맨드 | 설명 |
|--------|------|
| `/branch` | 오늘 날짜 브랜치 확인/생성 |
| `/pr` | 오늘 푼 문제들로 PR 생성 |
| `/merge` | PR rebase 머지 |

`leetlog` 플러그인 (문제 풀이 준비 ~ 커밋/피드백/문서화):

| 커맨드 | 설명 |
|--------|------|
| `/leetlog:prep <url> [language]` | 문제 풀이 준비 (재풀이 판정 → 문제 수집 → 파일 생성) |
| `/leetlog:done` | 풀이 완료 (ANCHOR 마감 → 코드 피드백 → 커밋 여부 확인) |
| `/leetlog:docs` | 풀이 문서 생성 (`docs/{id}_{slug}.md`) |
| `/leetlog:commit` | `Leetcode/`, `docs/` 변경분 커밋 (`solve:`/`docs:` 접두사) |
| `/leetlog:hint` | 단계적 힌트 제공 |
