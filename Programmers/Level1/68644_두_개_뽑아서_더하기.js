/* 
⭐️ 문제 정보 ⭐️
문제 : 68644 - 두 개 뽑아서 더하기
레벨 : Level 1
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/68644
*/

function solution(numbers) {
  let answerSet = new Set();

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answerSet.add(numbers[i] + numbers[j]);
    }
  }
  return [...answerSet].sort((a, b) => a - b);
}
