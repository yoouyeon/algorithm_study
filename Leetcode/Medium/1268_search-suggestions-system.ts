/*
문제 : 1268 - Search Suggestions System
난이도 : Medium
링크 : https://leetcode.com/problems/search-suggestions-system/
태그 : Array, String, Binary Search, Trie, Sorting, Heap (Priority Queue)
*/

// ANCHOR 2026.10.04 풀이 (27분 소요)
function suggestedProducts(products: string[], searchWord: string): string[][] {
    // 이진 탐색을 위한 정렬
    products.sort();
    const result: string[][] = [];
    // prefix가 길어질수록 lower bound는 뒤로만 이동하므로 이전 위치부터 탐색
    let start = 0;
    let prefix = "";
    for (let i = 0; i < searchWord.length; i++) {
        prefix += searchWord[i];
        // prefix 이상인 첫 번째 위치 (lower bound)
        let left = start;
        let right = products.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (products[mid] < prefix) left = mid + 1;
            else right = mid;
        }
        start = left;
        // lower bound부터 prefix로 시작하는 상품을 최대 3개 수집
        const suggestions: string[] = [];
        for (let j = start; j < Math.min(start + 3, products.length); j++) {
            if (!products[j].startsWith(prefix)) break;
            suggestions.push(products[j]);
        }
        result.push(suggestions);
    }
    return result;
};

// 대안: 투 포인터
// 정렬 후 left = 0, right = n - 1에서 시작해 i번째 글자마다
// products[left][i] !== searchWord[i]이면 left++, products[right][i] !== searchWord[i]이면 right--로 범위를 좁힌다.
// 남은 [left, right] 범위에서 앞의 최대 3개가 추천 상품이다.
// 포인터가 한 방향으로만 움직이므로 정렬 이후 탐색은 O(n + m)이다.
