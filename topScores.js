const sortScores = (unorderedScores, highestPossibleScore) => {

  // Sort the scores in O(n) time
  const scoreCounts = [];
  for (let i = 0; i < unorderedScores.length; i++) {
    const currScore = unorderedScores[i];
    if (scoreCounts[currScore]) {
      scoreCounts[currScore] += 1;
    } else {
      scoreCounts[currScore] = 1;
    }
  }
  let index = 0;
  for (let i = scoreCounts.length; i >= 0; i--) {
    const currScore = scoreCounts[i];
    if (currScore) {
      for (let j = 0; j < currScore; j++) {
        unorderedScores[index] = i; 
        index++; 
      }
    }
  }
  return unorderedScores;
}
