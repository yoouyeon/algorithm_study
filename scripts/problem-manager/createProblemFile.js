import fs from "fs";
import path from "path";
import problemProviders from "./problemProviders/index.js";

async function createProblemFile({
  siteKey,
  problemId,
  problemTitle,
  problemLevel,
}) {
  const { baseFolder, problemUrl } = problemProviders[siteKey];

  const baseUrl = path.join(process.cwd(), baseFolder);
  const problemFolder = path.join(
    baseUrl,
    problemLevel === "Unknown" ? "" : problemLevel
  );
  if (!fs.existsSync(problemFolder)) {
    fs.mkdirSync(problemFolder, { recursive: true });
  }

  const problemFilePath = path.join(
    problemFolder,
    `${problemId}_${problemTitle.replace(/\//g, "").replace(/\s+/g, "_")}.js`
  );

  if (fs.existsSync(problemFilePath)) {
    throw new Error(
      `❌ 이미 존재하는 파일입니다. : ${path.relative(
        process.cwd(),
        problemFilePath
      )}`
    );
  }

  const content = `/* 
⭐️ 문제 정보 ⭐️
문제 : ${problemId} - ${problemTitle}
레벨 : ${problemLevel}
링크 : ${problemUrl(problemId)}
*/
`;

  fs.writeFileSync(problemFilePath, content, "utf-8");
  console.log(
    `🎉 파일을 생성했습니다. : ${path.relative(process.cwd(), problemFilePath)}`
  );
}

export default createProblemFile;
