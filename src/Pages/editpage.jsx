import { useRef, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Textofmeme from "../component/Textofmeme.jsx";
import { exportComponentAsJPEG } from "react-component-export-image";
import "./editpage.css";

const Editpage = () => {
  const [params] = useSearchParams();
  const [textFields, setTextFields] = useState([]); // State to manage multiple text fields
  const [editMode, setEditMode] = useState(false);

  const memeRef = useRef();

  const addText = () => {
    setTextFields([...textFields, { id: textFields.length }]); // Add a new text field with a unique id
  };

  const deleteTextField = (id) => {
    setTextFields(textFields.filter((field) => field.id !== id)); // Remove the text field by id
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  useEffect(() => {
    console.log("editMode:", editMode); // Logs the updated state
  }, [editMode]);

  return (
    <div className="container-fluid bg-secondary">
      <div ref={memeRef} className="img-size">
        <img src={params.get("url")} alt="Meme" className="img-size" />
        {textFields.map((field) => (
          <Textofmeme
            key={field.id}
            editMode={editMode}
            onDelete={() => deleteTextField(field.id)}
          />
        ))}
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button onClick={addText} className="btn btn-primary">
          Add Text
        </button>
        <button onClick={toggleEditMode} className="btn btn-primary">
          {editMode ? "Close edit" : "Edit"}
        </button>
        <button
          onClick={() => {
            exportComponentAsJPEG(memeRef);
          }}
          className="btn btn-success"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Editpage;
