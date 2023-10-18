import React from "react";

function Games({ gameImage, gameTitle }) {
  return (
    <table>
      <img src={gameImage} alt={gameTitle} />
    </table>
  );
}

export default Games;
