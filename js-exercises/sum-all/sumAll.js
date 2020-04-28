function sumAll(numbers) {
  let num1 = numbers[0];
  let num2 = numbers[1];
  let totalTerms = 0;
  if (num1 > num2) {
    totalTerms = num1 - num2
  } else {
    totalTerms = num2 - num1
  }
  return ((totalTerms + 1) * ((num1 + num2) / 2));
}

export {
  sumAll,
};
