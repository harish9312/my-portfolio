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
  "linear-gradient(120deg, rgb(151 151 151) 0%, rgb(2 0 69) 100%)",
  "linear-gradient(to right, #8360c3, #2ebf91)",
  "linear-gradient(to right, #fffbd5, #b20a2c)",
  "linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)",
  "linear-gradient(147deg, #000000 0%, #04619f 74%)",
  "linear-gradient(315deg, #000000 0%, #a29bfe 74%)",
];

export const BGGradient = (props: { children?: React.ReactChild }) => {
  const overlayId = "myOverlay";
  const [height, setHeight] = React.useState(false)
  const [activeGradient, setGradient] = React.useState(gradients[0]);
  const setOpacity = (opacity: string) => {
    const overlay = document.getElementById(overlayId) || {
      style: { opacity: "" },
    };
    overlay.style.opacity = opacity;
  };

  const isMobile = () => {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
  }

  return <div className="gradient">
    <div className={height ? "gradient-selector  mobile-height" : 'gradient-selector  mobile-touch'} onClick={() => setHeight(!height)} >
      {isMobile() && <div
        title="Click to change background gradient"
        className={`gradient-type active`}
        style={{
          backgroundImage: activeGradient,
        }}
      />}
      {isMobile() && gradients.filter(x => isMobile() && x !== activeGradient).map((gradient, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              setOpacity("0");
              setTimeout(() => {
                setGradient(gradient);
                setOpacity("1");
              }, 100);
            }}
            title="Click to change background gradient"
            className={` gradient-type${activeGradient === gradient ? " active" : ""
              }`}
            style={{
              backgroundImage: gradient,
            }}
          />
        );
      })}
    </div>

    <div
      style={{
        backgroundImage: activeGradient,
      }}
      id={overlayId}
      className="overlay"
    >
      {props.children}
    </div>
  </div>
}


export const Home = () => {

  return (
    <div className="home">
      <BGGradient>
        <div className="home-section" >
          <LeftSection />
          <RightSection />
        </div>
      </BGGradient>
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
      <div className="my-image-container">
        <img alt="my" className="my-image" src="https://avatars.githubusercontent.com/u/15139445?v=4" />
      </div>
      <div className="information">
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
            <h1 className="intro"> <span role="img" aria-label="hi" >👋</span>  Hi, I’m <span className="my-name"  >Harish</span>   </h1>
          </div>
        </Typist>
        {count ? (
          <Typist
            cursor={{
              blink: true,
            }}
            className="designation"
            onTypingDone={() => {
              const techSection = document.getElementById("techSection") as any;
              setHeight(techSection.scrollHeight);
            }}
          >
            <span className="developer">Tech Lead</span>
            <Typist.Backspace count={9} delay={2000} />
            <span className="software-developer">Tech Lead @ Coditas</span>
          </Typist>
        ) : (
          ""
        )}
        <div className="tech-section" style={{ height }} id="techSection">
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
    </div>
  );
};
