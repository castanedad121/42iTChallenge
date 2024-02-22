// Regular expression variable declaration
const numeroIntegerPositivo = /^\d*$/;
const arrayNumbers = /^[0-9]+(?:,[0-9]+)*$/;

const validation = (data) => {
  let errors = {};

  if (!data.targetSum) {
    errors.errorTargetSum = "TargetSum missing!";
  } else {
    const targetSum = numeroIntegerPositivo.test(data.targetSum);
    if (!targetSum) {
      errors.errorTargetSum = "Only Integer Number positive!";
    }
  }

  if (!data.numbers) {
    errors.errorNumbers = "Numbers missing!";
  } else {
    const numbers = data.numbers.split(",").map((number) => Number(number));
    const numbersRegex = arrayNumbers.test(numbers);
    const numbersSet = new Set(numbers);
    if (!numbersRegex) {
      errors.errorNumbers = "Only numbers separated by commas! ";
    } else if (numbers.length > numbersSet.size) {
      errors.errorNumbers = "Do not enter duplicate numbers!";
    }
  }

  return errors;
};
export default validation;
