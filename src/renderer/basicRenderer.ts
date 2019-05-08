import FragmentShader from "../shaders/basic.frag";
import VertexShader from "../shaders/basic.vert";

export default class BasicRenderer {
  private lastRender = 0;
  private fps = 60;
  private interval = 1000 / this.fps;
  private positionAttributeLocation: number;
  private program: WebGLProgram;
  private positionBuffer: WebGLBuffer;

  private stepCount = 0;

  constructor(private gl: WebGLRenderingContext) { }

  public createShader(gl: WebGLRenderingContext, type: number, source: string) {
    let shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success) {
      return shader;
    }

    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
  }

  public createProgram(gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader) {
    let program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    const success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (success) {
      return program;
    }

    console.error(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
  }

  public run() {
    let vertexShader = this.createShader(this.gl, this.gl.VERTEX_SHADER, VertexShader);
    let fragmentShader = this.createShader(this.gl, this.gl.FRAGMENT_SHADER, FragmentShader);
    this.program = this.createProgram(this.gl, vertexShader, fragmentShader);

    this.positionAttributeLocation = this.gl.getAttribLocation(this.program, "a_position");
    this.positionBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);

    this.loop();
  }

  private loop() {
    window.requestAnimationFrame(this.loop.bind(this));

    const currentTime = new Date().getTime();
    const delta = currentTime - this.lastRender;

    if (delta > this.interval) {
      this.update(delta);

      this.lastRender = currentTime - (delta % this.interval);
    }
  }

  private update(delta: number) {
    let position = [
      Math.sin(Math.PI * this.stepCount), 1,
      1, -1,
      -1, -1,
    ];

    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(position), this.gl.STATIC_DRAW);
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);

    this.gl.clearColor(0, 0, 0, 0);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    this.gl.useProgram(this.program);
    this.gl.enableVertexAttribArray(this.positionAttributeLocation);

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
    let size = 2;
    let type = this.gl.FLOAT;
    let normalize = false;
    let stride = 0;
    let offset = 0;
    this.gl.vertexAttribPointer(this.positionAttributeLocation, size, type, normalize, stride, offset);

    let primitiveType = this.gl.TRIANGLES;
    let count = 3;
    this.gl.drawArrays(primitiveType, offset, count);

    if (this.stepCount >= 2) {
      this.stepCount = 0;
    } else {
      this.stepCount += 0.005;
    }
  }
}