console.log("mushy");
console.log("mushy1");
console.log("mushy123");
// Variables 
var v1 = 14 //int
var2 = "mushy" //string
x = null //no value
y = undefined // not sure what value
bool = true //true | false
// " = " assignment operator
// var convention:
// case sensitive: A & a || only _ $(can be first but no int) is allowed || no reserve words can be used
// Cases on how to write a variable
camleCase = "write first as small then follow with capital"
console.log(v1 + 1 + ' name: '+  var2 + ' ' + bool );
console.log('camelcase sample: ' + camleCase);

let newname = "what";
newname = " is ";
newname = " my name "; 
// let declare once and update multiple
const finalname ="mushy";
// finalname = "wow";
console.log(newname);
console.log(finalname);
//default value is always undefined (let & var)
// const must have a value
//Blocks;
{
    let a = 1
    console.log(a);
}
{
    let a = 10
    console.log(a);
}
//Object
const profile = { //const object can be modified i.e itd eky value pair
    username: " mushy",
    dob: 11297,
    ispass: true,
};
profile.username = "Mustafa Raza ";
console.log(profile.username);
console.log(profile.dob);
console.log(profile.ispass);
console.log(typeof profile);
