/*
 * [6] Zigzag Conversion
 */

function convert(s: string, numRows: number): string {
  if (numRows === 1 || s.length <= numRows) return s;

  const answer: string[][] = Array.from({ length: numRows }, () => []);
  let ptr = 0;
  let dir: "inc" | "dec" = "inc";

  for (let idx = 0; idx < s.length; idx++) {
    answer[ptr].push(s[idx]);
    if (ptr === 0) dir = "inc";
    else if (ptr === numRows - 1) dir = "dec";

    if (dir === "inc") ptr++;
    else ptr--;
  }

  return answer.map((row) => row.join("")).join("");
}
