import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BasicRendererPage = () => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react", "webgl", "programming", "basic", "renderer"]} />
    <h1>Basic renderer</h1>
    <canvas id="basic-renderer" width="400" height="300"></canvas>
  </Layout>
)

export default BasicRendererPage
