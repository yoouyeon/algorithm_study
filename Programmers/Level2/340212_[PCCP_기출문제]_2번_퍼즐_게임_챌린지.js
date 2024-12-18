/* 
⭐️ 문제 정보 ⭐️
문제 : 340212 - [PCCP 기출문제] 2번 / 퍼즐 게임 챌린지
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/340212
*/

function solution(diffs, times, limit) {
  let answer = 100_000;

  // binary search
  let [minLv, maxLv] = [
    1,
    diffs.reduce((acc, cur) => (cur > acc ? cur : acc), 1),
  ];

  while (minLv <= maxLv) {
    const midLv = Math.floor((minLv + maxLv) / 2);
    const totalTimes = diffs.reduce((curTimes, diff, idx) => {
      if (diff <= midLv) return curTimes + times[idx];
      return (
        curTimes + (diff - midLv) * (times[idx] + times[idx - 1]) + times[idx]
      );
    }, 0);

    if (totalTimes <= limit) {
      answer = Math.min(answer, midLv);
      maxLv = midLv - 1;
    } else minLv = midLv + 1;
  }

  return answer;
}

const diffs = [1, 5, 3];
const times = [2, 4, 7];
const limit = 30;

console.log(solution(diffs, times, limit)); // 3
