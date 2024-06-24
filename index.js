import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    initResponsiveNav();
    initDarkMode();
    init3DModel();
    initScrollAnimations();
    initParticleBackground();
    AOS.init();
});

function initResponsiveNav() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

function initDarkMode() {
    const checkbox = document.getElementById('checkbox');
    const theme = document.querySelector('.theme');

    checkbox.addEventListener('change', () => {
        theme.classList.toggle('dark-mode');
    });
}

function init3DModel() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('capybara-3d-model').appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load('path/to/capybara.gltf', (gltf) => {
        scene.add(gltf.scene);
    });

    const controls = new OrbitControls(camera, renderer.domElement);
    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }

    animate();
}

function initScrollAnimations() {
    gsap.from(".card", {
        scrollTrigger: {
            trigger: ".nft-showcase",
            start
