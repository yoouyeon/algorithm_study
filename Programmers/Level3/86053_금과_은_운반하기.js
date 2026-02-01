/* 
⭐️ 문제 정보 ⭐️
문제 : 86053 - 금과 은 운반하기
레벨 : Level 3
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/86053
*/

// ANCHOR 2026.02.01 풀이
// 이분탐색
function solution(a, b, g, s, w, t) {
  // time 시간 안에 모든 도시에서 필요한 광물들을 운반할 수 있는지를 확인
  function check(time) {
      const cityCount = g.length;
      let gold = 0, silver = 0, total = 0;
      for (let i = 0; i < cityCount; i++) {
          // time 시간 안에 "운반"할 수 있는 최대 횟수
          const maxDeliveries = Math.floor(time / (2 * t[i])) + (time % (2 * t[i]) >= t[i] ? 1 : 0);
          // time 시간 안에 운반할 수 있는 광물의 최대 양
          const cap = maxDeliveries * w[i];
          
          gold += Math.min(g[i], cap);
          silver += Math.min(s[i], cap);
          total += Math.min(g[i] + s[i], cap);
      }
      
      return gold >= a && silver >= b && total >= a + b;
  }
  
  // 이분탐색
  let left = 0, right = 10 ** 15;
  while (left < right) {
      const mid = Math.floor((right + left) / 2);
      if (check(mid)) right = mid;
      else left = mid + 1;
  }
  
  return left;
}