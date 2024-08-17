import { useState } from "react";
import Draggable from "react-draggable";
import "./Textofmeme.css"; // Import the CSS file

const Textedit = () => {
  const [edit, setEdit] = useState(false);
  const [val, setVal] = useState("double click to edit");

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
            <h4 onDoubleClick={() => setEdit(true)}>{val}</h4>
          </b>
        )}
      </div>
    </Draggable>
  );
};

export default Textedit;
