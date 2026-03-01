/* 
⭐️ 문제 정보 ⭐️
문제 : 60062 - 외벽 점검
레벨 : Level 3
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/60062
*/

function solution(n, weak, dist) {
  let answer = Infinity;

  // 원형 취약지점을 직선화하기
  weak.sort((a, b) => a - b);
  const weakCount = weak.length;
  const extended = [...weak];
  for (let idx = 0; idx < weakCount; idx++) {
    extended.push(weak[idx] + n);
  }

  // 그리디 탐색
  for (let startIdx = 0; startIdx < weakCount; startIdx++) {
    // 항상 시작지점은 취약지점이다 (불필요한 공백을 없애기 위해서)
    // 현재 위치를 기준으로 하는 한 바퀴 구간 만들기 (이 안을 커버한다.)
    const coverSection = extended.slice(startIdx, startIdx + weakCount);
    // 모든 친구 조합을 확인해야 한다... (완전탐색 DFS)
    for (const friends of getUniquePermutaions(dist)) {
      // 이미 최적해가 나온 경우에는 더 이상 진행할 필요가 없음
      if (answer === 1) return 1;

      // 그리디 시작...
      let used = 1; // 보낸 친구들 수
      let coverEnd = coverSection[0] + friends[0]; // 첫 친구가 커버할 수 있는 우측 끝
      let coverAll = true; // 중간에 실패하면 false로 바뀔 갚

      for (let idx = 0; idx < coverSection.length; idx++) {
        const weakPoint = coverSection[idx];

        if (weakPoint <= coverEnd) {
          // 이미 커버된 취약지점이므로 다음 지점으로 넘어간다.
          continue;
        }

        // 새로운 친구를 투입한다.
        used += 1;

        // 가지치기 1 : 현재 최솟값보다 이미 많이 쓴 경우 더이상 할 필요 없음
        if (used > answer) {
          coverAll = false;
          break; // 이 순열 중단
        }
        // 가지치기 2 : 친구를 다 썼는데도 덮지 못한 경우
        if (used > friends.length) {
          coverAll = false;
          break;
        }

        // 새 친구는 현재 취약지점에서 시작해서 최대한 오른쪽 지점을 커버한다.
        coverEnd = weakPoint + friends[used - 1];
      }

      // 성공했다면 정답 갱신해주기
      if (coverAll) {
        answer = Math.min(answer, used);
      }
    }
  }

  return answer === Infinity ? -1 : answer;
}

function getUniquePermutaions(arr) {
  arr.sort((a, b) => b - a); // (이 문제 한정) 내림차순부터 탐색을 시작해야 효율이 좋음
  const result = [];
  const visited = Array(arr.length).fill(false);

  function backtrack(path) {
    if (path.length === arr.length) {
      // 모든 경로 탐색했으므로 추가하기
      result.push([...path]);
      return;
    }

    for (let idx = 0; idx < arr.length; idx++) {
      if (visited[idx]) continue;

      // 중복을 방지 -> 같은 레벨에서 같은 값은 한번만 추가한다.
      if (idx > 0 && arr[idx] === arr[idx - 1] && !visited[idx - 1]) continue;

      visited[idx] = true;
      path.push(arr[idx]);
      backtrack(path);
      path.pop();
      visited[idx] = false;
    }
  }

  backtrack([]);
  return result;
}
