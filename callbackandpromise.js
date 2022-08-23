// var a = 10;
// var b = 20;

// if(a !== b){

//     console.log(`${a} is not same as ${b}`)
// }

// if(a < b){

//     console.log(`${--a} is less than ${b}`);
// }else{
//     console.log(`${b} is greater than ${a}`);
// }

// while(a < b){

//     console.log(a);
//     a++;
// }
var bool = true;

// function callbackPromise(callBack, errorHandle) {
//     if (bool) {
//         callBack({mesg: "from callback"});
//     } else {
//         errorHandle('from errorHandle');
//     }


// }

// callbackPromise((mesg) => {
//     console.log(`success: ${mesg.mesg}`)
// }, (error) => {
//     console.log(`failed: ${error}`);
// });

function callbackPromise() {
    return new Promise((resolve, reject) => {
        if (bool) {
            resolve({mesg: "from callback"});
        } else {
            reject('from errorHandle');
        }
    })
}
callbackPromise().then((mesg) => {
    console.log(`success: ${mesg.mesg}`)
}).catch((error) => {
    console.log(`failed: ${error}`);
});