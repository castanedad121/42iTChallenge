// I declare the function for the first challenge
const findPairWithSum = (numbers, targetSum) => {
  // I declare and initialize at 0, a variable that will help me find the complement of the required sum
  let numberFind = 0;
  // I use a for loop to iterate the array of numbers
  for (let i = 0; i < numbers.length; i++) {
    // The number to search changes depending on the element of the array that is being iterated
    numberFind = targetSum - numbers[i];
    // I ask if the array contains the number to complete the sum
    if (numbers.includes(numberFind)) {
      // If the number is found, I return an array with the current element of the for loop and the searched number
      return [numbers[i], numberFind];
    }
    // If the number is not found, the for loop continues
  }
  // If the number is not found at the end of the for loop, an empty array is returned
  return [];
};
// Export the function for the first challenge
export default findPairWithSum;
