import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// ─── Palette ───────────────────────────────────────────────────────────────────
const CYAN = 0x06b6d4;
const VIOLET = 0x7c3aed;
const PURPLE = 0x8b5cf6;
const MAGENTA = 0xa855f7;
const GOLD = 0xd4af37;
const DEEP_BLUE = 0x0a0a2e;

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

// ─── Human Silhouette Geometry (simplified wireframe figure) ────────────────────
function createHumanSilhouette(): THREE.Group {
  const group = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({
    color: CYAN,
    transparent: true,
    opacity: 0.12,
    wireframe: true,
  });
  const glowMat = new THREE.MeshBasicMaterial({
    color: CYAN,
    transparent: true,
    opacity: 0.06,
  });

  // Head
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.5, 8, 8), mat.clone());
  head.position.y = 3.8;
  group.add(head);

  // Torso
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.4, 2.2, 6), mat.clone());
  torso.position.y = 2.2;
  group.add(torso);

  // Arms
  const armGeo = new THREE.CylinderGeometry(0.12, 0.1, 1.8, 4);
  const leftArm = new THREE.Mesh(armGeo, mat.clone());
  leftArm.position.set(-0.85, 2.5, 0);
  leftArm.rotation.z = 0.3;
  group.add(leftArm);

  const rightArm = new THREE.Mesh(armGeo, mat.clone());
  rightArm.position.set(0.85, 2.5, 0);
  rightArm.rotation.z = -0.3;
  group.add(rightArm);

  // Legs
  const legGeo = new THREE.CylinderGeometry(0.15, 0.12, 2.0, 4);
  const leftLeg = new THREE.Mesh(legGeo, mat.clone());
  leftLeg.position.set(-0.25, 0.3, 0);
  group.add(leftLeg);

  const rightLeg = new THREE.Mesh(legGeo, mat.clone());
  rightLeg.position.set(0.25, 0.3, 0);
  group.add(rightLeg);

  // Holographic aura
  const aura = new THREE.Mesh(
    new THREE.CylinderGeometry(1.0, 0.6, 4.5, 8, 1, true),
    glowMat.clone()
  );
  aura.position.y = 2.0;
  group.add(aura);

  return group;
}

// ─── Ascending Particle System ─────────────────────────────────────────────────
interface AscendingParticle {
  x: number; y: number; z: number;
  speed: number;
  maxY: number;
  minY: number;
}

const ThreeDBackgroundContent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // ── Scene ──
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030318, 0.008);

    const W = window.innerWidth;
    const H = window.innerHeight;

    const camera = new THREE.PerspectiveCamera(70, W / H, 0.1, 1200);
    camera.position.set(0, 15, 60);
    camera.lookAt(0, 5, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'default',
    });
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    containerRef.current.appendChild(renderer.domElement);

    // ── Lights ──
    scene.add(new THREE.AmbientLight(0x0a0a3f, 0.8));

    const light1 = new THREE.PointLight(CYAN, 4, 200);
    light1.position.set(0, 60, 30);
    scene.add(light1);

    const light2 = new THREE.PointLight(VIOLET, 3, 180);
    light2.position.set(-50, 20, -20);
    scene.add(light2);

    const light3 = new THREE.PointLight(MAGENTA, 2.5, 150);
    light3.position.set(50, 40, -30);
    scene.add(light3);

    // ══════════════════════════════════════════════════════════════════════════
    //  1) HOLOGRAPHIC TRON GRID FLOOR (moves upward)
    // ══════════════════════════════════════════════════════════════════════════
    const gridGroup = new THREE.Group();

    // Main grid
    const gridHelper = new THREE.GridHelper(400, 60, CYAN, VIOLET);
    (gridHelper.material as THREE.Material).transparent = true;
    (gridHelper.material as THREE.Material).opacity = 0.18;
    gridHelper.position.y = -10;
    gridGroup.add(gridHelper);

    // Secondary finer grid for depth
    const gridHelper2 = new THREE.GridHelper(400, 120, PURPLE, 0x1e1b4b);
    (gridHelper2.material as THREE.Material).transparent = true;
    (gridHelper2.material as THREE.Material).opacity = 0.06;
    gridHelper2.position.y = -9.8;
    gridGroup.add(gridHelper2);

    scene.add(gridGroup);

    // ══════════════════════════════════════════════════════════════════════════
    //  2) HUMAN SILHOUETTES (wireframe holographic)
    // ══════════════════════════════════════════════════════════════════════════
    const silhouettes: { group: THREE.Group; baseY: number; animOffset: number }[] = [];
    const SILHOUETTE_COUNT = 7;

    for (let i = 0; i < SILHOUETTE_COUNT; i++) {
      const human = createHumanSilhouette();
      const scale = rand(1.8, 3.5);
      human.scale.setScalar(scale);

      const x = rand(-80, 80);
      const z = rand(-60, -10);
      const y = -10;
      human.position.set(x, y, z);
      human.rotation.y = rand(0, Math.PI * 2);

      // Color variation per silhouette
      const colors = [CYAN, VIOLET, PURPLE, MAGENTA];
      const chosenColor = colors[i % colors.length];
      human.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshBasicMaterial) {
          child.material.color.setHex(chosenColor);
        }
      });

      scene.add(human);
      silhouettes.push({ group: human, baseY: y, animOffset: rand(0, Math.PI * 2) });
    }

    // ══════════════════════════════════════════════════════════════════════════
    //  3) VERTICAL LIGHT COLUMNS (ascending from the floor)
    // ══════════════════════════════════════════════════════════════════════════
    const columns: { mesh: THREE.Mesh; baseX: number; animOffset: number }[] = [];
    const COLUMN_COUNT = 12;

    for (let i = 0; i < COLUMN_COUNT; i++) {
      const height = rand(40, 120);
      const colGeo = new THREE.CylinderGeometry(0.15, 0.3, height, 6, 1, true);
      const colColor = [CYAN, VIOLET, PURPLE, GOLD][i % 4];
      const colMat = new THREE.MeshBasicMaterial({
        color: colColor,
        transparent: true,
        opacity: rand(0.05, 0.15),
        side: THREE.DoubleSide,
      });

      const col = new THREE.Mesh(colGeo, colMat);
      const x = rand(-120, 120);
      const z = rand(-80, 20);
      col.position.set(x, height / 2 - 10, z);

      scene.add(col);
      columns.push({ mesh: col, baseX: x, animOffset: rand(0, Math.PI * 2) });

      // Add a glow ring at the base of each column
      const ringGeo = new THREE.TorusGeometry(1.5, 0.08, 6, 30);
      const ringMat = new THREE.MeshBasicMaterial({
        color: colColor,
        transparent: true,
        opacity: 0.2,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.set(x, -9.5, z);
      scene.add(ring);
    }

    // ══════════════════════════════════════════════════════════════════════════
    //  4) ASCENDING PARTICLES (data streams moving upward)
    // ══════════════════════════════════════════════════════════════════════════
    const PARTICLE_COUNT = 800;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(PARTICLE_COUNT * 3);
    const particleColors = new Float32Array(PARTICLE_COUNT * 3);
    const particleSizes = new Float32Array(PARTICLE_COUNT);

    const particleData: AscendingParticle[] = [];
    const pColors = [
      new THREE.Color(CYAN),
      new THREE.Color(VIOLET),
      new THREE.Color(PURPLE),
      new THREE.Color(GOLD),
      new THREE.Color(0xffffff),
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = rand(-150, 150);
      const y = rand(-20, 100);
      const z = rand(-100, 40);
      const speed = rand(0.05, 0.3);

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      const c = pColors[Math.floor(Math.random() * pColors.length)];
      particleColors[i * 3] = c.r;
      particleColors[i * 3 + 1] = c.g;
      particleColors[i * 3 + 2] = c.b;

      particleSizes[i] = rand(0.3, 1.2);

      particleData.push({ x, y, z, speed, maxY: 120, minY: -20 });
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
    particleGeo.setAttribute('size', new THREE.BufferAttribute(particleSizes, 1));

    const particleMat = new THREE.PointsMaterial({
      size: 0.5,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.7,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ══════════════════════════════════════════════════════════════════════════
    //  5) ROTATING HOLOGRAPHIC RINGS (floating in mid-space)
    // ══════════════════════════════════════════════════════════════════════════
    const holoRings: { mesh: THREE.Mesh; rotSpeed: THREE.Vector3; bobOffset: number; baseY: number }[] = [];
    const RING_COUNT = 8;

    for (let i = 0; i < RING_COUNT; i++) {
      const radius = rand(3, 12);
      const ringGeo = new THREE.TorusGeometry(radius, rand(0.05, 0.15), 8, 50);
      const ringColor = [CYAN, VIOLET, PURPLE, MAGENTA, GOLD][i % 5];
      const ringMat = new THREE.MeshBasicMaterial({
        color: ringColor,
        transparent: true,
        opacity: rand(0.1, 0.3),
        wireframe: Math.random() > 0.5,
      });

      const ring = new THREE.Mesh(ringGeo, ringMat);
      const x = rand(-80, 80);
      const y = rand(5, 60);
      const z = rand(-60, 10);
      ring.position.set(x, y, z);
      ring.rotation.set(rand(0, Math.PI), rand(0, Math.PI), rand(0, Math.PI));

      scene.add(ring);
      holoRings.push({
        mesh: ring,
        rotSpeed: new THREE.Vector3(rand(0.002, 0.01), rand(0.002, 0.01), rand(0.001, 0.005)),
        bobOffset: rand(0, Math.PI * 2),
        baseY: y,
      });
    }

    // ══════════════════════════════════════════════════════════════════════════
    //  6) SCANNING HORIZONTAL BEAM
    // ══════════════════════════════════════════════════════════════════════════
    const scanBeamGeo = new THREE.PlaneGeometry(300, 0.5);
    const scanBeamMat = new THREE.MeshBasicMaterial({
      color: CYAN,
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
    const scanBeam = new THREE.Mesh(scanBeamGeo, scanBeamMat);
    scanBeam.rotation.x = Math.PI / 2;
    scene.add(scanBeam);

    // ══════════════════════════════════════════════════════════════════════════
    //  7) AMBIENT STARS (background depth)
    // ══════════════════════════════════════════════════════════════════════════
    const starCount = 400;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starCols = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPos[i] = rand(-300, 300);
      starPos[i + 1] = rand(-50, 250);
      starPos[i + 2] = rand(-300, -50);
      const c = new THREE.Color(pColors[Math.floor(Math.random() * pColors.length)]);
      c.lerp(new THREE.Color(0xffffff), 0.6);
      starCols[i] = c.r; starCols[i + 1] = c.g; starCols[i + 2] = c.b;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starCols, 3));
    const starMat = new THREE.PointsMaterial({
      size: 0.4,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.5,
      vertexColors: true,
    });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // ── Mouse tracking ─────────────────────────────────────────────────────────
    let mouseX = 0, mouseY = 0, tMouseX = 0, tMouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      tMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      tMouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    // ── Scroll tracking ────────────────────────────────────────────────────────
    let scrollY = 0, tScrollY = 0;
    const onScroll = () => { tScrollY = window.scrollY; };
    window.addEventListener('scroll', onScroll, { passive: true });

    // ── Resize ─────────────────────────────────────────────────────────────────
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // ══════════════════════════════════════════════════════════════════════════
    //  ANIMATION LOOP
    // ══════════════════════════════════════════════════════════════════════════
    let t = 0;
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      t += 0.01;

      // Smooth inputs
      mouseX += (tMouseX - mouseX) * 0.04;
      mouseY += (tMouseY - mouseY) * 0.04;
      scrollY += (tScrollY - scrollY) * 0.06;

      // Camera parallax
      camera.position.x += (mouseX * 10 - camera.position.x) * 0.025;
      camera.position.y += (15 + mouseY * 5 + scrollY * -0.02 - camera.position.y) * 0.025;
      camera.lookAt(0, 5, 0);

      // 1) Grid slow upward drift
      gridGroup.position.z = (t * 3) % 6.67; // subtle drift

      // 2) Silhouettes: gentle breathing + hover
      silhouettes.forEach((s) => {
        const breathe = Math.sin(t * 1.5 + s.animOffset) * 0.8;
        s.group.position.y = s.baseY + breathe;

        // Holographic flicker
        s.group.traverse((child) => {
          if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshBasicMaterial) {
            child.material.opacity = 0.08 + Math.sin(t * 3 + s.animOffset) * 0.04;
          }
        });
      });

      // 3) Light columns pulse
      columns.forEach((col) => {
        const mat = col.mesh.material as THREE.MeshBasicMaterial;
        mat.opacity = 0.06 + Math.sin(t * 2 + col.animOffset) * 0.05;
      });

      // 4) Ascending particles
      const posArray = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const pd = particleData[i];
        pd.y += pd.speed;
        if (pd.y > pd.maxY) {
          pd.y = pd.minY;
          pd.x = rand(-150, 150);
          pd.z = rand(-100, 40);
        }
        posArray[i * 3] = pd.x + Math.sin(t * 0.5 + i * 0.1) * 0.3;
        posArray[i * 3 + 1] = pd.y;
        posArray[i * 3 + 2] = pd.z;
      }
      particleGeo.attributes.position.needsUpdate = true;

      // 5) Rotating holographic rings
      holoRings.forEach((hr) => {
        hr.mesh.rotation.x += hr.rotSpeed.x;
        hr.mesh.rotation.y += hr.rotSpeed.y;
        hr.mesh.rotation.z += hr.rotSpeed.z;
        hr.mesh.position.y = hr.baseY + Math.sin(t * 0.8 + hr.bobOffset) * 2;
      });

      // 6) Scanning beam sweep
      scanBeam.position.y = -10 + ((t * 8) % 100);
      scanBeamMat.opacity = 0.04 + Math.sin(t * 1.5) * 0.04;

      // 7) Stars slow drift
      stars.rotation.y += 0.00005;

      // Grid opacity pulse
      (gridHelper.material as THREE.Material).opacity = 0.12 + Math.sin(t * 0.5) * 0.05;
      (gridHelper2.material as THREE.Material).opacity = 0.04 + Math.sin(t * 0.7) * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // ── Cleanup ────────────────────────────────────────────────────────────────
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ThreeDBackgroundContent;
