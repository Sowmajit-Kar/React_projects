import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";

const handleOnChange=(event)=>{
console.log(event.target.value);
};



function App() {
  let foodItems = ["Dal", "Green Sabji", "Rooti", "Vaat", "Salad", "Milk"];
  


  
  return (
    <>
    <Container>
      <h1>Healthy Foods</h1>
      {foodItems.length === 0 ? (
        <ErrorMessage />
      ) : (
        <FoodItems items={foodItems} />
      )}
      </Container>
    </>
  );
}

export default App;





















