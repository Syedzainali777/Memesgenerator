import { useRef, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Textofmeme from "../component/Textofmeme.jsx";
import { exportComponentAsJPEG } from "react-component-export-image";
import "./editpage.css";

const Editpage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const [editMode, setEditMode] = useState(false);

  const memeRef = useRef();

  const addText = () => {
    setCount(count + 1);
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
        {Array(count)
          .fill(0)
          .map((_, index) => (
            <Textofmeme key={index} editMode={editMode} />
          ))}
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button onClick={addText} className="btn btn-primary">
          Add Text
        </button>
        <button onClick={toggleEditMode} className="btn btn-primary">
          Edit Text
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
