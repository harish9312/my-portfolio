import * as React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./navbar.scss";
export const Navbar = () => {
  const router = useLocation();
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="navbar-main-top">
      <div className={`navbar-main ${isOpen ? "open" : "close"}`}  >
        <div className="mobile-picker">
          {!isOpen && (
            <div onClick={() => setOpen(true)}>
              <span
                className="iconify"
                data-icon="bxs:left-arrow-square"
                data-width="60"
                data-height="60"
              ></span>
            </div>
          )}
          {isOpen && (
            <div onClick={() => setOpen(false)}>
              <span
                className="iconify"
                data-icon="bxs:right-arrow-square"
                data-width="60"
                data-height="60"
              ></span>
            </div>
          )}
        </div>
        <div className="side-nav">
          {navItems.map((x, i) => (
            <div
              key={i}
              onClick={() => setOpen(false)}
              className={`nav-item ${router.pathname === x.link ? "active" : ""
                }`}
            >
              <Link to={x.link}>
                <div className="icon">{x.icon}</div>
                <div className="link">{x.name}</div>{" "}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
};

const navItems = [
  {
    name: "Home",
    id: "home",
    icon: (
      <span
        className="iconify"
        data-icon="healthicons:ui-user-profile"
        data-width="60"
        data-height="60"
      ></span>
    ),
    link: "/",
  },
  {
    name: "Experience",
    id: "experience",
    icon: (
      <span
        className="iconify"
        data-icon="ic:baseline-work-history"
        data-width="60"
        data-height="60"
      ></span>
    ),
    link: "/experience",
  },
  {
    name: "Works",
    id: "works",
    icon: (
      <span
        className="iconify"
        data-icon="mdi:web-check"
        data-width="60"
        data-height="60"
      ></span>
    ),
    link: "/works",
  },
  {
    name: "Resume",
    id: "resume",
    icon: (
      <span
        className="iconify"
        data-icon="ant-design:file-text-filled"
        data-width="60"
        data-height="60"
      ></span>
    ),
    link: "/resume",
  },
];
