import "./App.css";
import LeftSide from "./Components/LeftSide/LeftSide";
import RightSide from "./Components/RightSide/RightSide";

function App() {
  return (
    <div className="App">
      <div className="component">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
