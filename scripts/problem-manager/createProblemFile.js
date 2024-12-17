import fs from "fs";
import path from "path";
import getBaekjoonLevel from "./getBaekjoonLevel.js";

async function createProblemFile({
  siteKey,
  folder,
  problemUrl,
  problemId,
  problemTitle,
}) {
  const baseUrl = path.join(process.cwd(), folder);
  let level = "Unknown";

  // 백준의 경우에는 난이도별 하위 폴더에 문제 파일을 생성한다.
  if (siteKey === "acmicpc") {
    console.log(`🔍 solved.ac의 난이도 정보를 가져오는 중...`);
    level = await getBaekjoonLevel(problemId);
  }

  const problemFolder = path.join(baseUrl, level === "Unknown" ? "" : level);
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
레벨 : ${level}
링크 : ${problemUrl}
*/
`;

  fs.writeFileSync(problemFilePath, content, "utf-8");
  console.log(
    `🎉 파일을 생성했습니다. : ${path.relative(process.cwd(), problemFilePath)}`
  );
}

export default createProblemFile;
