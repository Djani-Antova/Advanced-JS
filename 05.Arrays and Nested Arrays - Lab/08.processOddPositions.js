function processOddPositions(nums) {
  

    console.log(nums
        .filter((val, index, nums) => index % 2)
        .map(x => x * 2)
        .reverse()
        .join(' ')
        );

}

processOddPositions([10, 15, 20, 25])