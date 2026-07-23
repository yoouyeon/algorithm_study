/*
⭐️ 문제 정보 ⭐️
문제 : 72 - Edit Distance
레벨 : Medium
링크 : https://leetcode.com/problems/edit-distance
*/

// ANCHOR 2026.07.23 풀이 (32분 소요)
function minDistance(word1: string, word2: string): number {
    // word1을 word2로 바꿀 수 있는 가장 최소한의 조작

    // dp[idx1][idx2] :  word1의 앞 idx1개 문자로 word2의 앞 idx2개 문자를 만드는 최소 조작 수
    const dp = Array.from({length: word1.length + 1}, () => new Array(word2.length + 1).fill(0));

    // base
    for (let idx1 = 1; idx1 <= word1.length; idx1++) dp[idx1][0] = idx1;
    for (let idx2 = 1; idx2 <= word2.length; idx2++) dp[0][idx2] = idx2;

    // dp
    for (let idx1 = 1; idx1 <= word1.length; idx1++) {
        for (let idx2 = 1; idx2 <= word2.length; idx2++) {
            if (word1[idx1 - 1] === word2[idx2 - 1]) dp[idx1][idx2] = dp[idx1-1][idx2-1];
            else {
                // 뭔가 조작이 필요한 상황! 아래 세가지 중 최솟값에 조작 하나를 더 해준다.
                // 1. insert : word1에 word2[idx2-1]을 삽입 -> dp[idx1][idx2-1]
                // 2. delete : word1의 word1[idx1-1]을 삭제 -> dp[idx1-1][idx2]
                // 3. replace : word1[idx1-1]을 word2[idx2-1]로 교체 -> dp[idx-1][idx2-1]
                dp[idx1][idx2] = 1 + Math.min(dp[idx1][idx2-1], dp[idx1-1][idx2], dp[idx1-1][idx2-1]);
            }
        }
    }

    return dp[word1.length][word2.length];
};
