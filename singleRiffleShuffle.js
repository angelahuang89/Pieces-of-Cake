const isSingleRiffle = (half1, half2, shuffledDeck) => {
  if (shuffledDeck.length === 0) {
    return true;
  }
  if (half1.length && half1[0] === shuffledDeck[0]) {
    return isSingleRiffle(half1.slice(1), half2, shuffledDeck.slice(1));
  } else if (half2.length && half2[0] === shuffledDeck[0]) {
    return isSingleRiffle(half1, half2.slice(1), shuffledDeck.slice(1));
  } else {
    return false;
  }
}

const isSingleRiffle = (half1, half2, shuffledDeck, shuffledDeckIndex, half1Index, half2Index) => {
 shuffledDeckIndex = (typeof shuffledDeckIndex !== 'undefined') ? shuffledDeckIndex : 0;
 half1Index = (typeof half1Index !== 'undefined') ? halfIndex : 0;
 half2Index = (typeof half2Index !== 'undefined') ? half2Index : 0;
 
 if (shuffledDeckIndex === shuffledDeck.length) {
   return true;
 }
 
 if ((half1Index < half1.length) && half1[half1Index] === shuffledDeck[shuffledDeckIndex]) {
   half1Index++;
 } else if ((half2Index < half2.length) && (half2[half2Index] === shuffledDeck[shuffledDeckIndex])){
   half2Index++;
 } else {
   return false;
 }
 
 shuffledDeckIndex++;
 return isSingleRiffle(half1, half2, shuffledDeck, shuffledDeckIndex, half1Index, half2Index);
}

const isSingleRiffle = (half1, half2, shuffledDeck) => {
  let half1Index = 0;
  let half2Index = 0;
  const half1MaxIndex = half1.length - 1;
  const half2MaxIndex = half2.length - 1;
  for (let i = 0; i < shuffledDeck.length; i++) {
    // const card = shuffledDeck[i];
    if (half1Index <= half1MaxIndex && shuffledDeck[i] === half1Index[half1Index]) {
      half1Index++;
    } else if (half2Index <= half2MaxIndex && shuffledDeck[i] === half2Index[half2Index]) {
      half2Index++;
    } else {
      return false;
    }
  }
  return true;
}