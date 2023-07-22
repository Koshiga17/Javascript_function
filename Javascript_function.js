function findMax(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error("Input must be a non-empty array of numbers.");
  }

  let max = numbers[0]; // Assume the first element is the maximum

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}
const numbersArray = [3, 9, 1, 7, 5];
const maximumNumber = findMax(numbersArray);
console.log(maximumNumber);
