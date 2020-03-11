import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var x = getPersonPromise();

  x.then(function(value) {
    var person = "name=" + value.name + ":id=" + value.id + ";";
    var spanElem = document.createElement("span");
    var txtElem = document.createTextNode(person);
    spanElem.appendChild(txtElem);
    document.getElementById("hi").appendChild(spanElem);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="hi">Hi, </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

async function getPersonPromise() {
  try {
    const response = await fetch('http://localhost:8000/rohit singh/012345');
    const responseJson = await response.json();
    return responseJson;
  }
  catch (error) {
    console.error(error);
  }
}

export default App;
