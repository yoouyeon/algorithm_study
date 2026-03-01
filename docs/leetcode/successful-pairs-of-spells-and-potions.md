---
title: 2300. Successful Pairs of Spells and Potions
description: 리트코드 2300번 풀이
date: 2026-03-02
tags:
  - medium
  - binary-search
  - sorting
---

# {{ $frontmatter.title }}

> {{ $frontmatter.description }}

## 문제

[Successful Pairs of Spells and Potions](https://leetcode.com/problems/successful-pairs-of-spells-and-potions)

## 풀이

### 아이디어

spells의 각 원소마다 potions에서 곱이 success 이상이 되는 원소의 개수를 구하는 문제이다. 어떤 원소의 곱이 success 이상이 된다면 그 원소보다 더 큰 원소들의 곱도 모두 success 이상이 된다. 따라서 potions를 정렬한 뒤, 이진 탐색을 이용하여 spells와의 곱이 success 이상이 되는 최소의 인덱스를 찾아줬다.

답이 없는 경우를 고려해서 없는 경우에는 0을 push해줘야 하는데, 나는 이진 탐색을 마친 마지막에 left가 가리키는 원소가 success 이상이 되는지 확인해서 맞다면 potions.length - left를 push해주고, 아니라면 0을 push해줬다. 하지만 **right의 초기값을 potions.length로 설정한다면 left가 가리키는 원소가 success 이상이 되는지 확인할 필요 없이 바로 potions.length - left를 push해줄 수 있다.**

### 코드

```typescript
function successfulPairs(spells: number[], potions: number[], success: number): number[] {
  const answer: number[] = [];
  potions.sort((a, b) => a - b);

  for (const spell of spells) {
    let left = 0,
      right = potions.length - 1;

    while (left < right) {
      const mid = Math.floor((right + left) / 2);
      if (spell * potions[mid] >= success) right = mid;
      else left = mid + 1;
    }

    if (spell * potions[left] >= success) answer.push(potions.length - left);
    else answer.push(0);
  }

  return answer;
}
```

### 시간 / 공간 복잡도

- 시간 복잡도: O((m + n) log m) — potions 정렬 O(m log m) + spells마다 이진탐색 O(n log m)
- 공간 복잡도: O(1) (출력 배열 제외)
