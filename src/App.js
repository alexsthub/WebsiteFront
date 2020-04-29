import React from "react";
import "./styles/App.css";

import Header from "./components/header";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
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
