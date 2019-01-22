const hasPalindromePermutation = theString => {

  // Check if any permutation of the input is a palindrome
  const counts = {};
  for (let i = 0; i < theString.length; i++) {
    if (counts[theString[i]]) {
      counts[theString[i]]++;
    } else {
      counts[theString[i]] = 1;
    }
  }
  
  let numOdd = 0;
  for (let key in counts) {
    if (counts[key] % 2 === 1) {
      numOdd++;
    }
   }

  return numOdd <= 1;
}

// const hasPalindromePermutation = theString) => {

//   // Check if any permutation of the input is a palindrome
//   const counts = new Set();
//   for (let i = 0; i < theString.length; i++) {
//     if (counts.has(theString[i])) {
//       counts.delete(theString[i]);
//     } else {
//       counts.add(theString[i]);
//     }
//   }
  
//   return counts.size <= 1;
// }
