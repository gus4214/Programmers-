function solution(arr) {
  let copy = [...arr];
  const x = copy.sort((a, b) => b - a).pop();
  const newArr = arr.filter((e) => e !== x);

  return arr.length <= 1 ? [-1] : newArr;
}

console.log(solution([4, 9, 7, 10]));
