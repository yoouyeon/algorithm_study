import createProblemFile from "./createProblemFile.js";
import fetchProblemInfo from "./fetchProblemInfo.js";
import generateReadme from "./generateReadme.js";

async function main() {
  const problemUrl = process.argv[2];
  if (!problemUrl) {
    console.error(
      "❌ 문제 URL을 입력해주세요.\nUsage: npm run create <problem-url>"
    );
    process.exit(1);
  }

  try {
    const problemInfo = await fetchProblemInfo(problemUrl);
    await createProblemFile(problemInfo);
    generateReadme(problemInfo.siteKey);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

main();
