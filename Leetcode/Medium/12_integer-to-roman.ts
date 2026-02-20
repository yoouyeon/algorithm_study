/**
 * ⭐️ 문제 정보 ⭐️
 * 문제 : 12 - Integer to Roman
 * 레벨 : Medium
 * 링크 : https://leetcode.com/problems/integer-to-roman/
 */

// greedy
function intToRoman1(num: number): string {
  const symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let answer: string[] = [];

  for (let idx = 0; idx < values.length; idx++) {
    const value = values[idx];
    const cnt = Math.floor(num / value);
    if (cnt <= 0) continue;
    const symbol = symbols[idx];
    answer.push(symbol.repeat(cnt));
    num %= value;
  }

  return answer.join("");
}

// map과 iterator를 이용해서 비교적 덜 명료했던 첫번째 코드
function intToRoman2(num: number): string {
  const symbolTable = new Map([
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ]);

  const valueIter = symbolTable.keys();
  let answer: string[] = [];
  let currValue = valueIter.next().value;

  while (num > 0) {
    while (currValue > num) {
      currValue = valueIter.next().value;
    }
    const currSymbol = symbolTable.get(currValue)!;
    answer.push(currSymbol);
    num -= currValue;
  }

  return answer.join("");
}
