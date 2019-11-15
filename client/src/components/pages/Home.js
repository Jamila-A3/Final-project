import React from "react";
import './Home.css';
import { BrowserRouter as Router} from "react-router-dom";
// import SearchResultContainer from "./SearchResultContainer";
import image from "./images/images.png"

function Home() {
  return (
    
    <div>
      <Router>
      {/* <SearchResultContainer/> */}
      </Router>
      <h1>Great Silk Road Travel</h1>
      <h1>Welcome to our website</h1>
      <div>
        <img src ={image} />
      </div>
      <p> Dreaming of a romantic getaway to Hawaii or an exciting vacation in Las Vegas? Maybe you're planning your honeymoon. Perhaps taking a cruise in the Mediterranean or diving along the Great Barrier Reef is on your list of things to do before you die. If planning the trip and making the reservations seem like a lot of work just to get some rest and relaxation, you've come to the right place! The professional travel agents at Great Silk Road Travel Agency have been planning all-inclusive vacations, charters, tours and vacation packages for individuals, families and groups, and we'd love to do the same for you. Call or e-mail us for a free quote and you'll be on your way to your dream vacation!</p>
      
    </div>
  );
}

export default Home;