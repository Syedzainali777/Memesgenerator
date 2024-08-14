import React, { useEffect, useState } from "react";
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
    <div className="row">
      {data.map((el) => (
        <Memecard key={el.id} url={el.url} title={el.name} />
      ))}
    </div>
  );
};

export default Homepage;
