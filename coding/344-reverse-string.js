/**
344. Reverse String
Easy

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * time: O(n) | space: O(1) where n is the length of s
 */
var reverseString = function(s) {
    let i = 0;
    let j = s.length - 1
    while (i < j) {
        const temp = s[i]
        s[i] = s[j]
        s[j] = temp
        i++
        j--
    }
};