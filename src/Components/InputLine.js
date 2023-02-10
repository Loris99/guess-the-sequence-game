import { useRef, useState, createRef, useEffect } from "react";
import styles from "./InputLine.module.css";
const InputLine = (props) =>{
  const digit0 = useRef('');
  const digit1 = useRef('');

  const digit2 = useRef('');

  const digit3 = useRef('');
  // const refs=useRef([])

  // if(refs.current.length !== 4){
  //   refs.current=
  //   Array(4).fill().map((i)=> refs[i] || createRef())
  // }
  // const elementsRef = useRef(data.map(() => creatRef()));

return(
  props.enteredCode.map((digitValue, index) => (
    
    <input
      // ref= {refs.current[index]}
      name={index}
      key={index}
      type="text"
      maxLength="1"
      className={styles.fillers}
      onChange={(event) => {
        props.valueInputChangeHandler(event.target.value, index);
        // if(event.target.value !== ''){
        //  refs.current[index+1].focus();
        // }
      }}  
      value={digitValue}
      disabled={props.disabled}
    />
  ))
  )
    }

export default InputLine;
