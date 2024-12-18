# 📜 Scripts

편한 알고리즘 생활을 위한 스크립트들 모음

## 🚀 스크립트 목록

### 🏁 문제 파일 생성 스크립트 (problem-manager)

#### 실행법

```bash
npm run create <problem-url>
```

#### 예시

```bash
npm run create https://www.acmicpc.net/problem/1000
```

#### 동작

주어진 문제 링크에 맞게 해당하는 폴더에 문제 파일을 생성한다.

- 백준: `Baekjoon/<난이도>/<문제번호>_<문제이름>.js`
- 프로그래머스: `Programmers/<문제이름>.js`

### 📝 README 생성 스크립트 (generate-readme)

#### 실행법

```bash
npm run generate-readme <site-key>
```

#### 예시

```bash
npm run generate-readme baekjoon
```

```bash
npm run generate-readme programmers
```

#### 동작

각 사이트의 푼 문제 파일 목록을 읽어와 해당 폴더에 `README.md` 파일을 생성한다.
