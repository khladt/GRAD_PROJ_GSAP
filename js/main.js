import { startDesktopGSAP } from './gsap-desktop.js';
import { startMobileGSAP } from './gsap-mobile.js';
import { 
    lockScroll, 
    unlockScroll, 
    showStartButton, 
    hideLoader, 
    killGSAP, 
    setSmootherInstance,
} from './utils.js';

const s = 'VIVI';
const q = 'Quinn';
const f = 'Falco';
const r = 'Rahal';
const n = 'Norina';
const c = 'Cyru';
 

function handleResizeOrRotate() {
    clearTimeout(window.resizeTimer); 
    window.resizeTimer = setTimeout(() => {
        killGSAP(); 
        initGSAP(); 
        unlockScroll();
        console.log("GSAP reloaded based on new dimensions.");
    }, 300);
}


export let randomname = "Joseph"; // Default fallback

async function fetchName() {
    try {
        // We use a 2-second timeout so the site doesn't hang if the API is down
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000);

        const response = await fetch('https://randomuser.me/api/?inc=name', { signal: controller.signal });
        const data = await response.json();
        randomname = data.results[0].name.first;
        console.log("Found name:");
    } catch (e) {
        console.log("Name fetch");
    }
}

function initGSAP() {
    lockScroll(); 
    
    gsap.registerPlugin(MotionPathPlugin ,Draggable,DrawSVGPlugin,ScrollTrigger,ScrollSmoother,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase,CustomBounce,CustomWiggle);

    const parallaxImages = document.querySelectorAll('#story-parallax img');
    const audioFiles = document.querySelectorAll('audio');

    // 1. Map images to promises
    const imagePromises = Array.from(parallaxImages).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
            img.addEventListener('load', resolve);
            img.addEventListener('error', resolve); // Resolve anyway to avoid hanging
        });
    });

    // 2. Map audio to promises
    const audioPromises = Array.from(audioFiles).map(audio => {
        // If it's already buffered enough to play through
        if (audio.readyState === 4) return Promise.resolve();
        return new Promise(resolve => {
            // 'canplaythrough' fires when the browser thinks it can play without stopping
            audio.addEventListener('canplaythrough', resolve, { once: true });
            audio.addEventListener('error', resolve);
        });
    });

    // 3. Wait for everything
    Promise.all([...imagePromises, ...audioPromises]).then(() => {
        startGSAP();
    });
}

function startGSAP() {
    const desktopRatioQuery = "(min-aspect-ratio: 4/3)";

    if (window.matchMedia(desktopRatioQuery).matches) {
        // Desktop/Wide Version
        showStartButton(); 
        fetchName();
        setSmootherInstance(startDesktopGSAP(s, q, f,randomname)); 
    } else {
        // Mobile/Portrait/Tall Monitor Version
        hideLoader();
        setSmootherInstance(startMobileGSAP(s, q, f)); 
    }
}



// --- INITIALIZATION ---
window.addEventListener("DOMContentLoaded", () => {
    initGSAP();
    window.addEventListener('resize', handleResizeOrRotate); 
    window.addEventListener('orientationchange', handleResizeOrRotate); 
});