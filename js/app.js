
function loadSVG(){
    fetch("img/Grad-SVG.svg")
    .then((response) => {return response.text();})
    .then((svg) =>{
        document.getElementById("story-parallax").innerHTML = svg;
        document.querySelector('#story-parallax svg').setAttribute("PreserveAspectRatio","xMidYMid slice");
        setAnimationScroll();
    })
}

loadSVG()




function setAnimationScroll() {
    // 1. Register both plugins
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // 2. Initialize ScrollSmoother
    ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2.0,   // Duration of the smooth scroll (seconds)
        effects: true, // Allows usage of data-speed attributes
    });

    // 3. Create the Timeline
    let runAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: "#story-parallax",
            start: "top top", // Start when top of element hits top of viewport
            end: "+=10000", 
            // scrub: true is instant (can be choppy). 
            // scrub: 1 adds a 1-second "catch up" which masks jitter.
            scrub: 1, 
            pin: true,
            // anticipatePin helps avoid a flash/jump when pinning starts
            anticipatePin: 1 
        }
    });

    // 4. Add Animations (Using .from for better performance)
    // The '0' at the end ensures all these start at time 0 simultaneously
    runAnimation

        //SCENE 1 ANIMATION SECTION

        .from('#Scene_1_fg_1', { opacity: 0, duration: 7 }, 5)

        .from('#Scene_1_fg_0', { y: -2500, duration: 7 }, 0)
        .from('#Scene_1_fg_1', { y: -2500, duration: 7 }, 0)
        .from('#Scene_1_layer_0', { y: -2200, duration: 6 }, 0)
        .from('#Scene_1_fog_0', { y: -2200, duration: 5 }, 0)
        .from('#Scene_1_layer_1', { y: -2200, duration: 4 }, 0)
        .from('#Scene_1_fog_1', { y: -2200, duration: 3 }, 0)
        .from('#Scene_1_Layer_2', { y: -2200, duration: 3 }, 0)
        .from('#Scene_1_Tower', { y: -2200, duration: 3 }, 0)
        .from('#Scene_1_bg', { y: -2200, duration: 2.5 }, 0)

        .to('.site-header', { opacity: 0, duration: 2.5 }, 0)

        .to('#Scene_1_fg_0', { opacity: 0, duration: 2 }, 8) 
        .to('#Scene_1_fg_1', { opacity: 1, duration: 1 }, 7)

        .to('#Scene_1_fg_0', { y: -2500, duration: 11 }, 10)
        .to('#Scene_1_fg_1', { y: -2500, duration: 11 }, 10)
        .to('#Scene_1_layer_0', { y: -2200, duration: 8 }, 10)
        .to('#Scene_1_fog_0', { y: -2200, duration: 8 }, 10)
        .to('#Scene_1_layer_1', { y: -2200, duration: 7 }, 10)
        .to('#Scene_1_fog_1', { y: -2200, duration: 6 }, 10)
        .to('#Scene_1_Layer_2', { y: -2200, duration: 5 }, 10)
        .to('#Scene_1_Tower', { y: -2200, duration: 5 }, 10)
        .to('#Scene_1_bg', { y: -2200, duration: 4 }, 10);


        //SCENE 2 ANIMATION SECTION


}