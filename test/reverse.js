let sum = 13;


let rev = 0;    
while (sum != 0) {    
    let digit = sum % 10;    
    
    sum = Math.floor(sum / 10);  
    
    rev = rev * 10 + digit;    
} 

console.log(rev);

