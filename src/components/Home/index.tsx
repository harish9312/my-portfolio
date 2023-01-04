import axios from "axios";
import * as React from "react";
import Typist from "react-typist";
import { BGGradient } from "../reusableComponents/BGGradient";

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


interface IQuote { quote: string, author: string, isLoading: boolean }



export const Home = () => {
  const [quote, setQuote] = React.useState({ quote: '', author: '', isLoading: true })

  React.useEffect(() => {
    axios.get('https://api.api-ninjas.com/v1/quotes?category=education', {
      headers: {
        'X-Api-Key': 'tqfDUUXQ0aaXnkonifJ/vQ==k4ou594VrBbm8h0G'
      }
    }).then(res => {
      setQuote({
        quote: res.data[0].quote,
        author: res.data[0].author,
        isLoading: false
      })
    })
  }, [])

  return (
    <div className="home">
      <BGGradient>
        <div className="home-section" >
          <LeftSection />
          <RightSection quote={quote} />
        </div>
      </BGGradient>
    </div>
  );
};

const RightSection = (props: { quote: IQuote }) => {
  return (
    <div className="right-container" >
      <div className="right-section-quote">
        {props.quote.isLoading ? <div className="loading-quote">
          <div className="box">
            {'Loading Quote......'.split('').map((x, i) => <span key={i} >{x}</span>)}
          </div>

        </div> : <>
          <div className="quote">
            {props.quote.quote}
          </div>
          <br />
          <div className="author">
            - {props.quote.author}
          </div>
        </>}
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
