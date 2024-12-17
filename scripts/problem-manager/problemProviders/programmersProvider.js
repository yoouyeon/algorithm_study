const programmersProvider = {
  name: "프로그래머스",

  baseFolder: "Programmers",

  problemUrl: (problemId) =>
    `https://school.programmers.co.kr/learn/courses/30/lessons/${problemId}`,

  titleRegex: /<title>코딩테스트 연습 - (.+?) \| 프로그래머스 스쿨<\/title>/,

  async fetchInfo(url) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "User-Agent": "Node.js/20.17.0 (fetch) (+https://nodejs.org)",
      },
    });
    if (!response.ok) throw new Error(response.status);
    return response.text();
  },

  async extractInfo(url) {
    const html = await this.fetchInfo(url);

    const match = html.match(this.titleRegex);
    if (!match) throw new Error("❌ 문제 이름을 가져오는데 실패했습니다.");

    const [_, problemTitle] = match;
    const problemId = url.split("/").at(-1);

    return { problemId, problemTitle, problemLevel: "Unknown" };
  },
};

export default programmersProvider;
