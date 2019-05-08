import BasicRenderer from "./basicRenderer";
import FragmentShader from "../shaders/image.frag";
import VertexShader from "../shaders/image.vert";

export default class ImageProcessingRenderer {
  constructor(private gl: WebGLRenderingContext) {}

  public run() {
    let vertexShader = BasicRenderer.createShader(this.gl, this.gl.VERTEX_SHADER, VertexShader);
    let fragmentShader = BasicRenderer.createShader(this.gl, this.gl.FRAGMENT_SHADER, FragmentShader);
    let program = BasicRenderer.createProgram(this.gl, vertexShader, fragmentShader);

    let positionAttributeLocation = this.gl.getAttribLocation(program, "a_position");
    let positionBuffer = this.gl.createBuffer();

    let position = [
     0, 1,
      1, -1,
      -1, -1,
    ];

    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(position), this.gl.STATIC_DRAW);
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);

    this.gl.clearColor(0, 0, 0, 0);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    this.gl.useProgram(program);
    this.gl.enableVertexAttribArray(positionAttributeLocation);


    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);
    let size = 2;
    let type = this.gl.FLOAT;
    let normalize = false;
    let stride = 0;
    let offset = 0;
    this.gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);

    let primitiveType = this.gl.TRIANGLES;
    let count = 3;
    this.gl.drawArrays(primitiveType, offset, count);
  }
}