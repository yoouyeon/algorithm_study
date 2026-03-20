/*
 * ⭐️ 문제 정보 ⭐️
 * 문제 : 205 - Isomorphic Strings
 * 레벨 : Easy
 * 링크 : https://leetcode.com/problems/isomorphic-strings
 */

// ANCHOR 2026.03.20 풀이
function isIsomorphic(s: string, t: string): boolean {
  // 문제 이해하기...
  // s에 있는 문자를 순서를 유지한 채로 t에 있는 문자로 바꿨을 때 s === t가 된다면 isomorphic한 문자열이다.
  // s와 t가 isomorphic한지 구하기. (s, t 길이가 같은 입력만 주어진다.)

  // 문제 아이디어...
  // 1. 일일이 찾아 변경해서 구하기
  // map, set을 둘 다 써야한다는 것이 마음에 들지는 않는다. (하지만 최적의 방법이라고 한다 ㄴㅇㄱ)
  // const map = new Map(); // s -> t 문자 매핑용
  // const set = new Set(); // t에서 사용했던 문자 저장용
  // const sArray = Array.from(s);
  // for (let idx = 0; idx < s.length; idx++) {
  //   const c = s[idx];
  //   if (map.has(c)) sArray[idx] = map.get(c);
  //   else {
  //     if (set.has(t[idx])) return false;
  //     sArray[idx] = t[idx];
  //     map.set(c, t[idx]);
  //     set.add(t[idx]);
  //   }
  // }
  // return t === sArray.join('');

  // 2. 1과 같은 방법이지만 map을 두개 사용하는 방법도 있다.
  const mapST = new Map(); // s -> t 문자 매핑용
  const mapTS = new Map(); // t -> s 문자 매핑용

  for (let idx = 0; idx < s.length; idx++) {
    const cS = s[idx];
    const cT = t[idx];
    if (mapST.has(cS) && mapST.get(cS) !== cT) return false; // s에서 cS가 이미 매핑되어 있는데, 그 매핑이 cT가 아니라면 false
    if (mapTS.has(cT) && mapTS.get(cT) !== cS) return false; // t에서 cT가 이미 매핑되어 있는데, 그 매핑이 cS가 아니라면 false
    mapST.set(cS, cT);
    mapTS.set(cT, cS);
  }

  return true; // 모든 문자에 대해서 매핑이 질 이루어졌다면 true
}
