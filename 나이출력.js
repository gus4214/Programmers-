function solution(age) {
  const now = new Date();
  const currentYear = now.getFullYear();
  var answer = currentYear - (age - 1);
  return answer;
}
