import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
import Collection from "./Components/Collection";
import Form from "./Components/Form";

const URL = "";

function App() {
  const [collection, setCollection] = useState([]);

  //Fetching initial data to be passed down
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setCollection(data));
  }, []);

  const onsubmit = (newGame) => {
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newGame),
    })
      .then((response) => response.json())
      .then(game > setCollection([...collection, game]));
  };

  //passing down information to Collection and Form

  return (
    <div className="app-container">
      <Collection collection={collection} />
      <Form onsubmit={onsubmit} />
    </div>
  );
}

export default App;
