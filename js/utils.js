
export let smootherInstance = null; 


export function setSmootherInstance(instance) {
    smootherInstance = instance;
}

export function lockScroll() {
    document.body.style.overflow = 'hidden';
}

export function unlockScroll() {
    document.body.style.overflow = '';
}

export function hideLoader() {
    const loader = document.getElementById('loader-wrapper');
    if (loader) {
        gsap.to(loader, { 
            opacity: 0, 
            duration: 0.5, 
            ease: "power2.inOut",
            onComplete: () => {
                loader.style.visibility = 'hidden';
                loader.style.pointerEvents = 'none';
                unlockScroll();
            }
        });
    } else {
        unlockScroll();
    }
}

export function killGSAP() {
    ScrollTrigger.killAll();

    if (smootherInstance) {
        smootherInstance.kill();
        smootherInstance = null;
        console.log("ScrollSmoother killed.");
    }
    console.log("Old GSAP instance destroyed.");
}

export function updateButtonText(fullscreenToggle) {
    if (document.fullscreenElement) {
        fullscreenToggle.textContent = "Exit Fullscreen (F11)";
    } else {
        fullscreenToggle.textContent = "Go Fullscreen (F11)";
    }
}