function solution(s, n) {
  return s
    .split("")
    .map((a) => {
      if (a === " ") return a;
      return a.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(a.charCodeAt() + n - 26)
        : String.fromCharCode(a.charCodeAt() + n);
    })
    .join("");
}

console.log(solution("a B z", 4));
