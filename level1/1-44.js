function solution(answers) {
  let student = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  let arr = [];
  let answer = [];

  for (let i = 0; i < student.length; i++) {
    arr.push(
      answers.filter(
        (element, index) => element === student[i][index % student[i].length]
      ).length
    );
  }

  let max = Math.max(...arr);

  if (arr[0] === max) answer.push(1);
  if (arr[1] === max) answer.push(2);
  if (arr[2] === max) answer.push(3);

  return answer;
}

console.log(solution([1, 3, 2, 4, 2, 1, 5, 1, 2]));
