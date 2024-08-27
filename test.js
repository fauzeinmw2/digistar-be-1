
// Unit Tes dari librari yang dibuat
const fibonacci = require('./index');

function testFibonacci() {
    const result = fibonacci(10);
    console.assert(result === 55, `Expected: 55, but got '${result}'`);

    if(result === 55){
        console.log("All tests passed.");
    }
}

testFibonacci();


