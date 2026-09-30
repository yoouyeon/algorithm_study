---
name: branch
description: 문제 풀이를 시작하기 전에 오늘 날짜 브랜치를 확인/생성한다. leetlog:prep 앞에서 실행한다.
allowed-tools: Bash(bash .claude/skills/branch/scripts/*), Bash(git switch *)
---

- 브랜치 상태: !`bash .claude/skills/branch/scripts/branch-check.sh`

## 1. 브랜치 확인

- `last != today`인 경우: `git switch -c $today`로 날짜 브랜치를 만든다.
- `last == today`인 경우: `git switch $today`로 오늘 날짜 브랜치로 이동한다.

## 2. 마무리

브랜치 준비가 끝나면 `/leetlog:prep <url>`로 이어가라고 안내한다.
