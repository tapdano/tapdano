import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SphereRenderer = ({ color = "#272828" }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setClearColor(0x000020, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 10000);
    camera.position.z = 500;
    scene.add(camera);

    const colorHex = parseInt(color.replace(/#/g, ''), 16);
    const density = 200;

    const dotsGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(density * 3);
    dotsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const dotsMaterial = new THREE.PointsMaterial({
      color: colorHex,
      size: 4,
      transparent: true,
      opacity: 0.7,
    });
    const dots = new THREE.Points(dotsGeometry, dotsMaterial);
    scene.add(dots); 

    const sphereGeometry = new THREE.IcosahedronGeometry(105, 2); 
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: colorHex,
      transparent: true,
      opacity: 0.7,
      wireframe: true,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    const render = () => {
      dots.rotation.x += 0.002;
      dots.rotation.y += 0.002;
      sphere.rotation.x += 0.002;
      sphere.rotation.y += 0.002;

      renderer.render(scene, camera);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      render();
    };
    animate();

    const MIN_SCALE = 2; 

    const handleResize = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        renderer.setSize(clientWidth, clientHeight);
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();

        const scaleFactor = Math.min(clientWidth, clientHeight) / 400; 
        const finalScale = Math.max(scaleFactor, MIN_SCALE);
        sphere.scale.set(finalScale, finalScale, finalScale);
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [color]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1, 
        }}
      />
    </div>
  );
};

export default SphereRenderer;
