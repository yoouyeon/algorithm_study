---
name: pr
description: 오늘 푼 문제들로 PR을 생성한다
---

gh cli를 사용하여 아래 형식으로 PR을 생성한다.

```bash
gh pr create \
  --title "YYYY-MM-DD 문제 풀었어요" \
  --body "오늘도 멋져요 👍✨" \
  --label "{플랫폼}"
```

- `YYYY-MM-DD`는 오늘 날짜로 대체한다.
- `--label`은 변경된 디렉토리 기준으로 플랫폼을 판단하며, 복수 선택이 가능하다.

사용 가능한 라벨 목록:

| 라벨 | 플랫폼 |
|------|------|
| `Baekjoon` | 백준 |
| `Leetcode` | 리트코드 |
| `Programmers` | 프로그래머스 |
