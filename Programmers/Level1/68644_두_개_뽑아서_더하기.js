/*
⭐️ 문제 정보 ⭐️
문제 : 68644 - 두 개 뽑아서 더하기
레벨 : Level 1
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/68644
*/

// ANCHOR 2026.04.01 풀이 (4분 소요)
{
  function solution(numbers) {
    // 합이 같은 것은 하나만 담는다.
    const set = new Set();
    for (let i = 0; i < numbers.length - 1; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        set.add(numbers[i] + numbers[j]);
      }
    }
    return [...set].sort((a, b) => a - b);
  }
}

// ANCHOR 2025.10.01 풀이
{
  function solution(numbers) {
    let answerSet = new Set();

    for (let i = 0; i < numbers.length - 1; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        answerSet.add(numbers[i] + numbers[j]);
      }
    }
    return [...answerSet].sort((a, b) => a - b);
  }
}
