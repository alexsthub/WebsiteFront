import React from "react";
import "./styles/App.css";

import NavBar from "./components/Navbar";
import Header from "./components/Header";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
          <Header onClick={() => console.log("HELLO")} />
        </header>
        <div>
          <p>Hello</p>
        </div>
      </div>
    );
  }
}
