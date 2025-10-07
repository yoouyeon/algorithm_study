/* 
⭐️ 문제 정보 ⭐️
문제 : 72411 - 메뉴 리뉴얼
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/72411
*/

// ANCHOR 2025.10.07 풀이
function combination(arr, n) {
  // arr 배열에서 n개 뽑는 조합들을 담은 배열 반환
  if (n === 1) return arr.map((el) => [el]);

  const result = [];
  arr.forEach((fixed, idx) => {
    // fixed 이후의 원소들을 뽑는 조합을 찾아내야 함.
    const rest = arr.slice(idx + 1);
    const comb = combination(rest, n - 1);
    const combine = comb.map((c) => [fixed, ...c]);
    result.push(...combine);
  });

  return result;
}

function solution(orders, course) {
  let answer = [];

  // 조합 만들기
  for (const cnt of course) {
    // cnt개 코스 결정하기
    const courseMap = new Map(); // key: 코스 조합 value: 주문 횟수
    for (const order of orders) {
      const sortedOrder = order.split("").sort();
      combination(sortedOrder, cnt).forEach((comb) => {
        // 코스가 존재하는 경우 주문 횟수를 증가시켜줌
        const courseName = comb.join("");
        courseMap.set(courseName, (courseMap.get(courseName) || 0) + 1);
      });
    }
    // 많이 주문된 것 answer에 담기
    if (courseMap.size > 0) {
      const maxCount = Math.max(...courseMap.values());
      // 최소 2번 이상 주문되었고, 최댓값인 메뉴만 추가
      if (maxCount >= 2) {
        courseMap.forEach((count, courseName) => {
          if (count === maxCount) {
            answer.push(courseName);
          }
        });
      }
    }
  }

  return answer.sort();
}

// ANCHOR 2024.03.02 풀이
// map: 조합 저장 맵
// arr: 조합을 만드려는 배열
// comb: 조합을 만들고 있는 배열
// idx: 현재 포인터가 위치해있는 인덱스
// goal: 몇개 구성의 조합을 만들고 있는지 (goal === comb.length인 경우에 조합 결과 반환)
function combination(map, arr, comb, idx, goal) {
  // 조합이 완성된 경우
  if (comb.length === goal) {
    combStr = comb.join("");
    // 이미 있으면 value 증가, 없으면 value 1로 설정
    const currCourseMap = map.get(goal);
    if (currCourseMap.has(combStr))
      currCourseMap.set(combStr, currCourseMap.get(combStr) + 1);
    else currCourseMap.set(combStr, 1);
    return;
  }
  // 조합하기
  for (let i = idx + 1; i < arr.length; i++) {
    comb.push(arr[i]);
    combination(map, arr, comb, i, goal);
    comb.pop();
  }
}

function solution1(orders, course) {
  const menuMap = new Map(course.map((count) => [count, new Map()])); // key: 코스 길이, (key: 메뉴 조합, value: 주문 횟수)
  // 각 손님별로 반복
  orders.forEach((order, idx) => {
    // 1. 오름차순 정렬
    const orderArr = order.split("").sort();
    // 2. course의 갯수만큼
    course.forEach((count) => {
      // 2. 조합을 만들어서 이것저것~
      combination(menuMap, orderArr, [], -1, count);
    });
  });

  // 완성된 맵
  // console.log(menuMap)
  // 맵 순회
  const answer = [];
  menuMap.forEach((currCourseMap) => {
    let courseArr = [];
    let maxValue = 0;
    currCourseMap.forEach((value, key) => {
      if (value < 2) return;
      if (maxValue > value) return;
      if (maxValue === value) courseArr.push(key);
      else {
        maxValue = value;
        courseArr = [key];
      }
    });
    answer.push(...courseArr);
  });
  answer.sort();
  return answer;
}
