// input -> [1,2,3,4,5]
//output -> [2,1,4,3,5]
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i <= arr.length; i += 2) {
  if (i + 1 < arr.length) {
    const temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
}
console.log(arr);
// with destructuring

for (let i = 0; i <= arr.length; i += 2) {
  if (i + 1 < arr.length) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }
}
console.log(arr);
