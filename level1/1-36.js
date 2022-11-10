function solution(sizes) {
  let answer = [];
  const first = sizes.map((a) => Math.max(...a));
  const second = sizes.map((a) => Math.min(...a));
  answer.push(Math.max(...first));
  answer.push(Math.max(...second));

  const result = answer[0] * answer[1];

  return result;
}

console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ]) // [19,7]
);
