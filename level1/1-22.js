function solution(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    i % 2 === 0 ? (arr[i] = "수") : (arr[i] = "박");
  }
  return arr.join("");
}

console.log(solution(8));
