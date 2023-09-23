/** 
 * Problem Description
Given an integer array A, find if an integer p exists in the array such that the number of integers greater than p in the array equals p.

Problem Constraints
1 <= |A| <= 2*105
-108 <= A[i] <= 108

Input Format
First and only argument is an integer array A.

Output Format
Return 1 if any such integer p is present else, return -1.

Example Input
Input 1: A = [3, 2, 1, 3]
Input 2: A = [1, 1, 3, 3]

Example Output
Output 1: 1
Output 2: -1

Example Explanation
Explanation 1:

 For integer 2, there are 2 greater elements in the array..
Explanation 2:

 There exist no integer satisfying the required conditions.
*/

// let A = [100,-10,1,1,3];
let A = [6,7,5]
//let A = [5,6,2]
// Desc order sort
function comp(a, b) {
    return b-a;
  }

let nobleElements= function(A){
    // step1 : sort array
    let Ar = A.sort(comp);
    console.log('sorted Ar:',Ar);
    let N = Ar.length;

    let ans=0; let cnt=0;
    // edge case if first element is 0 
    if(Ar[0]==0){ ans++}

    // step2: calc
    for(let i=1;i<N;i++){
        if(Ar[i] !== Ar[i-1]){
            cnt = i;
        }
        if(cnt === Ar[i]){
            ans++;
        }
    }
    console.log(ans);
    if(ans==0)
		{
			return -1
		}
		else{
			return 1
			};
}
    


nobleElements(A);