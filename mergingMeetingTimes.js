const mergeRanges = meetings => {
  const result = [];
  const sorted = meetings.sort((a, b) => a.startTime - b.startTime);
  let start = sorted[0].startTime;
  let end = sorted[0].endTime;
  for (let i = 1; i < sorted.length; i++) {
    const curr = sorted[i];
    if (curr.startTime >= start && curr.startTime <= end) {
      end = Math.max(end, curr.endTime);
    } else {
      const interval = {};
      interval.startTime = start;
      interval.endTime = end;
      result.push(interval);
      start = curr.startTime;
      end = curr.endTime;
    }
  }
  const interval = {};
  interval.startTime = start;
  interval.endTime = end;
  result.push(interval);
  return result;
}

const testInput = [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]

const expected =  [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
]

console.log(mergeRanges(testInput));