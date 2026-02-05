/* 
⭐️ 문제 정보 ⭐️
문제 : 42628 - 이중우선순위큐
레벨 : Level 3
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42628
*/

// ANCHOR : 26.02.05 풀이
class Heap {
  constructor(compare) {
    this.heap = [];
    this.compare = compare;
  }

  size() {
    return this.heap.length;
  }

  push(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) return null;
    const root = this.heap[0];
    if (this.heap.length === 1) return this.heap.pop();
    this.heap[0] = this.heap.pop();
    this.siftDown(0);

    return root;
  }

  siftUp(i) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.compare(this.heap[i], this.heap[p])) {
        this.swap(i, p);
        i = p;
      } else break;
    }
  }

  siftDown(i) {
    if (this.heap.length === 0) return;

    while (true) {
      const lc = 2 * i + 1 >= this.heap.length ? null : 2 * i + 1;
      const rc = 2 * i + 2 >= this.heap.length ? null : 2 * i + 2;

      let c;
      if (lc === null) break;
      else if (rc === null) c = lc;
      else {
        this.compare(this.heap[lc], this.heap[rc]) ? (c = lc) : (c = rc);
      }

      if (this.compare(this.heap[c], this.heap[i])) {
        this.swap(c, i);
        i = c;
      } else break;
    }
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

function solution(operations) {
  const minHeap = new Heap((a, b) => a.value < b.value);
  const maxHeap = new Heap((a, b) => a.value > b.value);

  let id = 0;
  const deleted = new Set();
  for (const operation of operations) {
    const [op, value] = operation.split(" ");
    if (op === "I") {
      const num = Number(value);
      minHeap.push({ id, value: num });
      maxHeap.push({ id, value: num });
      id++;
    } else if (op === "D") {
      if (value === "1") {
        // MAX heap에서 삭제
        while (maxHeap.size() > 0) {
          const x = maxHeap.pop();
          if (deleted.has(x.id)) continue;
          else {
            deleted.add(x.id);
            break;
          }
        }
      } else if (value === "-1") {
        // MIN heap에서 삭제
        while (minHeap.size() > 0) {
          const x = minHeap.pop();
          if (deleted.has(x.id)) continue;
          else {
            deleted.add(x.id);
            break;
          }
        }
      }
    }
  }

  function popValid(heap, deleted) {
    while (heap.size() > 0) {
      const node = heap.pop();
      if (node === null) return null;
      if (deleted.has(node.id)) continue;
      return node;
    }
    return null;
  }

  const maxNode = popValid(maxHeap, deleted);
  if (maxNode === null) return [0, 0];
  const minNode = popValid(minHeap, deleted);
  if (minNode === null) return [0, 0];

  return [maxNode.value, minNode.value];
}
