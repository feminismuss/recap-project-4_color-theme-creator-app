import { useState, useEffect } from "react";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm.jsx";
import { uid } from "uid";

function App() {
  const [colors, setColors] = useState(() => {
    const storedColors = localStorage.getItem("colors");
    return storedColors ? JSON.parse(storedColors) : initialColors;
  });

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);

  function handleAddColor(newColor) {
    const newColorWithId = { ...newColor, id: uid() };
    console.log(newColorWithId);
    setColors((prevColors) => [newColorWithId, ...prevColors]);
  }

  function handleDeleteColor(idToDelete) {
    setColors((prevColors) =>
      prevColors.filter((color) => color.id !== idToDelete)
    );
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor} />
      <div className="card-container">
        {colors.map((color) => {
          return (
            <Color
              key={color.id}
              color={color}
              onDelete={() => handleDeleteColor(color.id)}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
