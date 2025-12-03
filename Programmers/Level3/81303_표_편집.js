/* 
⭐️ 문제 정보 ⭐️
문제 : 81303 - 표 편집
레벨 : Level 3
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/81303
*/

/**
 * NOTE: 2025.10.04
 * - rows를 배열로 관리해서 시간 초과 발생함
 * - 이중 연결 리스트로 구현해서 해결 완료
 */

// ANCHOR - 2025.12.03 풀이

function solution3(n, k, cmd) {
  const row = Array.from({ length: n }, (_, idx) => ({
    prev: idx === 0 ? null : idx - 1,
    isDeleted: false,
    next: idx === n - 1 ? null : idx + 1,
  }));

  const deleted = [];
  let cur = k;
  for (let idx = 0; idx < cmd.length; idx++) {
    const [op, argstr] = cmd[idx].split(" ");
    const arg = Number(argstr);
    switch (op) {
      case "U":
        for (let cnt = 0; cnt < arg; cnt++) {
          cur = row[cur].prev;
        }
        break;
      case "D":
        for (let cnt = 0; cnt < arg; cnt++) {
          cur = row[cur].next;
        }
        break;
      case "C":
        // 현재 선택된 행을 삭제
        row[cur].isDeleted = true;
        deleted.push(cur);
        // 현재 선택된 행이 가장 마지막 행인 경우 현재 행을 그 위 행으로
        if (row[cur].next === null) {
          cur = row[cur].prev;
          if (cur) row[cur].next = null;
        } else {
          // 그 외에는 아래 행 선택
          if (row[cur].prev !== null) row[row[cur].prev].next = row[cur].next;
          row[row[cur].next].prev = row[cur].prev;
          cur = row[cur].next;
        }
        break;
      case "Z":
        // 최근에 삭제된 것 복구
        const deletedIdx = deleted.pop();
        if (deletedIdx === undefined) break;
        if (row[deletedIdx].prev !== null)
          row[row[deletedIdx].prev].next = deletedIdx;
        if (row[deletedIdx].next !== null)
          row[row[deletedIdx].next].prev = deletedIdx;
        row[deletedIdx].isDeleted = false;
        break;
    }
  }

  const answer = row.reduce(
    (acc, { isDeleted }) => (acc += isDeleted ? "X" : "O"),
    ""
  );
  return answer;
}

// ANCHOR - 2025.10.04 풀이 - 이중 연결 리스트
function solution2(n, k, cmd) {
  // 각 노드가 가리키는 prev와 next를 저장하는 배열 (이중 연결 리스트)
  const prev = Array.from({ length: n }, (_, i) => i - 1);
  const next = Array.from({ length: n }, (_, i) => i + 1);

  const deleteHistory = [];
  const deleted = new Array(n).fill(false); // 정답 생성 위해서 삭제된 행 따로 관리
  let cursor = k;

  for (const c of cmd) {
    const op = c[0];

    switch (op) {
      case "U":
        const upSteps = parseInt(c.split(" ")[1]);
        for (let cnt = 0; cnt < upSteps; cnt++) {
          cursor = prev[cursor];
        }
        break;
      case "D":
        const downSteps = parseInt(c.split(" ")[1]);
        for (let cnt = 0; cnt < downSteps; cnt++) {
          cursor = next[cursor];
        }
        break;
      case "C":
        deleteHistory.push(cursor);
        deleted[cursor] = true;

        const prevNode = prev[cursor];
        const nextNode = next[cursor];

        // 연결 끊기
        if (prevNode !== -1) next[prevNode] = nextNode;
        if (nextNode !== -1) prev[nextNode] = prevNode;

        // 다음 커서 업데이트
        cursor = nextNode !== n ? nextNode : prevNode;
        break;
      case "Z":
        const currentDelete = deleteHistory.pop();
        deleted[currentDelete] = false;
        const prevNode_ = prev[currentDelete];
        const nextNode_ = next[currentDelete];

        // 연결 복구
        if (prevNode_ !== -1) next[prevNode_] = currentDelete;
        if (nextNode_ !== -1) prev[nextNode_] = currentDelete;
        break;
      default:
    }
  }

  // 결과 생성하기 (삭제된 것만 X로 바꿔줄것임)
  const result = new Array(n).fill("O");
  for (let row = 0; row < deleted.length; row++) {
    if (deleted[row]) result[row] = "X";
  }
  return result.join("");
}

// ANCHOR - 2025.10.04 풀이 - 배열
function findNextExistingRow(rows, start, direction, n) {
  let idx = start;
  while (idx >= 0 && idx < n && rows[idx] === false) {
    idx += direction;
  }
  return idx;
}

function solution1(n, k, cmd) {
  const rows = new Array(n).fill(true); // 행의 존재 여부를 저장
  const deleteHistory = [];
  let cursor = k;

  for (const c of cmd) {
    const op = c[0];

    switch (op) {
      case "U":
        // X칸 위에 있는 행 선택 (범위 고려 x)
        const [u, ux] = c.split(" ");
        const upSteps = parseInt(ux);
        for (let cnt = 0; cnt < upSteps; cnt++) {
          cursor = findNextExistingRow(rows, cursor - 1, -1, n);
        }
        break;
      case "D":
        // X칸 아래에 있는 행 선택 (범위 고려 x)
        const [d, ud] = c.split(" ");
        const downSteps = parseInt(ud);
        for (let cnt = 0; cnt < downSteps; cnt++) {
          cursor = findNextExistingRow(rows, cursor + 1, 1, n);
        }
        break;
      case "C":
        // 현재 선택한 행 삭제
        deleteHistory.push(cursor);
        rows[cursor] = false;
        // 바로 아래 행 선택
        let nextCursor = findNextExistingRow(rows, cursor + 1, 1, n);
        // 가장 아래 행을 삭제한 경우에는 바로 위 행 선택
        if (nextCursor >= n) {
          nextCursor = findNextExistingRow(rows, cursor - 1, -1, n);
        }
        cursor = nextCursor;
        break;
      case "Z":
        // 가장 최근에 삭제한 행을 원래대로 복구
        const currentDelete = deleteHistory.pop();
        rows[currentDelete] = true;
        break;
      default:
    }
  }

  return rows.map((isExist) => (isExist ? "O" : "X")).join("");
}
