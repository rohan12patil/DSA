/**
 * 
 * Problem Description::  Given an array & Q queries, for every query find the frequency of element.

Given an array A. You have some integers given in the array B.
For the i-th number, find the frequency of B[i] in the array A and return a list containing all the frequencies.

Problem Constraints::
1 <= |A| <= 105
1 <= |B| <= 105
1 <= A[i] <= 105
1 <= B[i] <= 105


Input Format:: 
First argument A is an array of integers.
Second argument B is an array of integers denoting the queries.


Output Format
Return an array of integers containing frequency of the each element in B.


Example Input
Input 1:
A = [1, 2, 1, 1]
B = [1, 2]
Input 2:
A = [2, 5, 9, 2, 8]
B = [3, 2]

Example Output
Output 1:
[3, 1]
Output 2:
[0, 2]
 */

// let Ar = [2,6,3,8,2,8,2,3,8,10];
// let Q = [2,8,3,5];

let Ar = [1, 2, 1, 1]
let Q = [1, 2]

// Step1: Create a hashmap from Array of integers
let hM = new Map();
const N = Ar.length;

for(let i=0;i<N;i++){
    // If exists
    if(hM.has(Ar[i])){
        // get old count
        let cnt = hM.get(Ar[i]);
        // increment cnt by 1
        hM.set(Ar[i],cnt+1)

    }
    // Insert for first time if not exists : hM(Ar[i], cnt=1)
    else{
        hM.set(Ar[i], 1);
    }
}
console.log('Step1: HashMap constructed::', hM);

// Step2: Iterate over the Query Array & find frequency 

let fr = [];
let q = Q.length;

for(let i=0;i<q;i++){
    let ele = Q[i];
    if(hM.has(ele)){
        console.log(ele, 'has freq of ',hM.get(ele) );
        fr.push(hM.get(ele))
    }else{
        fr.push(0);
    }
}

console.log('STEP2  FREQUENCY AR::',fr);






