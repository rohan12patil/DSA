/**
 * 
 * Problem Description
   Given an array of integers A, every element appears twice except for one. Find that integer that occurs once.

    A = [1, 2, 2, 3, 1]
    Output: 3 
 */

let singleNumber = function(A){
    let ans = 0n; // Initialize ans as a BigInt else you get TypeError
    for (let i = 0; i < A.length; i++) {
        ans = BigInt(A[i]) ^ ans; // Convert A[i] to BigInt before XOR
    }
    return Number(ans); 
}

let Ar = [1,2,2,3,1]
console.log(singleNumber(Ar));