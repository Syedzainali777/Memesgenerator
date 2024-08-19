import { useState, useEffect } from "react";
import Draggable from "react-draggable";
import "./Textofmeme.css";

const Textofmeme = ({ editMode }) => {
  const [edit, setEdit] = useState(false);
  const [val, setVal] = useState("double click to edit");

  useEffect(() => {
    setEdit(editMode); // Update edit state when editMode prop changes
  }, [editMode]);

  return (
    <Draggable>
      <div className="draggable-container">
        {edit ? (
          <input
            value={val}
            onChange={(e) => setVal(e.target.value)}
            onBlur={() => setEdit(false)} // Exit edit mode when input loses focus
          />
        ) : (
          <b>
            <h4>{val}</h4>
          </b>
        )}
      </div>
    </Draggable>
  );
};

export default Textofmeme;
