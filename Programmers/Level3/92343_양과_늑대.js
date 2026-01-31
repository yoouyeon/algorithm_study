/* 
⭐️ 문제 정보 ⭐️
문제 : 92343 - 양과 늑대
레벨 : Level 3
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/92343
*/

// ANCHOR 2026.01.31풀이
function solution(info, edges) {
  let answer = 0;
  const nodeCount = info.length;
  // parent-children 관계 정리
  const tree = Array.from({length: nodeCount}, () => []);
  edges.forEach(([parent, child]) => tree[parent].push(child));
  
  // dfs (양 수집)
  // current: 이번에 방문할 노드
  // sheep: 현재 양 수
  // wolf: 현재 늑대 수
  // possible: 방문할 수 있는 다른 노드들 (현재 노드 포함)
  function dfs(current, sheep, wolf, possible) {
      const [newSheep, newWolf] = info[current] ? [sheep, wolf + 1] : [sheep + 1, wolf];
      // 만약 양이 늑대보다 많지 않다면 게임 오버 (바로 리턴한다.)
      if (newSheep <= newWolf) {
          return;
      }
      
      // 양의 수 업데이트(더 많은 것으로 업데이트한다.)
      answer = Math.max(answer, newSheep);
      // 방문 가능 목록 업데이트하기 (이미 방문한 곳은 제거)
      const newPossible = new Set(possible);
      newPossible.delete(current);
      tree[current].forEach((child) => newPossible.add((child)))
      // 방문 가능한 모든 노드 시도
      newPossible.forEach((next) => dfs(next, newSheep, newWolf, newPossible));
  }
  
  dfs(0, 0, 0, new Set([0]))
  return answer;
}