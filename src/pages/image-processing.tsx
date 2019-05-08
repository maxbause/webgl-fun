import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageProcessingRenderer from "../renderer/imageProcessing";

interface IState {
  webGLWarning: string;
}

export default class ImageProcessingPage extends React.Component<{}, IState> {
  private ref: React.RefObject<HTMLCanvasElement>;

  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      webGLWarning: "",
    };
  }

  public componentDidMount() {
    const gl = this.ref.current.getContext("webgl") || this.ref.current.getContext("experimental-webgl");
    if (!gl) {
      this.setState({
        webGLWarning: "Sorry, but your browser does not suppport webgl."
      })
    } else {
      const imageProcessingRenderer = new ImageProcessingRenderer(gl);
      imageProcessingRenderer.run();
    }
  }

  public render() {
    return (
      <Layout>
        <SEO title="Home" keywords={["gatsby", "application", "react", "webgl", "programming", "basic", "renderer"]} />
        <h1>Image processing</h1>
        {this.state.webGLWarning ?
          <p><i>{this.state.webGLWarning} ️️️😖</i></p>
          :
          <canvas id="basic-renderer" width="300" height="200" ref={this.ref}></canvas>
        }
      </Layout>
    );
  }
}
