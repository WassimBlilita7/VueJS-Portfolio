<template>
  <div ref="threeCanvas" class="w-full h-96 rounded-xl shadow-lg mb-8 border-4 border-white animate-fade-in"></div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'
const threeCanvas = ref(null)
let renderer, scene, camera, cube, animationId
onMounted(() => {
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(threeCanvas.value.clientWidth, threeCanvas.value.clientHeight)
  threeCanvas.value.appendChild(renderer.domElement)
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, threeCanvas.value.clientWidth / threeCanvas.value.clientHeight, 0.1, 1000)
  camera.position.z = 3
  const geometry = new THREE.BoxGeometry()
  const material = new THREE.MeshStandardMaterial({ color: 0x42b883, roughness: 0.5, metalness: 0.7 })
  cube = new THREE.Mesh(geometry, material)
  scene.add(cube)
  const light = new THREE.PointLight(0xffffff, 1, 100)
  light.position.set(5, 5, 5)
  scene.add(light)
  const animate = () => {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
    animationId = requestAnimationFrame(animate)
  }
  animate()
})
onBeforeUnmount(() => {
  cancelAnimationFrame(animationId)
  renderer.dispose()
  scene.clear()
})
</script>