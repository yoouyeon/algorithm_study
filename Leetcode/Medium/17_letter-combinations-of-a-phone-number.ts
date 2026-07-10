/*
⭐️ 문제 정보 ⭐️
문제 : 17 - Letter Combinations of a Phone Number
레벨 : Medium
링크 : https://leetcode.com/problems/letter-combinations-of-a-phone-number
*/

// ANCHOR 2026.07.10 풀이 (25분 소요)
function letterCombinations(digits: string): string[] {
    let answer = [];
    const letters = [
        [],
        [],
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z']
    ]

    if (!digits) return []; // FEEDBACK : 실제 문제 조건에서는 들어오지 않을 값이긴 하지만, 코드의 완성도를 높이기

    function backtrack(curr: string, idx: number) {
        if (idx === digits.length) {
            answer.push(curr);
            return;
        }

        const letter = letters[digits[idx]];
        for (const l of letter) backtrack(curr + l, idx + 1);
    }

    backtrack('', 0)

    return answer;
};
