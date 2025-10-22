/* 
⭐️ 문제 정보 ⭐️
문제 : 150365 - 미로 탈출 명령어
레벨 : Level 3
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/150365
*/

function solution(n, m, x, y, r, c, k) {
  let answer = "impossible";
  const S = [x, y];
  const E = [r, c];
  const dir = [
    [1, 0, "d"],
    [0, -1, "l"],
    [0, 1, "r"],
    [-1, 0, "u"],
  ];

  function dfs(pos, path) {
    if (answer !== "impossible") {
      return;
    }

    // 도착한 경우
    if (pos[0] === E[0] && pos[1] === E[1]) {
      if (path.length === k) {
        // 도착하기까지의 경로가 k와 같다면 이것이 답!
        answer = path;
        return;
      }
    }

    // 남은 거리를 이용해서 시간 단축하기 (몰랐어;)
    const remaining = k - path.length; // k까지 남은 거리
    const minDist = Math.abs(pos[0] - E[0]) + Math.abs(pos[1] - E[1]);
    // case 1. 현 위치부터 목적지까지 최단 거리보다 남은 거리가 더 작다면 목적지까지 도달할 수 없다.
    if (minDist > remaining) {
      return;
    }
    // case 2. 남은 거리가 양수일 때 그 남은 거리가 짝수가 아니면 답이 아니다. (왔다갔다로 남은 거리를 소비할 수 없음)
    // 도착 지점에 도달했을 때 "k보다 일찍 도착했다!" → "남은 거리가 짝수가 아니군" 을 검사하기엔 늦다 (시간 초과 발생함)
    // 도착 지점까지의 최단거리보다 남은 거리가 더 길기 때문에, 잉여 거리를 예측하고, 그 잉여 거리가 짝수인지를 확인한다.
    // 좀 더 가지를 칠 수 있다. (이걸 어떻게 생각해내는것임;)
    if ((remaining - minDist) % 2 !== 0) {
      return;
    }

    for (const [dx, dy, dirName] of dir) {
      const nx = pos[0] + dx;
      const ny = pos[1] + dy;

      if (nx >= 1 && nx <= n && ny >= 1 && ny <= m) {
        dfs([nx, ny], path + dirName);
        if (answer !== "impossible") {
          return;
        }
      }
    }
  }

  dfs(S, "");

  return answer;
}
