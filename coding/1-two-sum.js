/**
1. Two Sum
Solved

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 
Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * time: O(n*logn) | space: O(n)
 */
var twoSum = function(nums, target) {
    numsMap = nums.map((number, index) => {
        return { number , index }
    }) 
    numsMap.sort((a, b) => a.number - b.number)

    let i = 0
    let j = numsMap.length - 1
    while (numsMap[i].number + numsMap[j].number !== target) {
        if (numsMap[i].number + numsMap[j].number < target) {
            i++
        } else {
            j--
        }
    }

    return [numsMap[i].index, numsMap[j].index]
};