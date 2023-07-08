//length of arraay is n where n = [2m+1] -> this represents odd number 2+1 = 3;
// where m comes twice in array and a single value in array; [3,7,3,2,2,7,4], In this 4 is unique and missing number find that number in array;

let arr = [3, 7, 3, 2, 2, 7, 4];
let ans = 0;

//with XOR
for (let i = 0; i <= arr.length; i++) {
  ans = ans ^ arr[i];
}
console.log(ans);

//with obj
let obj = {};
for (let i = 0; i <= arr.length; i++) {
  obj[arr[i]] = arr[i];
  if (obj[arr[i]] == arr[i]) {
    return delete obj[arr[i]];
  }
}

console.log(obj);
