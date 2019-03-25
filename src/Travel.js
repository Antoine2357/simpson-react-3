// src/Quote.js
import React from "react";

const Travel = ({ destination, country, photo , distance }) => (
  <figure>
    <h1>{destination}</h1>
    <img src={photo} alt={destination} />
    <figcaption>
      <h2>{country}</h2>
      <h3>{distance}</h3>
    </figcaption>
  </figure>
);

export default Travel;