/**
 * 
 * calculate & return a^N % P
 */
pow= function(A, B, C){
    if (A < 0) {
        A = ((A % C) + C) % C; 
    }
    if(A==0){return 0}
    if(B==0){return 1}
    let pw = (this.pow(A,B/2,C));
    if (B%2 == 1){
        pw= (pw*A)%C;
    }
    pw = (pw+C)%C;
    return pw%C;
   
}


console.log(pow(-1,2,20));  

// TODO: ans should be 1 but getting 19
