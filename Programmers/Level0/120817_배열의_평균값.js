/* 
⭐️ 문제 정보 ⭐️
문제 : 120817 - 배열의 평균값
레벨 : Level 0
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120817
*/

function solution(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
}
