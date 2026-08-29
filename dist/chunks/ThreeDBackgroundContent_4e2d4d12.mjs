import { jsx } from 'react/jsx-runtime';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const PALETTE = [8141549, 7153881, 3900150, 440020, 9133302, 11032055];
const rand = (min, max) => Math.random() * (max - min) + min;
const ThreeDBackgroundContent = () => {
  const containerRef = useRef(null);
  const animationIdRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current)
      return;
    const scene = new THREE.Scene();
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load("/assets/futuristic_bg.jpg", (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      scene.background = texture;
    });
    scene.fog = new THREE.FogExp2(131594, 5e-3);
    const W = window.innerWidth;
    const H = window.innerHeight;
    const camera = new THREE.PerspectiveCamera(65, W / H, 0.1, 1e3);
    camera.position.set(0, 0, 90);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "default"
      // use default for battery/perf balance
    });
    renderer.setSize(W, H);
    renderer.setClearColor(0, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    containerRef.current.appendChild(renderer.domElement);
    scene.add(new THREE.AmbientLight(1706559, 1.2));
    const pLight1 = new THREE.PointLight(8141549, 3, 120);
    pLight1.position.set(30, 40, 20);
    scene.add(pLight1);
    const pLight2 = new THREE.PointLight(440020, 2.5, 100);
    pLight2.position.set(-40, -30, 10);
    scene.add(pLight2);
    const NODE_COUNT = 28;
    const nodes = [];
    const nodePositions = [];
    const nodeMat = (color) => new THREE.MeshStandardMaterial({
      color,
      emissive: color,
      emissiveIntensity: 1.2,
      metalness: 0.6,
      roughness: 0.2,
      transparent: true,
      opacity: 0.92
    });
    const ringMat = (color) => new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.45, side: THREE.DoubleSide });
    for (let i = 0; i < NODE_COUNT; i++) {
      const color = PALETTE[i % PALETTE.length];
      const size = rand(0.55, 1.6);
      const geo = new THREE.SphereGeometry(size, 16, 16);
      const mesh = new THREE.Mesh(geo, nodeMat(color));
      const pos = new THREE.Vector3(rand(-70, 70), rand(-45, 45), rand(-50, 10));
      mesh.position.copy(pos);
      nodePositions.push(pos.clone());
      const ringGeo = new THREE.TorusGeometry(size * 2.2, 0.07, 8, 40);
      const ring = new THREE.Mesh(ringGeo, ringMat(color));
      ring.rotation.x = rand(0, Math.PI);
      ring.rotation.y = rand(0, Math.PI);
      mesh.add(ring);
      scene.add(mesh);
      nodes.push({
        mesh,
        velocity: new THREE.Vector3(rand(-6e-3, 6e-3), rand(-6e-3, 6e-3), rand(-3e-3, 3e-3)),
        originalPos: pos.clone(),
        pulseOffset: rand(0, Math.PI * 2),
        ringMesh: ring
      });
    }
    const CONNECTION_DIST = 55;
    const lineMaterial = new THREE.LineBasicMaterial({
      transparent: true,
      opacity: 0.18,
      vertexColors: true
    });
    const connections = [];
    for (let a = 0; a < NODE_COUNT; a++) {
      for (let b = a + 1; b < NODE_COUNT; b++) {
        if (nodePositions[a].distanceTo(nodePositions[b]) < CONNECTION_DIST) {
          const geo = new THREE.BufferGeometry().setFromPoints([
            nodePositions[a].clone(),
            nodePositions[b].clone()
          ]);
          const colorA = new THREE.Color(PALETTE[a % PALETTE.length]);
          const colorB = new THREE.Color(PALETTE[b % PALETTE.length]);
          const colBuf = new Float32Array([colorA.r, colorA.g, colorA.b, colorB.r, colorB.g, colorB.b]);
          geo.setAttribute("color", new THREE.BufferAttribute(colBuf, 3));
          const line = new THREE.Line(geo, lineMaterial.clone());
          scene.add(line);
          connections.push({ line, fromIdx: a, toIdx: b, geo });
        }
      }
    }
    const streams = [];
    const streamMat = new THREE.MeshBasicMaterial({ color: 16777215, transparent: true, opacity: 0.9 });
    const streamGeo = new THREE.SphereGeometry(0.22, 6, 6);
    for (let s = 0; s < 18; s++) {
      const conn = connections[Math.floor(Math.random() * connections.length)];
      if (!conn)
        continue;
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        nodePositions[conn.fromIdx].clone(),
        nodePositions[conn.toIdx].clone()
      ]);
      const streamLine = new THREE.Line(lineGeo, new THREE.LineBasicMaterial({ transparent: true, opacity: 0 }));
      const particle = new THREE.Mesh(streamGeo, streamMat.clone());
      particle.material.color = new THREE.Color(PALETTE[s % PALETTE.length]);
      scene.add(particle);
      streams.push({
        line: streamLine,
        progress: Math.random(),
        speed: rand(3e-3, 9e-3),
        fromIdx: conn.fromIdx,
        toIdx: conn.toIdx,
        particle
      });
    }
    const starCount = 600;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPos[i] = rand(-250, 250);
      starPos[i + 1] = rand(-200, 200);
      starPos[i + 2] = rand(-200, 50);
      const c = new THREE.Color(PALETTE[Math.floor(Math.random() * PALETTE.length)]);
      c.lerp(new THREE.Color(16777215), 0.5);
      starColors[i] = c.r;
      starColors[i + 1] = c.g;
      starColors[i + 2] = c.b;
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute("color", new THREE.BufferAttribute(starColors, 3));
    const starMat = new THREE.PointsMaterial({ size: 0.35, sizeAttenuation: true, transparent: true, opacity: 0.65, vertexColors: true });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);
    const gridHelper = new THREE.GridHelper(300, 40, 440020, 1973067);
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.25;
    gridHelper.position.y = -65;
    gridHelper.rotation.x = 0.05;
    scene.add(gridHelper);
    const scanRingGeo = new THREE.TorusGeometry(60, 0.15, 4, 80);
    const scanRingMat = new THREE.MeshBasicMaterial({ color: 8141549, transparent: true, opacity: 0.25 });
    const scanRing = new THREE.Mesh(scanRingGeo, scanRingMat);
    scanRing.rotation.x = Math.PI / 2;
    scene.add(scanRing);
    let mouseX = 0, mouseY = 0, tMouseX = 0, tMouseY = 0;
    const onMouseMove = (e) => {
      tMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      tMouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);
    let scrollY = 0, tScrollY = 0;
    const onScroll = () => {
      tScrollY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);
    let t = 0;
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      t += 0.012;
      mouseX += (tMouseX - mouseX) * 0.05;
      mouseY += (tMouseY - mouseY) * 0.05;
      scrollY += (tScrollY - scrollY) * 0.08;
      camera.position.x += (mouseX * 8 - camera.position.x) * 0.03;
      camera.position.y += (mouseY * 5 + scrollY * -0.025 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);
      nodes.forEach((node, i) => {
        node.mesh.position.add(node.velocity);
        const diff = node.originalPos.clone().sub(node.mesh.position);
        node.mesh.position.addScaledVector(diff, 3e-3);
        const pulse = 1 + Math.sin(t * 2.5 + node.pulseOffset) * 0.12;
        node.mesh.scale.setScalar(pulse);
        node.ringMesh.rotation.z += 8e-3 + i * 3e-4;
        node.ringMesh.rotation.x += 5e-3;
      });
      connections.forEach((conn) => {
        const posArr = conn.geo.attributes.position.array;
        const from = nodes[conn.fromIdx].mesh.position;
        const to = nodes[conn.toIdx].mesh.position;
        posArr[0] = from.x;
        posArr[1] = from.y;
        posArr[2] = from.z;
        posArr[3] = to.x;
        posArr[4] = to.y;
        posArr[5] = to.z;
        conn.geo.attributes.position.needsUpdate = true;
      });
      streams.forEach((stream) => {
        stream.progress += stream.speed;
        if (stream.progress > 1)
          stream.progress = 0;
        const from = nodes[stream.fromIdx].mesh.position;
        const to = nodes[stream.toIdx].mesh.position;
        stream.particle.position.lerpVectors(from, to, stream.progress);
        const alpha = Math.sin(stream.progress * Math.PI);
        stream.particle.material.opacity = alpha * 0.9;
      });
      stars.rotation.y += 8e-5;
      scanRing.position.y = Math.sin(t * 0.4) * 50;
      scanRingMat.opacity = 0.1 + Math.sin(t * 0.8) * 0.1;
      gridHelper.material.opacity = 0.08 + Math.sin(t * 0.6) * 0.04;
      renderer.render(scene, camera);
    };
    animate();
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (animationIdRef.current)
        cancelAnimationFrame(animationIdRef.current);
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      nodes.forEach((n) => {
        n.mesh.geometry.dispose();
        n.mesh.material.dispose();
      });
      connections.forEach((c) => {
        c.geo.dispose();
        c.line.material.dispose();
      });
      starGeo.dispose();
      starMat.dispose();
      streamGeo.dispose();
    };
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: containerRef,
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none"
      }
    }
  );
};

export { ThreeDBackgroundContent as default };
