/* 
⭐️ 문제 정보 ⭐️
문제 : 42889 - 실패율
레벨 : Level 1
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42889
*/

// ANCHOR 2025.10.02 풀이
function solution2(N, stages) {
  // k번째 스테이지에 도전중인 플레이어를 구하기
  // N + 2 : 스테이지 번호가 1부터 시작 + 모두 통과한 플레이어도 커버하기 위함
  const stagePlayers = new Array(N + 2).fill(0);
  for (const stage of stages) {
    stagePlayers[stage]++;
  }

  // 실패율 구하기 (여전히 도전중인 플레이어 / 도달한 적이 있는 플레이어)
  const fails = {}; // 실패율
  let totalPlayers = stages.length; // 전체 플레이어의 수

  for (let k = 1; k <= N; k++) {
    if (stagePlayers[k] === 0) {
      // 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0으로 정의한다.
      fails[k] = 0;
    } else {
      fails[k] = stagePlayers[k] / totalPlayers;
      totalPlayers -= stagePlayers[k];
    }
  }

  // fails 정렬하기
  const answer = Object.entries(fails)
    .sort(([_, failRate1], [__, failRate2]) => failRate2 - failRate1)
    .map(([stageNum]) => Number(stageNum));

  return answer;
}

// ANCHOR 2024.02.28 풀이
function solution1(N, stages) {
  // 각 스테이지에 도달한 유저
  const stageArray = new Array(N).fill(0);
  // 각 스테이지에 현재 도전중인 유저 = 스테이지에 도달했으나 클리어하지 못한 유저
  const currentStageArray = new Array(N).fill(0);

  // 1. stageArray, currentStageArray 채워주기 => 더 좋은 방법이 없을까...
  stages.forEach((curr) => {
    const stageIndex = curr - 1; // 1번 스테이지 => 0번 인덱스
    for (let idx = 0; idx < stageIndex; idx++) {
      stageArray[idx]++;
    }
    currentStageArray[stageIndex]++;
  });

  // 2. 실패율 구해서 배열로 만들기~
  let answerData = new Array(N);
  for (let idx = 0; idx < answerData.length; idx++) {
    answerData[idx] = {
      num: idx + 1,
      fail: currentStageArray[idx] / stageArray[idx],
    };
  }
  // 3. 정렬....
  answerData.sort((a, b) => {
    if (a.fail === b.fail) return a.num - b.num;
    return b.fail - a.fail;
  });
  // 4. 정답 배열 만들기!
  return Array.from(answerData, (data) => data.num);
}
