function solution(a, b) {
  const arr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const day = new Date(`2016-${a}-${b}`).getDay();
  return arr[day];
}

console.log(solution(5, 24));
