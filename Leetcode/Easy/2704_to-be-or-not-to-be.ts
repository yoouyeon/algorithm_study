/*
문제 : 2704 - To Be Or Not To Be
난이도 : Easy
링크 : https://leetcode.com/problems/to-be-or-not-to-be/
*/

// ANCHOR 2026.10.17 풀이 (4분 소요)
type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    return {
        toBe(other) {
            if (val !== other) throw new Error("Not Equal");
            return true;
        },
        notToBe(other) {
            if (val === other) throw new Error("Equal");
            return true;
        },
    };
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
