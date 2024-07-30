import Animal from "./Animal";
import "./App.css";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Animal selectedAnimal="cat" />
    </div>
  );
}

export default App;
