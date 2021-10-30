import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  //states
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([]);

  //useEffect

  useEffect(() => {
    fetchTours();
  }, []);

  //functions
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setPlaces(tours);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  } else {
    return (
      <main>
        <Tours places={places} />
      </main>
    );
  }
}

export default App;
