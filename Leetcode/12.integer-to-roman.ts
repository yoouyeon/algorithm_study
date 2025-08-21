/*
 * [12] Integer to Roman
 */

function intToRoman(num: number): string {
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
