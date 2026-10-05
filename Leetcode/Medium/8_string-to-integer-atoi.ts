/*
문제 : 8 - String to Integer (atoi)
난이도 : Medium
링크 : https://leetcode.com/problems/string-to-integer-atoi/
태그 : String
*/

// ANCHOR 2026.10.05 풀이 (11분 소요)
function myAtoi(s: string): number {
    const max = 2 ** 31 - 1;
    const min = -(2 ** 31);

    let i = 0;
    while (i < s.length && s[i] === ' ') i++;

    let sign = 1;
    if (s[i] === '+' || s[i] === '-') {
        if (s[i] === '-') sign = -1;
        i++;
    }

    let ret = 0;
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        ret = ret * 10 + (s.charCodeAt(i) - 48);
        // 범위를 넘는 순간 바로 clamp
        if (sign * ret > max) return max;
        if (sign * ret < min) return min;
        i++;
    }

    return sign * ret || 0; // -0 방지
};
