const parentFunction = (() =>{
    let num = 2
    console.log(`the value of num is ${num}`);
    return () =>{
        num -=1;
        console.log(`the value of num from child is ${num}`);
        return num;
    }
});



// console.log(parentFunction());
const result = parentFunction();
console.log(result());
console.log(result());
parentFunction();




