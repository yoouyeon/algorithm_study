/*
⭐️ 문제 정보 ⭐️
문제 : 841 - Keys and Rooms
레벨 : Medium
링크 : https://leetcode.com/problems/keys-and-rooms
*/

// ANCHOR 2026.05.17 풀이 (3분 소요)
function canVisitAllRooms(rooms: number[][]): boolean {
  const visited = new Set();
  const stack = [];
  stack.push(0);

  while (stack.length) {
    const curr = stack.pop();
    if (visited.has(curr)) continue;
    visited.add(curr);
    const keys = rooms[curr];
    for (const key of keys) stack.push(key);
  }

  return visited.size === rooms.length;
}
