---
title: 18. 4Sum
description: 리트코드 18번 풀이
date: 2026-03-01
tags:
  - medium
  - two-pointer
  - sorting
---

# {{ $frontmatter.title }}

> {{ $frontmatter.description }}

## 문제

[4Sum](https://leetcode.com/problems/4sum)

## 풀이

### 아이디어

4개의 수의 쌍을 찾는 문제이다. 모든 쌍을 찾는 찾는 방법은 매우 비효율적이기 때문에 정렬된 배열에서 투 포인터를 이용하여 푼다. [15. 3Sum](https://leetcode.com/problems/3sum)과 매우 유사한 문제...

차이점이 있다면 3Sum에서는 3쌍을 찾는 것이기 때문에 한 숫자를 고정한 하나의 루프에서 투 포인터를 이용하여 나머지 두개의 숫자를 찾는 방식이었지만, 4Sum에서는 4쌍을 찾는 것이기 때문에 두 숫자를 고정한 두개의 루프에서 투 포인터를 이용하여 나머지 두개의 숫자를 찾는 방식이다.

사실 투 포인터는 아이디어만 생각나면 잘 구현할 수 있긴 한데, 개인적으로는 중복 제거 부분이 좀 까다로웠다. 고정한 숫자(이 문제에서는 a, b)의 경우에는 이전 값과 같으면 스킵하고 (**단, 각 루프의 시작 인덱스는 제외**), 투 포인터는 target과 같은 값을 찾은 뒤에 포인터를 이동하기 전에 같은 값을 넘어가는 식으로 중복을 제거해준다.

### 코드

```typescript
function fourSum(nums: number[], target: number): number[][] {
  const answer: number[][] = [];

  nums.sort((a, b) => a - b);

  for (let a = 0; a <= nums.length - 4; a++) {
    if (a !== 0 && nums[a] === nums[a - 1]) continue;
    for (let b = a + 1; b <= nums.length - 3; b++) {
      if (b !== a + 1 && nums[b] === nums[b - 1]) continue;
      let c = b + 1,
        d = nums.length - 1;
      while (c < d) {
        const sum = nums[a] + nums[b] + nums[c] + nums[d];
        if (sum === target) {
          answer.push([nums[a], nums[b], nums[c], nums[d]]);
          while (c < d && nums[c] === nums[c + 1]) c++;
          while (c < d && nums[d] === nums[d - 1]) d--;
          c++;
          d--;
        } else if (sum < target) c++;
        else d--;
      }
    }
  }

  return answer;
}
```

### 시간 / 공간 복잡도

- 시간 복잡도: O(n³)
- 공간 복잡도: O(1) (출력 배열 제외)
