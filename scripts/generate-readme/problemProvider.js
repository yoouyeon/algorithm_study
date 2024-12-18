const problemProviders = {
  baekjoon: {
    name: "백준",
    baseFolder: "Baekjoon",
    siteUrl: "https://www.acmicpc.net/",
    problemUrl: (problemId) => `https://www.acmicpc.net/problem/${problemId}`,
  },
  programmers: {
    name: "프로그래머스",
    baseFolder: "Programmers",
    siteUrl: "https://school.programmers.co.kr/",
    problemUrl: (problemId) =>
      `https://school.programmers.co.kr/learn/courses/30/lessons/${problemId}`,
  },
};

export default problemProviders;
