//https://leetcode.com/problems/filter-elements-from-array/
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
let filter = function(arr, fn) {
   const resultArray = [];
    arr.forEach((el, i) => {
    if(fn(el, i)){
    resultArray.push(el);
    }
   })
   return resultArray;
};

arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
console.log(filter(arr, fn));