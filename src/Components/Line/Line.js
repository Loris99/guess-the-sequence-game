import { useEffect, useState } from "react";
import styles from "./Line.module.css";
import DotLine from "../DotLine/DotLine";
import InputLine from "../InputLine/InputLine";

const DIGITS = /[0-9]+/;
const SIZE = 4;
const NUM_OF_LINES = 8;

const intialInputs = Array(SIZE).fill("");
const Line = (props) => {
  const [enteredCode, setEnteredCode] = useState(intialInputs);
  const [circles, setCircles] = useState([]);

  //to restart the game and clear inputs
  useEffect(() => {
    setEnteredCode(intialInputs);
    setCircles([]);
  }, [props.clear]);

  useEffect(() => {});
  //check if input is number & add into the array
  const valueInputChangeHandler = (digitValue, index) => {
    if (DIGITS.test(digitValue) === false) {
      return;
    }
    const tempEnteredCode = [...enteredCode];

    tempEnteredCode[index] = digitValue;
    setEnteredCode(tempEnteredCode);
  };

  //check button
  const checkCodeValidity = () => {
    let stepCount = props.activeStep;
    let arr = [];

    for (let i in props.secretCode) {
      const enteredDigit = parseInt(enteredCode[i]);

      //search for entered digit in the secretcode
      let searchInSecretCode = props.secretCode.findIndex(
        (val) => val === enteredDigit
      );

      //search for the digit in the secretcode
      let searching = props.secretCode.findIndex(
        (val) => val === props.secretCode[i]
      );

      if (searchInSecretCode !== -1 && searching === searchInSecretCode) {
        arr.push(true);
      } else if (
        searchInSecretCode !== -1 &&
        searching !== searchInSecretCode
      ) {
        arr.push(false);
      }
    }
    //sort boolean array
    arr.sort((value) => {
      return value ? -1 : 1;
    });
    setCircles(arr);

    if (arr.every((val) => val !== false) && arr.length === SIZE) {
      props.updateIsAWin(true);
      props.setIsFinished(true);
    } else if (props.activeStep === NUM_OF_LINES - 1) {
      props.updateIsAWin(false);
      props.setIsFinished(true);
    }

    stepCount = stepCount + 1;
    props.updateActiveStep(stepCount);
    if (props.activeStep !== props.indexOfLine) {
    }
  };

  return (
    <section className={styles.boardAlignment}>
      <div className={styles.display}>
        <InputLine
          disabled={props.activeStep !== props.indexOfLine || props.isAWin}
          enteredCode={enteredCode}
          valueInputChangeHandler={valueInputChangeHandler}
        />
      </div>

      <button
        className={styles.checkBtn}
        onClick={checkCodeValidity}
        disabled={props.activeStep !== props.indexOfLine || props.isAWin}
      >
        Check
      </button>

      <div className={styles.dotAlignment}>
        <DotLine circles={circles} />
      </div>
    </section>
  );
};
export default Line;
