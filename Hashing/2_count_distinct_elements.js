/**
 *
Problem Description
Given an array A of N integers, return the number of unique elements in the array.

Problem Constraints
1 <= N <= 105
1 <= A[i] <= 109

Input Format
    First argument A is an array of integers.

Output Format
    Return an integer.

Example Input
    Input 1: A = [3, 4, 3, 6, 6]
    Input 2: A = [3, 3, 3, 9, 0, 1, 0]

Example Output
    Output 1: 3
    Output 2: 4

Example Explanation
For Input 1: The distinct elements of the array are 3, 4 and 6.
For Input 2: The distinct elements of the array are 3, 9, 0 and 1.
 */


let Ar = [3, 3, 3, 9, 0, 1, 0]
let N = Ar.length;
let hM = new Map();
/*
for(let i=0;i<N;i++){
    if(hM.has(Ar[i])) {
        cnt = hM.get(Ar[i]);
        hM.set(Ar[i], cnt+1);
    }else{
        hM.set(Ar[i], 1);
    }
}
console.log("HM:: ",hM);
console.log("Distinct elements in Array are :: ",hM.size);
*/

// Todo: try using Hashset 
let hS = new Set();
for(let i=0;i<N;i++){
    hS.add(Ar[i]);
}
console.log('HashSet:: ',hS);
console.log("Distinct elements in Array are :: ",hS.size);
