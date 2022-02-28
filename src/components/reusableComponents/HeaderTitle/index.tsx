import Typist from "react-typist";

import "./headerTitle.scss";

export const HeaderTitle = (props: { children: any; id?: string }) => {
  return (
    <>
      <Typist
        cursor={{
          hideWhenDone: true,
        }}
        onTypingDone={() => {
          const element = document.getElementById(props.id as any) as any;
          if (element) {
            element.style.opacity = "1";
          }
        }}
      >
        <div className="header">{props.children}</div>
      </Typist>
      <hr className="header-hr" />
    </>
  );
};
