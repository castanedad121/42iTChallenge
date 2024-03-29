// Regular expression variable declaration
const numeroIntegerPositivo = /^\d*$/;
const arrayNumbers = /^[0-9]+(?:,[0-9]+)*$/;

// function to validate inputs
const validation = (data, numChallenge) => {
  let errors = {};
  if (numChallenge === 1) {
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
  }

  if (numChallenge === 2) {
    if (!data.coinsArray) {
      return errors;
    } else {
      const coinsArray = data.coinsArray
        .split(",")
        .map((number) => Number(number));
      const numbersRegex = arrayNumbers.test(coinsArray);
      if (!numbersRegex) {
        errors.errorCoinsArray = "Only numbers separated by commas! ";
      }
    }
  }

  return errors;
};
export default validation;
