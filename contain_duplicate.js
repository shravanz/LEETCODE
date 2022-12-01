/*Given an integer array nums, 
return true if any value appears at least twice in the array, and return false if every element is distinct.

Input: nums = [1,2,3,1]
Output: true

Input: nums = [1,2,3,4]
Output: false
*/

function containDuplicate(num){
    // create a new Set with num which will contain only unique value 
    const numSet = new Set(num);
    // we will just compare the size of Set and length the arrays_of_nums passed 
    const isEqual = numSet.size === num.length;
    //console.log(isEqual); // false 
    return !isEqual;
}

console.log(containDuplicate([1,2,3,4])); // false
console.log(containDuplicate([1,2,3,1])); // true
