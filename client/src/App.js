import React, { Component } from 'react';
import './App.css';
import FormPosts from "./FormPosts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Submit Journal</h1>
        </header>
          <FormPosts/>
      </div>
    );
  }
}

export default App;
