/**
128. Longest Consecutive Sequence
Medium

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
Example 3:

Input: nums = [1,0,1,2]
Output: 3

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

/**
 * @param {number[]} nums
 * @return {number}
 * time: O(n*logn) | space: O(n) where n is the length of nums
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    nums.sort((a, b) => a - b)

    uniqueNums = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        if (uniqueNums[uniqueNums.length - 1] !== nums[i]) {
            uniqueNums.push(nums[i])
        }
    }

    let longestSequence = 1
    let currentSequence = 1
    for (let i = 1; i < uniqueNums.length; i++) {
        if (uniqueNums[i] - 1 === uniqueNums[i - 1]) {
            currentSequence++;
        } else {
            currentSequence = 1
        }

        longestSequence = Math.max(longestSequence, currentSequence)
    }

    return longestSequence
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive2 = function (nums) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = true
    }

    let longestSequence = 0
    let currentSequence = 1
    for (let i = 0; i < nums.length; i++) {
        if (map.hasOwnProperty(nums[i] - 1)) {
            currentSequence = 1
            continue
        }

        let next = nums[i] + 1
        while (map[next]) {
            next++
            currentSequence++
        }
        longestSequence = Math.max(longestSequence, currentSequence)
        currentSequence = 1;
    }

    return longestSequence
};