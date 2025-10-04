/* 
⭐️ 문제 정보 ⭐️
문제 : 120853 - 컨트롤 제트
레벨 : Level 0
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120853
*/

function solution(s) {
  let answer = 0;
  const arr = s.split(" ");

  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] === "Z") {
      // 직전 숫자를 빼 준다.
      // s는 "Z"로 시작하지 않습니다.
      // "Z"가 연속해서 나오는 경우는 없습니다.
      answer -= arr[idx - 1];
    } else {
      // 숫자로 변환해서 더해준다.
      // s는 숫자, "Z", 공백으로 이루어져 있습니다.
      answer += Number(arr[idx]);
    }
  }

  return answer;
}
