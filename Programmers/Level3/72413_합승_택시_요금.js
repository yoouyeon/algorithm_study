/* 
⭐️ 문제 정보 ⭐️
문제 : 72413 - 합승 택시 요금
레벨 : Level 3
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/72413
*/

// ANCHOR: 26.02.08 풀이
class Heap {
  constructor(compare) {
    this.heap = [];
    this.compare = compare;
  }

  size() {
    return this.heap.length;
  }

  // 새로운 원소를 힙에 추가
  // 가장 끝에 넣고 제자리를 찾아서 올려준다.
  push(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1);
  }

  // root를 뺀다.
  // 가장 끝 값을 root로 올리고, 제자리를 찾아 내린다.
  pop() {
    if (this.size() <= 0) return null; // NOTE : 명시적으로 값을 반환해주는 쪽이 더 좋음
    if (this.size() === 1) return this.heap.pop(); // NOTE : 이거 잊지 맙시다.
    const ret = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.siftDown(0);
    return ret;
  }

  // 인덱스 공식... (암기가 필요함...)
  // parent: 자식 둘이 같은 부모를 공유한다. (1, 2) -> 3, => Math.floor((i - 1) / 2)
  // child: left child 부터 생각하기. 부모 하나당 자식 2칸이 생긴다.
  // - left: 0 -> 1, 1 -> 3, ... => (i * 2) + 1
  // - right: left 옆. => (i * 2) + 2

  // push와 함께 사용
  // 제자리 찾아서 올라가는 단계
  siftUp(idx) {
    // heap 규칙에 어긋난다면 swap으로 올려준다.
    // root이거나 heap 규칙에 잘 맞는다면 shiftUp 중단
    while (idx > 0) {
      const parent = Math.floor((idx - 1) / 2);
      if (this.compare(this.heap[idx], this.heap[parent])) {
        this.swap(idx, parent);
        idx = parent;
      } else {
        break;
      }
    }
  }

  // pop과 함께 사용
  // 제자리 찾아서 내려가는 단계
  siftDown(idx) {
    while (true) {
      const leftChild = idx * 2 + 1;
      const rightChild = idx * 2 + 2;

      let targetChild;
      if (leftChild >= this.size()) break;
      else if (rightChild >= this.size()) targetChild = leftChild;
      else
        targetChild = this.compare(this.heap[leftChild], this.heap[rightChild])
          ? leftChild
          : rightChild;

      if (this.compare(this.heap[targetChild], this.heap[idx])) {
        this.swap(targetChild, idx);
        idx = targetChild;
      } else {
        break;
      }
    }
  }

  // a 인덱스와 b인덱스의 값을 스왑
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

function solution(n, s, a, b, fares) {
  // 0. 다익스트라에 필요한 데이터 준비하기
  // adj: 인접 리스트 (원소: [v, w])
  const adj = Array.from({ length: n + 1 }, () => []);
  for (const [c, d, f] of fares) {
    adj[c].push([d, f]);
    adj[d].push([c, f]);
  }

  // 1. 다익스트라 구현
  // start: 경로를 계산할 시작 지점.
  // 시작 지점부터 다른 전체 노드까지의 각 최단 경로를 반환한다.
  function dijkstra(start) {
    // 0) 초기 설정
    const dist = new Array(n + 1).fill(Infinity);
    dist[start] = 0;
    const minHeap = new Heap(([c1, v1], [c2, v2]) => c1 < c2);
    minHeap.push([0, start]);

    // 1) minHeap이 빌 때까지 반복한다.
    while (minHeap.size() > 0) {
      const [cost, u] = minHeap.pop();
      // NOTE : dist 정보와 cost 정보가 다르다면 구버전 정보이므로 넘어간다. (이미 처리한 노드임을 의미)
      if (cost !== dist[u]) continue;
      // 2) u의 간선들을 모두 탐색한다.
      for (const [v, w] of adj[u]) {
        // 3) v로 가는데 걸리는 비용의 최솟값을 업데이트한다.
        const nextCost = cost + w;
        if (nextCost < dist[v]) {
          dist[v] = nextCost;
          minHeap.push([nextCost, v]);
        }
      }
    }

    return dist;
  }

  // 2. S에서 출발하는 경로의 촤단거리
  const distS = dijkstra(s);
  // 3. A에서 출발하는 경로의 최단거리 (중간지점 - A까지의 거리 계산용)
  const distA = dijkstra(a);
  // 4. B에서 출발하는 경로의 최단거리 (중간지점 - B까지의 거리 계산용)
  const distB = dijkstra(b);

  // 5. 모든 중간지점 c를 확인하면서 총 비용이 최소가 되는 c를 찾는다.
  // 합승을 안해도 되기 때문에 시작지점도 확인한다.
  let answer = Infinity;
  for (let c = 1; c <= n; c++) {
    answer = Math.min(answer, distS[c] + distA[c] + distB[c]);
  }
  return answer;
}
