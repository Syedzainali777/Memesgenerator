import { useEffect, useState } from "react";
import Memecard from "../component/memeCards";
import { apicall } from "../api";

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
    return <div>Loading...</div>; // Show loading message while data is being fetched
  }

  return (
    <div className="container">
        <h1>Memes Generator</h1>
      <div className="row">
        {data.map((el) => (
          <div key={el.id} className="col-md-3 d-flex">
            <Memecard url={el.url} title={el.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
