let A = 'madam';

let isPalindrome=function(str,s,e){
    // base condition
    if(s >= e) {
        return true;
    }
    // main logic
     if(str[s]==str[e] && isPalindrome(str,s+1,e-1)){
         return true;
     }   
     else{
         return false;
     }
}

if(isPalindrome(A,0,A.length-1)) {
    console.log(1);
    }
else{
    console.log(0);
}