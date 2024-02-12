/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    //if nums are empty return init
    //if init is 0 return sum of nums
    //else return {return accum + curr * curr}
    // if nums are empty return init
    if (nums.length === 0) {
        return init;
    }
    
    // if init is 0 return sum of nums
    if (init === 0) {
        return nums.reduce(fn, init);
    } else {
        // else return {return accum + curr * curr}
        return nums.reduce(fn, init);
    }
};