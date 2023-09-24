/**
 * Problem Description
You are given an array A of N elements.
 Sort the given array in increasing order of number of distinct factors of each element,
  i.e., element having the least number of factors should be the first to be displayed and 
  the number having highest number of factors should be the last one.
  If 2 elements have same number of factors, then number with less value should come first.

Note: You cannot use any extra space

Problem Constraints
1 <= N <= 104
1 <= A[i] <= 104

Input Format First argument A is an array of integers.

Output Format Return an array of integers.

Example Input
Input 1: A = [6, 8, 9]
Input 2: A = [2, 4, 7]

Example Output
Output 1: [9, 6, 8]
Output 2: [2, 7, 4]

Example Explanation
For Input 1: The number 9 has 3 factors, 6 has 4 factors and 8 has 4 factors.
For Input 2: The number 2 has 2 factors, 7 has 2 factors and 4 has 3 factors.
 */
getFactors = function(B){
    let A = BigInt(B);
    let cnt = 0;
    let N = Math.sqrt(A);
    for(let i=0;i<=N;i++){
        if(A%i==0){
            if(i==(A/i)){cnt = cnt+1}
            else{ cnt = cnt+2}
        }
    }
    return cnt;   
 }

 let A = [6, 8, 9];

 comp = function(a,b) {
    let f1 = getFactors(a);
    let f2 = getFactors(b);
    console.log('# Factors of :: ',a,' are',f1);
    console.log('# Factors of :: ',b,'are',f2);
    if(f1<f2) return -1;
    if(f2<f1) return 1;
    if(f1==f2){
        if(a<b){return a}
        else{return b}
    }
 }

 console.log(A.sort(comp));