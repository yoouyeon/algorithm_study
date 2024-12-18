import { execSync } from "child_process";

const argMap = {
  acmicpc: "baekjoon",
  programmers: "programmers",
};

function generateReadme(siteKey) {
  if (!argMap[siteKey]) {
    throw new Error("❌ 지원하지 않는 사이트입니다.");
  }

  const arg = argMap[siteKey];
  execSync(`npm run readme ${arg}`, { stdio: "inherit" });
}

export default generateReadme;
