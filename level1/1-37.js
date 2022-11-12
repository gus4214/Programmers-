function solution(strings, n) {
  let arr = [];
  for (let i = 0; i < strings.length; i++) {
    let forward = strings[i][n];
    strings[i] = forward + strings[i];
  }
  strings.sort();
  for (let j = 0; j < strings.length; j++) {
    strings[j] = strings[j].substr(1);
    arr.push(strings[j]);
  }
  return arr;
}

console.log(solution(["sun", "bed", "car"], 1)); // ["car", "bed", "sun"]
