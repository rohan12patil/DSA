// Write a program to find the factorial of the given number using recursion.

function factorial(N) {
    // Base Condition
    if(N==1){return 1}
    // Main Logic
    return N * factorial(N-1);
}

console.log(factorial(5));