import { useState } from "react";
import Draggable from "react-draggable";

const Textedit = () => {
  const [edit, setEdit] = useState(false);
  const [val, setVal] = useState("double click to edit");

  return (
    <Draggable>
      <div>
        {edit ? (
          <input
            value={val}
            onChange={(e) => setVal(e.target.value)}
            onBlur={() => setEdit(false)} // Exit edit mode when input loses focus
          />
        ) : (
          <h1 onDoubleClick={() => setEdit(true)}>{val}</h1>
        )}
      </div>
    </Draggable>
  );
};

export default Textedit;
