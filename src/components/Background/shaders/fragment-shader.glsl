uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
varying float vColorRandom;
varying vec2 vUv;

void main(){
  float alpha = 1.0 - smoothstep(-0.2, 0.5, length(gl_PointCoord - vec2(0.5)));
  vec3 finalColor = uColor1;
  if(vColorRandom > 0.33 && vColorRandom < 0.66){
    finalColor = uColor2;
  }
  if(vColorRandom > 0.66) {
    finalColor = uColor3;
  }
  gl_FragColor=vec4(finalColor, alpha);
	// gl_FragColor=vec4(0.7333, 0.2902, 0.1137, alpha);
}
