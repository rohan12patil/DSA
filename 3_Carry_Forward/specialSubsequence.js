/**
 * You have given a string A having Uppercase English letters.
 * You have to find how many times subsequence "AG" is there in the given string.
 * 
 * 
 * Input 1: A = "ABCGAG"
 * Input 2: A = "GAB"
 * 
 * Output 1: 3
 * Output 2: 0
*/
 
// Brute Force Solution
// TC:  O(N^2)

countSubsequenceBF = function(A) {
    let Ar= Array.from(A);
    let N = Ar.length;
    let cnt = 0;
    for(let i=0;i<N;i++){
        if(Ar[i]=='A'){
            for(let j=i+1;j<N;j++){
                if(Ar[j]=='G'){
                    cnt++;
                }
            }
        }
    }
    return cnt;
}

/**
 *  Optimised Solution
 *  1. For every 'A', we are counting 'G' on the right side
 * */

countSubsequence = function(A){
    let Ar= Array.from(A);
    let N = Ar.length;
    let cnt_g = 0;
    let ans = 0;

    for(let i= N-1; i>=0; i--){
        if(Ar[i]=='G'){
            cnt_g++;
        }
        else if(Ar[i]=='A'){
            ans = ans+cnt_g;
        }
    }
    return ans;
}



let A = "ABCGAG";
console.log(countSubsequence(A));