/* 
⭐️ 문제 정보 ⭐️
문제 : 77486 - 다단계 칫솔 판매
레벨 : Level 3
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/77486
*/

/** NOTE
 * - 아래에서 위로 올라가는 방식 => 트리 저장 방법 : 자식 노드의 부모 노드가 무엇인지를 저장한다.
 * - 이익 분배 결과 저장 : enroll과 동일한 순서를 갖는 배여 => 이름에 해당하는 인덱스도 함께 저장해야겠다.
 * - currentProfit : 현재 노드가 가진 이익 => 이 이익금이 0이 되거나, 부모 노드가 없을 때 까지 반복하는 느낌으로 진행!
 */

const PRICE = 100;

function solution(enroll, referral, seller, amount) {
  let answer = Array.from({ length: enroll.length }, () => 0);
  const index = new Map(); // key: 판매원 이름, value: enroll과 answer 상의 인덱스
  const parent = new Map(); // key: 자식 노드 판매원 이름, value: 부모 노드 판매원 이름

  // Map 초기화
  for (let idx = 0; idx < enroll.length; idx++) {
    index.set(enroll[idx], idx);
    if (referral[idx] !== "-") {
      // 추천인이 있는 경우에만 저장한다.
      parent.set(enroll[idx], referral[idx]);
    }
  }

  // 이익 분배 재귀함수
  // name: 이 이익을 들고 있는 판매원 (이익을 상위로 분배하거나 다 갖는다.)
  // currentProfit: 분배할 이익
  function distribute(name, currentProfit) {
    if (name === undefined || currentProfit <= 0) {
      // 분배 못함
      return;
    }
    const distributedProfit = Math.floor(currentProfit * 0.1);
    const retainedProfit = currentProfit - distributedProfit;

    // 남은 금액을 현재 판매원에게 준다.
    answer[index.get(name)] += retainedProfit;
    // 상위 추천인이 없거나 분배할 이익이 없다면 분배를 중단한다.
    if (parent.get(name) === undefined || distributedProfit === 0) {
      return;
    }
    // 남은 이익을 상위 판매원이 다시 분배한다.
    distribute(parent.get(name), distributedProfit);
  }

  // seller와 amount를 분배
  for (let idx = 0; idx < seller.length; idx++) {
    distribute(seller[idx], amount[idx] * PRICE);
  }

  return answer;
}
