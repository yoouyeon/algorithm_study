/*
⭐️ 문제 정보 ⭐️
문제 : 1318 - Minimum Flips to Make a OR b Equal to c
레벨 : Medium
링크 : https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c
*/

// ANCHOR 2026.07.24 풀이 (15분 소요)
function minFlips(a: number, b: number, c: number): number {
    // 플립이 뭔가 했더니 1을 0으로, 0을 1로 바꾸는 것을 말하는거였다.
    // 어렵게 생각할 필요가 없었음 그냥 하나씩 비교해가면서 플립이 필요한지, 안필요한지를 확인하면 된다.
    let ans = 0;

    while (a > 0 || b > 0 || c > 0) {
        const aBit = a & 1;
        const bBit = b & 1;
        const cBit = c & 1;

        if (cBit === 0) {
            // cBit가 0이면 aBit, bBit 모두 0이어야 함
            // 둘 중 1인 개수만큼 플립 필요 (둘 다 1이면 2회)
            ans += (aBit + bBit);
        }
        else {
            // cBit가 1이면 둘 다 0일 때만 1회 플립 필요
            if (aBit === 0 && bBit === 0) ans++;
        }

        // 비트 시프트
        a = a >> 1;
        b = b >> 1;
        c = c >> 1;
    }

    return ans;
};
