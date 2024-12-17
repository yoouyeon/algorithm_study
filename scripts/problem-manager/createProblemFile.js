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
    `${problemId}_${problemTitle}.js`
  );

  const content = `/* 
⭐️ 문제 정보 ⭐️
문제 : ${problemId} - ${problemTitle.replace(/_/g, " ")}
레벨 : ${problemLevel}
링크 : ${problemUrl}
*/
`;

  fs.writeFileSync(problemFilePath, content, "utf-8");
  console.log(
    `🎉 파일을 생성했습니다. : ${path.relative(process.cwd(), problemFilePath)}`
  );
}

export default createProblemFile;
