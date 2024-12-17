import fs from "fs";
import path from "path";
import problemProviders from "./problemProviders/index.js";

const fileExtensions = [".js", ".cpp"];

function generateReadme(siteKey) {
  const { baseFolder, name, siteUrl } = problemProviders[siteKey];
  const readmePath = path.join(process.cwd(), baseFolder, "README.md");
  const baseUrl = path.join(process.cwd(), baseFolder);

  // 모든 문제 풀이 파일을 가져온다.
  const problemFiles = scanFiles(baseUrl);

  // 문제 정보 추출과 정렬
  const problems = problemFiles
    .map((problemFile) => {
      const relativePath = path.relative(
        path.join(process.cwd(), baseFolder),
        problemFile
      );
      const fileName = path.basename(problemFile);
      const [problemId, ...rest] = fileName.split("_");
      const problemTitle = rest.join(" ").replace(".js", "");
      const problemUrl = problemProviders[siteKey].problemUrl(problemId);
      return {
        problemId: Number(problemId),
        problemTitle,
        problemUrl,
        relativePath,
        fileName,
      };
    })
    .sort((a, b) => a.problemId - b.problemId);

  // README.md 파일 생성
  const content = `# 👩‍💻 ${name} 문제 풀이 모음

[${name}](${siteUrl})에서 푼 문제들의 모음

## 💡 문제 목록

| 문제 번호 | 문제 이름 | 풀이 코드 | 문제 링크 |
| --------- | --------- | --------- | --------- |
${problems
  .map(
    (problem) =>
      `| ${problem.problemId} | ${problem.problemTitle} | [${
        problem.fileName
      }](${problem.relativePath.replace(/\\/g, "/")}) | [🔗](${
        problem.problemUrl
      }) |`
  )
  .join("\n")}
`;

  fs.writeFileSync(readmePath, content, "utf-8");
  console.log(
    `🎉 README.md 파일을 생성했습니다. : ${path.relative(
      process.cwd(),
      readmePath
    )}`
  );
}

function scanFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...scanFiles(fullPath, item.name));
    } else if (fileExtensions.includes(path.extname(item.name))) {
      files.push(fullPath);
    }
  }

  return files;
}

export default generateReadme;
