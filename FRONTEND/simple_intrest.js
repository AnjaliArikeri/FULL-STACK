function simpleIntrest(p,t,r){
    return (p*t*r)/100;
}
console.log("Simple Intrest :",simpleIntrest(500000,12,2))


//COMPOUND INTREST
function compoundIntrest(p,n,r,t){
    return (p*(1+r/n)^(n*t));
}
console.log("Compound Inrest:",compoundIntrest(20000,2,2,2))



//If conditions
age=20;
if(age>=18){
    console.log("Person is eligible to vote")
}
else{
    console.log("Person is not eligible to vote")
}