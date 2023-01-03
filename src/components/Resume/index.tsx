import * as React from "react";

export const Resume = () => {
  return (
    <div id="Resume" className="about-me page">
      <iframe
        style={{ minHeight: "90vh" }}
        width="100%"
        height="100%"
        src="https://drive.google.com/file/d/1keEZVuWS_GQ32WxfE4gnf7YQxTIEvwGt/view?usp=share_link"
        allowFullScreen
        title="My Resume"
      ></iframe>
    </div>
  );
};
