/*
⭐️ 문제 정보 ⭐️
문제 : 2462 - Total Cost to Hire K Workers
레벨 : Medium
링크 : https://leetcode.com/problems/total-cost-to-hire-k-workers
*/

// ANCHOR 2026.07.08 풀이 (39분 소요)
function totalCost(costs: number[], k: number, candidates: number): number {
  class MinHeap {
    private heap: number[];

    constructor() {
      this.heap = [];
    }

    push(value: number) {
      this.heap.push(value);
      this.siftUp(this.heap.length - 1);
    }

    pop(): number {
      const min = this.heap[0];
      const last = this.heap.pop()!;
      if (this.heap.length > 0) {
        this.heap[0] = last;
        this.siftDown(0);
      }
      return min;
    }

    size(): number {
      return this.heap.length;
    }

    peek(): number {
      return this.heap[0];
    }

    private siftUp(index: number): void {
      while (index > 0) {
        const parent = Math.floor((index - 1) / 2);
        if (this.heap[parent] <= this.heap[index]) break;

        //swap
        [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
        index = parent;
      }
    }

    private siftDown(index: number): void {
      const n = this.heap.length;
      while (true) {
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        let smallest = index;

        if (left < n && this.heap[left] < this.heap[smallest]) smallest = left;
        if (right < n && this.heap[right] < this.heap[smallest]) smallest = right;
        if (smallest === index) break;

        // swap
        [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
        index = smallest;
      }
    }
  }

  // step 1. 초기 설정
  let left = 0;
  let right = costs.length - 1;
  const leftHeap = new MinHeap();
  const rightHeap = new MinHeap();

  while (left <= right && (leftHeap.size() < candidates || rightHeap.size() < candidates)) {
    if (leftHeap.size() < candidates) leftHeap.push(costs[left++]);
    if (rightHeap.size() < candidates && left <= right) rightHeap.push(costs[right--]);
  }

  // step 2. 본 로직 돌입
  let totalCost = 0;

  for (let session = 0; session < k; session++) {
    const minLeft = leftHeap.peek();
    const minRight = rightHeap.peek();

    // left에서 빼야 하는 경우
    if (minRight === undefined || minLeft <= minRight) {
      totalCost += minLeft;
      leftHeap.pop();
      if (left <= right) leftHeap.push(costs[left++]);
    } else {
      totalCost += minRight;
      rightHeap.pop();
      if (left <= right) rightHeap.push(costs[right--]);
    }
  }

  return totalCost;
}
