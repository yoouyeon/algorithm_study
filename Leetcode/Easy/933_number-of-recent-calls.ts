/*
⭐️ 문제 정보 ⭐️
문제 : 933 - Number of Recent Calls
레벨 : Easy
링크 : https://leetcode.com/problems/number-of-recent-calls
*/

// ANCHOR 2026.05.09 풀이 (13분 소요)
class RecentCounter {
  requests: number[];
  front: number;

  constructor() {
    this.requests = [];
    this.front = 0;
  }

  ping(t: number): number {
    this.requests.push(t);
    const rangeStart = t - 3000;
    while (this.front < this.requests.length && this.requests[this.front] < rangeStart) this.front++;
    return this.requests.length - this.front;
  }
}
