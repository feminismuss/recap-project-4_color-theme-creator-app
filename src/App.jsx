import { useState } from "react";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm.jsx";
import { uid } from "uid";

function App() {
  const [colors, setColors] = useState(initialColors);
  function handleAddColor(newColor) {
    const newColorWithId = { ...newColor, id: uid() };
    console.log(newColorWithId);
    setColors((prevColors) => [newColorWithId, ...prevColors]);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor} />
      <div className="card-container">
        {colors.map((color) => {
          return <Color key={color.id} color={color} />;
        })}
      </div>
    </>
  );
}

export default App;
