/* 
⭐️ 문제 정보 ⭐️
문제 : 118669 - 등산코스 정하기
레벨 : Level 3
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/118669
*/

function solution(n, paths, gates, summits) {
  // 그래프 구성하기
  const graph = Array.from({ length: n + 1 }, () => []); // 2차원 배열 구성
  const gateSet = new Set(gates);
  const summitSet = new Set(summits);
  for (const [i, j, w] of paths) {
    graph[i].push([j, w]);
    graph[j].push([i, w]);
  }

  // 거리
  const dist = new Array(n + 1).fill(Infinity);
  const pq = new MinHeap();
  for (const g of gates) {
    dist[g] = 0;
    pq.push([0, g]); // [intensity, node]
  }

  // minmax 다익스트라
  while (!pq.isEmpty()) {
    const popped = pq.pop();
    if (popped === null) break; // 안전장치
    const [curInt, curNode] = popped;

    // 같은 노드가 여러 번 큐에 들어갈 수 있음.
    // 나중에 더 좋은 값이 등장하면 이전 값은 구버전이 됨
    // 구버전은 무시한다.
    if (curInt !== dist[curNode]) continue;

    // 우리의 목표는 게이트 -> 봉우리 경로를 찾는것
    // 봉우리에 도착했다면 다른 봉우리를 찾으러 갈 필요가 없다.
    // 봉우리에 도착했다면 경로를 확장하지 않는다.
    if (summitSet.has(curNode)) continue;

    for (const [neighborNode, weight] of graph[curNode]) {
      const intensity = Math.max(curInt, weight);
      if (intensity < dist[neighborNode]) {
        dist[neighborNode] = intensity;
        pq.push([intensity, neighborNode]);
      }
    }
  }

  // 정답 구하기
  summits.sort((a, b) => a - b);
  let bestSummit = summits[0];
  let bestIntensity = dist[bestSummit];

  for (const summit of summits) {
    if (dist[summit] < bestIntensity) {
      bestIntensity = dist[summit];
      bestSummit = summit;
    }
  }

  return [bestSummit, bestIntensity];
}

class MinHeap {
  // 최소 힙
  // 부모 노드 값이 항상 자식보다 작거나 같다.
  // 노드: [우선순위값, 노드번호]
  // 우선순위값이 작을수록 먼저 꺼내진다.

  constructor() {
    this.heap = []; // 힙을 저장할 배열
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  push(x) {
    // 힙에 삽입하기
    this.heap.push(x);
    // 인덱스 조정해주기 (sift up)
    let currentIdx = this.heap.length - 1;
    while (currentIdx > 0) {
      const parentIdx = (currentIdx - 1) >> 1; // 정수 나누기 2
      if (this.heap[parentIdx][0] <= this.heap[currentIdx][0]) break; // 부모가 더 작거나 같으면 더 이상 올릴 필요 없음
      [this.heap[parentIdx], this.heap[currentIdx]] = [
        this.heap[currentIdx],
        this.heap[parentIdx],
      ]; // swap
      currentIdx = parentIdx; // 한 단계 올라가기
    }
  }

  pop() {
    // 요소가 하나만 남아 있다면 바로 반환해주기
    if (this.heap.length === 1) return this.heap.pop();
    // 비어있다면 null 반환해주기
    if (this.heap.length === 0) return null;

    const top = this.heap[0]; // 반환할 최상단 (최솟값) 저장
    this.heap[0] = this.heap.pop(); // 마지막 값을 루트로 이동시키기

    let currentIdx = 0;
    while (true) {
      // 왼쪽, 오른쪽 자식 인덱스
      const leftIdx = currentIdx * 2 + 1;
      const rightIdx = currentIdx * 2 + 2;
      let smallestIdx = currentIdx; // 교환할 최솟값 위치
      if (
        leftIdx < this.heap.length &&
        this.heap[leftIdx][0] < this.heap[smallestIdx][0]
      ) {
        smallestIdx = leftIdx;
      }
      if (
        rightIdx < this.heap.length &&
        this.heap[rightIdx][0] < this.heap[smallestIdx][0]
      ) {
        smallestIdx = rightIdx;
      }
      // 변경되지 않았다면 제자리에 잘 있는 것이므로 종료
      if (smallestIdx === currentIdx) break;
      // 자식과 교환하기
      [this.heap[currentIdx], this.heap[smallestIdx]] = [
        this.heap[smallestIdx],
        this.heap[currentIdx],
      ]; // swap;
      currentIdx = smallestIdx; // 교환된 위치로 내려가기
    }

    return top;
  }
}
