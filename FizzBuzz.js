/* FizzBuzz algorithm print Fizz if it is divided by 3, Buzz if it is divided by 5, if it is divisible by both 3 and 5 it prints FizzBuzz*/
function FizzBuzz(num) {
    for(let i=1; i<= num; i++) {
        if(i%15 === 0) console.log('FizzBuzz');
        else if(i%3 === 0) console.log('Fizz');
        else if(i%5 === 0 )console.log('Buzz');
        else console.log(i);
    }
}
console.log(FizzBuzz(30));