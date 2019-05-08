import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BasicRenderer from "../renderer/basicRenderer";

interface IState {
  webGLWarning: string;
}

export default class BasicRendererPage extends React.Component<{}, IState> {
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
      const basicRenderer = new BasicRenderer(gl);
      basicRenderer.run();
    }
  }

  public render() {
    return (
      <Layout>
        <SEO title="Home" keywords={["gatsby", "application", "react", "webgl", "programming", "basic", "renderer"]} />
        <h1>Basic renderer</h1>
        {this.state.webGLWarning ?
          <p><i>{this.state.webGLWarning} ️️️😖</i></p>
          :
          <canvas id="basic-renderer" width="400" height="300" ref={this.ref}></canvas>
        }
      </Layout>
    );
  }
}
