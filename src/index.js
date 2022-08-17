import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Route,Routes } from "react-router-dom";

// routes and pages
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Signup from "./routes/signup";
import Login from "./routes/login";
import Success from "./routes/success";
import Home from "./routes/home";
import ProfileUpdate from "./routes/firsttime/profileUpdate";
import NotFound from "./routes/notFound";
import Test from './routes/Test';
//import localStorage from "localstorage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/"        element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="signup"   element={<Signup />} />
      <Route path="login"    element={<Login />} />
      <Route path="success"  element={<Success />} />
      <Route path="home"     element={<Home />} />
      <Route path="profileUpdate" element={<ProfileUpdate />} />
      <Route path="Test" element={<Test />} />
      <Route component={NotFound} />
    </Routes>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

