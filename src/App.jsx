import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Pages/home.jsx";
import Editpage from "./Pages/editpage.jsx";
import { Routes, Route } from "react-router-dom";
import '../src/app.css'

function App() {
  return (
    <>
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/edit/" element={<Editpage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
