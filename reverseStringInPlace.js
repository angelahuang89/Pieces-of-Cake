const reverse = arrayOfChars => {
  let left = 0;
  let right = arrayOfChars.length - 1;
  while (left <= right) {
    [arrayOfChars[left], arrayOfChars[right]] = [arrayOfChars[right], arrayOfChars[left]];
    left++;
    right--;
  }
  return arrayOfChars;
}

const testInput = 'abcde'.split('');
const expected = 'edcba';

console.log(reverse(testInput).join(''));