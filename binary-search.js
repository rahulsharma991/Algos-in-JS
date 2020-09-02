/* Binary search algorithm is a searching algorithm that helps you to find the desired value in array.It always worked in sorted numbers.
   This algorithm takes the Beginning and the End Index of the array to find the midPoint of the array.It works same as Divide and conquer rule.
   To find midIndex of the array we use formula:-- (begin + end)/2;
*/
let arr = [1,2,3,4,12,9,8,6];
arr.sort(function(a , b) {return a-b;});
function binarySearch(array, targetValue) {
    let begin = 0;
    let end = array.length - 1 ;
    let midIndex = 0;
    while(begin <= end) {
        midIndex = Math.floor((begin + end) / 2);
        if(targetValue === array[midIndex]) {
            return midIndex;
        } else if (targetValue < array[midIndex]) {
            end = midIndex - 1;
        } else { 
            begin  = midIndex + 1;
        }
    }
    return false;
}

console.log(binarySearch(arr, 4));