import Game from "./Game";
import React, { useState } from "react";
import classes from "./Board.module.css";
import HowToBox from "./HowToBox";

const Board =(props)=>{
    const [isButtonClicked, setIsButtonClicked]=useState();

    const howToClicked =() =>{
        setIsButtonClicked(true)
    }
return(
    <div className={classes.mainContainer}>
        <div className={classes.introText}>Looks like someone got bored from doing whatever the NEED to do!<br/> challenge yourself where you might actually have a chance to succeed.. <br/> we got you ;)</div>
   <button onClick={howToClicked}  className={classes.howToButton}> How to Play</button>
       {isButtonClicked && (<HowToBox onClose={() => {setIsButtonClicked(null)}}/>)}
        <Game/>
       
        </div>
 
)
}
export default Board;