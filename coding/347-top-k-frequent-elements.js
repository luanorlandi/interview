/**
347. Top K Frequent Elements
Medium

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

// create the most frequent element variable, and the count of that
//
// loop through nums
//   store in a hashMap the count
//      if is new number, then store with value 1
//      if is an existing number, then store with value++
//   compare with the most frequent element and update it if is bigger
//
//   return the most frequent element in an array

// Time complexity: O(n) where n is the length cards
// Space complexity: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * Time complexity: O(n) where n is the length of nums
 * Space complexity: O(n)
 */
var topKFrequent = function(nums, k) {
    const frequency = {}

    for (let i = 0; i < nums.length; i++) {
        if (frequency.hasOwnProperty(nums[i])) {
            frequency[nums[i]]++
        } else {
            frequency[nums[i]] = 1
        }
    }

    const buckets = new Array(nums.length + 1)
    for(let i = 0; i < buckets.length; i++) {
        buckets[i] = []
    }
    const entries = Object.entries(frequency)
    for (let i = 0; i < entries.length; i++) {
        const count = entries[i][1]
        const number = entries[i][0]
        buckets[count].push(parseInt(number))
    }

    const response = []
    for (let i = buckets.length - 1; i > 0; i--) {
        if (response.length >= k) {
            break;
        }

        if (buckets[i].length !== 0) {
            response.push(...buckets[i])
        }
    }

    return response
};
