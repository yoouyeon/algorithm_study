/*
⭐️ 문제 정보 ⭐️
문제 : 120844 - 배열 회전시키기
레벨 : Level 0
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120844
*/

// ANCHOR 2026.04.02 풀이 (7분 소요)
function solution(numbers, direction) {
  // 배열 길이가 짧아서 shift를 써도 괜찮지 않을까? 하지만 회전이라면 역시 배열 이어붙이기지
  // concat을 잊지 말자. 스프레드도 ok
  const rotateNumbers = [...numbers, ...numbers];
  if (direction === 'right') {
    return rotateNumbers.slice(numbers.length - 1, numbers.length * 2 - 1);
  }
  return rotateNumbers.slice(1, numbers.length + 1);
  // 피드백 : 중간배열을 쓰지 않는 쪽이 좀 더 명시적이다. (공간복잡도도 더 낫다)
  // if (direction === 'right') {
  // if (direction === 'right') {
  //   return [numbers[numbers.length - 1]].concat(numbers.slice(0, -1));
  // }
  // return numbers.slice(1).concat(numbers[0]);
}
