import React, { useState, useContext, useEffect, useLayoutEffect } from "react";
import homeIcon from "../../assets/Images/homeIcon.png";
import { Context } from "../../contextApi/newIndex.js";
import smoothScroll from "smooth-scroll";
import { MdReorder, MdShoppingCart, MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import "./nav.scss";

export default function NavBar() {
  const [regularNav, setRegularNav] = useState();
  const [scrollToDiv, setScrolltoDiv] = useState("");
  const [size, setSize] = useState();
  const [reset, setReset] = useState(true);

  const [showHamburger, setShowHamburger] = useState(false);
  function hamChecker() {
    var x = document.getElementsByClassName("hamContainer")[0];
    if (showHamburger === false) {
      x.classList.add("hamContainerAnimate");
      setShowHamburger(!showHamburger);
    } else {
      x.classList.remove("hamContainerAnimate");
      setShowHamburger(!showHamburger);
    }
  }
  function scrollCall() {
    let home = document.getElementById("home").offsetHeight;
    const header = document.getElementById("header");
    const sticky = home;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }
  /* Gets window width and height to check if hamburger navigation or regular navigation */
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
      if (window.innerWidth <= 899) {
        setRegularNav(true);
      }
      if (window.innerWidth >= 900) {
        setRegularNav(false);
      }
    }
    window.addEventListener("resize", updateSize);
    window.addEventListener("load", updateSize);
    setInterval(() => {
      updateSize();
    }, 3000);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  /* Gets home sections offsetheight to prevent bugs in navigation header position so i get a initial position fallback. */
  useEffect(() => {
    let home = document.getElementById("home").offsetHeight;
    setTimeout(() => {
      scrollCall();
    }, 4000);
    /* sticky has fixed position depending on scrollvariable on each device*/
    if (regularNav) {
      scrollCall();
    }
    if (!regularNav) {
      const hamheader = document.getElementById("hamHeader");
      const sticky = home;
      const scrollCallBack = window.addEventListener("scroll", () => {
        if (window.pageYOffset > sticky) {
          hamheader.classList.add("sticky");
        } else {
          hamheader.classList.remove("sticky");
        }
      });
      return () => {
        window.removeEventListener("scroll", scrollCallBack);
      };
    }
  }, [regularNav, scrollToDiv]);

  function offsets(props) {
    const header = document.getElementById("header");
    const hamheader = document.getElementById("hamHeader");

    if (props === "home") {
      hamheader.classList.add("sticky");
      header.classList.add("sticky");
      window.scrollTo(0, document.getElementById("home").offsetTop);
    }
    if (props === "about") {
      window.scrollTo(0, document.getElementById("about").offsetTop);
    }

    if (props === "work") {
      window.scrollTo(0, document.getElementById("work").offsetTop);
    }

    if (props === "contact") {
      window.scrollTo(0, document.getElementById("contact").offsetTop);
    }

    if (props === "footer") {
      window.scrollTo(0, document.getElementById("footer").offsetTop);
    }
  }

  return (
    <div>
      <nav id="header" className="nav">
        <div className="homeIcon">
          <Link to="/">
            <img src={homeIcon} alt="EK logo " />
          </Link>
        </div>
        <div className="link-wrap">
          <Link to="/" onClick={() => offsets("home")} className="page-link">
            {" "}
            <p> Home </p>{" "}
          </Link>
          <Link onClick={() => offsets("about")} className="page-link">
            {" "}
            <p> About </p>{" "}
          </Link>
          <Link onClick={() => offsets("work")} className="page-link">
            {" "}
            <p> Work </p>{" "}
          </Link>
          <Link onClick={() => offsets("contact")} className="page-link">
            {" "}
            <p> Contact </p>{" "}
          </Link>
          {/* 
					<Link to="/login" className="page-link"> <p> Login </p> </Link>
					<Link to="/signup" className="page-link"> <p> Sign up </p> </Link> */}
        </div>
      </nav>
      {NavDropDown()}
    </div>
  );
}

export function NavDropDown() {
  const [showHamburger, setShowHamburger] = useState(false);
  function hamChecker() {
    var x = document.getElementsByClassName("hamContainer")[0];
    if (showHamburger === false) {
      x.classList.add("hamContainerAnimate");
      setShowHamburger(!showHamburger);
    } else {
      x.classList.remove("hamContainerAnimate");
      setShowHamburger(!showHamburger);
    }
  }

  function offsets(props) {
    const header = document.getElementById("header");
    const hamheader = document.getElementById("hamHeader");

    if (props === "home") {
      hamheader.classList.add("sticky");
      header.classList.add("sticky");
      window.scrollTo(0, document.getElementById("home").offsetTop);
    }
    if (props === "about") {
      window.scrollTo(0, document.getElementById("about").offsetTop);
    }

    if (props === "work") {
      window.scrollTo(0, document.getElementById("work").offsetTop);
    }

    if (props === "contact") {
      window.scrollTo(0, document.getElementById("contact").offsetTop);
    }

    if (props === "footer") {
      window.scrollTo(0, document.getElementById("footer").offsetTop);
    }
  }

  return (
    <nav id="hamHeader" className="hamNav">
      <div className="navBarFade">
        <button
          className="hamNavButton"
          onClick={() => {
            hamChecker();
          }}
        >
          <MdReorder />
        </button>
        <div className="hamHomeIcon">
          <Link to="/">
            <img src={homeIcon} />
          </Link>
        </div>
        <div className="hamContainer">
          <div className="hamLinkContainer">
            <Link
              to="/"
              className="link"
              onClick={() => {
                offsets("home");
                hamChecker();
              }}
            >
              <p> Home </p>
            </Link>
            <Link
              className="link"
              onClick={() => {
                hamChecker();
                offsets("about");
              }}
            >
              <p> About </p>
            </Link>
            <Link
              className="link"
              onClick={() => {
                hamChecker();
                offsets("contact");
              }}
            >
              <p> Contact </p>
            </Link>
            <Link
              className="link"
              onClick={() => {
                hamChecker();
                offsets("work");
              }}
            >
              <p> Work </p>
            </Link>
            {/* 
							<Link to="/login" className="link" onClick={() => { hamChecker() }}>
								<p> Login </p>
							</Link>
							<Link to="/signup" className="link" onClick={() => { hamChecker() }}>
								<p> Sign up </p>
							</Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
