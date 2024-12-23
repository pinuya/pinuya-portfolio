import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Stats from "three/addons/libs/stats.module.js";

const ParticleSystem = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    const state = {
      particlesData: [],
      maxParticleCount: 1000,
      particleCount: 500,
      r: 800,
      effectController: {
        showDots: true,
        showLines: true,
        minDistance: 150,
        limitConnections: false,
        maxConnections: 20,
        particleCount: 500,
      },
    };

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(
      45,
      rect.width / rect.height,
      1,
      4000
    );
    camera.position.z = 1750;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(rect.width, rect.height);
    container.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, container);
    controls.minDistance = 1000;
    controls.maxDistance = 3000;
    controls.enableZoom = false; // Disable zoom
    controls.enableRotate = false; // Disable rotation
    controls.enablePan = false; // Disable panning

    // Group
    const group = new THREE.Group();
    scene.add(group);

    // Box helper
    const helper = new THREE.BoxHelper(
      new THREE.Mesh(new THREE.BoxGeometry(state.r, state.r, state.r))
    );
    helper.material.color.setHex(0x474747); // Cor do cubo
    helper.material.blending = THREE.AdditiveBlending; // Configuração de blending
    helper.material.transparent = true; // Permite transparência
    helper.material.opacity = 0; // Torna o fundo totalmente transparente
    helper.material.visible = false; // Faz com que o BoxHelper seja invisível
    group.add(helper);

    // Particles
    const segments = state.maxParticleCount * state.maxParticleCount;
    const positions = new Float32Array(segments * 3);
    const colors = new Float32Array(segments * 3);
    const particlePositions = new Float32Array(state.maxParticleCount * 3);

    const particles = new THREE.BufferGeometry();
    const pointCloud = new THREE.Points(
      particles,
      new THREE.PointsMaterial({
        color: 0xffffff,
        size: 3,
        blending: THREE.AdditiveBlending,
        transparent: true,
        sizeAttenuation: false,
      })
    );

    // Initialize particles
    for (let i = 0; i < state.maxParticleCount; i++) {
      const x = Math.random() * state.r - state.r / 2;
      const y = Math.random() * state.r - state.r / 2;
      const z = Math.random() * state.r - state.r / 2;

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      state.particlesData.push({
        velocity: new THREE.Vector3(
          -1 + Math.random() * 2,
          -1 + Math.random() * 2,
          -1 + Math.random() * 2
        ),
        numConnections: 0,
      });
    }

    particles.setDrawRange(0, state.particleCount);
    particles.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3).setUsage(
        THREE.DynamicDrawUsage
      )
    );
    group.add(pointCloud);

    // Lines
    const linesMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
    });

    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage)
    );
    linesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3).setUsage(THREE.DynamicDrawUsage)
    );
    linesGeometry.setDrawRange(0, 0);

    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    group.add(linesMesh);

    // Stats
    const stats = new Stats();
    stats.dom.style.display = "none"; // Hide the stats (FPS)
    container.appendChild(stats.dom);
    statsRef.current = stats;

    // Animation
    function animate() {
      let vertexpos = 0;
      let colorpos = 0;
      let numConnected = 0;

      for (let i = 0; i < state.particleCount; i++) {
        state.particlesData[i].numConnections = 0;
      }

      for (let i = 0; i < state.particleCount; i++) {
        const particleData = state.particlesData[i];

        particlePositions[i * 3] += particleData.velocity.x;
        particlePositions[i * 3 + 1] += particleData.velocity.y;
        particlePositions[i * 3 + 2] += particleData.velocity.z;

        if (
          particlePositions[i * 3 + 1] < -state.r / 2 ||
          particlePositions[i * 3 + 1] > state.r / 2
        ) {
          particleData.velocity.y = -particleData.velocity.y;
        }

        if (
          particlePositions[i * 3] < -state.r / 2 ||
          particlePositions[i * 3] > state.r / 2
        ) {
          particleData.velocity.x = -particleData.velocity.x;
        }

        if (
          particlePositions[i * 3 + 2] < -state.r / 2 ||
          particlePositions[i * 3 + 2] > state.r / 2
        ) {
          particleData.velocity.z = -particleData.velocity.z;
        }

        if (
          state.effectController.limitConnections &&
          particleData.numConnections >= state.effectController.maxConnections
        ) {
          continue;
        }

        for (let j = i + 1; j < state.particleCount; j++) {
          const particleDataB = state.particlesData[j];
          if (
            state.effectController.limitConnections &&
            particleDataB.numConnections >=
              state.effectController.maxConnections
          ) {
            continue;
          }

          const dx = particlePositions[i * 3] - particlePositions[j * 3];
          const dy =
            particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
          const dz =
            particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < state.effectController.minDistance) {
            particleData.numConnections++;
            particleDataB.numConnections++;

            const alpha = 1.0 - dist / state.effectController.minDistance;

            positions[vertexpos++] = particlePositions[i * 3];
            positions[vertexpos++] = particlePositions[i * 3 + 1];
            positions[vertexpos++] = particlePositions[i * 3 + 2];

            positions[vertexpos++] = particlePositions[j * 3];
            positions[vertexpos++] = particlePositions[j * 3 + 1];
            positions[vertexpos++] = particlePositions[j * 3 + 2];

            colors[colorpos++] = alpha;
            colors[colorpos++] = alpha;
            colors[colorpos++] = alpha;

            colors[colorpos++] = alpha;
            colors[colorpos++] = alpha;
            colors[colorpos++] = alpha;

            numConnected++;
          }
        }
      }

      linesMesh.geometry.setDrawRange(0, numConnected * 2);
      linesMesh.geometry.attributes.position.needsUpdate = true;
      linesMesh.geometry.attributes.color.needsUpdate = true;
      pointCloud.geometry.attributes.position.needsUpdate = true;

      const time = Date.now() * 0.001;
      group.rotation.y = time * 0.1;

      renderer.render(scene, camera);
      stats.update();
    }

    renderer.setAnimationLoop(animate);

    // Handle container resizing
    const resizeObserver = new ResizeObserver(() => {
      const newRect = container.getBoundingClientRect();
      camera.aspect = newRect.width / newRect.height;
      camera.updateProjectionMatrix();
      renderer.setSize(newRect.width, newRect.height);
    });

    resizeObserver.observe(container);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
      renderer.setAnimationLoop(null);
      container.removeChild(renderer.domElement);
      statsRef.current?.dom && container.removeChild(statsRef.current.dom);
      scene.clear();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
};

export default ParticleSystem;
