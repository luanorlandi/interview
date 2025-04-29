/**
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 
Constraints:

n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105
*/

/**
 * @param {number[]} heights
 * @return {number}
 * time: O(n) | space: O(n)
 */
var trap = function (heights) {
    let waterTrapped = 0


    let i = 0
    let j = heights.length - 1
    let leftMaxHeight = heights[i]
    let rightMaxHeight = heights[j]

    while (i < j) {
        if (heights[i] < heights[j]) {
            i++
            if (heights[i] < leftMaxHeight) {
                waterTrapped += leftMaxHeight - heights[i]
            } else {
                leftMaxHeight = heights[i]
            }
        } else {
            j--
            if (heights[j] < rightMaxHeight) {
                waterTrapped += rightMaxHeight - heights[j]
            } else {
                rightMaxHeight = heights[j]
            }
        }
    }

    return waterTrapped
};

/**
 * @param {number[]} heights
 * @return {number}
 * time: O(n*log n) | space: O(n)
 */
var trap2 = function (heights) {
    const sortedHeights = heights.map((height, index) => {
        return { height, index }
    })

    sortedHeights.sort((a, b) => {
        return a.height - b.height
    })

    let waterTrapped = 0;
    for (let i = 0; i < heights.length; i++) {
        waterTrapped += sortedHeights[sortedHeights.length - 1].height - heights[i]
    }


    let nextLowerHeight = sortedHeights[sortedHeights.length - 1]
    for (let i = sortedHeights.length - 1; i >= 0; i--) {
        if (sortedHeights[i].index >= nextLowerHeight.index) {
            continue
        }

        if (sortedHeights[i].height === nextLowerHeight.height) {
            nextLowerHeight = sortedHeights[i]
        }

        if (sortedHeights[i].height < nextLowerHeight.height) {
            waterTrapped -= (nextLowerHeight.height - sortedHeights[i].height) * nextLowerHeight.index
            nextLowerHeight = sortedHeights[i]
        }
    }
    
    nextLowerHeight = sortedHeights[sortedHeights.length - 1]
    for (let i = sortedHeights.length - 1; i >= 0; i--) {
        if (sortedHeights[i].index <= nextLowerHeight.index) {
            continue
        }

        if (sortedHeights[i].height === nextLowerHeight.height) {
            nextLowerHeight = sortedHeights[i]
        }

        if (sortedHeights[i].height < nextLowerHeight.height) {
            waterTrapped -= (nextLowerHeight.height - sortedHeights[i].height) * (heights.length - nextLowerHeight.index - 1)
            nextLowerHeight = sortedHeights[i]
        }
    }

    return waterTrapped
};