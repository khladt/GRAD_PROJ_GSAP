import { startDesktopGSAP } from './gsap-desktop.js';
import { startMobileGSAP } from './gsap-mobile.js';
import { 
    lockScroll, 
    unlockScroll, 
    hideLoader, 
    killGSAP, 
    setSmootherInstance,
    updateButtonText 
} from './utils.js';

const s = 'VIVI';
const q = 'Quinn';
const f = 'Falco';
let splashGateShown = false; 



function handleResizeOrRotate() {
    clearTimeout(window.resizeTimer); 
    window.resizeTimer = setTimeout(() => {
        killGSAP(); 
        initGSAP(); 
        unlockScroll();
        console.log("GSAP reloaded based on new dimensions.");
    }, 300);
}

function hideSplashGate() {
    const splashGate = document.getElementById('autoplay-gate');
    
    gsap.to(splashGate, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
            splashGate.style.visibility = 'hidden';
            splashGate.style.pointerEvents = 'none';
            splashGate.classList.remove('splash-active');
            splashGateShown = true; 
            unlockScroll();
        }
    });
}

function initGSAP() {
    lockScroll(); 
    
    gsap.registerPlugin(Draggable,DrawSVGPlugin,ScrollTrigger,ScrollSmoother,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase,CustomBounce,CustomWiggle);

    const parallaxImages = document.querySelectorAll('#story-parallax img');
    const imagesToLoad = Array.from(parallaxImages).filter(img => !img.complete);

    const assetLoadPromise = Promise.all(
        imagesToLoad.map(img => new Promise(resolve => {
            img.addEventListener('load', resolve);
            img.addEventListener('error', resolve); 
        }))
    );
    
    assetLoadPromise.then(() => {
        startGSAP();
        hideLoader(); 
    });
}

function startGSAP() {
    const desktopRatioQuery = "(min-aspect-ratio: 4/3)";

    if (window.matchMedia(desktopRatioQuery).matches) {
        // Desktop/Wide Version
        setSmootherInstance(startDesktopGSAP(s, q, f)); 
    } else {
        // Mobile/Portrait/Tall Monitor Version
        setSmootherInstance(startMobileGSAP(s, q, f)); 
    }
}

// --- FULLSCREEN LOGIC ---
const fullscreenToggle = document.getElementById('fullscreenToggle');
if (fullscreenToggle) {
    fullscreenToggle.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
        updateButtonText(fullscreenToggle);
    });
}
window.addEventListener('fullscreenchange', () => updateButtonText(fullscreenToggle));


// --- INITIALIZATION ---
window.addEventListener("DOMContentLoaded", () => {
    initGSAP();
    window.addEventListener('resize', handleResizeOrRotate); 
    window.addEventListener('orientationchange', handleResizeOrRotate); 
});