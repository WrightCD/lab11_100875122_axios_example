import logo from "./logo.svg";
import "./App.css";
import React from "react";
import PersonList from "./PersonList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="userlist">
          <h1>User List</h1>
        </div>
        <PersonList />
      </header>
    </div>
  );
}

export default App;
