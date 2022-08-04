import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a
            href="https://github.com/kellyjfitz/portfolio"
            target="_blank"
            title="See this site on GitHub"
          >
            <i class="fa-brands fa-github-square"></i>
          </a>
        </li>
        <li>
          <a
            href="https://au.linkedin.com/in/kelly-meleshko"
            target="_blank"
            title="Kelly Meleshko's LinkedIn"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
