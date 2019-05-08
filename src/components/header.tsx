import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: "rebeccapurple",
      marginBottom: "1.45rem",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div style={{ width: "32px" }}>
        <a href="https://github.com/maxbause/webgl-fun" target="_blank">
          <Image />
        </a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

export default Header
