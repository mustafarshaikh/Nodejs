for(let i=1;i<=100;i++){
    console.log("hello", i );
}
let a = 5;
while(a <= 100){
    console.log(a);
    a++;
}
do{
    console.log("first", a);
    a++
}while(a <= 2)
///String for-of
let uname = "mushy";
let size = 0;
for(let b of uname){
    console.log(b);
    size++;
}
console.log(size);
//for -n loop
const student = {
    sname : "muhsy",
    number: 45,
    ispass : true
};
for(i in student){
    console.log(i);
    console.log(student[i]);
}
for (i=0;i<100;i++){
    if(i%2 === 0){
        console.log(i); 
    }
}
let randomNumber = Math.floor(Math.random() * 100) + 1;

console.log(randomNumber);

// let uprompt = prompt("guess the number");
// while (uprompt != randomNumber){
//     if(uprompt > randomNumber){
//         uprompt = prompt(" you were higher please retry");
//     }else {
//         uprompt = prompt(" you were lower please retry");
//     }
// }
// alert("coreect answer is", uprompt); 

let str = "hello7";
console.log(str.length);