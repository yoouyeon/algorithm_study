/*
⭐️ 문제 정보 ⭐️
문제 : 2336 - Smallest Number in Infinite Set
레벨 : Medium
링크 : https://leetcode.com/problems/smallest-number-in-infinite-set
*/

// ANCHOR 2026.07.07 풀이 (29분 소요)
class SmallestInfiniteSet {
  private counter: number;
  private minHeap: number[];
  private inHeap: Set<number>;

  constructor() {
    this.counter = 1; // 무한한 숫자를 모두 저장할 수 없기 때문에 counter 하나로 표현
    this.minHeap = [];
    this.inHeap = new Set();
  }

  popSmallest(): number {
    if (this.minHeap.length === 0) {
      const ret = this.counter++;
      return ret;
    }
    return this.minHeapPop();
  }

  addBack(num: number): void {
    if (num >= this.counter || this.inHeap.has(num)) return;

    this.minHeap.push(num);
    this.inHeap.add(num);
    this.siftUp(this.minHeap.length - 1);
  }

  private minHeapPop(): number {
    const min = this.minHeap[0];
    const last = this.minHeap.pop()!;
    if (this.minHeap.length > 0) {
      this.minHeap[0] = last;
      this.siftDown(0);
    }
    this.inHeap.delete(min);

    return min;
  }

  private siftDown(index: number): void {
    const n = this.minHeap.length;

    while (true) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      let smallest = index;

      if (left < n && this.minHeap[left] < this.minHeap[smallest]) {
        smallest = left;
      }
      if (right < n && this.minHeap[right] < this.minHeap[smallest]) {
        smallest = right;
      }
      if (smallest === index) break;

      // swap
      [this.minHeap[index], this.minHeap[smallest]] = [this.minHeap[smallest], this.minHeap[index]];
      index = smallest;
    }
  }

  private siftUp(index: number): void {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.minHeap[parent] <= this.minHeap[index]) break;

      [this.minHeap[parent], this.minHeap[index]] = [this.minHeap[index], this.minHeap[parent]];
      index = parent;
    }
  }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
