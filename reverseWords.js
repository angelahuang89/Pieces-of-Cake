const reverseWords = message => {
  reverse(message, 0, message.length - 1);
  let start = 0;
  for (let i = 1; i < message.length; i++) {
    if (message[i] === ' ') {
      reverse(message, start, i - 1);
      start = i + 1;
    }
    if (i === message.length - 1) {
      reverse(message, start, i);
    }
  }
  return message;
}

const reverse = (array, start, end) => {
  while (start <= end) {
    [array[start], array[end]] = [array[end], array[start]];
    start++;
    end--;
  }
}

// const reverseWords = message => {

//   const reverse = (array, start, end) => {
//     while (start < end) {
//       let temp = array[start];
//       array[start] = array[end];
//       array[end] = temp;
//       start++;
//       end--;
//     }
//   }
  
//   reverse(message, 0, message.length - 1);
  
//   let start = 0;
//   for (let i = 1; i < message.length; i++) {
//     if (message[i] === ' ') {
//       reverse(message, start, i - 1);
//       start = i + 1;
//     }
//     if (i === message.length - 1) {
//       reverse(message, start, i);
//     }
//   }
// }

const message = [ 'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ];

console.log(reverseWords(message).join(''));
// 'steal pound cake'