import React from "react";
import { Link } from "gatsby"

const TOC = () => (
  <>
  <h3>Table of contents:</h3>
  <ul className="uk-list uk-list-bullet">
    <li><Link to="basic-renderer">Basic renderer</Link></li>
  </ul>
  </>
);

export default TOC;