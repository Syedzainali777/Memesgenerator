import { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import "./Textofmeme.css";

const Textofmeme = ({ editMode, onDelete }) => {
  const [edit, setEdit] = useState(false);
  const [val, setVal] = useState("Drag this Text to Desired position");
  const [textSize, setTextSize] = useState(24); // Default font size
  const [isResizing, setIsResizing] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    setEdit(editMode); // Update edit state when editMode prop changes
  }, [editMode]);

  const startResizing = () => setIsResizing(true);

  const stopResizing = () => setIsResizing(false);

  const handleMouseMove = (e) => {
    if (isResizing) {
      const textElement = textRef.current;
      const newSize = Math.max(
        12,
        e.clientY - textElement.getBoundingClientRect().top
      );
      setTextSize(newSize);
    }
  };

  return (
    <Draggable disabled={editMode ? true : false}>
      <div
        className="draggable-container"
        ref={textRef}
        style={{ fontSize: `${textSize}px`, position: "relative" }}
        onMouseMove={isResizing ? handleMouseMove : null}
        onMouseUp={stopResizing}
        onMouseLeave={stopResizing}
      >
        {edit ? (
          <input
            value={val}
            onChange={(e) => setVal(e.target.value)}
            style={{ fontSize: `${textSize}px` }}
          />
        ) : (
          <b style={{ fontSize: `${textSize}px`, cursor: `pointer` }}>{val}</b>
        )}
        {edit && (
          <div
            className="resize-handle"
            onMouseDown={startResizing}
          />
        )}
        {editMode && (
          <button className="delete-button" onClick={onDelete}>
            ×
          </button>
        )}
      </div>
    </Draggable>
  );
};

export default Textofmeme;
