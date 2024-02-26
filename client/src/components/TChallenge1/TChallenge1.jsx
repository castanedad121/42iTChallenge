// Import hooks of react
import { useState } from "react";
// Import stylce css modules
import styles from "./TChallenge1.module.css";
// Import library monaco edito for react
import Editor from "@monaco-editor/react";
// Import function for first challenge
import findPairWithSum from "../../functions/findPairWithSum.js";
// Import function for validation of inputs
import validation from "../../functions/validation.js";

const TChallenge1 = () => {
  // Declaration of local states
  const [runTest, setRuntest] = useState(false);
  const [output, setOutput] = useState("");
  const [errors, setErrors] = useState({
    errorNumbers: "",
    errorTargetSum: "",
  });
  const [inputs, setInputs] = useState({
    numbers: "",
    targetSum: "",
  });

  // Declaration of variables that will show information
  const paragraph =
    "Given an array of integers, no number in this array is repeated, and an integer representing the target sum, implement a function that find whether there's a pair of numbers in the array that adds up to the target sum. Return the pair in an array. If such pair does not exist, return an empty array.";
  const examples =
    "EXAMPLES: \nconst numbers = [2, 7, 11, 15]; \nconst targetSum = 9; \r \nfindPairWithSum(numbers, targetSum); \n// Output: [2, 7] \r\r \nconst numbers = [3, 6, 8, 10]; \nconst targetSum = 15; \r \nfindPairWithSum(numbers, targetSum); \n// Output: [] ";
  const solution =
    "// I declare and export the function for the first challenge \nconst findPairWithSum = (numbers, targetSum) => { \n// I declare and initialize at 0, a variable that will help me find the complement of the required sum \nlet numberFind = 0; \n// I use a for loop to iterate the array of numbers \nfor (let i = 0; i < numbers.length; i++) { \n// The number to search changes depending on the element of the array that is being iterated \nnumberFind = targetSum - numbers[i]; \n// I ask if the array contains the number to complete the sum \nif (numbers.includes(numberFind)) { \n// If the number is found, I return an array with the current element of the for loop and the searched number \nreturn [numbers[i], numberFind]; \n} \n// If the number is not found, the for loop continues \n} \n// If the number is not found at the end of the for loop, an empty array is returned \nreturn []; \n};";
  const options = {
    readOnly: true,
    showFoldingControls: "never",
    wordWrap: "on",
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
  };
  const tests = [
    {
      case: "Case 1",
      numbers: "[ 2, 7, 11, 15 ]",
      targetSum: 9,
      expectOutput: "[ 2,7 ]",
      output: findPairWithSum([2, 7, 11, 15], 9),
    },
    {
      case: "Case 2",
      numbers: "[ 3, 6, 8, 10 ]",
      targetSum: 15,
      expectOutput: "[ ]",
      output: findPairWithSum([3, 6, 8, 10], 15),
    },
  ];
  // Input change handler to capture information in a local state
  const handlerChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setInputs({
      ...inputs,
      [property]: value,
    });
  };
  // Validation of error in the inputs
  const handlerRun = () => {
    setErrors(validation(inputs, 1));
  };
  //Handler to make use of the first challenge function
  const handleSubmit = (event) => {
    event.preventDefault();
    if (errors.errorNumbers || errors.errorTargetSum) {
      return;
    } else {
      const numbers = inputs.numbers.split(",").map((number) => Number(number));
      const targetSum = Number(inputs.targetSum);
      setOutput(`[ ${findPairWithSum(numbers, targetSum)} ]`);
    }
  };
  // Button handler that clears input and output information
  const handleClear = (event) => {
    event.preventDefault();
    setInputs({
      numbers: "",
      targetSum: "",
    });
    setErrors({
      errorNumbers: "",
      errorTargetSum: "",
    });
    setOutput("");
    document.getElementById("numbers").value = "";
    document.getElementById("targetSum").value = "";
  };
  return (
    <div className={styles.ContainerTChallenge1}>
      <div className={styles.ContainerColum}>
        <h1>Two Number Sum</h1>
        <div className={styles.Paragraph}>
          <p>{paragraph}</p>
        </div>
        <div className={styles.EditorParagraph}>
          <Editor
            theme="vs-dark"
            value={examples}
            width="100%"
            height="270px"
            defaultLanguage="javascript"
            loading={true}
            options={options}
          />
        </div>
      </div>

      <div className={styles.ContainerColum}>
        <h1>Solution</h1>
        <div className={styles.Editor}>
          <Editor
            theme="vs-dark"
            value={solution}
            width="100%"
            height="550px"
            defaultLanguage="javascript"
            loading={true}
            options={options}
          />
        </div>
      </div>

      <div className={styles.ContainerColum}>
        <div>
          <button
            className={styles.ButtonRun}
            onClick={() => {
              setRuntest(true);
            }}
          >
            Run Tests
          </button>
          <button
            className={styles.ButtonClear}
            onClick={() => {
              setRuntest(false);
            }}
          >
            Clear Tests
          </button>
        </div>

        {tests &&
          tests.map((test) => {
            return (
              <div key={test.case} className={styles.ContainerCases}>
                <div className={styles.ContainerCase}>
                  <h3>{test.case}</h3>
                  <p>{`numbers = ${test.numbers}`}</p>
                  <p>{`targetSum = ${test.targetSum}`}</p>
                </div>
                <div className={styles.ContainerOut}>
                  <div className={styles.ContainerOutput}>
                    <h3>Expect Output</h3>
                    <p>{test.expectOutput}</p>
                  </div>
                  <div className={styles.ContainerOutput}>
                    <h3>Output</h3>
                    {runTest ? (
                      <p>{`[ ${test.output.toString()} ] 💚`}</p>
                    ) : (
                      <p>---</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

        <form onSubmit={handleSubmit}>
          <button
            className={styles.ButtonRun}
            type="submit"
            value="Submit"
            onClick={handlerRun}
          >
            Run Code
          </button>
          <button className={styles.ButtonClear} onClick={handleClear}>
            Clear
          </button>
        </form>
        <div className={styles.ContainerRunCode}>
          <div className={styles.ContainerCase}>
            <h3>Numbers:</h3>
            <input
              id="numbers"
              name="numbers"
              type="text"
              onChange={handlerChange}
              placeholder="1, 2, 3, 4, 5, 6, 7"
              defaultValue=""
            />
            {errors.errorNumbers && <span>{errors.errorNumbers}</span>}
            <h3>TargetSum:</h3>
            <input
              id="targetSum"
              name="targetSum"
              type="text"
              onChange={handlerChange}
              placeholder="integer number"
              defaultValue=""
            />
            {errors.errorTargetSum && <span>{errors.errorTargetSum}</span>}
          </div>
          <div className={styles.ContainerOut}>
            <div className={styles.ContainerOutput}>
              <h3>Output</h3>
              {output && !errors.errorNumbers && !errors.errorTargetSum ? (
                <p>{output} 💚</p>
              ) : (
                <p>---</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TChallenge1;
