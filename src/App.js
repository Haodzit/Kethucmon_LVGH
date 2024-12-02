import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

// Using React.lazy to load pages/components lazily
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const CharacterList = React.lazy(() => import("./components/CharacterList"));
const CharacterPage = React.lazy(() => import("./pages/CharacterPage"));

const App = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/character/:id" element={<CharacterPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
