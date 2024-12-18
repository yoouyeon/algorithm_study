/* 
⭐️ 문제 정보 ⭐️
문제 : 258711 - 도넛과 막대 그래프
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/258711
*/

function solution(edges) {
  let answer = [];
  let generatedNode = 0;
  let donutCount = 0;
  let stickCount = 0;
  let eightCount = 0;

  const nodes = new Set();
  const inDegree = new Map();
  const outDegree = new Map();

  // 노드와 간선 정보 초기화
  for (const [from, to] of edges) {
    nodes.add(from);
    nodes.add(to);

    outDegree.set(from, (outDegree.get(from) || 0) + 1);
    inDegree.set(to, (inDegree.get(to) || 0) + 1);
  }

  // 생성 정점 확인 - 들어오는 간선이 0개이고 나가는 간선이 2 이상인 정점
  for (const node of nodes) {
    inD = inDegree.get(node) || 0;
    outD = outDegree.get(node) || 0;
    if (inD === 0 && outD >= 2) {
      generatedNode = node;
      break;
    }
  }

  // 그래프 모양 확인
  for (const node of nodes) {
    if (node === generatedNode) continue;

    inD = inDegree.get(node) || 0;
    outD = outDegree.get(node) || 0;

    if (outD === 0) {
      // 막대 그래프의 끝점
      stickCount++;
    } else if (outD === 2) {
      // 8자 그래프의 연결점
      eightCount++;
    }
  }
  donutCount = (outDegree.get(generatedNode) || 0) - (stickCount + eightCount);

  answer = [generatedNode, donutCount, stickCount, eightCount];
  return answer;
}
