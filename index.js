//single line comments
/* Multiline comments  */
//Operator
let a = 5;
let b = 2;
//arethmetic operator
console.log(" a & b: ", a , b );
console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a + b = ", a*b);
console.log("a + b = ", a/b);
console.log("a + b = ", a**b);
console.log("a + b = ", a%b);
//Uninary operator
console.log("post increment a = ", a++);
console.log("post increment next line = ", a);
console.log("pre increment b =", ++b);
a = 5;
b = 2;
console.log(" a & b: ", a , b );
console.log("post decrement  a = ", a--);
console.log("post decrement  next line = ", a);
console.log("pre decrement b =", --b);
//assignment operator
a = 5;
b = 2;
console.log(" a & b: ", a , b );
console.log(" a += 5 ", a += 5 );
console.log(" a -= 5 ", a -= 5 );
console.log(" a **= 5 ", a **= 5 );
console.log(" a %= 5 ", a %= 5 );
a = 5 ;
console.log(" a /= 5 ", a /= 5 );
//Comparison
a = 5;
b = '5';
/*

*/
console.log(a == b); // == value
console.log(a === b); // === value + type
console.log(a <= b); // <= greater or equal
console.log(a >= b); // >= lesser or equal 
console.log(a !== b); // === value + type
 a = 5;
 b = 6;
 let cond1 = a> b;
 let cond2 = a<b;
 console.log(cond1 && cond2); //false
 console.log(cond1 || cond2); //true
 console.log(!(cond1 && cond2)); //true

 //If statement
 a = 8;
 if ((a%2) === 0){
 console.log("even");
 }else{
    console.log("odd");
 }
 let age = 25;
 if(age >= 18){
    console.log("vote");
 }else if(age <= 18){
    console.log("cannot vote");
 }else{
    console.log("what");
 }
 //ternnary operator
 age = 19 ;
 age > 18 ? console.log("vote") : console.log(" no vote");
//
let reply = prompt("is it even or odd");
if ((reply%2) === 0){
    alert('it is even ');
    console.log("even");
    }else{
        alert(" it is odd")
       console.log("odd");
    }

console.log(reply);
let score = prompt("How much you score");
if(score <= 100 && score >=90){
    console.log('A Grade');
    alert(" A Grade ");
}else if(score <= 89 && score >=60){
    console.log('B Grade');
    alert(" B Grade ");
}else if (score <= 59 && score >=40){
    console.log("c grade");
    alert(" c Grade ");
}else {
    console.log("fail");
    alert("fail");
}























