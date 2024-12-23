import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import Stats from "three/addons/libs/stats.module.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const ThreeJsParticles: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let container: HTMLDivElement | null;
    let stats: Stats;
    let camera: THREE.PerspectiveCamera;
    let scene: THREE.Scene;
    let renderer: THREE.WebGLRenderer;
    let group: THREE.Group;
    let pointCloud: THREE.Points;
    let linesMesh: THREE.LineSegments;
    let particles: THREE.BufferGeometry;
    let positions: Float32Array;
    let colors: Float32Array;
    let particlePositions: Float32Array;
    const particlesData: ParticleData[] = [];

    const maxParticleCount = 1000;
    let particleCount = 500;
    const r = 800;
    const rHalf = r / 2;

    const effectController: EffectController = {
      showDots: true,
      showLines: true,
      minDistance: 150,
      limitConnections: false,
      maxConnections: 20,
      particleCount: 500,
    };

    const init = () => {
      container = containerRef.current;

      if (!container) return;

      camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        4000
      );
      camera.position.z = 1750;

      // Criação dos controles da câmera
      const controls = new OrbitControls(camera, container);
      controls.minDistance = 1000;
      controls.maxDistance = 3000;

      // Desabilita o zoom
      controls.enableZoom = false;

      // Desabilita o scroll (quando você rola com o mouse, isso move a cena)
      controls.enableRotate = false;
      controls.enablePan = false;

      scene = new THREE.Scene();
      scene.background = null; // Remove o fundo da cena, tornando-o transparente

      group = new THREE.Group();
      scene.add(group);

      // Criação do BoxHelper com material transparente (sem fundo)
      const helper = new THREE.BoxHelper(
        new THREE.Mesh(new THREE.BoxGeometry(r, r, r))
      );
      helper.material.color.setHex(0x474747); // Cor do cubo
      helper.material.blending = THREE.AdditiveBlending; // Configuração de blending
      helper.material.transparent = true; // Permite transparência
      helper.material.opacity = 0; // Torna o fundo totalmente transparente
      helper.material.visible = false; // Faz com que o BoxHelper seja invisível
      group.add(helper);

      // Criação da geometria das partículas
      const segments = maxParticleCount * maxParticleCount;
      positions = new Float32Array(segments * 3);
      colors = new Float32Array(segments * 3);

      const pMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 3,
        blending: THREE.AdditiveBlending,
        transparent: true,
        sizeAttenuation: false,
      });

      particles = new THREE.BufferGeometry();
      particlePositions = new Float32Array(maxParticleCount * 3);

      for (let i = 0; i < maxParticleCount; i++) {
        const x = Math.random() * r - r / 2;
        const y = Math.random() * r - r / 2;
        const z = Math.random() * r - r / 2;

        particlePositions[i * 3] = x;
        particlePositions[i * 3 + 1] = y;
        particlePositions[i * 3 + 2] = z;

        particlesData.push({
          velocity: new THREE.Vector3(
            -1 + Math.random() * 2,
            -1 + Math.random() * 2,
            -1 + Math.random() * 2
          ),
          numConnections: 0,
        });
      }

      particles.setDrawRange(0, particleCount);
      particles.setAttribute(
        "position",
        new THREE.BufferAttribute(particlePositions, 3).setUsage(
          THREE.DynamicDrawUsage
        )
      );

      pointCloud = new THREE.Points(particles, pMaterial);
      group.add(pointCloud);

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage)
      );
      geometry.setAttribute(
        "color",
        new THREE.BufferAttribute(colors, 3).setUsage(THREE.DynamicDrawUsage)
      );
      geometry.computeBoundingSphere();
      geometry.setDrawRange(0, 0);

      const material = new THREE.LineBasicMaterial({
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
      });

      linesMesh = new THREE.LineSegments(geometry, material);
      group.add(linesMesh);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Altere para alpha: true para fundo transparente
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setAnimationLoop(animate);
      container.appendChild(renderer.domElement);

      stats = new Stats();
      //   container.appendChild(stats.dom);

      window.addEventListener("resize", onWindowResize);

      // Bloqueia o scroll da página
      const disableScroll = (event: WheelEvent) => {
        event.preventDefault();
      };

      container?.addEventListener("wheel", disableScroll, { passive: false });

      return () => {
        container?.removeEventListener("wheel", disableScroll);
      };
    };

    const onWindowResize = () => {
      if (!camera || !renderer) return;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      let vertexpos = 0;
      let colorpos = 0;
      let numConnected = 0;

      for (let i = 0; i < particleCount; i++)
        particlesData[i].numConnections = 0;

      for (let i = 0; i < particleCount; i++) {
        const particleData = particlesData[i];

        particlePositions[i * 3] += particleData.velocity.x;
        particlePositions[i * 3 + 1] += particleData.velocity.y;
        particlePositions[i * 3 + 2] += particleData.velocity.z;

        if (
          particlePositions[i * 3 + 1] < -rHalf ||
          particlePositions[i * 3 + 1] > rHalf
        )
          particleData.velocity.y = -particleData.velocity.y;

        if (
          particlePositions[i * 3] < -rHalf ||
          particlePositions[i * 3] > rHalf
        )
          particleData.velocity.x = -particleData.velocity.x;

        if (
          particlePositions[i * 3 + 2] < -rHalf ||
          particlePositions[i * 3 + 2] > rHalf
        )
          particleData.velocity.z = -particleData.velocity.z;

        if (
          effectController.limitConnections &&
          particleData.numConnections >= effectController.maxConnections
        )
          continue;

        for (let j = i + 1; j < particleCount; j++) {
          const particleDataB = particlesData[j];
          if (
            effectController.limitConnections &&
            particleDataB.numConnections >= effectController.maxConnections
          )
            continue;

          const dx = particlePositions[i * 3] - particlePositions[j * 3];
          const dy =
            particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
          const dz =
            particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < effectController.minDistance) {
            particleData.numConnections++;
            particleDataB.numConnections++;

            const alpha = 1.0 - dist / effectController.minDistance;

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

      render();
      stats.update();
    };

    const render = () => {
      if (!group || !renderer || !camera) return;

      const time = Date.now() * 0.001;
      group.rotation.y = time * 0.1;
      renderer.render(scene, camera);
    };

    init();

    return () => {
      if (renderer) renderer.dispose();
      if (stats && stats.dom.parentNode)
        stats.dom.parentNode.removeChild(stats.dom);
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "500px" }} />;
};

export default ThreeJsParticles;
