//typeof() String() Number() parseInt() parseFloat() toString
var num = 30;
let sum  = "30";
{
    let sum = 3;
}
if(num == sum){
    
    var num1 = String(num);
    console.log(typeof(num1));
    num1 = Number(num1);
    console.log(typeof(num1));
}

console.log(typeof(num));

num = 44;
console.log(sum);
