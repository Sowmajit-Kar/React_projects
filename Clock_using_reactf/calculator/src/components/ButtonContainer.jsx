it import styles from "./components.module.css";



const ButtonContainer = () => {
        const buttonNames=['C','1','2','3','4','-','5','6','*','7']
  return (
    <div className={styles.buttonContainer}>
      {buttonNames.map((buttonName, index) => (
        <button 
          key={index} 
          className={styles.button}
        > 


          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;














