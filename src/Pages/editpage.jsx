import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Textofmeme from "../component/Textofmeme.jsx";
import { exportComponentAsJPEG } from "react-component-export-image";

const Editpage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);

  // Use useRef instead of createRef
  const memeRef = useRef();

  const addText = () => {
    setCount(count + 1); // Correctly updating the state
  };

  return (
    <div className="container-fluid bg-secondary">
      <div ref={memeRef}>
        <img src={params.get("url")} alt="Meme" width="400px" />
        {Array(count)
          .fill(0)
          .map((_, index) => (
            <Textofmeme key={index} /> // Each Text component needs a unique key
          ))}
      </div>
      <button onClick={addText} className="btn btn-primary">
        Add Text
      </button>
      <button
        onClick={() => {
          exportComponentAsJPEG(memeRef); // Export the component as JPEG
        }}
        className="btn btn-success"
      >
        Save
      </button>
    </div>
  );
};

export default Editpage;
