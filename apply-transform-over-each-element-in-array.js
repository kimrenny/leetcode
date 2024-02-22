// https://leetcode.com/problems/apply-transform-over-each-element-in-array/
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
let map = function(arr, fn){
    const newArray = [];
    let newEl = null;
    arr.forEach((el, i) => {
        newEl = fn(arr[i]);
        newArray.push(el);
    })
    newArray.forEach((el, index) => {
        let i = index;
        newArray[i] = fn(el, i);
    })
    return newArray;
}