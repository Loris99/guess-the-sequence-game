import React from "react";
import styles from './HowToBox.module.css'
import  ReactDOM from "react-dom";

const Backdrop = (props) =>{
    return <div className={styles.backdrop} onClick={props.onClose}></div>

};
const ModalOverlay =(props) =>{
    return(
        
    <div className={styles.boxStyle}>
        <p className={styles.boxText}>
You have to guess sequence of the code containing 4 different digits (0-9);<br/>
If one of your inputs exists but in wrong place a WHITE circle will appear, <br/>
If the input and its placement are correct BLUE circle will appear,<br/>
Press 'Start' to start a new game whenever <br/>
We recommend you try 4 times then go back to a more important task! <br/>
GoodLuck :)
</p>
<div className={styles.boxFooter}>
<button className={styles.boxButton} onClick={props.onClose}>Got it</button>
</div>
    </div>
    )
};

const HowToBox = (props)=>{
    return(
        <>
        {ReactDOM.createPortal(
            <Backdrop onClose={props.onClose}/>,
            document.getElementById("backdrop-root")
        )}
        {ReactDOM.createPortal(
            <ModalOverlay onClose={props.onClose} />,
            document.getElementById("overlay-root")
        )}
        </>
    )
};

export default HowToBox;