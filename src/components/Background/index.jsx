import React, { useRef, useEffect } from 'react';
import { Canvas, useThree, useFrame, extend } from '@react-three/fiber';
import * as THREE from 'three';
import {
  EffectComposer,
  Bloom,
  ChromaticAberration
} from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import vertexShader from './shaders/vertex-shader.glsl';
import fragmentShader from './shaders/fragment-shader.glsl';
import './styles';

// TODO: make background mobile responsive

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
extend({ OrbitControls });

// Color 1: f3ff2b
// Color 2: 49d91a

export default function Background() {
  function initRenderer(canvas) {
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      alpha: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.NoToneMapping;
    // renderer.setClearColor(0xff0000, 0.5); // NOTE: check this
  }
  return (
    <div className="background">
      <Canvas gl={initRenderer}>
        <Scene />
        <CameraControls />
        <ParticleSphere />
        <EffectComposer>
          <Bloom
            intensity={0.25}
            luminanceThreshold={1}
            luminanceSmoothing={0.5}
          />
          <ChromaticAberration
            blendFunction={BlendFunction.LIGHTEN}
            offset={[0.0005, 0.0005]}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

function Scene() {
  const { scene } = useThree();
  scene.background = new THREE.Color(0x0a0a0a);
  return <></>;
}

function CameraControls() {
  const {
    scene,
    camera,
    gl: { domElement }
  } = useThree();
  const controls = useRef();
  return <orbitControls ref={controls} args={[camera, domElement]} />;
}

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
      uColor1: { value: new THREE.Color(0xeee82c) },
      uColor2: { value: new THREE.Color(0x19381f) },
      uColor3: { value: new THREE.Color(0x91cb3e) },
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
    material.current.uniforms.time.value += 0.005;
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
    <mesh ref={sphere} position={[0, -0.05, 3.5]}>
      <points>
        <dodecahedronBufferGeometry ref={geometry} args={[0.75, 50]} />
        <shaderMaterial ref={material} {...shaderMaterialConfig} />
      </points>
    </mesh>
  );
}
