import "./nav.css";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
function Nav() {
  const dummy = useRef(null);
  const nav = useRef(null);
  useEffect(() => {
    let topPage = (entries, observer) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          nav.current.classList.remove("dark");
        } else {
          nav.current.classList.add("dark");
        }
      });
    };
    let observer = new IntersectionObserver(topPage, { threshold: 1 });
    if (dummy.current) observer.observe(dummy.current);
  }, []);
  return (
    <>
      <div className="dummy" ref={dummy}></div>
      <nav ref={nav}>
        <div className="ln1">
          <a href="/#home">
            <h2>Kyle Huang</h2>
          </a>
        </div>
        <div className="ln2">
          <ul className="navlinks">
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <Link to="">Skills</Link>
            </li>
            <button className="btnGreen">Contact</button>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
