function solution(num) {
  const x = num.length - 4;
  let arr = num.split("");
  for (let i = 0; i < x; i++) {
    arr[i] = "*";
  }
  return arr.join("");
}

console.log(solution("023334444"));
