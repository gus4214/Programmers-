function solution(s) {
  const x = parseInt(s.split("").sort().reverse().join("")) + 1;
  return (s.length === 4 || s.length === 6) && !!x;
}

console.log(solution("000000"));
