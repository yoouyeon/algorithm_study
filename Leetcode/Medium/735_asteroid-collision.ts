/*
⭐️ 문제 정보 ⭐️
문제 : 735 - Asteroid Collision
레벨 : Medium
링크 : https://leetcode.com/problems/asteroid-collision
*/

// ANCHOR 2026.05.08 풀이 (20분 소요)
function asteroidCollision(asteroids: number[]): number[] {
  // asteroid란 소행성이라는 것
  // 아! 언젠가 부딪힐 소행성들을 모두 처리하고 남은 결과를 반환하는 문제로군
  // 방향이 같은 소행성은 영원히 부딛히지 않을 것이기 때문에 방향이 다른 것만 체크해주면 된다.
  // 아, 충돌하면 절댓값이 큰것이 남는다는 것을 기억해야 함.
  // 이것도 스택이네

  const stack = [];

  for (const asteroid of asteroids) {
    // 스택이 비지 않고, 둘이 가까워지는 방향일 때, top의 절댓값이 asteroid보다 작거나 같아서 파괴될 때 까지 반복
    let isExplode = false;
    let top = stack.at(-1);
    while (top && top > 0 && asteroid < 0) {
      if (Math.abs(top) === Math.abs(asteroid)) {
        // 둘 다 파괴됨
        stack.pop();
        top = stack.at(-1);
        isExplode = true;
        break;
      } else if (Math.abs(top) < Math.abs(asteroid)) {
        // top만 파괴함
        stack.pop();
        top = stack.at(-1);
      } else {
        // asteroid만 파괴
        isExplode = true;
        break;
      }
    }

    if (!isExplode) {
      stack.push(asteroid);
    }
  }

  return stack;
}
