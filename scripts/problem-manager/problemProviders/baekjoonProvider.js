const baekjoonProvider = {
  name: "백준",

  baseFolder: "Baekjoon",

  problemUrl: (problemId) => `https://www.acmicpc.net/problem/${problemId}`,

  async fetchInfo(problemId) {
    const requestUrl = `https://solved.ac/api/v3/problem/show?problemId=${problemId}`;

    let response;
    try {
      response = await fetch(requestUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (!response.ok) throw new Error(response.status);

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(
        `❌ 백준 문제 정보를 가져오는데 실패했습니다. (${error.message})`
      );
    }
  },

  async extractInfo(url) {
    const problemId = url.split("/").at(-1);
    const data = await this.fetchInfo(problemId);

    return {
      problemId,
      problemTitle: data.titleKo,
      problemLevel: baekjoonLevelMap(data.level),
    };
  },
};

function baekjoonLevelMap(levelId) {
  const levelMap = {
    0: "Unrated",
    1: "Bronze5",
    2: "Bronze4",
    3: "Bronze3",
    4: "Bronze2",
    5: "Bronze1",
    6: "Silver5",
    7: "Silver4",
    8: "Silver3",
    9: "Silver2",
    10: "Silver1",
    11: "Gold5",
    12: "Gold4",
    13: "Gold3",
    14: "Gold2",
    15: "Gold1",
    16: "Platinum5",
    17: "Platinum4",
    18: "Platinum3",
    19: "Platinum2",
    20: "Platinum1",
    21: "Diamond5",
    22: "Diamond4",
    23: "Diamond3",
    24: "Diamond2",
    25: "Diamond1",
    26: "Ruby5",
    27: "Ruby4",
    28: "Ruby3",
    29: "Ruby2",
    30: "Ruby1",
  };

  return levelMap[levelId] || "Unknown";
}

export default baekjoonProvider;
