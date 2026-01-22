/* 
⭐️ 문제 정보 ⭐️
문제 : 12953 - N개의 최소공배수
레벨 : Level 1
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12953
*/

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  let answer = arr[0];

  for (let idx = 1; idx < arr.length; idx++) {
      answer = lcm(answer, arr[idx]);
  }
  
  return answer;
}