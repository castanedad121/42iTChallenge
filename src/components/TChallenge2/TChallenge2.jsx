// Import hooks of react
import { useState } from "react";
// Import stylce css modules
import styles from "./TChallenge2.module.css";
// Import library monaco edito for react
import Editor from "@monaco-editor/react";
// Import function for second challenge
import nonConstructibleChange from "../../functions/nonConstructibleChange.js";
// Import function for validation of inputs
import validation from "../../functions/validation.js";

const TChallenge2 = () => {
  // Declaration of local states
  const [runTest, setRuntest] = useState(false);
  const [output, setOutput] = useState("");
  const [errors, setErrors] = useState({
    errorCoinsArray: "",
  });
  const [inputs, setInputs] = useState({
    coinsArray: "",
  });

  // Declaration of variables that will show information
  const paragraph =
    "Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create. The given coins can have any positive integer value and aren’t necessarily unique (i.e., you can have multiple coins of the same value).";

  const solution =
    "// I declare the function for the second challenge \nconst nonConstructibleChange = (coinsArray) => {   \n// I declare and initialize a variable to 1, this will change as we iterate the array of coins   \n let minAmountChange = 1; \n// I check if the coin array is empty, if so I return the minimum amount of change   \n if (!coinsArray.length) { \n  return minAmountChange; \n }; \n// I generate an ordered array of coins and use the one that receives the function, in ascending order   \n const sortedCoinsArray = coinsArray.sort((a, b) => a - b);  \n// I use a for loop to iterate the sorted array of coins  \n for (let i=0; i < sortedCoinsArray.length; i++){  \n// I compare the coins of the ordered array with the minimum amount of change  \n  if (sortedCoinsArray[i] > minAmountChange) {   \n// If the minimum amount of change is less than the current coin, it is returned    \n   return minAmountChange;   \n  }   \n// If the minimum amount of change is greater than the current coin, this accumulates   \n  minAmountChange = minAmountChange + sortedCoinsArray[i];  \n  }  \n// At the end of the for cycle, the minimum change amount is returned  \n  return minAmountChange; \n };";
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
      coinsArray: "[ 1, 2, 5 ]",
      expectOutput: "4",
      output: nonConstructibleChange([1, 2, 5]),
    },
    {
      case: "Case 2",
      coinsArray: "[ 5, 7, 1, 1, 2, 3, 22 ]",
      expectOutput: "20",
      output: nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]),
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
    setErrors(validation(inputs, 2));
  };
  // Handler to make use of the second challenge function
  const handleSubmit = (event) => {
    event.preventDefault();
    if (errors.errorCoinsArray) {
      return;
    } else {
      const coinsArray = inputs.coinsArray
        .split(",")
        .map((coin) => Number(coin));
      setOutput(`${nonConstructibleChange(coinsArray)}`);
    }
  };
  // Button handler that clears input and output information
  const handleClear = (event) => {
    event.preventDefault();
    setInputs({
      coinsArray: "",
    });
    setErrors({
      errorCoinsArray: "",
    });
    setOutput("");
    document.getElementById("coinsArray").value = "";
  };
  return (
    <div className={styles.ContainerTChallenge2}>
      <div className={styles.ContainerColum}>
        <h1>Non-Constructible Change</h1>
        <div className={styles.Paragraph}>
          <p>{paragraph}</p>
          <p>
            For example, if you are given coins =
            <span className={styles.Span}> [1, 2, 5] </span>, the minimum amount
            of change that you can not create is
            <span className={styles.Span}> 4 </span>. If you are given no coins,
            the minimum amount of change that you can not create is 1.
          </p>
          <h3>Sample Input</h3>
          <span
            className={styles.Span}
          >{`coins = [5, 7, 1, 1, 2, 3, 22]`}</span>
          <h3>Sample Output</h3>
          <span className={styles.Span}> 20 </span>
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
                  <p>{`coinsArray = ${test.coinsArray}`}</p>
                </div>
                <div className={styles.ContainerOut}>
                  <div className={styles.ContainerOutput}>
                    <h3>Expect Output</h3>
                    <p>{test.expectOutput}</p>
                  </div>
                  <div className={styles.ContainerOutput}>
                    <h3>Output</h3>
                    {runTest ? (
                      <p>{`${test.output.toString()} 💚`}</p>
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
            <h3>CoinsArray:</h3>
            <input
              id="coinsArray"
              name="coinsArray"
              type="text"
              onChange={handlerChange}
              placeholder="1, 2, 3, 4, 5, 6, 7"
              defaultValue=""
            />
            {errors.errorCoinsArray && <span>{errors.errorCoinsArray}</span>}
          </div>
          <div className={styles.ContainerOut}>
            <div className={styles.ContainerOutput}>
              <h3>Output</h3>
              {output && !errors.errorCoinsArray ? (
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

export default TChallenge2;
