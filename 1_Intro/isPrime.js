
/**
 * 
 * 
 * Given a number A. Return 1 if A is prime and return 0 if not. 
 * Note : The value of A can cross the range of Integer.
 * 
 * Problem Constraints: 1 <= A <= 109
 * 
 * Input Format: The first argument is a single integer A.
 * Output Format: Return 1 if A is prime else return 0.
 * 
 * Example Input
 *  Input 1:A = 5
 *  Input 2: A = 10
 * 
 * Example Output
 *  Output 1:1
 *  Output 2:0
 
 */
let isPrime = function(A){
    let cnt = 0;
    let N = Math.sqrt(A);
    for(let i=0;i<=N;i++){
        if(A%i==0){
            if(i==(A/i)){cnt = cnt+1}
            else{ cnt = cnt+2}
        }
    }
    if(cnt == 2){
        return 1
    }else{
        return 0
    }	
}

const result = isPrime(3);

console.log(result)