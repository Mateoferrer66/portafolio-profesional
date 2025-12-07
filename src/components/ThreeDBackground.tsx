import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const torusRef = useRef<THREE.Mesh | null>(null);
  const spheresRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });
    rendererRef.current = renderer;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x7c3aed, 1);
    pointLight.position.set(20, 20, 20);
    scene.add(pointLight);

    // Particles background
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCnt = 1000;
    const posArray = new Float32Array(particlesCnt * 3);

    for (let i = 0; i < particlesCnt * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 200;
      posArray[i + 1] = (Math.random() - 0.5) * 200;
      posArray[i + 2] = (Math.random() - 0.5) * 200;
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.5,
      color: 0x7c3aed,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    particlesRef.current = particles;
    scene.add(particles);

    // Torus geometry
    const torusGeometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const torusMaterial = new THREE.MeshStandardMaterial({
      color: 0x7c3aed,
      metalness: 0.7,
      roughness: 0.2,
      emissive: 0x5a21a1,
      emissiveIntensity: 0.5,
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torusRef.current = torus;
    scene.add(torus);

    // Floating spheres
    const spheres: THREE.Mesh[] = [];
    for (let i = 0; i < 5; i++) {
      const sphereGeometry = new THREE.IcosahedronGeometry(Math.random() * 3 + 1, 32);
      const sphereMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color().setHSL(0.7 + Math.random() * 0.2, 0.8, 0.5),
        metalness: 0.6,
        roughness: 0.3,
        emissive: new THREE.Color().setHSL(0.7 + Math.random() * 0.2, 0.8, 0.3),
        emissiveIntensity: 0.3,
      });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      
      sphere.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      );

      sphere.userData = {
        x: sphere.position.x,
        y: sphere.position.y,
        z: sphere.position.z,
        speed: Math.random() * 0.01 + 0.005,
      };

      spheres.push(sphere);
      scene.add(sphere);
    }
    spheresRef.current = spheres;

    // Mouse movement
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Scroll effect
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
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

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate torus
      if (torusRef.current) {
        torusRef.current.rotation.x += 0.005;
        torusRef.current.rotation.y += 0.01;
        torusRef.current.position.y = scrollY * 0.0005;
      }

      // Rotate particles
      if (particlesRef.current) {
        particlesRef.current.rotation.x += 0.0001;
        particlesRef.current.rotation.y += 0.0001;
      }

      // Animate spheres with scroll effect
      spheresRef.current.forEach((sphere) => {
        sphere.rotation.x += 0.002;
        sphere.rotation.y += 0.003;

        const userData = sphere.userData;
        userData.angle = (userData.angle || 0) + userData.speed;

        // Orbital motion
        sphere.position.x =
          userData.x + Math.cos(userData.angle) * 30;
        sphere.position.y =
          userData.y + Math.sin(userData.angle) * 30 + scrollY * 0.0005;
        sphere.position.z =
          userData.z + Math.sin(userData.angle * 0.5) * 20;
      });

      // Camera follow mouse
      camera.position.x += (mouseX * 10 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 10 - camera.position.y) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
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

export default ThreeDBackground;
