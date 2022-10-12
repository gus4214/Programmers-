function solution(n) {
  const arr = (n + "").split("").sort().reverse().join("");
  return arr / 1;
}

console.log(solution(118372));
