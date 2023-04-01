import React,{useState} from "react";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Navbar from "./Layout/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/pages/PageNotFound";
import AddNewUser from "./components/AddNewUser";
import EditUser from "./components/EditUser";
import ViewUser from "./components/ViewUser";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/pages/Login";

const App = () => {
  
  return (
    <BrowserRouter>
    
      <Navbar />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="coloured"
      />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add" element={<AddNewUser />} />
        <Route path="/edit/user/:id" element={<EditUser />} />
        <Route path="/view/user/:id" element={<ViewUser />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
     
    </BrowserRouter>
  );
};
export default App;
