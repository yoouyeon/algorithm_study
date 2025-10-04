/* 
⭐️ 문제 정보 ⭐️
문제 : 12906 - 같은 숫자는 싫어
레벨 : Level 1
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12906
*/

function solution(arr) {
  const answer = [];

  for (const num of arr) {
    if (answer.length > 0 && answer[answer.length - 1] === num) {
      // 연속으로 등장한 경우 그냥 넘어간다
      continue;
    }
    answer.push(num);
  }

  return answer;
}
