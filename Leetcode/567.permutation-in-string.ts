/*
 * [567] Permutation in String
 */
function charToIndex(c: string): number {
  return c.charCodeAt(0) - "a".charCodeAt(0);
}

function checkInclusion(s1: string, s2: string): boolean {
  const ALPHA_COUNT = 26;
  if (s1.length > s2.length) return false;

  // 초기화
  const cnt: number[] = new Array<number>(ALPHA_COUNT).fill(0);
  for (const c1 of s1) {
    const idx = charToIndex(c1);
    cnt[idx] = cnt[idx] + 1;
  }
  for (let winIdx = 0; winIdx < s1.length; winIdx++) {
    const idx = charToIndex(s2[winIdx]);
    cnt[idx] = cnt[idx] - 1;
  }
  let matches: number = cnt.reduce(
    (matches, count) => (count === 0 ? matches + 1 : matches),
    0
  );

  if (matches === ALPHA_COUNT) return true;

  // 슬라이딩
  for (let idx = s1.length; idx < s2.length; idx++) {
    const lc = s2[idx - s1.length];
    const rc = s2[idx];
    const lIdx = charToIndex(lc);
    const rIdx = charToIndex(rc);

    // 왼쪽 문자 하나 빼기
    if (cnt[lIdx] === 0) matches--;
    else if (cnt[lIdx] === -1) matches++;
    cnt[lIdx] = cnt[lIdx] + 1;

    // 오른쪽 문자 하나 더하기
    if (cnt[rIdx] === 0) matches--;
    else if (cnt[rIdx] === 1) matches++;
    cnt[rIdx] = cnt[rIdx] - 1;

    if (matches === ALPHA_COUNT) return true;
  }
  return false;
}
