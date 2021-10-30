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

  const removeTours = (id) => {
    const newTours = places.filter((place) => place.id !== id);
    setPlaces(newTours);
  };

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
  }
  if(places.length === 0){
    return(
      <main>
        <div className="title" >
          <h2>No tours left</h2>
          <button className="btn" onClick={fetchTours} >Refresh</button>
        </div>
      </main>
    )
  } 
  else {
    return (
      <main>
        <Tours places={places} removeTours={removeTours} />
      </main>
    );
  }
}

export default App;
