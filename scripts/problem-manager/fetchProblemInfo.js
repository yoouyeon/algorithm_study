import problemProviders from "./problemProviders/index.js";

async function fetchProblemInfo(url) {
  const siteKey = Object.keys(problemProviders).find((key) =>
    url.includes(key)
  );
  if (!siteKey) throw new Error("❌ 지원하지 않는 사이트입니다.");

  const problemProvider = problemProviders[siteKey];

  try {
    console.log(`🔍 ${problemProvider.name} 문제 정보를 가져오는 중...`);
    const { problemId, problemTitle, problemLevel } =
      await problemProvider.extractInfo(url);
    console.log(
      `✅ 문제 정보를 성공적으로 가져왔습니다. (${problemId}번: ${problemTitle})`
    );

    return {
      siteKey,
      problemId,
      problemTitle,
      problemLevel,
    };
  } catch (error) {
    throw new Error(
      `❌ 문제 정보를 가져오는데 실패했습니다. (${error.message})`
    );
  }
}

export default fetchProblemInfo;
