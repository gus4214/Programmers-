function solution(s) {
  const arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let answer = s;

  for (let i = 0; i < arr.length; i++) {
    let result = answer.split(arr[i]);
    answer = result.join(i);
    console.log(answer);
  }
  return parseInt(answer);
}

solution("2twotwo45four");
