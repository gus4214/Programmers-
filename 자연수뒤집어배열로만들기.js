const solution = (n) => {
  return String(n)
    .split("")
    .map((index) => index * 1)
    .reverse();
};

console.log(solution(12345));
