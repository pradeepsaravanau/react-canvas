import { useRef, useState } from "react";
import "./App.css";
import { generateRandomShape, renderAllShapes } from "./components/draggable";
const App = () => {
  const [shapes, setShapes] = useState([]);
  const canvasRef = useRef(null);

  const addRandomShape = () => {
    const newShape = generateRandomShape();
    setShapes([...shapes, newShape]);
  };

  const printCanvas = () => {
    console.log(shapes);
  };

  return (
    <div className="container">
      <h1 className="header">mini shape editor</h1>
      <div className="flex">
        <button className="action" onClick={addRandomShape}>
          Add shape
        </button>
        <button className="action" onClick={printCanvas}>
          Print JSON
        </button>
      </div>

      <div
        style={{
          position: "relative",
          width: "600px",
          height: "600px",
        }}
        className="canvas"
        ref={canvasRef}
      >
        {renderAllShapes(shapes)}
      </div>
    </div>
  );
};

export default App;
