<template>
  <canvas ref="canvas"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const canvas = ref(null);

onMounted(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 2 / (window.innerHeight / 2), 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas: canvas.value, alpha: true });
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  camera.position.z = 5;

  const particlesGeometry = new THREE.BufferGeometry;
  const particlesCount = 5000;
  const posArray = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 5;
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.005,
    color: 0xffffff
  });

  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  const animate = () => {
    controls.update();
    particlesMesh.rotation.y += 0.001;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  animate();

  const handleResize = () => {
    camera.aspect = window.innerWidth / 2 / (window.innerHeight / 2);
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  };

  window.addEventListener('resize', handleResize);

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });
});
</script>
