import * as React from "react";

import "./laptopScreen.scss";

export const LaptopScreen = (props: any) => {
  return (
    <div className="laptop">
      <div className="laptop-screen">
        <div className="laptop-content">{props.children}</div>
      </div>
      <div className="laptop-base">
        <div className="laptop-trackpad"></div>
      </div>
    </div>
  );
};
