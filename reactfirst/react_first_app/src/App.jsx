import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";

function App() {
  let FoodItems=["Sabji","Green Vegitable","Roti","Salad","Milk","Ghee"];

  return (
    <>
      <Container>
        <h1 className="food-heading">
          Healthy Food
        </h1>
    <ErrorMessage items={foodItems}></ErrorMessage>
          

      </Container>
    </>
  )
}

export default App
