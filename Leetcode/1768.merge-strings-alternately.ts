function mergeAlternately(word1: string, word2: string): string {
  let result = "";
  const maxLength = Math.max(word1.length, word2.length);

  for (let idx = 0; idx < maxLength; idx++) {
    if (idx < word1.length) result += word1[idx];
    if (idx < word2.length) result += word2[idx];
  }

  return result;
}
