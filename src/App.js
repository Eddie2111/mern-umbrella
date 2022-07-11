import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
function App() {
  // Make a request for a user with a given ID
  const [data, setData]               = useState();
  const [test, setTest]               = useState({});
  const [count, setCount]             = useState(0);

  // Axios call to fetch data from backend
  const responive                     =  axios.get('https://mighty-dusk-25399.herokuapp.com/')
    .then(function (response) {
      // Condition to check if data is fetched or not
      if (count === 0){
        setData(response.data);
        setTest(response.data);
        setCount(count + 1);
      }
      // Axios burst requests to backend to get data, if data is already fetched, it will fetch data from cache
      if (count > 0){
      setTimeout(() =>  {
        setData(response.data);
        setTest(response.data);
        setCount(count + 1);
      },3000);
    }
    })

    console.log(count);
    console.log(responive,data);
    const dataTitle = test.title;
    const dataMessage = test.message;
    const dataVersion = test.version;


  return (
    <div className="App">
      <header className="App-header">
      <nav
        style={{
                  borderBottom: "solid 1px",
                  paddingBottom: "1rem",
                  fontColor: "white",
                }}>
            <Link to="/invoices">Invoices</Link> |{" "}
            <Link to="/expenses">Expenses</Link>
      </nav>
        <img src={logo} className="App-logo" alt="logo" />
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

        <p>Name of the app: {dataTitle}</p>
        <p>Message from Backend: {dataMessage}</p>
        <p>Version of the app: {dataVersion}</p>

        
      </header>
    </div>
  );
}

export default App;
