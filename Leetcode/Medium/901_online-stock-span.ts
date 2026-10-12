/*
문제 : 901 - Online Stock Span
난이도 : Medium
링크 : https://leetcode.com/problems/online-stock-span/
태그 : Stack, Design, Monotonic Stack, Data Stream
*/

// ANCHOR 2026.10.12 풀이 (20분 소요)
class StockSpanner {
    private items: [price: number, span: number][];

    constructor() {
        this.items = [];
    }

    next(price: number): number {
        let span = 1;
        while (this.items.length > 0 && this.items.at(-1)![0] <= price) {
            span += this.items.pop()![1];
        }
        this.items.push([price, span]);
        return span;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
