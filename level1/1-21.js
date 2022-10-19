function solution(s) {
  const evenNum = s.length / 2 - 1;
  const oddNum = s.length / 2 - 0.5;
  if (s.length % 2 === 0) {
    return s.slice(evenNum, evenNum + 2);
  } else {
    return s.slice(oddNum, oddNum + 1);
  }
}

console.log(solution("abcdefghijk"));

// 5 -> 2,3
// 6 -> 2,4
// 7 -> 3,4
// 8 -> 3,5
