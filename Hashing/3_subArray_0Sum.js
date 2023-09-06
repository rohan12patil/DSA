/**
 * Given an array of integers A, find and return whether the given array contains a non-empty subarray with a sum equal to 0.
    If the given array contains a sub-array with sum zero return 1, else return 0.

Example Input
    Input 1: A = [1, 2, 3, 4, 5]
    Input 2: A = [4, -1, 1]

Example Output
    Output 1: 0
    Output 2: 1
 */
let Ar = [2, 2, 1 - 3, 4, 3, 1, -2, -3, 2];

let checkSubArray = function (A) {
    // calc Prefix sum
    let PF = [];
    let N = A.length;
    PF[0] = A[0];
    for (let i = 0; i < N; i++) {
        PF[i] = PF[i - 1] + A[i];
    }

    // construct HashSet
    let hs = new Set();
    for (let i = 0; i < N; i++) {
        hs.add(PF[i])
    }

    // check if subarray exists
    if (hs.size < N || hs.has(0)) {
        console.log("Given Array contains a subarray with sum 0");
        return 1;
    } else {
        return 0;
    }

}

console.log(checkSubArray(Ar));