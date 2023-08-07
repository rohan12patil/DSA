/**
 * 
 * Problem Description
You are given an array A of integers of size N.

Your task is to find the equilibrium index of the given array

The equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.

If there are no elements that are at lower indexes or at higher indexes, then the corresponding sum of elements is considered as 0.

Note:

Array indexing starts from 0.
If there is no equilibrium index then return -1.
If there are more than one equilibrium indexes then return the minimum index.


Problem Constraints
1 <= N <= 105
-105 <= A[i] <= 105


Input Format
First arugment is an array A .


Output Format
Return the equilibrium index of the given array. If no such index is found then return -1.


Example Input
Input 1:
A = [-7, 1, 5, 2, -4, 3, 0]
Input 2:

A = [1, 2, 3]


Example Output
Output 1:
3
Output 2:

-1
 */
    let EquilibriumIndex = function (A){
           let N = A.length;
           let PF = [];
           PF[0] = A[0];
           let getPrefixSum = function(Ar) {
                for(let i=1;i<N;i++){
                    PF[i]=PF[i-1] + A[i]
                }
            };
           getPrefixSum(A);
           console.log("PF Ar::",PF);
           let LS=0,RS=0,
           equiIndex=-1;
           for(i=0;i<N;i++) {
               // Left Sum
               if(i==0){LS=0;}
               else{
                   LS = PF[i-1];
               }
               // Right Sum
               if(i == N-1) {RS=0;}
               else{
                   RS = PF[N-1] - PF[i];
               }
               console.log("FOR i::",i, "  LS::",LS,"  RS::",RS,"  Ar[i]::",A[i]);
               // equilibrium index
               if(LS==RS){
                equiIndex = i;
                break;
                  console.log("EQUI-INDEx:: ",equiIndex);  
               }
           }
           
        return equiIndex;
           
        }

 A0 = [1,2,3];
 A = [-7, 1, 5, 2, -4, 3, 0]
 const result = EquilibriumIndex(A);
 console.log("RES::",result);       