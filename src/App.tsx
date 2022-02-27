import React from "react";
import { HashRouter, Route } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import ReactTooltip from "react-tooltip";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Experience } from "./components/Experience";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <ReactTooltip />
      <HashRouter>
        <Navbar />
        <SlideRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} />
        </SlideRoutes>
      </HashRouter>
    </div>
  );
}

export default App;
