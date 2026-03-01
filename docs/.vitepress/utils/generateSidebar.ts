import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const EXCLUDE_DIRS = ['.vitepress', 'public', 'node_modules'];

const PLATFORM_LABELS: Record<string, string> = {
  baekjoon: '백준',
  programmers: '프로그래머스',
  leetcode: 'LeetCode',
};

function getTitle(filePath: string, fallback: string): string {
  try {
    const { data } = matter(fs.readFileSync(filePath, 'utf-8'));
    return data.title ?? fallback;
  } catch {
    return fallback;
  }
}

export function generateSidebar(docsDir: string) {
  return fs
    .readdirSync(docsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !EXCLUDE_DIRS.includes(d.name))
    .map((dir) => ({
      text: PLATFORM_LABELS[dir.name] ?? dir.name,
      collapsed: true,
      items: fs
        .readdirSync(path.join(docsDir, dir.name))
        .filter((f) => f.endsWith('.md') && f !== 'index.md')
        .sort((a, b) => {
          const numA = parseInt(a);
          const numB = parseInt(b);
          return numA - numB;
        })
        .map((f) => {
          const filePath = path.join(docsDir, dir.name, f);
          const fallback = f.replace('.md', '');
          return {
            text: getTitle(filePath, fallback),
            link: `/${dir.name}/${f.replace('.md', '')}`,
          };
        }),
    }))
    .filter((dir) => dir.items.length > 0);
}
