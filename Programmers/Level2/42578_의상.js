/* 
⭐️ 문제 정보 ⭐️
문제 : 42578 - 의상
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42578
*/

function solution(clothes) {
  const closet = new Map(); // key: 의상의 종류, value: 의상 이름이 담긴 배열;
  for (const cloth of clothes) {
    const [name, type] = cloth;
    if (closet.has(type)) {
      closet.get(type).push(name);
    } else {
      closet.set(type, [name]);
    }
  }

  // 해당 타입을 안입는 경우까지 포함한 조합의 경우의 수 구함 - 아무것도 입지 않는 경우의 수 빼기
  const answer =
    [...closet.values()].reduce((acc, cur) => acc * (cur.length + 1), 1) - 1;
  return answer;
}
