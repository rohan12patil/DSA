let print = function(n){
    // base condition
    if(n==0) return;

    // main logic
    // console.log(n);
    // return print(n-1);
    print(n-1);
    console.log(n," ");
}

console.log(print(4));