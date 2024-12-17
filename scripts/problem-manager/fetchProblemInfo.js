import SITE_CONFIG from "./config.js";

const INFO_EXTRACTOR = {
  acmicpc: async (url, html) => {
    const match = html.match(SITE_CONFIG.acmicpc.titleRegex);
    if (!match) throw new Error("❌ 문제 이름을 가져오는데 실패했습니다.");
    const [_, problemId, problemTitle] = match;
    return { problemId, problemTitle };
  },
  programmers: (url, html) => {
    const match = html.match(SITE_CONFIG.programmers.titleRegex);
    if (!match) throw new Error("❌ 문제 이름을 가져오는데 실패했습니다.");
    const [_, problemTitle] = match;
    const problemId = url.split("/").at(-1);
    return { problemId, problemTitle };
  },
};

async function fetchProblemInfo(problemUrl) {
  const siteKey = Object.keys(SITE_CONFIG).find((key) =>
    problemUrl.includes(key)
  );
  if (!siteKey) throw new Error("❌ 지원하지 않는 사이트입니다.");

  const site = SITE_CONFIG[siteKey];

  let response;
  try {
    console.log(`🔍 ${site.name} 문제 정보를 가져오는 중...`);
    response = await fetch(problemUrl, {
      method: "GET",
      headers: {
        "User-Agent": "Node.js/20.17.0 (fetch) (+https://nodejs.org)",
      },
    });
    if (!response.ok) throw new Error(response.status);
  } catch (error) {
    throw new Error(
      `❌ 문제 정보를 가져오는데 실패했습니다. (${error.message})`
    );
  }

  const html = await response.text();

  const problemInfo = await INFO_EXTRACTOR[siteKey](problemUrl, html);

  console.log(
    `✅ 문제 정보를 성공적으로 가져왔습니다. (${problemInfo.problemId}번: ${problemInfo.problemTitle})`
  );

  return {
    siteKey,
    siteName: site.name,
    folder: site.folder,
    problemUrl: site.problemUrl(problemInfo.problemId),
    problemId: problemInfo.problemId,
    problemTitle: problemInfo.problemTitle.replace(/\s+/g, "_"),
  };
}

export default fetchProblemInfo;
