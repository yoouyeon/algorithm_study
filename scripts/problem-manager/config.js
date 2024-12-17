const SITE_CONFIG = {
  // acmicpc: {
  //   name: "백준",
  //   folder: "Backjoon",
  //   problemUrl: (problemId) => `https://www.acmicpc.net/problem/${problemId}`,
  //   titleRegex: /^(\d+)번: (.+)$/,
  // },
  programmers: {
    name: "프로그래머스",
    folder: "Programmers",
    problemUrl: (problemId) =>
      `https://school.programmers.co.kr/learn/courses/30/lessons/${problemId}`,
    titleRegex: /<title>코딩테스트 연습 - (.+?) \| 프로그래머스 스쿨<\/title>/,
  },
};

export default SITE_CONFIG;
