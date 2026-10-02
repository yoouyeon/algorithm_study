/*
문제 : 7 - Reverse Integer
난이도 : Medium
링크 : https://leetcode.com/problems/reverse-integer/
태그 : Math
*/

// ANCHOR 2026.10.02 풀이 (7분 소요)
function reverse(x: number): number {
    const sign = x >= 0 ? '+' : '-';

    const reversed = Math.abs(x).toString().split('').reverse().join('');

    const ret = sign === '-' ? Number(reversed) * -1 : Number(reversed);

    if (ret < 2 ** 31 * -1 || ret > 2 ** 31 - 1) return 0;

    return ret;
};

// Math.sign으로 부호 처리를 줄인 버전
// function reverse(x: number): number {
//     const ret = Math.sign(x) * Number(String(Math.abs(x)).split('').reverse().join(''));
//     return ret < -(2 ** 31) || ret > 2 ** 31 - 1 ? 0 : ret;
// }
