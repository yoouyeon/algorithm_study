import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
const server = new McpServer({
    name: 'algorithm-mcp-server',
    version: '0.1.0',
});
/**
 * solved.ac의 티어 번호를 문자열로 변환하는 함수
 * 0: Unrated,
 * 1-5: Bronze5~1,
 * 6-10: Silver5~1,
 * 11-15: Gold5~1,
 * 16-20: Platinum5~1,
 * 21-25: Diamond5~1,
 * 26-30: Ruby5~1
 */
function tierNumberToString(level) {
    if (level === 0)
        return 'Unrated';
    const tierNames = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Ruby'];
    const tierIndex = Math.floor((level - 1) / 5);
    const tierLevel = 5 - ((level - 1) % 5);
    return `${tierNames[tierIndex]}${tierLevel}`;
}
/**
 * 백준 문제 정보 조회 (solved.ac API 사용)
 * @see https://solvedac.github.io/unofficial-documentation/#/operations/getProblemById
 */
server.registerTool("get_backjoon_problem", {
    description: "백준 문제 번호로 문제 제목과 난이도를 조회합니다.",
    inputSchema: {
        problemId: z.number().int().positive().describe("백준 문제 번호 (예: 1000)"),
    }
}, async ({ problemId }) => {
    const res = await fetch(`https://solved.ac/api/v3/problem/show?problemId=${problemId}`, { headers: { Accept: "application/json" } });
    if (!res.ok) {
        return {
            content: [{
                    type: "text",
                    text: `문제 조회 실패: ${res.status} ${res.statusText}`,
                }],
            isError: true,
        };
    }
    const data = await res.json();
    return {
        content: [{
                type: "text",
                text: JSON.stringify({
                    title: data.titleKo,
                    tier: tierNumberToString(data.level),
                })
            }]
    };
});
/**
 * 리트코드 문제 정보 조회 (LeetCode API 사용)
 * @see https://leetcode.com/discuss/post/1297705/is-there-public-api-endpoints-available-h0661/comments/1078937/
 */
server.registerTool("get_leetcode_problem", {
    description: "리트코드 문제 slug로 문제 제목과 난이도를 조회합니다.",
    inputSchema: {
        problemSlug: z.string().describe("리트코드 문제 slug (예: two-sum)"),
    }
}, async ({ problemSlug }) => {
    const query = `
    query getQuestionDetail($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
        title
        difficulty
      }
  `;
    const res = await fetch("https://leetcode.com/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Referer": "https://leetcode.com",
        },
        body: JSON.stringify({
            query,
            variables: { titleSlug: problemSlug },
        }),
    });
    if (!res.ok) {
        return {
            content: [{
                    type: "text",
                    text: `문제 조회 실패: ${res.status} ${res.statusText}`,
                }],
            isError: true,
        };
    }
    const data = await res.json();
    const question = data.data.question;
    if (!question) {
        return {
            content: [{
                    type: "text",
                    text: `문제를 찾을 수 없습니다: ${problemSlug}`,
                }],
            isError: true,
        };
    }
    return {
        content: [{
                type: "text",
                text: JSON.stringify({
                    title: question.title,
                    difficulty: question.difficulty,
                })
            }]
    };
});
// 서버 시작
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.log("MCP Server is running...");
}
main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});
