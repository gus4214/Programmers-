function solution(array, commands) {
  let arr = [];

  commands.forEach((a, i) => {
    arr.push(array.slice(a[0] - 1, a[1]).sort((n, p) => n - p)[a[2] - 1]);
  });

  return arr;
}

console.log(
  solution(
    [1, 5, 2, 6, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
