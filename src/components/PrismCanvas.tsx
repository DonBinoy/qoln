'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function PrismCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const w = container.clientWidth;
    const h = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
    camera.position.set(0, 0, 12);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.0);
    dirLight.position.set(5, 8, 10);
    scene.add(dirLight);

    const pointLight1 = new THREE.PointLight(0x6366f1, 4, 30);
    pointLight1.position.set(-4, 3, 6);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xa855f7, 3, 30);
    pointLight2.position.set(4, -3, 6);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x22d3ee, 2.5, 25);
    pointLight3.position.set(0, 5, 4);
    scene.add(pointLight3);

    // Build the Q shape using Three.js Shape + ExtrudeGeometry
    const outerR = 2.8;
    const innerR = 2.0;
    const qShape = new THREE.Shape();
    qShape.absarc(0, 0, outerR, 0, Math.PI * 2, false);

    const hole = new THREE.Path();
    hole.absarc(0, 0, innerR, 0, Math.PI * 2, true);
    qShape.holes.push(hole);

    // Q tail
    const tailShape = new THREE.Shape();
    const tw = 0.45;
    const tl = 1.8;
    const angle = -Math.PI / 4; // 45 degrees
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const cx = 1.4;
    const cy = -1.4;

    const tailPts: [number, number][] = [
      [-tl / 2, -tw / 2],
      [tl / 2, -tw / 2],
      [tl / 2, tw / 2],
      [-tl / 2, tw / 2],
    ];

    const rotated = tailPts.map(([x, y]) => [
      x * cos - y * sin + cx,
      x * sin + y * cos + cy,
    ]);

    tailShape.moveTo(rotated[0][0], rotated[0][1]);
    for (let i = 1; i < rotated.length; i++) {
      tailShape.lineTo(rotated[i][0], rotated[i][1]);
    }
    tailShape.closePath();

    // Extrusion settings
    const extrudeSettings = {
      depth: 1.2,
      bevelEnabled: true,
      bevelThickness: 0.15,
      bevelSize: 0.1,
      bevelOffset: 0,
      bevelSegments: 8,
      curveSegments: 64,
    };

    const ringGeo = new THREE.ExtrudeGeometry(qShape, extrudeSettings);
    const tailGeo = new THREE.ExtrudeGeometry(tailShape, extrudeSettings);

    // Glass material
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.15,
      roughness: 0.02,
      metalness: 0.0,
      transmission: 0.96,
      ior: 2.42,
      thickness: 2.5,
      clearcoat: 1.0,
      clearcoatRoughness: 0.02,
      envMapIntensity: 1.0,
      side: THREE.DoubleSide,
      reflectivity: 1.0,
      sheen: 0.5,
      sheenColor: new THREE.Color(0x6366f1),
    });

    // Center the geometries
    ringGeo.center();
    tailGeo.center();

    const ringMesh = new THREE.Mesh(ringGeo, glassMaterial);
    const tailMesh = new THREE.Mesh(tailGeo, glassMaterial);

    // Position the tail
    tailMesh.position.set(1.4, -1.4, 0);

    const qGroup = new THREE.Group();
    qGroup.add(ringMesh);
    qGroup.add(tailMesh);
    scene.add(qGroup);

    // Edge glow outlines
    const edgeMaterial = new THREE.LineBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.2,
    });

    const ringEdge = new THREE.LineSegments(new THREE.EdgesGeometry(ringGeo, 30), edgeMaterial);
    qGroup.add(ringEdge);

    const tailEdge = new THREE.LineSegments(new THREE.EdgesGeometry(tailGeo, 30), edgeMaterial);
    tailEdge.position.copy(tailMesh.position);
    qGroup.add(tailEdge);

    // Mouse tracking for subtle rotation
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle resize
    const handleResize = () => {
      const cw = container.clientWidth;
      const ch = container.clientHeight;
      camera.aspect = cw / ch;
      camera.updateProjectionMatrix();
      renderer.setSize(cw, ch);
    };
    window.addEventListener('resize', handleResize);

    // Animation
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const t = Date.now() * 0.001;

      // Gentle idle rotation + mouse parallax
      qGroup.rotation.y += (mouseX * 0.4 - qGroup.rotation.y) * 0.03;
      qGroup.rotation.x += (-mouseY * 0.2 - qGroup.rotation.x) * 0.03;
      qGroup.rotation.z = Math.sin(t * 0.3) * 0.04;

      // Subtle floating
      qGroup.position.y = Math.sin(t * 0.5) * 0.15;

      // Orbit lights
      pointLight1.position.x = Math.sin(t * 0.7) * 6;
      pointLight1.position.y = Math.cos(t * 0.5) * 4;
      pointLight2.position.x = Math.cos(t * 0.6) * -6;
      pointLight2.position.y = Math.sin(t * 0.8) * -4;
      pointLight3.position.x = Math.sin(t * 0.4) * 3;
      pointLight3.position.z = 4 + Math.cos(t * 0.3) * 2;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}
