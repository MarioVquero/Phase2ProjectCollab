import React from "react";

function Description({ gameInfo }) {
  const [title, image, yearOfRelease, rating, review] = gameInfo;

  return (
    <div>
      <img src={image} />
      <h1>{title}</h1>
      <h2>{yearOfRelease}</h2>
      <h3>{rating}</h3>
      <p>{review}</p>
    </div>
  );
}

export default Description;
