import * as React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./experience.scss";

export const Experience = () => {
  return (
    <div className="experience">
      <div className="header">Experience</div>
      <hr />
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work-left"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2021 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Senior Software Engineer, Coditas Solutions LLP
          </h3>
          <hr />
          <p>
            Tech Lead, Framework Research, Internal Projects Management,
            Requirement Gathering
            <br />
            <br />
            JavsScript, React.js, Node.js, TypeScript, MongoDB
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer, Coditas Solutions LLP
          </h3>
          <hr />
          <p>
            Framework Research, Internal Projects Management, Client
            Communication Requirement Gathering
            <br />
            <br />
            JavsScript, React.js, Node.js, TypeScript, MongoDB
          </p>{" "}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work-left"
          date="2017 - 2019"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer, Coditas Solutions LLP
          </h3>
          <hr />
          <p>
            UI Development, UI/UX Design &amp; Development, Internal Projects
            Management <br />
            JavsScript, React.js, TypeScript
          </p>{" "}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="June 2017"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Computer Science Engineering
          </h3>
          <hr />
          <h4 className="vertical-timeline-element-subtitle">
            Shri Shankracharya Technical Campus, Bhilai
          </h4>

          <h3>B. Tech. with Honours</h3>

          <p>2013-2017</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="School of 2013"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Higher Secondary School
          </h3>
          <hr />
          <h4 className="vertical-timeline-element-subtitle">
            Adarsh Higher Secondary School, Korba
          </h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

const WorkIcon = () => (
  <span
    className="iconify"
    data-icon="ic:baseline-work"
    data-width="60"
    data-height="60"
  ></span>
);

const SchoolIcon = () => (
  <span
    className="iconify"
    data-icon="bxs:school"
    data-width="60"
    data-height="60"
  ></span>
);

const StarIcon = () => (
  <span
    className="iconify"
    data-icon="clarity:star-solid"
    data-width="60"
    data-height="60"
  ></span>
);
