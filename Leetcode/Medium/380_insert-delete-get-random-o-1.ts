/*
⭐️ 문제 정보 ⭐️
문제 : 380 - Insert Delete GetRandom O(1)
레벨 : Medium
링크 : https://leetcode.com/problems/insert-delete-getrandom-o1/
*/

class RandomizedSet {
  private array: number[];
  private indexMap: Map<number, number>;

  constructor() {
    this.array = [];
    this.indexMap = new Map();
  }

  insert(val: number): boolean {
    const isPresent = this.indexMap.has(val);
    if (isPresent) return false;

    this.array.push(val);
    this.indexMap.set(val, this.array.length - 1);
    return true;
  }

  remove(val: number): boolean {
    const isPresent = this.indexMap.has(val);
    if (!isPresent) return false;

    // 마지막 원소와 바꾸기
    const last = this.array[this.array.length - 1];
    const idx = this.indexMap.get(val)!;
    this.array[idx] = last;
    this.indexMap.set(last, idx);
    // 제거
    this.indexMap.delete(val);
    this.array.pop();
    return true;
  }

  getRandom(): number {
    const randomIdx = Math.floor(Math.random() * this.array.length);
    return this.array[randomIdx];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
