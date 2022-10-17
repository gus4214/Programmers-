function solution(absolutes, signs) {
  return signs
    .map((e) => (e ? (e = 1) : (e = -1)))
    .map((num, i) => num * absolutes[i])
    .reduce((a, b) => a + b);
}

console.log(solution([4, 7, 12], [true, false, true]));
