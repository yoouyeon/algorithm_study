/* 
⭐️ 문제 정보 ⭐️
문제 : 159994 - 카드 뭉치
레벨 : Level 1
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/159994
*/

function solution(cards1, cards2, goal) {
  let idx1 = 0;
  let idx2 = 0;
  let goalIdx = 0;

  while (goalIdx < goal.length) {
    if (idx1 < cards1.length && cards1[idx1] === goal[goalIdx]) {
      goalIdx++;
      idx1++;
      continue;
    } else if (idx2 < cards2.length && cards2[idx2] === goal[goalIdx]) {
      goalIdx++;
      idx2++;
      continue;
    }
    return "No";
  }

  return "Yes";
}
