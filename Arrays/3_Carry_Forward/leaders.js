/**
 * Problem Description
Given an integer array A containing N distinct integers, you have to find all the leaders in array A.
 An element is a leader if it is strictly greater than all the elements to its right side.

NOTE: The rightmost element is always a leader.

Problem Constraints
1 <= N <= 105
1 <= A[i] <= 108

Input Format
There is a single input argument which a integer array A

Output Format
Return an integer array denoting all the leader elements of the array.

Example: Input 1:  A = [16, 17, 4, 3, 5, 2]
         Input 2: A = [5, 4]

        Output 1:[17, 2, 5]
        Output 2:[5, 4]
 */

let findLeaders = function(Ar){
    let N = Ar.length;
    let lastMax = Ar[N-1];
    let leadersAr = [lastMax]; // last element in Array is the leader as there are no elements to the right of it

    for(let i=N-2; i>=0;i--){
        if(Ar[i]>lastMax){
            lastMax = Ar[i];
            leadersAr.push(lastMax);
        }
    }
    return leadersAr;
}

let A = [16, 17, 4, 3, 5, 2]
let result = findLeaders(A)
console.log(result)