# 👍 알고리즘 공부 기록

알고리즘 공부한 내용을 기록하는 저장소입니다.
그리고 공부 환경 개선을 위한 여러 실험도 하고 있습니다. 👩🏻‍🔬

[![Leetcode Stats](https://leetcard.jacoblin.cool/yoouyeon?theme=light,dark&ext=heatmap)](https://leetcode.com/yoouyeon)

## 📚 풀이 플랫폼

- [백준](https://www.acmicpc.net/) — [풀이 모음](./Baekjoon)
- [프로그래머스](https://school.programmers.co.kr/) — [풀이 모음](./Programmers)
- [LeetCode](https://leetcode.com/) — [풀이 모음](./Leetcode)

## 🤖 문제 풀이 프로세스

Claude Code와 [leetlog](https://github.com/yoouyeon/claude-plugin/tree/main/plugins/leetlog) 플러그인을 활용한 풀이 흐름입니다.

| 단계 | 커맨드 | 설명 |
|------|--------|------|
| 1 | `/branch` | 오늘 날짜 브랜치 생성 |
| 2 | `/leetlog:prep <url>` | 풀이 파일 준비 |
| 3 | _(풀이)_ | 직접 코드 작성 (막히면 `/leetlog:hint`) |
| 4 | `/leetlog:done` | 소요 시간 기록 + 피드백 |
| 5 | `/leetlog:docs` | 풀이 문서 생성 |
| 6 | `/leetlog:commit` | 풀이·문서 커밋 |
| 7 | `/pr` / `/merge` | PR 생성 및 머지 |

## 📂 폴더 구조

```
┣ 📂Baekjoon - 난이도별 백준 문제 풀이 코드 모음
 ┃ ┣ 📂Bronze1
 ┃ ┣ 📂Bronze2
 ┃ ┣ 📂...
 ┃ ┗ 📜README.md
 ┣ 📂Programmers - 난이도별 프로그래머스 문제 풀이 코드 모음
 ┃ ┣ 📂Level1
 ┃ ┣ 📂Level2
 ┃ ┣ 📂...
 ┃ ┗ 📜README.md
 ┣ 📂Leetcode - 난이도별 리트코드 문제 풀이 코드 모음
 ┃ ┣ 📂Easy
 ┃ ┣ 📂Medium
 ┃ ┣ 📂Hard
 ┃ ┗ 📜README.md
 ┣ 📂docs - 풀이 문서
 ┣ 📂mcp-server - Claude Code MCP 서버
 ┣ 📂.claude - Claude Code skills
 ┣ 📜README.md
 ┗ 📜package.json
```
