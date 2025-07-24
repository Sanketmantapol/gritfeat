function sumGreaterThanTen(numbers) {
  let sum = 0;

  for (let num of numbers) {
    if (num > 10) {
      sum += num;
    }
  }

  return sum;
}
