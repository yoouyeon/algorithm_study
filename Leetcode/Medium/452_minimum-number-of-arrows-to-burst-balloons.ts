/*
문제 : 452 - Minimum Number of Arrows to Burst Balloons
난이도 : Medium
링크 : https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/
태그 : Array, Greedy, Sorting
*/

// ANCHOR 2026.10.11 풀이 (25분 소요)
function findMinArrowShots(points: number[][]): number {
    // 끝점 기준으로 정렬하면 화살을 묶음의 첫 끝점에 고정해도 된다
    points.sort((a, b) => a[1] - b[1]);

    let arrows = 0;
    let arrowPos = -Infinity;

    for (const [start, end] of points) {
        if (arrowPos < start) {
            arrows++;
            arrowPos = end;
        }
    }

    return arrows;
};
