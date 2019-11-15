import React from "react";
import './tours.css';
import image from "./images/image_tour.jpg"

function Tours() {
  return (
    <div>
     <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Popular Tour Destinations
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Africa</a>
        <a class="dropdown-item" href="#">Asia</a>
        <a class="dropdown-item" href="#">Australia</a>
        <a class="dropdown-item" href="#">Central America</a>
        <a class="dropdown-item" href="#">Europe</a>
        <a class="dropdown-item" href="#">North America</a>
        <a class="dropdown-item" href="#">South America</a>
      </div>
    </div>
      <h1>See the World Like Never Before</h1>
      <p>Guided Tours through Liberty Travel are immersive excursions with authentic experiences that highlight the local culture. Enjoy the world’s iconic attractions with VIP passes, hotels, and transportation taken care of, plus get under-the-radar insights, not typically available to independent travelers. Whether you’re traveling solo, with adults-only or with family, Liberty Travel will match you up with a professional guide who’ll personalize your vacation with a range of fascinating and unique experiences that really bring each destination to life.</p>
      <div>
        <img src ={image} />
      </div>
    </div>
  );
}

export default Tours;