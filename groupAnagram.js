/**
Leetcode 49. Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order. 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
 */

const getAnagramHashKey = (string) => {
  const characterCount = new Array(26).fill(0);
  for (let i = 0; i < string.length; i++) {
    characterCount[string.charCodeAt(i) - "a".charCodeAt(0)]++;
  }
  return characterCount.join("|");
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 * time: O(n * m), where n is the length of strs and m is the length of the longest string in strs
 * space: O(n * m), where n is the length of strs and m is the length of the longest string in strs
 */
var groupAnagrams = function (strs) {
  const anagramHash = {};

  for (let i = 0; i < strs.length; i++) {
    const hashKey = getAnagramHashKey(strs[i]);
    if (anagramHash[hashKey]) {
      anagramHash[hashKey].push(strs[i]);
    } else {
      anagramHash[hashKey] = [strs[i]];
    }
  }

  return Object.values(anagramHash);
};

const parseAnagram = (string) => {
  const characters = string.split("");
  characters.sort();
  return characters.join();
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 * time: O(n * m*log m), where n is the length of strs and m is the length of the longest string in strs
 * space: O(n * m), where n is the length of strs and m is the length of the longest string in strs
 */
var groupAnagrams2 = function (strs) {
  const anagramHash = {};

  for (let i = 0; i < strs.length; i++) {
    const parsedAnagram = parseAnagram(strs[i]);
    if (anagramHash[parsedAnagram]) {
      anagramHash[parsedAnagram].push(strs[i]);
    } else {
      anagramHash[parsedAnagram] = [strs[i]];
    }
  }

  return Object.values(anagramHash);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
