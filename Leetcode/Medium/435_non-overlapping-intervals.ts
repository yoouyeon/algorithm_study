/*
문제 : 435 - Non-overlapping Intervals
난이도 : Medium
링크 : https://leetcode.com/problems/non-overlapping-intervals/
태그 : Array, Dynamic Programming, Greedy, Sorting
*/

// ANCHOR 2026.10.11 풀이 (14분 소요)
function eraseOverlapIntervals(intervals: number[][]): number {
    // 구간 스케줄링(Interval Scheduling, 활동 선택 문제) - 대표적인 그리디 문제
    // 끝 값을 기준으로 정렬
    intervals.sort((a, b) => a[1] - b[1]);

    // 현재 끝 위치와 겹치는 것들을 제거함
    let ret = 0;
    let currEnd = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        // 현재 끝 위치보다 시작 위치가 작으면 제거
        if (currEnd > start) ret++;
        else currEnd = end;
    }

    return ret;
};
