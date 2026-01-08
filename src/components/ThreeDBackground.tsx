import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Post-processing effects
class BloomEffect {
  scene: THREE.Scene;
  camera: THREE.Camera;
  renderer: THREE.WebGLRenderer;
  bloomLayer: THREE.Layers;
  materials: Map<THREE.Object3D, THREE.Material>;
  darkMaterial: THREE.MeshBasicMaterial;
  renderTarget: THREE.WebGLRenderTarget;

  constructor(scene: THREE.Scene, camera: THREE.Camera, renderer: THREE.WebGLRenderer) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.bloomLayer = new THREE.Layers();
    this.bloomLayer.set(1);
    this.materials = new Map();
    this.darkMaterial = new THREE.MeshBasicMaterial({ color: 'black' });
    this.renderTarget = new THREE.WebGLRenderTarget(512, 512);
  }

  enableBloom(obj: THREE.Object3D) {
    obj.layers.enable(1);
  }

  render() {
    this.scene.traverse((obj: any) => {
      if (obj.isMesh && this.bloomLayer.test(obj.layers)) {
        this.materials.set(obj, obj.material);
        obj.material = this.darkMaterial;
      }
    });

    this.renderer.setRenderTarget(this.renderTarget);
    this.renderer.render(this.scene, this.camera);
    this.renderer.setRenderTarget(null);

    this.scene.traverse((obj: any) => {
      if (this.materials.has(obj)) {
        obj.material = this.materials.get(obj);
      }
    });

    return this.renderTarget.texture;
  }

  dispose() {
    this.renderTarget.dispose();
    this.darkMaterial.dispose();
  }
}

const ThreeDBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const meshesRef = useRef<THREE.Mesh[]>([]);
  const animationIdRef = useRef<number | null>(null);
  const bloomEffectRef = useRef<BloomEffect | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    try {
      // Scene setup with dark background
      const scene = new THREE.Scene();
      sceneRef.current = scene;
      scene.fog = new THREE.Fog(0x0a0a1a, 150, 600);
      scene.background = new THREE.Color(0x0a0a1a);

      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 50;

      // Advanced Renderer setup
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance',
        precision: 'highp',
      });
      rendererRef.current = renderer;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x0a0a1a, 1);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFShadowMap;
      renderer.toneMappingExposure = 1.2;

      containerRef.current.appendChild(renderer.domElement);

      // Bloom effect
      const bloomEffect = new BloomEffect(scene, camera, renderer);
      bloomEffectRef.current = bloomEffect;

      // Enhanced lighting system
      const ambientLight = new THREE.AmbientLight(0x1a1a3f, 0.4);
      scene.add(ambientLight);

      // Directional light for shadows
      const directionalLight = new THREE.DirectionalLight(0x7c3aed, 0.8);
      directionalLight.position.set(40, 40, 20);
      directionalLight.castShadow = true;
      directionalLight.shadow.mapSize.width = 2048;
      directionalLight.shadow.mapSize.height = 2048;
      directionalLight.shadow.camera.far = 200;
      scene.add(directionalLight);

      // Multiple glow point lights
      const glowLights = [
        { pos: [40, 30, 20], color: 0x7c3aed, intensity: 2.5 },
        { pos: [-40, -30, 20], color: 0x3b82f6, intensity: 2 },
        { pos: [0, 40, -30], color: 0x06b6d4, intensity: 2 },
        { pos: [0, -40, 0], color: 0xec4899, intensity: 1.5 },
      ];

      glowLights.forEach(light => {
        const pointLight = new THREE.PointLight(light.color, light.intensity);
        pointLight.position.set(light.pos[0], light.pos[1], light.pos[2]);
        pointLight.castShadow = true;
        pointLight.shadow.mapSize.width = 1024;
        pointLight.shadow.mapSize.height = 1024;

        // Add glow sphere around light
        const glowGeo = new THREE.SphereGeometry(0.5, 8, 8);
        const glowMat = new THREE.MeshStandardMaterial({
          color: light.color,
          emissive: light.color,
          emissiveIntensity: 0.8,
          metalness: 0.8,
          roughness: 0.2,
        });
        const glowSphere = new THREE.Mesh(glowGeo, glowMat);
        glowSphere.position.copy(pointLight.position);

        scene.add(pointLight);
        scene.add(glowSphere);
      });

      const meshes: THREE.Mesh[] = [];

      // Create futuristic shapes with enhanced materials
      const createGeometries = () => {
        const geos = [
          new THREE.IcosahedronGeometry(2, 4),
          new THREE.OctahedronGeometry(2.5, 2),
          new THREE.TetrahedronGeometry(3, 0),
          new THREE.DodecahedronGeometry(2, 0),
          new THREE.TorusGeometry(2, 0.8, 16, 100),
        ];
        return geos;
      };

      const geometries = createGeometries();

      // Create multiple animated shapes with glow
      for (let i = 0; i < 8; i++) {
        const geometry = geometries[i % geometries.length];

        const hue = 0.6 + i * 0.05;
        const saturation = 0.9;
        const lightness = 0.55;

        const material = new THREE.MeshStandardMaterial({
          color: new THREE.Color().setHSL(hue, saturation, lightness),
          metalness: 0.75,
          roughness: 0.15,
          emissive: new THREE.Color().setHSL(hue, saturation, 0.4),
          emissiveIntensity: 0.6,
          wireframe: false,
          envMapIntensity: 1,
        });

        const mesh = new THREE.Mesh(geometry, material);

        // Enable bloom on this mesh
        bloomEffect.enableBloom(mesh);

        // Position shapes in space
        const angle = (i / 8) * Math.PI * 2;
        const distance = 25 + Math.sin(i) * 10;
        mesh.position.set(
          Math.cos(angle) * distance,
          Math.sin(angle) * 10,
          Math.sin(angle * 1.5) * 20 - 30
        );

        mesh.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        );

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        mesh.userData = {
          posX: mesh.position.x,
          posY: mesh.position.y,
          posZ: mesh.position.z,
          rotX: Math.random() * 0.01,
          rotY: Math.random() * 0.01,
          rotZ: Math.random() * 0.01,
          orbitSpeed: Math.random() * 0.0005 + 0.0001,
          orbitAngle: Math.random() * Math.PI * 2,
          scale: 1 + Math.sin(i) * 0.3,
          originalHue: hue,
        };

        meshes.push(mesh);
        scene.add(mesh);
      }

      meshesRef.current = meshes;

      // Enhanced particle effects with glow
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCnt = 800;
      const posArray = new Float32Array(particlesCnt * 3);
      const sizeArray = new Float32Array(particlesCnt);
      const colorArray = new Float32Array(particlesCnt * 3);

      for (let i = 0; i < particlesCnt * 3; i += 3) {
        posArray[i] = (Math.random() - 0.5) * 350;
        posArray[i + 1] = (Math.random() - 0.5) * 350;
        posArray[i + 2] = (Math.random() - 0.5) * 350;

        sizeArray[i / 3] = Math.random() * 0.8 + 0.2;

        const hue = Math.random() * 0.3 + 0.6;
        const color = new THREE.Color().setHSL(hue, 0.8, 0.6);
        colorArray[i] = color.r;
        colorArray[i + 1] = color.g;
        colorArray[i + 2] = color.b;
      }

      particlesGeometry.setAttribute(
        'position',
        new THREE.BufferAttribute(posArray, 3)
      );
      particlesGeometry.setAttribute(
        'size',
        new THREE.BufferAttribute(sizeArray, 1)
      );
      particlesGeometry.setAttribute(
        'color',
        new THREE.BufferAttribute(colorArray, 3)
      );

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.5,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.7,
        vertexColors: true,
      });

      const particles = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particles);

      // Mouse movement
      let mouseX = 0;
      let mouseY = 0;
      let targetMouseX = 0;
      let targetMouseY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
        targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      };

      window.addEventListener('mousemove', handleMouseMove);

      // Scroll effect
      let scrollY = 0;
      let targetScrollY = 0;

      const handleScroll = () => {
        targetScrollY = window.scrollY;
      };

      window.addEventListener('scroll', handleScroll);

      // Handle resize
      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };

      window.addEventListener('resize', handleResize);

      // --- CURSOR TRACKER ---
      const cursorGroup = new THREE.Group();
      scene.add(cursorGroup);

      // 1. The main glowing core
      const cursorGeo = new THREE.SphereGeometry(0.8, 32, 32);
      const cursorMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0xffffff,
        emissiveIntensity: 4,
        toneMapped: false,
      });
      const cursorOrb = new THREE.Mesh(cursorGeo, cursorMat);
      bloomEffect.enableBloom(cursorOrb);
      cursorGroup.add(cursorOrb);

      // 2. The interactive light source
      const cursorLight = new THREE.PointLight(0x00ffff, 4, 35); // Cyan light, range 35
      cursorLight.castShadow = true;
      cursorGroup.add(cursorLight);

      // 3. A secondary ring for style (like a sci-fi cursor)
      const ringGeo = new THREE.TorusGeometry(1.5, 0.05, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: 0.5
      });
      const cursorRing = new THREE.Mesh(ringGeo, ringMat);
      cursorGroup.add(cursorRing);

      // Mouse vector for 3D projection
      const mouseVector = new THREE.Vector3();

      let time = 0;

      // Animation loop
      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate);
        time += 0.016;

        // Smooth global input tracking
        mouseX += (targetMouseX - mouseX) * 0.1; // Increased speed for responsiveness
        mouseY += (targetMouseY - mouseY) * 0.1;
        scrollY += (targetScrollY - scrollY) * 0.1;

        // --- UPDATE CURSOR POSITION ---
        // We project the 2D mouse pos to a 3D plane at Z=0 (roughly where shapes are)
        mouseVector.set(mouseX, mouseY, 0.5);
        mouseVector.unproject(camera);

        const dir = mouseVector.sub(camera.position).normalize();
        const distance = -camera.position.z / dir.z + 15; // Target Z plane ~15 units in front
        const pos = camera.position.clone().add(dir.multiplyScalar(distance));

        // Lerp cursor group to this position
        cursorGroup.position.lerp(pos, 0.15); // Fast smooth follow

        // Animate tracker parts
        cursorRing.rotation.x += 0.05;
        cursorRing.rotation.y += 0.05;
        const pulse = 1 + Math.sin(time * 10) * 0.1;
        cursorOrb.scale.setScalar(pulse);


        // Animate shapes with enhanced effects
        meshesRef.current.forEach((mesh, index) => {
          const userData = mesh.userData;

          // Orbital motion with wave effect
          userData.orbitAngle += userData.orbitSpeed;
          const orbitRadius = 30 + Math.sin(index + time * 0.2) * 15;

          mesh.position.x = Math.cos(userData.orbitAngle) * orbitRadius;
          mesh.position.y = Math.sin(userData.orbitAngle * 0.5) * 20 + Math.sin(time * 0.3 + index) * 5 + scrollY * 0.001;
          mesh.position.z = Math.sin(userData.orbitAngle * 0.7) * orbitRadius - 30;

          // Rotation with time-based variation
          mesh.rotation.x += userData.rotX;
          mesh.rotation.y += userData.rotY + time * 0.0001;
          mesh.rotation.z += userData.rotZ;

          // INTERACTIVITY: React to cursor proximity
          const distToCursor = mesh.position.distanceTo(cursorGroup.position);
          const hoverEffect = Math.max(0, 15 - distToCursor) / 15; // 0 to 1 based on nearness

          // Scale up when cursor is close
          const targetScale = userData.scale * (1 + hoverEffect * 0.5);
          mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

          // Spin faster when cursor is close
          if (distToCursor < 15) {
            mesh.rotation.x += 0.05;
            mesh.rotation.y += 0.05;
          }

          // Color shift effect + Hover highlight
          const material = mesh.material as THREE.MeshStandardMaterial;
          const hueShift = Math.sin(time * 0.3 + index) * 0.05;

          // Base emissive
          const baseH = userData.originalHue + hueShift;
          const baseS = 0.9;
          const baseL = 0.4 + Math.sin(time * 0.5) * 0.1;

          // Mix with white when hovered
          const r = new THREE.Color().setHSL(baseH, baseS, baseL);
          const white = new THREE.Color(0xffffff);
          material.emissive.copy(r).lerp(white, hoverEffect * 0.8);
          material.emissiveIntensity = 0.6 + hoverEffect * 2; // Super bright when close
        });

        // Animate particles with wave motion
        if (particles) {
          particles.rotation.x += 0.00005;
          particles.rotation.y += 0.00008;

          const positionAttribute = particlesGeometry.getAttribute('position') as THREE.BufferAttribute;
          const positions = positionAttribute.array as Float32Array;

          for (let i = 0; i < positions.length; i += 3) {
            positions[i + 1] += Math.sin(time * 0.5 + positions[i] * 0.01) * 0.02;
          }
          positionAttribute.needsUpdate = true;
        }

        // Camera follow mouse smoothly with bounds
        camera.position.x = THREE.MathUtils.lerp(
          camera.position.x,
          mouseX * 4, // Reduced camera sway to focus on cursor
          0.01
        );
        camera.position.y = THREE.MathUtils.lerp(
          camera.position.y,
          mouseY * 4,
          0.01
        );

        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
      };

      animate();

      // Cleanup
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current);
        }
        if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
          containerRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
        bloomEffect.dispose();
        particlesGeometry.dispose();
        particlesMaterial.dispose();
        meshes.forEach(mesh => {
          (mesh.geometry as THREE.BufferGeometry).dispose();
          (mesh.material as THREE.Material).dispose();
        });
        geometries.forEach(geo => geo.dispose());
      };
    } catch (error) {
      console.error('Error initializing 3D background:', error);
    }
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

export default ThreeDBackground;
