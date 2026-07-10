/*
⭐️ 문제 정보 ⭐️
문제 : 216 - Combination Sum III
레벨 : Medium
링크 : https://leetcode.com/problems/combination-sum-iii
*/

// ANCHOR 2026.07.10 풀이 (6분 소요)
function combinationSum3(k: number, n: number): number[][] {
    const result: number[][] = [];
    const path: number[] = [];

    function backtrack(start: number, remain: number) {
        if (path.length === k) {
            if (remain === 0) result.push([...path]);
            return;
        }

        for (let idx = start; idx <= 9; idx++) {
            path.push(idx);
            backtrack(idx + 1, remain - idx);
            path.pop();
        }
    }

    backtrack(1, n);
    return result;
};
