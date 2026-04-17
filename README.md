# 👍 알고리즘 공부 기록

알고리즘 공부한 내용을 기록하는 저장소입니다.
그리고 공부 환경 개선을 위한 여러 실험도 하고 있습니다. 👩🏻‍🔬

[![Leetcode Stats](https://leetcard.jacoblin.cool/yoouyeon?theme=light,dark&ext=heatmap)](https://leetcode.com/yoouyeon)

## 📚 풀이 플랫폼

- [백준](https://www.acmicpc.net/) — [풀이 모음](./Baekjoon)
- [프로그래머스](https://school.programmers.co.kr/) — [풀이 모음](./Programmers)
- [LeetCode](https://leetcode.com/) — [풀이 모음](./Leetcode)

## 🤖 문제 풀이 프로세스

Claude Code를 활용한 풀이 흐름입니다.

| 단계 | 커맨드 | 설명 |
|------|--------|------|
| 1 | `/prep <url>` | 브랜치 생성, 파일 준비 |
| 2 | _(풀이)_ | 직접 코드 작성 |
| 3 | `/done` | 커밋 + 피드백 |
| 4 | `/docs` | 풀이 문서 생성 |
| 5 | `/pr` / `/merge` | PR 생성 및 머지 |

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
 ┣ 📂docs - VitePress 풀이 위키
 ┣ 📂mcp-server - Claude Code MCP 서버
 ┣ 📂.claude - Claude Code skills
 ┣ 📜README.md
 ┗ 📜package.json
```
