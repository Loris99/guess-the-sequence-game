import styles from "./InputLine.module.css";
const InputLine = (props) => {
  return props.enteredCode.map((digitValue, index) => (
    <input
      name={index}
      key={index}
      type="text"
      maxLength="1"
      className={styles.fillers}
      onChange={(event) => {
        props.valueInputChangeHandler(event.target.value, index);
      }}
      value={digitValue}
      disabled={props.disabled}
    />
  ));
};

export default InputLine;
