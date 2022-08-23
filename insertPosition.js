var searchInsert = function(nums, target) {

    var len = nums.length;
    
    for(i = 0; i <= len - 1; i++){
       if( target <= nums[i]){
           return i;
       }
        if(target == nums[i]){ 
            return i;
        }
        if( nums[i] > target){
            return i ;
        }
        if(target > nums[len - 1]){
            return nums.length;
        }
    }
    
};
var i = searchInsert([1, 3, 5, 9], 6);
console.log(i);