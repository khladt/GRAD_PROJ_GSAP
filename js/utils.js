
export let smootherInstance = null; 


export function setSmootherInstance(instance) {
    smootherInstance = instance;
}

export function lockScroll() {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.style.setProperty('overflow', 'hidden', 'important');}


export function unlockScroll() {
    document.documentElement.style.overflow = 'auto';}


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


export function showStartButton() {
    const tl = gsap.timeline();

    tl
    .to("#loading-bar",{ backgroundColor:"#00ffff", repeat: -1, yoyo: true, duration: 1 })
    .to("#start-btn", { visibility: 'visible', opacity: 1, duration: 2,},"<")
    .to("#loading-text",{text:"Ready when you are." , duration: 2},"<")
    .to("#loading-title",{text:"./PROJECT VIVIAN" , duration: 2},"<")
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



const footstepSounds = ['f0', 'f1', 'f2', 'f3'];

export function playRandomStep() {
    const randomId = footstepSounds[Math.floor(Math.random() * footstepSounds.length)];
    const sound = document.getElementById(randomId);
    
    if (sound) {
        sound.currentTime = 0;
        sound.volume = 1.0;
        sound.play();
    }
}



// 1. Setup the ONE and ONLY Audio Context
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const masterBus = audioCtx.createGain();
masterBus.connect(audioCtx.destination);

// Set initial volume (from session storage or default to 0.5)
const savedVolume = sessionStorage.getItem('userVolume') || 0.0;
masterBus.gain.value = savedVolume;
document.querySelector('#volume-slider').value = savedVolume;

// 2. Connect all audio tags (Only do this once!)
const audioElements = Array.from(document.querySelectorAll('audio'));
audioElements.forEach(el => {
    const source = audioCtx.createMediaElementSource(el);
    source.connect(masterBus);
});

// 3. Start Button Logic
const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', async () => {
    hideLoader();
    
    // IMPORTANT: Resume the existing context
    if (audioCtx.state === "suspended") {
        await audioCtx.resume();
    }

    // Play your specific background tracks
    const toPlay = ["s0-bg", "s1-bg", "s2-bg", "trem", "ele"];
    toPlay.forEach(id => {
        const el = document.getElementById(id);
        el.play().catch(e => console.log("Playback blocked for:", id));
    });
});

// 4. Volume Slider Logic
const neonImg = document.querySelector('.content-box img');
document.querySelector('#volume-slider').addEventListener('input', (e) => {
    const val = e.target.value;
    masterBus.gain.value = val;
    sessionStorage.setItem('userVolume', val);
    
    // Update the neon brightness we discussed earlier!
    neonImg.style.setProperty('--intensity', val);
});

// 5. Slider Feedback Sound
const volumeSlider = document.getElementById('volume-slider');
const feedbackSound = document.getElementById('vslider');
volumeSlider.addEventListener('mousedown', () => feedbackSound.play());
window.addEventListener('mouseup', () => feedbackSound.pause());




const neonImage = document.querySelector('.content-box img');
neonImg.style.setProperty('--intensity', savedVolume);
document.querySelector('#volume-slider').addEventListener('input', (e) => {
    masterBus.gain.value = e.target.value;
    sessionStorage.setItem('userVolume', e.target.value);
    neonImage.style.setProperty('--intensity', e.target.value);
});


const allButtons = document.querySelectorAll('button');
const pressSFX = document.getElementById('press');
allButtons.forEach(btn => {
btn.addEventListener('mousedown', () => pressSFX.play());
});
