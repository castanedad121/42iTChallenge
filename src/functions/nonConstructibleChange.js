// I declare the function for the second challenge
const nonConstructibleChange = (coinsArray) => {
  // I declare and initialize a variable to 1, this will change as we iterate the array of coins
  let minAmountChange = 1;
  // I check if the coin array is empty, if so I return the minimum amount of change
  if (!coinsArray.length) {
    return minAmountChange;
  }
  // I generate an ordered array of coins and use the one that receives the function, in ascending order
  const sortedCoinsArray = coinsArray.sort((a, b) => a - b);
  // I use a for loop to iterate the sorted array of coins
  for (let i = 0; i < sortedCoinsArray.length; i++) {
    // I compare the coins of the ordered array with the minimum amount of change
    if (sortedCoinsArray[i] > minAmountChange) {
      // If the minimum amount of change is less than the current coin, it is returned
      return minAmountChange;
    }
    // If the minimum amount of change is greater than the current coin, this accumulates
    minAmountChange = minAmountChange + sortedCoinsArray[i];
  }
  // At the end of the for cycle, the minimum change amount is returned
  return minAmountChange;
};
// Export the function for the second challenge
export default nonConstructibleChange;
