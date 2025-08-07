/*
 * [135] Candy
 */

function candy(ratings: number[]): number {
  const n = ratings.length;
  const candies = Array(n).fill(1);

  // 오른쪽으로 순회하면서 조건에 맞게 사탕 나눠주기
  candies[0] = 1; // 최소 1개는 가져야함.
  for (let idx = 1; idx < n; idx++) {
    if (ratings[idx] > ratings[idx - 1]) {
      candies[idx] = candies[idx - 1] + 1;
    }
  }

  // 왼쪽으로 순회하면서 조건에 맞게 사탕 나눠주기 (기존 데이터 고려해서)
  for (let idx = n - 2; idx >= 0; idx--) {
    if (ratings[idx] > ratings[idx + 1]) {
      candies[idx] = Math.max(candies[idx], candies[idx + 1] + 1);
    }
  }

  return candies.reduce((sum, candy) => sum + candy, 0);
}
