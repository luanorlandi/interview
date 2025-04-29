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

// create sorted with { height, index } 
// start waterTrapped with inverted value sum
//   if max height is x, the count each with height - x (as if there are walls in both border)
// do for both side:
// store a temp highest height
// iterate in sorted height array, find closest to the border to start
//   if next i is lower/bigger than the previous highest height, or out of bounds
//     subtract waterTrapped with the distance to border times the height difference
//     update the new highest height

/**
 * @param {number[]} heights
 * @return {number}
 */
var trap = function(heights) {
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

    let leftMostHighestHeight = sortedHeights[sortedHeights.length - 1]
    let rightMostHighestHeight = sortedHeights[sortedHeights.length - 1]
    for (let i = sortedHeights.length - 1; i >= 0; i--) {
        if (sortedHeights[i].height != leftMostHighestHeight.height) {
            break;
        }
        if (sortedHeights[i].index < leftMostHighestHeight.index) {
            leftMostHighestHeight = sortedHeights[i]
        }
        if (sortedHeights[i].index > rightMostHighestHeight.index) {
            rightMostHighestHeight = sortedHeights[i]
        }
    }

    // console.log('leftMostHighestHeight', leftMostHighestHeight)
    // console.log('rightMostHighestHeight', rightMostHighestHeight)

    for (let i = sortedHeights.index - 1; i >= 0; i--) {
        
    }

    return waterTrapped
};