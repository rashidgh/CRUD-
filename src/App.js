import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/navbarComponents/Navbar";
import CreateEmployees from "./Components/employComponents/CreateEmployees";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Employee from "./Components/employComponents/Employee";
import EditEmployess from "./Components/employComponents/EditEmployess";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ToastContainer theme="dark" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-emp" element={<CreateEmployees />} />
          <Route path="/view-more/:id" element={<Employee />} />
          <Route path="/edit-emp/:id" element={<EditEmployess />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
