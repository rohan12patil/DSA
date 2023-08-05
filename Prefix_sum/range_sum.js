/** 
Problem Description
You are given an integer array A of length N.
You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
For each query, you have to find the sum of all elements from L to R indices in A (0 - indexed).
More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.


Input Format
The first argument is the integer array A.
The second argument is the 2D integer array B.

Output Format
Return an integer array of length M where ith element is the answer for ith query in B.

Example Input

Input 1:
A = [1, 2, 3, 4, 5]
B = [[0, 3], [1, 2]]

Input 2:

A = [2, 2, 2]
B = [[0, 0], [1, 2]]


Example Output
Output 1:
[10, 5]
Output 2:

[2, 4]
*/

let rangeSum =  function(A, B){
	let Ar = A;
	let Q = B;
	let PF = [];
    PF[0] = Ar[0];
	let getPrefixSum = function(Ar) {
 		
		for(let i=1;i<Ar.length;i++){
			PF[i]=PF[i-1] + Ar[i]
		}
	};
	getPrefixSum(Ar);
	let sum = []
	for(let i=0;i<Q.length;i++){
		let l = Q[i][0];
		let r = Q[i][1];	
		if(l==0) {
			sum.push(PF[r]);
		}else{
			sum.push(PF[r] - PF[l-1]);
		}
	}
	return sum;
	}


let A = [1, 2, 3, 4, 5];
let B = [[0, 3], [1, 2]];

const result = rangeSum(A,B);
console.log(result);

