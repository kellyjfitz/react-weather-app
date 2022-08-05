import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a
            href="https://github.com/kellyjfitz/react-weather-app"
            target="_blank"
            title="See this site on GitHub"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github-square"></i>
          </a>
        </li>
        <li>
          <a
            href="https://au.linkedin.com/in/kelly-meleshko"
            target="_blank"
            title="Kelly Meleshko's LinkedIn"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
