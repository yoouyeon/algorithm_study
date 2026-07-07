/*
⭐️ 문제 정보 ⭐️
문제 : 2542 - Maximum Subsequence Score
레벨 : Medium
링크 : https://leetcode.com/problems/maximum-subsequence-score
*/

// ANCHOR 2026.07.07 풀이 (21분 소요)
function maxScore(nums1: number[], nums2: number[], k: number): number {
  class Heap {
    private heap: number[] = [];

    get size(): number {
      return this.heap.length;
    }

    push(val: number): void {
      this.heap.push(val);
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

    private siftDown(index: number): void {
      const n = this.heap.length;

      while (true) {
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        let smallest = index;

        if (left < n && this.heap[left] < this.heap[smallest]) {
          smallest = left;
        }
        if (right < n && this.heap[right] < this.heap[smallest]) {
          smallest = right;
        }
        if (smallest === index) break;

        [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
        index = smallest;
      }
    }

    private siftUp(index: number): void {
      while (index > 0) {
        const parent = Math.floor((index - 1) / 2);
        if (this.heap[parent] <= this.heap[index]) break;

        [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
        index = parent;
      }
    }
  }
  const n = nums1.length;

  const pairs: [number, number][] = nums1
    .map((num1, i): [number, number] => [num1, nums2[i]])
    .sort((a, b) => b[1] - a[1]);

  let sum = 0;
  const heap = new Heap();

  let ans = 0;

  for (let j = 0; j < n; j++) {
    const [num1, num2] = pairs[j];

    heap.push(num1);
    sum += num1;

    if (heap.size > k) {
      sum -= heap.pop();
    }

    if (heap.size === k) {
      ans = Math.max(ans, sum * num2);
    }
  }

  return ans;
}
