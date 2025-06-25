import { useState } from "react";
import "./Color.css";

export default function Color({ color, onDelete }) {
  const [showConfirmMessage, setConfirmMessage] = useState(false);
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {!showConfirmMessage && (
        <button
          onClick={() => {
            setConfirmMessage(true);
          }}
        >
          Delete
        </button>
      )}
      {showConfirmMessage && (
        <div className="color-card-hightline">
          <p>are u sure?</p>
          <button onClick={() => onDelete(color.id)}>Yes!</button>
          <button
            onClick={() => {
              setConfirmMessage(false);
            }}
          >
            No
          </button>
        </div>
      )}
    </div>
  );
}
