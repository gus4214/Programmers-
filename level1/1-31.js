function solution(s) {
  let arr = s.split(" ");
  return arr
    .map((a) =>
      a
        .split("")
        .map((b, i) => (i % 2 === 0 ? b.toUpperCase() : b.toLowerCase()))
        .join("")
    )
    .join(" ");
}

console.log(solution("try hello world"));
