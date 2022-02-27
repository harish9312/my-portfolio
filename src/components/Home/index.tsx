import * as React from "react";
import Typist from "react-typist";
import harish from "./boy.png";
import "./home.scss";
import {
  CSS3,
  HTML,
  JS,
  Mongo,
  Nest,
  Next,
  NodeJS,
  ReactLogo,
  SASS,
  Shell,
  Strapi,
  TS,
} from "./Logos";

const gradients = [
  "linear-gradient(120deg, #c2ff38 0%, #ff3f48 100%)",
  "linear-gradient(to right, #8360c3, #2ebf91)",
  "linear-gradient(to right, #fffbd5, #b20a2c)",
  "linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)",
  "linear-gradient(147deg, #000000 0%, #04619f 74%)",
  "linear-gradient(315deg, #000000 0%, #a29bfe 74%)",
];

export const Home = () => {
  const overlayId = "myOverlay";
  const [activeGradient, setGradient] = React.useState(gradients[0]);
  const setOpacity = (opacity: string) => {
    const overlay = document.getElementById(overlayId) || {
      style: { opacity: "" },
    };
    overlay.style.opacity = opacity;
  };

  return (
    <div className="home">
      <div
        style={{
          backgroundImage: activeGradient,
        }}
        id={overlayId}
        className="overlay"
      />
      <div className="gradient-selector">
        {gradients.map((gradient, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setOpacity("0");
                setTimeout(() => {
                  setGradient(gradient);
                  setOpacity("0.5");
                }, 100);
              }}
              title="Click to change background gradient"
              className={` gradient-type${
                activeGradient === gradient ? " active" : ""
              }`}
              style={{
                backgroundImage: gradient,
              }}
            />
          );
        })}
      </div>
      <LeftSection />
      <RightSection />
    </div>
  );
};

const RightSection = () => {
  return (
    <div className="right-section">
      <div className="image-container">
        <img src={harish} alt="my-pic" />
      </div>
    </div>
  );
};

const LeftSection = () => {
  const [count, setCount] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  return (
    <div className="left-section">
      <Typist
        cursor={{
          show: false,
        }}
        avgTypingDelay={100}
        onTypingDone={() =>
          setTimeout(() => {
            setCount(1);
          }, 500)
        }
      >
        <div className="left-main">
          <h1 className="intro"> 👋 Hi, I’m Harish Soni </h1>
          <div className="i-am">I am a</div>
        </div>
      </Typist>
      {count ? (
        <Typist
          cursor={{
            blink: true,
          }}
          onTypingDone={() => {
            const techSection = document.getElementById("techSection") as any;
            console.log(">> techSection", techSection);
            setHeight(techSection.scrollHeight);
          }}
        >
          <span className="developer">Developer</span>
          <Typist.Backspace count={9} delay={2000} />
          <span className="software-developer">Full Stack Developer</span>
        </Typist>
      ) : (
        ""
      )}
      <div className="tech-section" style={{ height }} id="techSection">
        <div className="tech-stack">Tech Satck I work on</div>
        <div className="stack-container">
          <div className="tech-icon">
            <HTML />
          </div>
          <div className="tech-icon">
            <CSS3 />
          </div>
          <div className="tech-icon">
            <JS />
          </div>
          <div className="tech-icon">
            <ReactLogo />
          </div>
          <div className="tech-icon">
            <TS />
          </div>
          <div className="tech-icon">
            <Next />
          </div>
          <div className="tech-icon">
            <SASS />
          </div>
          <div className="tech-icon">
            <NodeJS />
          </div>
          <div className="tech-icon">
            <Strapi />
          </div>
          <div className="tech-icon">
            <Nest />
          </div>
          <div className="tech-icon">
            <Mongo />
          </div>
          <div className="tech-icon">
            <Shell />
          </div>
        </div>
      </div>
    </div>
  );
};
