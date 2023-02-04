function test() {
    //Arrange
let expectedSum = 150;
let numbers = [10, 20, 30, 40, 50, 60];
let startIndex = 3;
let endIndex = 300;

    //Act
    let actualSum = solve(numbers, startIndex, endIndex)

    //Assert
    if(actualSum == expectedSum) {
        console.log('correct');
    } else {
        console.log('Error');
    }
}
test()

