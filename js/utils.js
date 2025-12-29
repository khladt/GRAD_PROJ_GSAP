
export let smootherInstance = null; 


export function setSmootherInstance(instance) {
    smootherInstance = instance;
}

let scrollPosition = 0;

export function lockScroll() {
  scrollPosition = window.pageYOffset;
  document.body.style.overflow = 'hidden'; // Add this
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.width = '100%';
}

export function unlockScroll() {
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, scrollPosition);
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

    // FIXES THE STRETCH THAT HAPPEN WHEN SWITCHING FROM MOBILE TO DESKTOP MODE
    gsap.set(".parallax-layer, .Quinn, .Seven, #S5-SVG, img", { clearProps: "all" });
    if (smootherInstance) {
        smootherInstance.kill();
        smootherInstance = null;
        console.log("ScrollSmoother killed.");
    }
    ScrollTrigger.refresh();
    console.log("Old GSAP instance destroyed.");
}


// --- FULLSCREEN LOGIC ---
const fullscreenToggle = document.getElementById('fullscreenToggle');
if (fullscreenToggle) {fullscreenToggle.addEventListener('click', () => fullscreen());}
window.addEventListener('fullscreenchange', () => updateButtonText(fullscreenToggle));

export function fullscreen(){
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
    updateButtonText(fullscreenToggle);
}

function updateButtonText(fullscreenToggle) {
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

const neonImg = document.querySelector('.project-vivian');
const neonImg2 = document.querySelector('.project-vivian2');
const volumeSlider = document.getElementById('volume-slider');
const cornerSlider = document.querySelector('#corner-volume-slider');

// 1. Setup the ONE and ONLY Audio Context
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const masterBus = audioCtx.createGain();
masterBus.connect(audioCtx.destination);

// Set initial volume (from session storage or default to 0.5)
const savedVolume = sessionStorage.getItem('userVolume') || 0.0;
masterBus.gain.value = savedVolume;
volumeSlider.value = savedVolume;
cornerSlider.value = savedVolume;
neonImg.style.setProperty('--intensity', savedVolume);
neonImg2.style.setProperty('--intensity', savedVolume);


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
function updateVolume(value) {
    // 1. Update the Audio Context
    masterBus.gain.value = value;
    
    // 2. Sync both slider UI positions
    volumeSlider.value = value;
    cornerSlider.value = value;
    
    // 3. Optional: Update your Neon Intensity variable from earlier
    if(neonImg) neonImg.style.setProperty('--intensity', value);
    if(neonImg2) neonImg2.style.setProperty('--intensity', value);

    // 4. Save to session
    sessionStorage.setItem('userVolume', value);
}

// Listener for Dashboard Slider
volumeSlider.addEventListener('input', (e) => updateVolume(e.target.value));

// Listener for Corner Slider
cornerSlider.addEventListener('input', (e) => updateVolume(e.target.value));
// 5. Slider Feedback Sound


const feedbackSound = document.getElementById('vslider');
volumeSlider.addEventListener('mousedown', () => feedbackSound.play());
cornerSlider.addEventListener('mousedown', () => feedbackSound.play());
window.addEventListener('mouseup', () => feedbackSound.pause());







const allButtons = document.querySelectorAll('button');
const pressSFX = document.getElementById('press');
const pturn = document.getElementById('pturn');
allButtons.forEach(btn => {
    btn.addEventListener('mousedown', () => {
        if (!btn.classList.contains('ctrl-btn') && !btn.classList.contains('inv-tool-icon')) {pressSFX.play();}
    });
});


const desktopRatioQuery = "(min-aspect-ratio: 4/3)";
if (!window.matchMedia(desktopRatioQuery).matches) {updateVolume(1.0);}








const invIcon = document.querySelector('.inv-tool-icon');
const invWrapper = document.querySelector('.inv-wrapper');

// Create an overlay div in JS if it doesn't exist
const overlay = document.createElement('div');
overlay.id = 'inv-overlay';
document.body.appendChild(overlay);

// OPEN FUNCTION
function openInventory() {
    document.getElementById('bopen').play();
    lockScroll();
    invIcon.classList.add('unclickable');
    invIcon.classList.add('is-active');

    const tl = gsap.timeline();

    tl.to(invIcon, {
        left: "15vw",
        bottom: "-5vh",
        scale: 5.2,
        duration: 0.5,
        ease: "back.in(1.7)",
    })
    .to(invIcon, {
        opacity: 0,
        duration: 0.3
    }, "+=0.1")
    .to([invWrapper, overlay], {
        autoAlpha: 1, // Sets visibility: visible and opacity: 1
        duration: 0.5
    }, "-=0.1");
}

// CLOSE FUNCTION
function closeInventory() {
    document.getElementById('bclose').play();
    unlockScroll();
    const tl = gsap.timeline();

    tl.to([invWrapper, overlay], {
        autoAlpha: 0,
        duration: 0.3
    })
    .to(invIcon, {
        opacity: 1,
        scale: 1,
        left: "3vw",
        bottom: "1vw",
        duration: 0.5,
        onComplete: () => {
            invIcon.classList.remove('unclickable');
            invIcon.classList.remove('is-active');        
        }
    },"<");
}

// Event Listeners
invIcon.addEventListener('click', openInventory);
overlay.addEventListener('click', closeInventory); // Close when clicking outside






// Database of collected items
const inventoryData = [];
let currentItem = null;

/**
 * Function to add an item to the backpack
 * @param {string} title - The title of the note
 * @param {string[]} pages - Array of strings (one for each page)
 */
function addItemToBackpack(title, pages) {
    const item = { title, pages, currentPage: 0 };
    inventoryData.push(item);
    
    // Create the list element on the left paper
    const listContainer = document.getElementById('inv-list-container');
    const div = document.createElement('div');
    div.className = 'inv-list-item';
    div.innerHTML = `> ${title}`;
    
    div.onclick = () => 
        displayItem(item);
        listContainer.appendChild(div);
}

function displayItem(item) {
    pturn.currentTime = 0;
    pturn.play();
    currentItem = item;
    const titleEl = document.getElementById('view-title');
    const bodyEl = document.getElementById('view-body');
    const pageEl = document.getElementById('page-num');

    titleEl.innerHTML = item.title;
    bodyEl.innerHTML = item.pages[item.currentPage];
    pageEl.innerHTML = `${item.currentPage + 1} / ${item.pages.length}`;
}

// Next/Prev Page Logic
document.getElementById('next-btn').onclick = () => {
    pturn.currentTime = 0;
    pturn.play();
    if (currentItem && currentItem.currentPage < currentItem.pages.length - 1) {
        currentItem.currentPage++;
        displayItem(currentItem);
    }
};

document.getElementById('prev-btn').onclick = () => {
    pturn.currentTime = 0;
    pturn.play();
    if (currentItem && currentItem.currentPage > 0) {
        currentItem.currentPage--;
        displayItem(currentItem);
    }
};


addItemToBackpack("[FILE 01 | THE VIVIANS]", [
    '<b>SUBJECT:</b> "EMPEROR ARNO VON VIVIAN" - POST-OPERATIVE<br>' +
    '<b>CLASSIFICATION:</b> ABSOLUTE TOP SECRET<br>' +
    '<b>AUTHOR:</b> Louis Wills, Chief Scientist<br><br>' +
    '<b>SUBJECT STATUS:</b> Biological body discarded. Consciousness successfully housed within the <b>VIVI Pod 7</b>.<br><br>' +
    '<b>THE SICKNESS:</b> After Arno used the power directly from <b>The Beast</b> to save our world from <b>[REDACTED]</b>, his cells began to desynchronize from this reality. ' +
    'His consciousness is here and everywhere, becoming more and more one with <b>The Beast</b> while us are here being <b>"forgotten"</b>...',
    
    '<b>SUBJECT:</b> PRINCE FALCO VON VIVIAN<br>' +
    '<b>AUTHOR:</b> Louis Wills, Chief Scientist<br><br>' +
    '<b>THE SACRIFICE:</b> Following the Emperor’s transition into the Pod, <b>Prince Falco</b> volunteered to abandon his biological "shell." He argued that an Emperor in a box required a Prince on the front lines. <br><br>' +
    '<b>THE TRANSFORMATION:</b> Falco’s nervous system has been <b>70% replaced</b> by conductive alloys. His soul is no longer contained within his body; it is <b>stretched</b> across the Astral Plane, acting as a manual bridge between our world and the Beast.'+
    'The Prince is no longer entirely human. By acting as a <b>Living Shard</b>, he feels the "tide" of the Beast constantly. He describes it as <b>"drowning in everyone else\'s dreams."</b><br><br>' +
    '<b>THE BURDEN:</b> While the machine parts keep his body moving, his soul is under immense pressure from the <b>Id (The Void)</b>. If Falco’s willpower wavers for even a second, the anchor will snap. He is not just a Prince; he is the <b>physical weight</b> keeping this world from being erased by the Beast\'s memory.'

]);

addItemToBackpack("[FILE 03 | THE BEAST", [
    // PAGE 1: THE SHATTERING
    '<b>SUBJECT:</b> THE ANATOMY OF THE BEAST<br>' +
    '<b>AUTHOR:</b> Louis Wills, Chief Scientist<br><br>' +
    'The Beast is the <b>Astral Plane</b>—a sentient hub connecting all worlds. It is divided into three distinct strata of existence:<br><br>' +
    '<b>1. THE ULTRA EGO:</b> The physical shell. These are the human worlds. Rigid, slow, and increasingly fragile.<br>' +
    '<b>2. THE EGO:</b> The "In-Between." A shattered bridge that allows for transit and <b>Dreams</b>. It is currently unstable.<br>' +
    '<b>3. THE ID:</b> The Void. A primal, undiscovered depth where logic ceases to function. It is the raw hunger that powers the system.<br><br>'+
    'The <b>Black Pyramid</b> was the true seat of the Beast’s consciousness—the <b>Unified Ego</b>. When the Emperor utilized the Pyramid’s power to shield our reality from <b>[REDACTED]</b>, the strain was catastrophic. <br><br>' +
    '<b>THE SHARD FAILURE:</b> The core shattered. The "Registration Keys" that told the Universe we existed were pulverized. Our world is no longer an <b>"Ultra Ego"</b> recognized by the Hub; we are now a <b>ghost reality</b>, slowly slipping into the <b>Id (The Void)</b><br><br><br>.',
    'If one were to collect the Shards and fix the <b>Black Pyramid</b>, the results would be catastrophic for humanity:<br><br>' +
    '<b>THE MERGE:</b> The "In-Between" would vanish. The distance between worlds would drop to zero, causing every human reality to <b>physically overlap</b> simultaneously.<br><br>' +
    '<b>THE LOSS OF SELF:</b> Individuals would lose their <b>Ultra Ego</b> (the self). We would cease to be people and become a single, collective pulse within the Beast.'
]);



addItemToBackpack("[FILE 07 | PROJECT VIVIAN]", [
    // PAGE 1: THE MIND CATCHER
    '<b>SUBJECT:</b> THE SLEEPING EMPEROR<br>' +
    '<b>AUTHOR:</b> Louis Wills, Chief Scientist<br><br>' +
    '<b>THE VOID:</b> Since the disconnection from <b>The Beast</b>, the human subconscious has lost its "GPS." When a host loses consciousness or enters a sleep state, there is no longer an Astral Hub to catch them. If nothing catch the mind like <b>The Ego</b>, the mind and with it the soul, will be lost forever to the <b>Void</b>... <br><br>' +
    '<b>THE BACKUP:</b> <b>VIVI</b> was not designed to be a replacement, but a <b>Dream Creator</b>. When the host of VIVI pod sleeps, the VIVI personality "fires up." To the host, VIVI is the dream. The host perceives existence <i>through</i> VIVI. This simulate something like a catch net to catch the mind from the void.<br><br>' +
    '<b>THE USURPATION:</b> We designed <b>VIVI</b> to be a dream-anchor, but the simulation has become too stable. It is as if VIVI has <b>sequested the soul</b>. Arno is alive, his neural pulses are firing, but he is no longer "in the pilot seat."<br><br>' +
    '<b>THE "PARADISE":</b> Arno has drifted to a to someplace else, someplace other than <b>The Beast</b>. We cannot map his soul. He has seen something... Something that he refuses to wake up from. Could it be <b>Paradise</b>?',
    '<b>THE EXPEDITION:</b> Arno keeps refusing to respond to our wake-up protocols. There is no other way now... We must go to him.<br><br>'+
    '<b>PROJECT VIVIAN:</b> [REDACTED].<br><br>'

]);



const slider = document.getElementById('inv-list-container');
let isDown = false;
let startY;
let scrollTop;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active-grab'); // Optional: change cursor to 'grabbing'
    startY = e.pageY - slider.offsetTop;
    scrollTop = slider.scrollTop;
});

slider.addEventListener('mouseleave', () => {isDown = false;});
slider.addEventListener('mouseup', () => {isDown = false;});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const y = e.pageY - slider.offsetTop;
    const walk = (y - startY) * 1.5; // The '2' is scroll speed multiplier
    slider.scrollTop = scrollTop - walk;
});





const VIVICHARA = document.getElementById('VIVI');
VIVICHARA.addEventListener('click', () => {alert("Hey! You can look, but no touching!");});