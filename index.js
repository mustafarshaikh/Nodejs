//arrrays
//Arrays are linear: 
let marks = [10,20,30,52,46,89,99,62];
console.log(marks);
console.log(marks.length) //property
for(i=0;i<marks.length;i++){
    console.log(i)
}
marks[5] = 66;
console.log(marks);
for(i=0;i<marks.length;i++){
    console.log(marks[i])
}
//iterable strings object array
let sum = 0;
for(val of marks){
    sum += val;
    console.log(val)
}
console.log(`Average sum is ${sum} & average is ${(sum/marks.length)}`);

let prices = [250,645,300,900,50]
for(price of prices){
    discount = price*0.1
    // console.log(`Discount you get ${discount} `);
    fprice = price-discount;
    console.log(`final prpice of item ${fprice}`);
}
const student = {
    sname : "muhsy",
    number: 45,
    ispass : true
};
for(i in student){
    console.log(i, student[i]);
    // console.log(student[i]);
}
prices.push(1000);
console.log(prices);
prices.pop();
console.log(prices);
prices.toString();
console.log(prices.toString());
console.log(prices.concat(marks));
let temp1 = prices.unshift(700);
console.log(prices);
// prices.shift();
console.log(prices);
// console.log(prices.slice(1,3))
let temp2= prices.splice(2,1,49,51,53);
console.log(temp2);
