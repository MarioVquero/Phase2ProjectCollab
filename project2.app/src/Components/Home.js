import React, { useEffect, useState } from "react";
import Games from "./Games";
import Description from "./Description";

function Home({ game }) {
  return (
    <div className="Home">
      <Games gameImage={game.image} gameTitle={game.title} />
      <Description gameInfo={game} />
    </div>
  );
}

export default Home;
