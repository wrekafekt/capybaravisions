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
            start: "top bottom",
            end: "bottom top",
            scrub: true
        },
        y: 100,
        opacity: 0,
        stagger: 0.2
    });

    gsap.from(".parallax-content", {
        scrollTrigger: {
            trigger: ".parallax-section",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        },
        y: 50,
        opacity: 0
    });
}

function initParticleBackground() {
    const canvas = document.getElementById('particle-background');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];

    class Particle {
        constructor(x, y, directionX, directionY, size, color) {
            this.x = x;
            this.y = y;
            this.directionX = directionX;
            this.directionY = directionY;
            this.size = size;
            this.color = color;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        update() {
            if (this.x > canvas.width || this.x < 0) {
                this.directionX = -this.directionX;
            }
            if (this.y > canvas.height || this.y < 0) {
                this.directionY = -this.directionY;
            }

            this.x += this.directionX;
            this.y += this.directionY;
            this.draw();
        }
    }

    function init() {
        particlesArray = [];
        for (let i = 0; i < 100; i++) {
            let size = Math.random() * 5 + 1;
            let x = Math.random() * (canvas.width - size * 2);
            let y = Math.random() * (canvas.height - size * 2);
            let directionX = (Math.random() * 0.4) - 0.2;
            let directionY = (Math.random() * 0.4) - 0.2;
            let color = `rgba(255,255,255,${Math.random() * 0.5 + 0.5})`;

            particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
    }

    init();
    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });
}
