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