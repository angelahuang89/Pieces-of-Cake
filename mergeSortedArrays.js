const mergeArrays = (arr1, arr2) => {
  const output = [];
  let pointer1 = 0;
  let pointer2 = 0;
  while (pointer1 < arr1.length || pointer2 < arr2.length) {
    if (arr1[pointer1] <= arr2[pointer2]) {
      output.push(arr1[pointer1]);
      pointer1++;
    } else {
      output.push(arr2[pointer2]);
      pointer2++;
    }
  }
  if (pointer1 < arr1.length) {
    for (let i = pointer1; i < arr1.length; i++) {
      output.push(arr1[pointer1]);
    }
  }
  if (pointer2 < arr2.length) {
    for (let i = pointer2; i < arr2.length; i++) {
      output.push(arr2[pointer2]);
    }
  }
  return output;
}

// const mergeArrays = (arr1, arr2) => {
//   const output = [];
//   let pointer1 = 0;
//   let pointer2 = 0;
//   while (pointer1 < arr1.length || pointer2 < arr2.length) {
//     if (arr1[pointer1] && (arr1[pointer1] < arr2[pointer2] || !arr2[pointer2])) {
//       output.push(arr1[pointer1]);
//       pointer1++;
//     } else {
//       output.push(arr2[pointer2]);
//       pointer2++;
//     }
//   }
//   return output;
// }

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]