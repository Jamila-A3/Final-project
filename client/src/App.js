import React from "react";
// import Login from "./components/pages/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
// import About from "./components/pages/About";
import Tours from "./components/pages/Tours";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import SearchResultContainer from "./components/pages/SearchResultContainer";
// import AuthService from './components/pages/AuthService';
// import withAuth from './components/pages/withAuth';
// const Auth = new AuthService();


function App(){
  return (
    <Router>
      <div>
        <Navbar/>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/about" component={About} /> */}
        <Route exact path="/tours" component={Tours} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/searchresultscontainer" component={SearchResultContainer} />
        {/* <Route path="/contact" component={AuthService} /> */}
        {/* <Route path="/contact" component={withAuth} /> */}
      </div>
    </Router>
  )
      
}


export default App;
