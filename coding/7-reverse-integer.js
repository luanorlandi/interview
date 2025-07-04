/**
7. Reverse Integer
Medium

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1
*/

/**
 * @param {number} x
 * @return {number}
 * Time complexity: O(1)
 * Space complexity: O(1)
 */
var reverse = function(x) { 
    const numberString = x.toString().split('')
    let reversedNumberString = numberString.reverse()
    if (x < 0) {
        reversedNumberString.pop()
    }
    reversedNumberString = reversedNumberString.join('')
    const maxString = '2147483647';

    if (reversedNumberString.length > maxString.length) {
        return 0
    } else if (reversedNumberString.length === maxString.length) {
        for (let i = 0; i < reversedNumberString.length; i++) {
            if (reversedNumberString[i] > maxString[i]) {
                return 0
            } else if (reversedNumberString[i] < maxString[i]) {
                break;
            }
        }
    }

    if (x < 0) {
        return -parseInt(reversedNumberString)
    }

    return parseInt(reversedNumberString)
};