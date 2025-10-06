/* 
⭐️ 문제 정보 ⭐️
문제 : 131127 - 할인 행사
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/131127
*/

function isAnswer(wantMap) {
  // wantMap의 모든 제품 수량이 0보다 작은지 (답이 되는지) 확인하기
  return [...wantMap.values()].every((value) => value <= 0);
}

function solution(want, number, discount) {
  let answer = 0;
  let start = 0; // 회원 등록 시작 인덱스
  let wantMap = new Map(); // key: 제품 이름, value: 필요한 수량
  // 1. wantMap 초기화
  for (let idx = 0; idx < want.length; idx++) {
    wantMap.set(want[idx], number[idx]);
  }
  // 2. 슬라이딩 윈도우 초기 설정
  for (let idx = start; idx < 10; idx++) {
    const product = discount[idx];
    if (wantMap.has(product)) {
      wantMap.set(product, wantMap.get(product) - 1);
    }
  }
  if (isAnswer(wantMap)) answer++;

  // 3. 슬라이딩 윈도우
  while (start + 9 < discount.length - 1) {
    // 기존 회원등록 날짜의 할인 품목을 되돌리기
    const oldProduct = discount[start];
    if (wantMap.has(oldProduct)) {
      wantMap.set(oldProduct, wantMap.get(oldProduct) + 1);
    }
    // 회원 등록 날짜 뒤로 옮기기
    start++;
    // 새로운 할인 품목 업데이트
    const newProduct = discount[start + 9];
    if (wantMap.has(newProduct)) {
      wantMap.set(newProduct, wantMap.get(newProduct) - 1);
    }
    // 정답 여부 확인하고 업데이트
    if (isAnswer(wantMap)) answer++;
  }
  return answer;
}
