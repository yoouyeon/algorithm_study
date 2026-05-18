/*
⭐️ 문제 정보 ⭐️
문제 : 136 - Single Number
레벨 : Easy
링크 : https://leetcode.com/problems/single-number
*/

// ANCHOR 2026.05.18 풀이 (1시간 25분 소요)

function singleNumber(nums: number[]): number {
    const map = new Map();

    for (const num of nums) {
        map.set(num, (map.get(num) ?? 0) + 1);
    }

    for (const [num, count] of map) {
        if (count === 1) return num;
    }

    return -1;
};
