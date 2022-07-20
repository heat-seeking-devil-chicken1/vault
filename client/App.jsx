import React, { Component } from "react";
import ReactDOM from "react-dom";
import MainContainer from "../client/containers/MainContainer.jsx";

//import styles from './styles.scss';
// import router
const App = () => {
  return (
    // wrap around browser
    <div className="app">
      <MainContainer />
    </div>
  );
};
export default App;

