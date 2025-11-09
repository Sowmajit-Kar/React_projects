import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  let [calVal,setCalVal]= useState(""); 



  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal}></Display>
      <ButtonsContainer
      onButtonClick={()=>console.log("button clicked.")}
      
      ></ButtonsContainer>
    </div>
  );
}

export default App;
