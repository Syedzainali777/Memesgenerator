import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Textofmeme from "../component/Textofmeme.jsx";

const Editpage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);

  const addText = () => {
    setCount(count + 1); // Correctly updating the state
  };

  return (
    <div>
      <div>
        <h1>Edit Page</h1>
        <img src={params.get("url")} alt="Meme" width="400px" />
        {Array(count)
          .fill(0)
          .map((_, index) => (
            <Textofmeme key={index} /> // Each Text component needs a unique key
          ))}
      </div>
      <button onClick={addText}>Add Text</button>
    </div>
  );
};

export default Editpage;
