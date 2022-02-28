import * as React from "react";
import "./aboutMe.scss";
import harish from "./harish-id.png";
import { marked } from "marked";
import { LaptopScreen } from "./LaptopScreen";
import Typist from "react-typist";
import { HeaderTitle } from "../reusableComponents/HeaderTitle";

const date1: any = new Date("7/24/2017");
const date2: any = new Date();
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
const source = `# Hi There..!! 
---
I'm **Harish Soni**, from *Korba, CG*. 🇮🇳 A **Senior Software
Engineer 👨🏻‍💻 at [Coditas LLP](https://coditas.com)**. I have ${(
  diffDays / 365
).toFixed(1)} years of
experience of Developing Web and Node Applications.
## My Coding Motivations 🙏🏼
---
* An Artist is know by his/her art, and a Coder is known by
his/her code.😇 
* Don't write the code which you also cannot clean later. 💯
* A Programmer cannot stop learning.💡`;

const aboutId = "AboutMe";

export const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="about-me-overlay" />
      <HeaderTitle id={aboutId}>About</HeaderTitle>
      <div id={aboutId} className="about-me-details">
        <div className="id-card">
          <div className="left">
            <img src={harish} className="my-image" alt="id" />
          </div>
          <div className="right">
            <div className="name">Harish Soni</div>
            <div className="work">Coditas Solutions LLP, Pune</div>
            <div className="work">Senior Software Engineer</div>
            <div className="work">
              {" "}
              Exp: {(diffDays / 365).toFixed(1)} Years
            </div>
          </div>
        </div>
        <LaptopScreen>
          <div
            className="about"
            dangerouslySetInnerHTML={{ __html: marked(source) }}
          />
        </LaptopScreen>
      </div>
    </div>
  );
};
