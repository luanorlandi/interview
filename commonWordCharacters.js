// Implement a function that returns all words with characters in common

// Time complexity: O(n) where n and m are the length words
// Space complexity: O(1)
function commonWordCharacters(words) {
  const repeated = {};
  const commonWords = {};

  words.forEach((word) => {
    let putWord = false;
    for (let i = 0; i < word.length; i++) {
      if (repeated.hasOwnProperty(word[i])) {
        putWord = true;
        repeated[word[i]].forEach((repeatedWord) => {
          if (!commonWords.hasOwnProperty(repeatedWord)) {
            commonWords[repeatedWord] = true;
          }
        });
        repeated[word[i]] = [];
      } else {
        repeated[word[i]] = [word];
      }
    }

    if (putWord && !commonWords.hasOwnProperty(word)) {
      commonWords[word] = true;
    }
  });

  return Object.keys(commonWords);
}

console.log(commonWordCharacters(["abc", "def"]));
console.log(commonWordCharacters(["abc", "aef"]));
console.log(commonWordCharacters(["abc", "def", "aef"]));
console.log(commonWordCharacters(["abc", "xyz", "aef"]));
console.log(commonWordCharacters(["abc", "xyz", "xef"]));
