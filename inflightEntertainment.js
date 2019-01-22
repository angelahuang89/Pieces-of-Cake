const canTwoMoviesFillFlight = (movieLengths, flightLength) => {

  // Determine if two movie runtimes add up to the flight length
  const hash = {};
  
  for (let i = 0; i < movieLengths.length; i++) {
    const curr = movieLengths[i];
    const diff = flightLength - curr;
    if (hash[diff]) {
      return true;
    } else {
      hash[curr] = true;
    }
  }

  return false;
}