import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import ReactTooltip from "react-tooltip";
import "./App.scss";
import { AboutMe } from "./components/AboutMe";
import { Experience } from "./components/Experience";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Resume } from "./components/Resume";

function App() {
  return (
    <div className="App">
      <ReactTooltip />
      <BrowserRouter>
        <Navbar />
        <SlideRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </SlideRoutes>
      </BrowserRouter>
    </div>
  );
}

export default App;
