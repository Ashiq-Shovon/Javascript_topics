var isPalindrome = (x) => {
    var arr = [];
    let mod = x % 10;
    let val = Math.trunc(x / 10);
    let i = 0;
    
    while(val >= 1){
          
        
        if(val >= 0 && val <= 9){
            arr[i + 1] = val;
        }
            arr[i] = mod;
        
           mod =  val % 10;
           val = Math.trunc(val/10);
           i++;
           
           
    }
    
    let len = arr.length - 1;
    var j = 0;
    console.log(arr);
    var num = 0;
    while(len >= j){
        if(num == 0){
         num += arr[j++];
        }else{
            num += arr[j++].toString();

        }
    }
    // let num = arr.split("").join("");
    if(num == x){
        return true;
    }
    return false;
    
   
};

console.log(isPalindrome(34843));