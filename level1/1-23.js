function solution(a, b) {
  //   let result = 0;
  //   for (let i = 0; i < a.length; i++) {
  //     result += a[i] * b[i];
  //   }
  //   return result;

  return a.reduce((acc, cur, i) => (acc += a[i] * b[i]), 0);
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
