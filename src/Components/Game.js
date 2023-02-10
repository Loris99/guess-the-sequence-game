import React, { useEffect, useState } from "react";
import Line from "./Line";
import styles from "./Game.module.css";
import ReactDOM from "react-dom";

const SIZE = 4;
const NUM_OF_LINES = 8;


const Backdrop2 = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>

};

const ModalOverlay2 = (props) => {

  return (

    <div className={styles.boxStyle}>
      <p className={styles.boxText}>
        {props.message} <br />
        The Secret Code is: {props.codeValue}
      </p>
      <div className={styles.boxFooter}>
        <button className={styles.boxButton} onClick={props.onClose}>Check your answers</button>
      </div>
    </div>
  )
};
const Message = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop2 onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay2 onClose={props.onClose} message={props.message} codeValue={props.codeValue} />,
        document.getElementById("overlay-root")
      )}
    </>
  )
};
const Game = (props) => {
  const [codeValue, setCodeValue] = useState([]);
  const [activeStep, setActiveStep] = useState(-1);
  const [clear, setClear] = useState(false);
  const [isAWin, setIsAWin] = useState();
  const [message, setMessage] = useState(" ");
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const updateActiveStep = (currentActiveStep) => {
    setActiveStep(currentActiveStep);
  };
  const updateIsAWin = (isAWin) => {
    setIsAWin(isAWin);
    setIsStarted(false);
  };


  useEffect(() => {
    if (isAWin === true) {
      setMessage(result.win);
    } else if (isAWin === false && !isStarted) {
      setMessage(result.lose);
    }
  }, [isAWin, isStarted]);

  const result = {
    win: "Congratulations! You've WON.... now get back to work",
    lose: "oops, Game Over!..... get back to work",
    nothing: " ",
  };

  const startGameHandler = () => {
    const tempCodeValue = [];
    while (tempCodeValue.length < SIZE) {
      const randomNumber = Math.floor(Math.random() * 10);
      if (tempCodeValue.indexOf(randomNumber) === -1)
        tempCodeValue.push(randomNumber);
    }
    setCodeValue(tempCodeValue);
    setMessage(result.nothing);
    updateActiveStep(0);
    setIsStarted(true);
    setIsAWin(false);
    setIsFinished(false)
    setClear(!clear);
  };

  console.log("secret code ", codeValue);

  return (

    <div className={styles.container}>
      <div className={styles.topBar}>
        <h1>Find The Secret Code</h1>
      </div>
      <div className={styles.linesContainer}>
        {Array(NUM_OF_LINES)
          .fill()
          .map((value, index) => (
            <Line
              key={index}
              className={styles.lineDisplay}
              secretCode={codeValue}
              indexOfLine={index}
              activeStep={activeStep}
              clear={clear}
              isAWin={isAWin}
              updateIsAWin={updateIsAWin}
              isFinished={isFinished}
              setIsFinished={setIsFinished}
              updateActiveStep={updateActiveStep}
              isStarted={isStarted}
            />
          ))}
      </div>
      <div className={styles.sideBar}>
        <button className={styles.startButton} onClick={startGameHandler}>
          Start
        </button>
        {/* <div className={styles.message}>
          <p>{message}</p>
        </div> */}
      </div>

      {isFinished && (
        <Message message={message} onClose={() => { setIsFinished(null) }} codeValue={codeValue}

        />)}


    </div>

  );
};
export default Game;
