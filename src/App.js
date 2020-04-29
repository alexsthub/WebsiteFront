import React from "react";
import "./styles/App.css";

import NavBar from "./components/Navbar";
import Header from "./components/Header";

import { HeaderText } from "./constants/text";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header
          name={HeaderText.name}
          description={HeaderText.description}
          handleLearnMore={() => console.log("HELLO")}
        />
        <main></main>
      </div>
    );
  }
}
