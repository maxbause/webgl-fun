import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react", "webgl", "programming"]} />
    <h1>Hey guys 👋</h1>
    <p>This is my <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API" target="_blank">WebGL</a> playground, feel free to explore!</p>
  </Layout>
)

export default IndexPage
