import React, { useRef, useEffect } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber'; // NOTE: import extend to use controls
import * as THREE from 'three';
import {
  EffectComposer,
  Bloom,
  ChromaticAberration
} from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import vertexShader from './shaders/vertex-shader.glsl';
import fragmentShader from './shaders/fragment-shader.glsl';

// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// extend({ OrbitControls });

export default function Background() {
  function initRenderer(canvas) {
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.physicallyCorrectLights = true;
    renderer.outputEncoding = THREE.sRGBEncoding;
  }
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zindex: -1
      }}
    >
      <Canvas gl={initRenderer}>
        <Scene />
        <EffectComposer>
          <Bloom
            intensity={0.25}
            luminanceThreshold={1}
            luminanceSmoothing={0.5}
          />
          <ChromaticAberration
            blendFunction={BlendFunction.SOFT_LIGHT}
            offset={[0.0005, 0.0005]}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

function Scene() {
  const { scene } = useThree();
  scene.background = new THREE.Color(0x14110f);
  return (
    <>
      {/* <CameraControls /> */}
      <ParticleSphere />
    </>
  );
}

// function CameraControls() {
//   const {
//     scene,
//     camera,
//     gl: { domElement }
//   } = useThree();
//   const controls = useRef();
//   return <orbitControls ref={controls} args={[camera, domElement]} />;
// }

function ParticleSphere() {
  const sphere = useRef();
  const geometry = useRef();
  const material = useRef();
  const shaderMaterialConfig = {
    extensions: {
      derivatives: '#extension GL_OES_standard_derivatives : enable'
    },
    side: THREE.DoubleSide,
    uniforms: {
      time: { value: 0 },
      uColor1: { value: new THREE.Color(0xff8400) },
      uColor2: { value: new THREE.Color(0xfc575d) },
      uColor3: { value: new THREE.Color(0x960200) },
      resolution: { value: new THREE.Vector4() }
    },
    transparent: true,
    depthTest: false,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader,
    fragmentShader
  };
  useFrame(() => {
    sphere.current.rotation.y += 0.0003;
    material.current.uniforms.time.value += 0.01;
  });
  useEffect(() => {
    const number = geometry.current.attributes.position.array.length;
    const colorRandoms = new Float32Array(number / 3);
    for (let i = 0; i < number / 3; i++) {
      colorRandoms.set([Math.random()], i);
    }
    geometry.current.setAttribute(
      'colorRandoms',
      new THREE.BufferAttribute(colorRandoms, 1)
    );
  }, []);
  return (
    <mesh ref={sphere} position={[0, 0, 3.4]}>
      <points>
        <dodecahedronBufferGeometry ref={geometry} args={[1, 50]} />
        <shaderMaterial ref={material} {...shaderMaterialConfig} />
      </points>
    </mesh>
  );
}
