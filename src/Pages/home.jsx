import { useEffect, useState } from "react";
import Memecard from "../component/memeCards";
import { apicall } from "../api";
import './home.css';

const Homepage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apicall()
      .then((response) => {
        setData(response.data.memes);
        setLoading(false); // Data loaded, stop showing the loading message
      })
      .catch((error) => {
        console.error("Error fetching memes:", error);
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>; // Center the loading message
  }

  return (
    <div className="container-fluid bg-secondary py-5">
      <div className="title-head bg-black d-flex align-items-center">
        <h1 className="text-light text-center bg-black">
          Memes Generator App
        </h1>
      </div>
      <div className="row">
        {data.map((el) => (
          <div
            key={el.id}
            className="col-md-4 col-lg-3 mt-5 mb-4 d-flex justify-content-center"
          >
            <Memecard url={el.url} title={el.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
