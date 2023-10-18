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
  // fetching the json file and setting the data of json into setCollection.
  // Now our data is available is stored in collection

  const onsubmit = (newGame) => {
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newGame),
      // Here we are posting the newGame into our json file .
    })
      .then((response) => response.json())
      .then((game) => setCollection([...collection, game]));
    // we are getting the response back and setting game into the setCollection
  };
  //

  return (
    <div className="app-container">
      <Collection collection={collection} />
      {/* passing down information to Collection*/}
      <Form onsubmit={onsubmit} />
      {/* passing down the onSubmit function down to Form. */}
    </div>
  );
}

export default App;
