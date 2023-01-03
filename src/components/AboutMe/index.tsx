import axios from "axios";
import { BGGradient } from "../Home";
import { HeaderTitle } from "../reusableComponents/HeaderTitle";
import "./aboutMe.scss";
import * as React from "react";
// import { marked } from "marked";
// import harish from "./harish-id.png";
// import { LaptopScreen } from "./LaptopScreen";
import { Image, Shimmer } from 'react-shimmer'

const date1: any = new Date("7/24/2017");
const date2: any = new Date();
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// const source = `# Hi There..!! 
// ---
// I'm **Harish Soni**, from *Korba, CG*. 🇮🇳 A **Tech Lead 👨🏻‍💻 at [Coditas LLP](https://coditas.com)**. I have ${(
//     diffDays / 365
//   ).toFixed(1)} years of
// experience of Developing Web and Node Applications.
// ## My Coding Motivations 🙏🏼
// ---
// * An Artist is know by his/her art, and a Coder is known by
// his/her code.😇 
// * Don't write the code which you also cannot clean later. 💯
// * A Programmer cannot stop learning.💡`;

const aboutId = "AboutMe";

export const AboutMe = () => {
  const [repoData, setRepoData] = React.useState({ repos: [], isLoading: true })
  
  React.useEffect(() => {
    axios.get(
      'https://api.github.com/users/harish9312/repos?per_page=100&sort=updated',
      {
        headers: {
          "Authorization": 'Bearer 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'
        }
      }
    ).then((result) => {
      setRepoData({
        isLoading: false, repos: result.data
      })
    });
  }, [])

  return (
    <BGGradient>
      <>
        <div className="about-me-overlay" />
        <HeaderTitle id={aboutId}>Who am I?</HeaderTitle>
        <div id={aboutId} className="about-me-details">
          <div className="right">
            <div className="name">Harish Soni</div>
            <div className="work">Coditas Solutions LLP, Pune</div>
            <div className="work">Tech Lead</div>
            <div className="work">
              {" "}
              Exp: {(diffDays / 365).toFixed(1)} Years
            </div>
          </div>
          <div className="about-me">
            {/* <div className="git-title" >Repos</div> */}
            <div className="repos-container">
              {repoData.repos.map((x: { html_url: string, name: string }) => {
                return <div className="about-me-git" >
                  <a href={x.html_url} target="_blank" className="git-link"rel="noopener noreferrer"  >
                    <div className="repo-image">
                      <Image
                        fallback={<Shimmer className="repo-image" width={300} height={200} />}
                        src={`https://opengraph.githubassets.com/90a1b0a9a526e80d41861ec36e87bf08ab59b581282e855b0c5a1123c1ceb99c/harish9312/${x.name}`}
                      />
                    </div>
                  </a>
                </div>
              })}
            </div>
          </div>

        </div>
      </>
    </BGGradient>
  );
};


// const Backup = () => {
//   return <>
//     <div className="about-me-overlay" />
//     <HeaderTitle id={aboutId}>About</HeaderTitle>
//     <div id={aboutId} className="about-me-details">
//       <div className="id-card">
//         <div className="left">
//           <img src={harish} className="my-image" alt="id" />
//         </div>
//         <div className="right">
//           <div className="name">Harish Soni</div>
//           <div className="work">Coditas Solutions LLP, Pune</div>
//           <div className="work">Tech Lead</div>
//           <div className="work">
//             {" "}
//             Exp: {(diffDays / 365).toFixed(1)} Years
//           </div>
//         </div>
//       </div>
//       <LaptopScreen>
//         <div
//           className="about"
//           dangerouslySetInnerHTML={{ __html: marked(source) }}
//         />
//       </LaptopScreen>
//     </div>
//   </>
// }