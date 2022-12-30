function biggerHalf(nums) {

    nums.sort((a,b) => a-b); //(7) [2, 3, 6, 7, 14, 19, 19]
    let res = [];
    
    for (let i = Math.floor(nums.length/2); i < nums.length; i++) {
        res.push(nums[i]);   
          
    }    
    return res     
}

console.log(biggerHalf([4, 7, 2, 5]))