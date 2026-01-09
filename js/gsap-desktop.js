import { setSmootherInstance } from "./utils.js";
import { playRandomStep } from "./utils.js";
import { addItemToBackpack } from "./utils.js";
import { files } from "./utils.js";

let randomname = "Joseph"; // Fallback


export function startDesktopGSAP(s, q, f,rname) {
    randomname = rname

    initSecretVivi();

    const path = document.querySelector('#travelPath');
    const pathLength = path.getTotalLength();

    const smootherInstance = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2.5,
        normalizeScroll: true,
        effects: true,
    });
    
    setSmootherInstance(smootherInstance); 



const aspectRatio = window.innerWidth / window.innerHeight;
const targetRatio = 1.7;
console.log(aspectRatio);
const squareness = Math.max(0, targetRatio - aspectRatio);
const squarenessFactor = squareness * 100;

const wideness = Math.max(0, aspectRatio - targetRatio);
const widenessFactor = wideness * 100;

let responsiveValues = {
    svgp1: -200+squarenessFactor*2,
    svgp2: -250+squarenessFactor,
};

if (aspectRatio > 1.81){
    responsiveValues.svgp1 = -200-widenessFactor
    responsiveValues.svgp2 = -250-widenessFactor
}


    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#story-parallax",
            start: "top top",
            end: () => "+=" + 350 * window.innerHeight,            
            scrub: 1, 
            pin: true,
            anticipatePin: 1,
            pinType: 'transform'
        }
    });

    tl

    .set(path, {strokeDashoffset: pathLength })

    .set(".fhead",{opacity:0})


    .fromTo("#S5-SVG",{ yPercent: -550},{},"<") 

    .fromTo('.dialogue-box',{x:"300vh", y:"-100vh" ,scale: 0.0}, {x:"35vw",y:"-20vh" ,scale: 1, duration: 2 })
    .to('.character-name', {text: s, duration: 5 },"<")
    .to('#chara-quinn',{opacity:0,duration:1},"<")
    .to('#chara-seven',{opacity:1,duration:1},"<")
    .to('.dialogue-text',{text: "QUINNNY!", duration: 9 },"<")

    .fromTo('.site-header', { opacity: 1}, {opacity: 0, duration: 5 },0)
    .fromTo('.volume-tool-container', { opacity: 0}, {opacity: 1, duration: 5,
        onComplete:()=>{document.querySelector(".volume-tool-container").style.visibility = "visible";},
        onReverseComplete:()=>{document.querySelector(".volume-tool-container").style.visibility = "hidden";},
     },0)
    

    .fromTo('#S1-BG', { y: "-550%"}, {y:"0%", duration: 44.5 }, 0)
    .fromTo('#S1-TOWER', { y: "-550%"}, {y:"0%", duration: 44.3 }, 0)
    .fromTo('#S1-FOG-2', { y: "-550%"}, {y:"15%", duration: 43.1 }, 0) 
    .fromTo('#S1-L2', { y: "-550%"}, {y:"-18%", duration: 43 }, 0) 

    .fromTo('#S1-L1', { y: "-550%"}, {y:"1%", duration: 42.5 }, 0)
    .fromTo('#S1-FOG-1', { y: "-550%"}, {y:"25%", duration: 42.3 }, 0) 
    .fromTo('#S1-L0', { y: "-550%"}, {y:"0%", duration: 41.1 }, 0)
    .fromTo('#S1-FOG-0', { y: "-550%"}, {y:"25%", duration: 41.5 }, 0) 

    .fromTo('#S1-FG', { y: "-550%"}, {y: "40%", duration: 40 }, 0)


    .fromTo('.Seven', 
        {backgroundImage:'url("img/Seven/sss-s1.png")' ,className:'Seven is-front',x: "400%" ,y: "400%"}, {y: "50%", duration: 20}, "<")    

    .fromTo('.Seven', 
        {filter: "brightness(0%)"}, 
        {filter: "brightness(100%) saturate(70%) grayscale(30%)", duration: 25 }, "<+=2") 


    .fromTo('#s0-bg', { volume: 1.0}, {volume:0.0, duration: 15.5 }, "<")
    .fromTo('#s1-bg', { volume: 0.0}, {volume:1.0, duration: 24.5 }, "<")


    .to('.dialogue-box',{x:"55vw",y:"-40vh" ,scale: 1, duration: 2 },"<+=10")
    .to('.character-name', {text: s, duration: 5 })
    .to('#chara-quinn',{opacity:0,duration:1},"<")
    .to('#chara-seven',{opacity:1,duration:1},"<")
    .fromTo('#S1-QUINN-1', { opacity: 1}, {opacity: 0, duration: 3 },"<")
    .fromTo('#S1-QUINN-0', { opacity: 0}, {opacity: 1, duration: 3 },"<")   

    .to('.Seven',{className:'Seven is-front-wave'}, "<")
    .to('.dialogue-text',{text: "Entrance. Underground. You’re welcome.", duration: 25 },"<")




    .to('.dialogue-box',{x:"25vw",y:"-30vh" ,scale: 1, duration: 2 },">+=15")
    .to('#chara-quinn',{opacity:1,duration:1},"<")
    .to('#chara-seven',{opacity:0,duration:1},"<")
    .to('.character-name', {text: q, duration: 7 },"<")
    .to('.dialogue-text',{text: "", duration: 0 },"<")
    .to('.dialogue-text',{text: "Should lead us to that tower, safer than on ground.", duration: 15 },">")

    .to('.dialogue-box',{x:"55vw",y:"-40vh" ,scale: 1, duration: 2 },">+=20")
    .to('#chara-quinn',{opacity:0,duration:1},"<")
    .to('#chara-seven',{opacity:1,duration:1},"<")
    .to('.character-name', {text: s, duration: 7 },"<")
    .to('.dialogue-text',{text: "Come on Come on Come on Come on, let's go!", duration: 10 },"<")
    .to('.dialogue-box', {y:"-=25" ,x: "-=25", yoyo: true, repeat: 5, duration: 2 }, "<")
    .to('.Seven', {y:"-=55", yoyo: true, repeat: 15, duration: 5 }, "<")

    .to('.Seven',{className:'Seven is-front-wave'},'<')
    .to('.Seven',{className:'Seven is-front'},'<+=2')
    .to('.Seven',{className:'Seven is-side'},'<+=2')
    .to('.Seven',{className:'Seven is-back'},'<+=2')
    .to('.Seven',{scaleX:-1 ,className:'Seven is-side',duration:0},'<+=2')
    .to('.Seven',{scaleX:1 ,className:'Seven is-front',duration:0},'<+=2')    
    .to('.Seven',{className:'Seven is-side'},'<+=2')
    .to('.Seven',{className:'Seven is-back'},'<+=2')
    .to('.Seven',{scaleX:-1 ,className:'Seven is-side',duration:0},'<+=2')
    .to('.Seven',{scaleX:1 ,className:'Seven is-front',duration:0},'<+=2')



    .to('.dialogue-box',{x:"25vw",y:"-30vh" ,scale: 1, duration: 2 },"<+=18")
    .to('#chara-quinn',{opacity:1,duration:1},"<")
    .to('#chara-seven',{opacity:0,duration:1},"<")
    .to('.character-name', {text: q, duration: 7 },"<")
    .to('.dialogue-text',{text: "Calm down! It’s probably the sewers, not a theme park.", duration: 25 },"<")
    .fromTo('#S1-QUINN-0', { opacity: 1}, {opacity: 0, duration: 3 },"<")
    .fromTo('#S1-QUINN-1', { opacity: 0}, {opacity: 1, duration: 3 },"<")

    .to('.dialogue-box',{scale: 0, duration: 7 },"+=5")
    .to('#chara-quinn',{opacity:0,duration:1},"<")
    .to('#chara-seven',{opacity:0,duration:1},"<")
    .to('.dialogue-text', {text: "", duration: 0.5},"<")


    .to('.Seven',{y: "-100%", duration: 9 }, "<")
    

    .to('#S1-FG', {y: "-20%", duration: 23 },"<") 
    .to('#S1-FOG-0', {y:"-45%", duration: 21.5 }, "<")
    .to('#S1-L0', {y:"-80%", duration: 21 }, "<")
    .to('#S1-L1', {y:"-70%", duration: 21 }, "<")
    .to('#S1-FOG-1', {y:"-40%", duration: 20.5 }, "<")
    .to('#S1-L2', {y:"-105%", duration: 20 }, "<")
    .to('#S1-FOG-2', {y:"-70%", duration: 18.5 }, "<")
    .to('#S1-TOWER', {y:"-90%", duration: 18 }, "<")
    .to('#S1-BG', {y:"-80%", duration: 18 },"<")


    .to('#S1-FG', {y: "-300%", duration: 32 }) 
    .to('#S1-FOG-0', {y:"-300%", duration: 7 }, "<")
    .to('#S1-L0', {y:"-300%", duration: 7 }, "<")
    .to('#S1-L1', {y:"-300%", duration: 7 }, "<")
    .to('#S1-FOG-1', {y:"-300%", duration: 7 }, "<")
    .to('#S1-L2', {y:"-300%", duration: 7 }, "<")
    .to('#S1-FOG-2', {y:"-300%", duration: 7 }, "<")
    .to('#S1-TOWER', {y:"-300%", duration: 7 }, "<")
    .to('#S1-BG', {y:"-300%", duration: 7 },"<")
    .set('.Seven', {x: "400%", y: "1000%", backgroundImage: 'url("img/Seven/sss-s1.png")',className: 'Seven is-front',filter: "brightness(0%)",}, "<")
    .to('#s1-bg', { volume: "0.0", duration: 14.5 }, "<")




    .fromTo('#trem', 
    { volume: 0.0}, { volume: 0.5, duration: 25.5,
        onStart: () => {
            const gyardd = document.getElementById("trem");
            gyardd.pause();
            gyardd.currentTime = 0;
            gyardd.play();

        }
    }, 
    "<"
)


.fromTo('#s2-bg', { volume: "0.0"}, {volume:"0.6", duration: 24.5 }, "<")

.fromTo('#S2-FG', {filter: "brightness(0%) saturate(0%)", y:"250%"}, {filter: "brightness(100%) saturate(80%)",y:"-65%", duration: 31 },"<+=10")
.fromTo('#S2-L0', {filter: "brightness(0%) saturate(0%)", y:"200%"}, {filter: "brightness(100%) saturate(60%)",y:"-55%", duration: 23 },"<")
.fromTo('#S2-L1', {filter: "brightness(0%) saturate(0%)", y:"150%"}, {filter: "brightness(100%) saturate(40%)",y:"-40%", duration: 21 },"<")
.fromTo('#S2-L2', {filter: "brightness(0%) saturate(0%)", y:"100%"}, {filter: "brightness(100%) saturate(30%)",y:"-20%", duration: 20 },"<")
.fromTo('#S2-BG', {opacity:0.0,y:"30%"}, {opacity:1.0, y:"-20%", duration: 21 },"<")


.to('#S2-FG', {filter: "brightness(5%) saturate(100%)" ,y:"-110%", duration: 25 })
.to('#S2-L0', {filter: "brightness(5%) saturate(100%)",y:"-140%", duration: 23 },"<")
.to('#S2-L1', {filter: "brightness(5%) saturate(100%)",y:"-120%", duration: 22 },"<")
.to('#S2-L2', {filter: "brightness(5%) saturate(100%)",y:"-160%", duration: 21 },"<")
.to('#S2-BG', {opacity:0.0,y:"-100%", duration: 4 },"<")

.fromTo('#S2-LW', {scale:0.2,opacity:0.0, x:"37vw" ,y:"-315%"}, {opacity:1.0,y:"0%", duration: 20.5 },"<")

.to({}, {
    onStart: () => document.getElementById("lw-fall").play(),
    onReverseComplete: () => document.getElementById("lw-fall-rev").play(),
}, "<+=10")

.fromTo('#S3-L0', {opacity:0.0}, {opacity:1.0,y:"-10%", duration: 1 },"<")
.fromTo('#S3-BG', {opacity:0.0,y:"0%"}, {opacity:1.0, duration: 20 },"<")
.to('#S2-LW', {opacity:0.3,y:"100%", duration: 40 })
.to('#S2-FG', {y:"-200%", duration: 25 },"<")
.to('#S2-L0', {y:"-200%", duration: 23 },"<")
.to('#S2-L1', {y:"-200%", duration: 22 },"<")
.to('#S2-L2', {y:"-200%", duration: 21 },"<")




.to('.dialogue-box', {x:"50vw",y:"-50vh" ,scale: 1, duration: 2 },"<")
.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.fromTo('.dialogue-text',{text:""} ,{text: "🎶 Take Oooon m—", duration: 15 },"<")

.to('#S3-LE', {x: "-=5", yoyo: true, repeat: 55, duration: 2 }, "<")
.fromTo('#S3-LE', {scale: 0.5,y:"-200%",x:"30%"}, {y:"-35%", duration: 40, },"<")

.fromTo("#ele",{volume: 0.0} , {volume: 1.0, duration: 10},"<")


.to('#S3-BG', {y:"-20%" ,duration: 80 },"<")
.to('#S3-L0', {y:"-30%",duration: 80 },"<")


.to('.dialogue-box',{x:"0vw",y:"-55vh", duration: 10 },"<+=25")

.to('.character-name', {text: q, duration: 3 },"<")
.to('#chara-quinn', {opacity:1,duration:1},"<")
.to('#chara-seven', {opacity:0,duration:1},"<")
.to('.dialogue-text',{text: `VIVI!`, duration: 25 },"<")


.to('.dialogue-box',{x:"0vw",y:"-70vh", duration: 10 },"<+35")
.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text: "...fine.", duration: 5 },"<")
.to('.dialogue-text',{text: "I'll sing with my internal voice.", duration: 25 },"<+=35")


.to('.dialogue-box',{x:"0vw",y:"-80vh", duration: 15 },"<+=35")
.to('.character-name', {text: q, duration: 3 },"<")
.to('#chara-quinn', {opacity:1,duration:1},"<")
.to('#chara-seven', {opacity:0,duration:1},"<")
.to('.dialogue-text',{text: "<i>sigh</i>." , duration: 16 },"<")


.to('#S2-LW', {opacity:0.3,y:"17%",duration: 5},"+=10")
.to("#ele",{volume: 0.0, duration: 10},"<")


.to('.dialogue-box', {x:"-15vw",y:"-40vh", duration: 2 },"<")
.to('.dialogue-text', {text: "", duration: 10 },"<")

.to('#S3-LE', {y:"-175%",duration: 20 },"<")
.fromTo('#S3-FG-0', {y:"200%"}, {y:"65%", duration: 10 },"<")
.fromTo('#S3-FG-1', {y:"200%"}, {y:"30%", duration: 12 },"<")
.to('#S2-LW', {scaleY:0.0, opacity:0.0,duration: 2},"<+=10")
.to('#S3-BG', {y:"-30%" ,duration: 8 },"<")
.to('#S3-L0', {y:"-50%",duration: 8 },"<")
.fromTo('#S3-LS',{x:"-98%",y:"12%",opacity:0.0},{opacity:1.0,duration:5},'<')
.to({}, {
    onStart: () => document.getElementById("lw-hit").play(),
    onReverseComplete: () => document.getElementById("lw-hit-rev").play(),
}, "<+=2")

.to('#S3-FG-0', {y:"-100%", duration: 35 })
.to('#S3-FG-1', {y:"-100%", duration: 15 },"<")
.to('#S3-L0', {y:"-300%", duration: 16 },"<")
.to('#S3-LE', {y:"-155%", duration: 20 },"<")
.to('#S3-BG', {y:"-300%", duration: 20 },"<")


.to('#s2-bg', { volume: "0.0", duration: 14.5 }, "<")


.fromTo(['#S4-FG','#S4-FG-1'],{filter:"brightness(30%) saturate(0%)" ,scale:2.5,y:'250%',x:'75%'},{y:'25%',duration: 35},'<+=5')

.fromTo('.Quinn-lantern',{scale: 2.3,y:'30%',x:'-80%', opacity:0.0},{x:'-75%',opacity:0.5,duration: 20})

.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<")

.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<+=5")


.set('.Seven', {x: "400%", y: "1000%", backgroundImage: 'url("img/Seven/sss-s4.png")',scaleX:-1,className: 'Seven is-side',filter: "brightness(100%)",}, "<")
.fromTo('.Seven',{x: "-100%",y:'45%'},{x:'100%',y: "50%", duration: 14}, "<")  

.to('.dialogue-box',{x:"50vw",y:"-85vh", duration: 15 },"<")
.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text: "You never really talk about this 'Arno' fella.", duration: 15 },"<")

.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<+=5")


.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<+=5")

.set('.Quinn',{className: 'Quinn a'},'<')

.set('.Quinn-lantern',{className: 'Quinn-lantern c'},'<')

.to('.Quinn-lantern',{opacity: 0.7,x:'-70%',duration: 10})
.to('#S4-FG',{filter:"brightness(100%)",duration: 15},"<")
.to('#S4-FG-1',{filter:"brightness(90%) saturate(50%)",duration: 15},"<")

.to('.Seven',{className:'Seven is-front',scaleX:1,duration:0},"<")

.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<+=5")

.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<+=5")

.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<+=15")


.set('.Quinn',{className: 'Quinn b'},'<')
.set('.Quinn-lantern',{className: 'Quinn-lantern d'},'<')

.to('.Quinn-lantern',{opacity: 1.0,x:'-65%',duration: 2})
.set('.Quinn',{className: 'Quinn c'},'<')
.set('.Quinn-lantern',{className: 'Quinn-lantern a'},'<')

.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<")

.to('.Quinn-lantern',{x:'-60%',duration: 5})
.set('.Quinn',{className: 'Quinn d'},'<')
.set('.Quinn-lantern',{className: 'Quinn-lantern b'},'<')


.to('.dialogue-text',{text: "<i>The one you trying to kill, FYI.</i>", duration: 15 },"<")


.to('.Quinn-lantern',{x:'-55%',duration: 2},"<+=6")
.set('.Quinn',{className: 'Quinn a'},'<')
.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<")
.set('.Quinn-lantern',{className: 'Quinn-lantern c'},'<')

.to('.Quinn-lantern',{x:'-50%',duration: 5},"<+=3")
.set('.Quinn',{className: 'Quinn b'},'<')
.set('.Quinn-lantern',{className: 'Quinn-lantern d'},'<')

.to('.Quinn-lantern',{x:'-45%',duration: 2},"<+=6")
.set('.Quinn',{className: 'Quinn c'},'<')
.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<")
.set('.Quinn-lantern',{className: 'Quinn-lantern a'},'<')

.to('.Quinn-lantern',{x:'-40%',duration: 5},"<+=3")
.set('.Quinn',{className: 'Quinn d'},'<')
.set('.Quinn-lantern',{className: 'Quinn-lantern b'},'<')
.to('#S4-FG',{x:'73%',duration: 3},"<")



.to('.Quinn-lantern',{x:'-35%',duration: 2},"<+=6")
.to('#S4-FG',{x:'70%',duration: 3},"<")
.set('.Quinn',{className: 'Quinn a'},'<')
.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<")
.set('.Quinn-lantern',{className: 'Quinn-lantern c'},'<')

.to('.Quinn-lantern',{x:'-33%',duration: 5},"<+=3")
.to('#S4-FG',{x:'66%',duration: 3},"<")

.set('.Quinn',{className: 'Quinn b'},'<')
.set('.Quinn-lantern',{className: 'Quinn-lantern d'},'<')

.to('.Quinn-lantern',{x:'-30%',duration: 2},"<+=6")
.to('#S4-FG',{x:'63%',duration: 3},"<")

.set('.Quinn',{className: 'Quinn c'},'<')
.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<")
.set('.Quinn-lantern',{className: 'Quinn-lantern a'},'<')

.to('.Quinn-lantern',{x:'-28%',duration: 5},"<+=3")
.to('#S4-FG',{x:'59%',duration: 3},"<")

.set('.Quinn',{className: 'Quinn d'},'<')
.set('.Quinn-lantern',{className: 'Quinn-lantern b'},'<')


.to('.dialogue-box',{x:"50vw",y:"-85vh", duration: 5 },"<")
.to('.character-name', {text: q, duration: 3 },"<")
.to('#chara-quinn', {opacity:1,duration:1},"<")
.to('#chara-seven', {opacity:0,duration:1},"<")
.to('.dialogue-text',{text: "What's there to talk about?", duration: 5 },"<")


.to('.Quinn-lantern',{x:'-27%',duration: 2},"<+=6")
.to('#S4-FG',{x:'57%',duration: 3},"<")

.set('.Quinn',{className: 'Quinn a'},'<')
.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<")
.set('.Quinn-lantern',{className: 'Quinn-lantern c'},'<')

.to('.Quinn-lantern',{x:'-24%',duration: 5},"<+=3")
.to('#S4-FG',{x:'55%',duration: 3},"<")
.set('.Quinn',{className: 'Quinn b'},'<')
.set('.Quinn-lantern',{className: 'Quinn-lantern d'},'<')

.to('.Quinn-lantern',{x:'-23%',duration: 2},"<+=6")
.to('#S4-FG',{x:'53%',duration: 3},"<")
.set('.Quinn',{className: 'Quinn c'},'<')
.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<")
.set('.Quinn-lantern',{className: 'Quinn-lantern a'},'<')

.to('.Quinn-lantern',{x:'-20%',duration: 5},"<+=3")
.to('#S4-FG',{x:'49%',duration: 3},"<")
.set('.Quinn',{className: 'Quinn d'},'<')
.set('.Quinn-lantern',{className: 'Quinn-lantern b'},'<')



.to('.Quinn-lantern',{x:'-19%',duration: 2},"<+=6")
.to('#S4-FG',{x:'45%',duration: 3},"<")
.to('#S4-FG-1',{x:'73%',duration: 3},"<")
.set('.Quinn',{className: 'Quinn a'},'<')
.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<")
.set('.Quinn-lantern',{className: 'Quinn-lantern c'},'<')

.to('.Quinn-lantern',{x:'-17%',duration: 5},"<+=3")
.to('#S4-FG',{x:'42%',duration: 3},"<")
.to('#S4-FG-1',{x:'71%',duration: 3},"<")

.set('.Quinn',{className: 'Quinn b'},'<') 
.set('.Quinn-lantern',{className: 'Quinn-lantern d'},'<')
.to('.Seven',{className:'Seven is-side'},"<")


.to('.dialogue-box',{x:"50vw",y:"-85vh", duration: 5 },"<")
.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text:"",duration:0},"<")
.to('.dialogue-text',{text:"Traveling half the continent just to kill some man?!",duration:15},">")


.to('.Quinn-lantern',{x:'-16%',duration: 2},"<+=6")
.to('#S4-FG',{x:'38%',duration: 3},"<")
.to('#S4-FG-1',{x:'70%',duration: 3},"<")

.set('.Quinn',{className: 'Quinn c'},'<')
.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<")
.set('.Quinn-lantern',{className: 'Quinn-lantern a'},'<')



.to('.Quinn-lantern',{x:'-13%',duration: 5},"<+=3")
.to('#S4-FG',{x:'34%',duration: 3},"<")
.to('#S4-FG-1',{x:'69%',duration: 3},"<")

.set('.Quinn',{className: 'Quinn d'},'<')
.set('.Quinn-lantern',{className: 'Quinn-lantern b'},'<')

.to('.Quinn-lantern',{x:'-11%',duration: 2},"<+=6")
.to('#S4-FG',{x:'29%',duration: 3},"<")
.to('#S4-FG-1',{x:'68%',duration: 3},"<")

.set('.Quinn',{className: 'Quinn a'},'<')
.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<")
.set('.Quinn-lantern',{className: 'Quinn-lantern c'},'<')

.to('.Quinn-lantern',{x:'-9%',duration: 5},"<+=3")
.to('#S4-FG',{x:'25%',duration: 3},"<")
.to('#S4-FG-1',{x:'67%',duration: 3},"<")

.set('.Quinn',{className: 'Quinn b'},'<')
.set('.Quinn-lantern',{className: 'Quinn-lantern d'},'<')


.to('.Quinn-lantern',{x:'-8%',duration: 2},"<+=6")
.to('#S4-FG',{x:'22%',duration: 3},"<")

.set('.Quinn',{className: 'Quinn c'},'<')
.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<")
.set('.Quinn-lantern',{className: 'Quinn-lantern a'},'<')

.to('.Quinn-lantern',{x:'-5%',duration: 5},"<+=3")
.to('#S4-FG',{x:'19%',duration: 3},"<")
.set('.Quinn',{className: 'Quinn d'},'<')
.set('.Quinn-lantern',{className: 'Quinn-lantern b'},'<')

.to('.Quinn-lantern',{x:'-3%',duration: 2},"<+=6")
.to('#S4-FG',{x:'16%',duration: 3},"<")
.set('.Quinn',{className: 'Quinn a'},'<') 
.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<")
.set('.Quinn-lantern',{className: 'Quinn-lantern c'},'<')


.to('.dialogue-box',{x:"50vw",y:"-85vh", duration: 5 },"<")
.to('.character-name', {text: q, duration: 3 },"<")
.to('#chara-quinn', {opacity:1,duration:1},"<")
.to('#chara-seven', {opacity:0,duration:1},"<")
.to('.dialogue-text',{text:"",duration:0},"<")
.to('.dialogue-text',{text:"a bad man.",duration:5},"<")

.to('.Seven',{x:'680%',duration: 70},"<")


.to('.Quinn-lantern',{x:'0%',duration: 5},"<+=3")
.to('#S4-FG',{x:'12%',duration: 3},"<")
.set('.Quinn',{className: 'Quinn b'},'<')
.set('.Quinn-lantern',{className: 'Quinn-lantern d'},'<')

.to('.Quinn-lantern',{x:'3%',duration: 2},"<+=6")
.set('.Quinn',{className: 'Quinn c'},'<') 
.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<")
.set('.Quinn-lantern',{className: 'Quinn-lantern c'},'<')

.to('.Quinn-lantern',{x:'6%',duration: 5},"<+=3")
.set('.Quinn',{className: 'Quinn d'},'<')
.set('.Quinn-lantern',{className: 'Quinn-lantern d'},'<')



.to('.Quinn-lantern',{x:'9%',duration: 2},"<+=6")
.to('#S4-FG',{x:'8%',duration: 3},"<")

.set('.Quinn',{className: 'Quinn a'},'<') 
.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<")
.set('.Quinn-lantern',{className: 'Quinn-lantern c'},'<')

.to('.Quinn-lantern',{x:'11%',duration: 5},"<+=3")
.set('.Quinn',{className: 'Quinn b'},'<')
.set('.Quinn-lantern',{className: 'Quinn-lantern d'},'<')


.to('.dialogue-box',{x:"70vw",y:"-85vh", duration: 25 },"<")
.to('.dialogue-text',{text:"",duration:0},"<")
.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text:"That perhaps you know him personally... hmmm?",duration:25},">")


.to('.Quinn-lantern',{x:'15%',duration: 2},"<+=6")
.set('.Quinn',{className: 'Quinn c'},'<') 
.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<")
.set('.Quinn-lantern',{className: 'Quinn-lantern a'},'<')

.to('.Quinn-lantern',{x:'19%',duration: 5},"<+=3")
.set('.Quinn',{className: 'Quinn d'},'<') 
.set('.Quinn-lantern',{className: 'Quinn-lantern b'},'<')

.to('.Quinn-lantern',{x:'24%',duration: 2},"<+=6")
.set('.Quinn',{className: 'Quinn a'},'<') 
.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<")

.to('.Quinn-lantern',{x:'29%',duration: 5},"<+=3")
.set('.Quinn',{className: 'Quinn b'},'<')
.set('.Quinn-lantern',{className: 'Quinn-lantern d'},'<')


.to('.Quinn-lantern',{x:'34%',duration: 2},"<+=6")

.set('.Quinn',{className: 'Quinn c'},'<')
.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<")
.set('.Quinn-lantern',{className: 'Quinn-lantern a'},'<')

.to('.Quinn-lantern',{x:'39%',duration: 5},"<+=3")

.set('.Quinn',{className: 'Quinn d'},'<') 
.set('.Quinn-lantern',{className: 'Quinn-lantern b'},'<')

.to('.Quinn-lantern',{x:'45%',duration: 2},"<+=6")


.to('.character-name', {text: q, duration: 3 },"<")
.to('#chara-quinn', {opacity:1,duration:1},"<")
.to('#chara-seven', {opacity:0,duration:1},"<")
.to('.dialogue-text',{text:"V! Drop it.",duration:5},"<")


.set('.Quinn',{className: 'Quinn a'},'<')
.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<")
.set('.Quinn-lantern',{className: 'Quinn-lantern c'},'<')

.to('.Quinn-lantern',{x:'49%',duration: 5},"<+=3")
.set('.Quinn',{className: 'Quinn b'},'<')
.set('.Quinn-lantern',{className: 'Quinn-lantern d'},'<')



.to('.Quinn-lantern',{x:'56%',duration: 2},"<+=6")

.set('.Quinn',{className: 'Quinn c'},'<')
.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<")
.set('.Quinn-lantern',{className: 'Quinn-lantern a'},'<')

.to('.Quinn-lantern',{x:'63%',duration: 5},"<+=3")

.set('.Quinn',{className: 'Quinn d'},'<') 
.set('.Quinn-lantern',{className: 'Quinn-lantern b'},'<')

.to('.Quinn-lantern',{x:'69%',duration: 2},"<+=6")


.set('.Quinn',{className: 'Quinn a'},'<')
.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<")
.set('.Quinn-lantern',{className: 'Quinn-lantern c'},'<')

.to('#S4-FG',{filter:"brightness(30%) saturate(15%)",duration: 15},"<")
.to('.Quinn-lantern',{opacity:0.0,x:'75%',duration: 5},"<+=3")
.set('.Quinn',{className: 'Quinn b'},'<')
.set('.Quinn-lantern',{className: 'Quinn-lantern d'},'<')


.to('.dialogue-box',{x:"100vw",y:"-85vh", duration: 15 },"<")
.to(['#S4-FG',"#S4-FG-1"],{y:'-200%',duration: 25})

.set("#S5-SVG", { y: "50vh", yPercent:-60}) 
.fromTo(path,{strokeDasharray:pathLength,strokeDashoffset: pathLength} , {strokeDashoffset: 0,duration: 250,ease: "none"})
.to("#traveler-heads", { motionPath: { path: "#travelPath", align: "#travelPath", alignOrigin: [0.5, 0.5]},duration: 250,ease: "none"}, "<")
.to("#S5-SVG",{ yPercent: -100, duration: 120, ease: "none" }, "<")

.to('.dialogue-box',{x:"2vw",y:"-60vh", duration: 15 },"<")
.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text: "Come on, Quinny Que. Lay the lore out.", duration: 30 },"<")

.to('.dialogue-box',{x:"2vw",y:"-30vh", duration: 15 },">+=15")
.to('.character-name', {text: q, duration: 3 },"<")
.to('#chara-quinn', {opacity:1,duration:1},"<")
.to('#chara-seven', {opacity:0,duration:1},"<")
.set('.dialogue-text', { text: ""}, "<")
.to('.dialogue-text',{text: "We're all gonna bite the dust soon anyway.", duration: 30 },"<")


.to('.dialogue-box',{x:"2vw",y:"-60vh", duration: 15 },"<+=40")
.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.set('.dialogue-text', { text: ""}, "<")
.to('.dialogue-text',{text: "Tsk Tsk.", duration: 10 },"<")
.set('.dialogue-text', { text: ""}, "<")
.to('.dialogue-text',{text: "I’m serious, Quinn. You've go t-", duration: 35 },"<+=30")


.to("#S5-SVG", { yPercent: responsiveValues.svgp1, duration: 120, ease: "none" }, "<+15")

.to('.dialogue-box',{x:"70vw",y:"-60vh", duration: 15 },"<=+20")
.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.set('.dialogue-text', { text: ""}, "<")
.to('.dialogue-text',{text: "Ummm...", duration: 5 },">")
.set('.dialogue-text', { text: ""}, ">+=15")
.to('.dialogue-text',{text: "Pretty sure my audio drivers broke again. I can hear your footstep twice.", duration: 35 },">")

.to("#trem",{volume:0.0, duration: 40},"<")

.to('.dialogue-box',{x:"70vw",y:"-30vh", duration: 15 },">+=15")
.to('.character-name', {text: q, duration: 3 },"<")
.to('#chara-quinn', {opacity:1,duration:1},"<")
.to('#chara-seven', {opacity:0,duration:1},"<")
.to('.dialogue-text',{text: "Huh...?!", duration: 15 },"<")


.to('.fhead',{opacity:1.0,duration: 0 })
.to("#S5-SVG", { yPercent: responsiveValues.svgp2, duration: 30, ease: "none" }, "+=15")


.fromTo('#gyard', 
    { volume: 0.0 }, 
    { 
        volume: 0.5, 
        duration: 5.5,
        onStart: () => {
            const gyard = document.getElementById("gyard");
            gyard.currentTime = 0;
            gyard.play();
        },
        onReverseComplete: () => {
            const gyard = document.getElementById("gyard");
            gyard.pause();
            gyard.currentTime = 0; // Reset so it's ready for the next entry
        }
    }, 
    "<"
)

.to('.dialogue-box',{x:"70vw",y:"-60vh", duration: 15 },"<=+5")
.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text: "", duration: 1 },"<")
.to('.dialogue-text',{text: "OH NEVERMIND!!! IT'S HIM AGAIN! QUINN!!!", duration: 5 },"<")

.fromTo('#S5-F-S',{x:"100%"},{x:"45%" ,duration:10},">+=30")
.fromTo('#S5-Falco-0',{opacity:"1.0",scale:"0.4",y:"-20%",x:"100%"},{x:"30%",duration:5},"<")
.fromTo('#S5-Falco-1',{filter: "blur(10px) brightness(1.5",opacity:"0.0",scale:"0.4",y:"-20%",x:"28%"},{},"<")
.fromTo('#S5-Falco-2',{filter: "blur(10px) brightness(1.5",opacity:"0.0",scale:"0.4",y:"-20%",x:"28%"},{},"<")
.fromTo('#S5-Falco-3',{filter: "blur(10px) brightness(1.5",opacity:"0.0",scale:"0.4",y:"-20%",x:"28%"},{},"<")
.fromTo('#S5-Falco-4',{filter: "blur(10px) brightness(1.5",opacity:"0.0",scale:"0.4",y:"-20%",x:"28%"},{},"<")
.fromTo('#S5-Falco-5',{filter: "blur(10px) brightness(1.5",opacity:"0.0",scale:"0.4",y:"-20%",x:"28%"},{},"<")

.to('.dialogue-box',{x:"45vw",y:"-70vh", duration: 15 },"<")
.to('.character-name', {text: f, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:1,duration:1},"<")
.to('.dialogue-box', {x:"-=25",y:"-=25", yoyo: true, repeat: 5, duration: 2 }, "<")
.to('.dialogue-text',{text: "IT IS I!!", duration: 15 },"<")
.to('.dialogue-text',{text: "THE GRRRRRREAT FALCO!",duration: 20},">+=15")
.to('.dialogue-box', {y:"-=10", yoyo: true, repeat: 15, duration: 2 }, "<")

.to('.dialogue-text',{text: "Savior of humanity.",duration: 25},">+=15")
.to('.dialogue-text',{text: "",duration: 0},">+=15")
.to('.dialogue-text',{text: "<i>In the process of it anyway.</i>. ",duration: 25},"<")

.to('.dialogue-text',{text: "",duration: 0},">+=10")
.to('.dialogue-text',{text: "I did not come here to shed blood <br> <i>[Or for mine to be shed...]</i>.",duration: 35},">")

.to('.dialogue-box',{x:"5vw",y:"-60vh", duration: 15 },">=+15")
.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text: "", duration: 0 },"<")
.set('.shead',{className:"shead shead-talk"},"<")
.to('.shead',{x:"-100%",scale:2.5,duration:15},"<")
.fromTo('.shead img',{scale:0.0},{rotation:"-10%",y:"-60%",x:"-30%",scale:0.7,duration:15},"<")
.to('.dialogue-box', { x: "-=15",y:"-=15", yoyo: true, repeat: 8, duration: 2 }, "<")
.to('.dialogue-text',{text: "Hey! Is that my hat?!", duration: 10 },"<")

.to("#S5-Falco-0",{filter: "blur(5vw) brightness(1.5)",opacity:"0.0",duration:10},">+=5")
.to('#S5-Falco-3',{filter: "blur(0px) brightness(1)",opacity:"1.0",duration:2},"<")

.to('.dialogue-box',{x:"45vw",y:"-70vh", duration: 15 },">+=15")
.to('.character-name', {text: f, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:1,duration:1},"<")

.set('.shead',{className:"shead"},"<")
.to('.dialogue-text',{text: "You can remember this hat but not ME?! Your own son?!", duration: 15 },"<")
.to('.shead img',{scale:0.0 ,duration:15},"<")


.to('.dialogue-box',{x:"5vw",y:"-60vh", duration: 15 },">=+15")
.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text: "", duration: 0 },"<")

.set('.shead',{className:"shead shead-talk"},"<")
.to('.dialogue-text',{text: "Did you break into my home, huh you creep?!", duration: 25 },">")
.to('.dialogue-text',{text: "", duration: 0 },">+=15")
.set('.shead',{className:"shead"},"<")
.to('.dialogue-text',{text: "<i>Ummm... Do I even have home?</i>", duration: 25 },">")


.to('.dialogue-box',{x:"50vw",y:"-80vh", duration: 15 },">=+15")

.to('.character-name', {text: f, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:1,duration:1},"<")
.to('#chara-seven', {opacity:0,duration:1},"<")

.to("#S5-Falco-3",{filter: "blur(5vw) brightness(1.5)",opacity:"0.0",duration:10},">+=5")
.to('#S5-Falco-4',{filter: "blur(0px) brightness(1)",opacity:"1.0",duration:2},"<")
.fromTo('#anger-head',{opacity:0.0},{opacity:"1.0",duration:2},"<")
.to('.dialogue-box', { x: "-=15",y:"-=15", yoyo: true, repeat: 35, duration: 2 }, "<")
.to('.dialogue-text',{text: "", duration: 0 },"<")
.to('.dialogue-text',{text: "WE.", duration: 25 },">")
.to('.dialogue-text',{text: "", duration: 0 },">+5")
.to('.dialogue-text',{text: "LIVE.", duration: 5 },"<")
.to('.dialogue-text',{text: "", duration: 0 },">+5")
.to('.dialogue-text',{text: "UNDER.", duration: 5 },"<")
.to('.dialogue-text',{text: "", duration: 0 },">+5")
.to('.dialogue-text',{text: "THE SAME ROOF!", duration: 5 },"<")


.to('.dialogue-box',{x:"5vw",y:"-60vh", duration: 15 },">=+15")
.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text: "", duration: 0 },"<")

.set('.shead',{className:"shead shead-talk"},"<")
.to('.dialogue-text',{text: "", duration: 0},">")
.to('#anger-head',{opacity:0.0,duration:2},"<")



.to('.dialogue-text',{text: "Yeah, Yeah. Whatever. Anyway...", duration: 25 },">")

.to("#S5-Falco-4",{filter: "blur(5vw) brightness(1.5)",opacity:"0.0",duration:10},">+=15")
.to('#S5-Falco-3',{filter: "blur(0px) brightness(1)",opacity:"1.0",duration:2},"<")

.to('.dialogue-text',{text: "", duration: 0 },">+=15")
.to('.dialogue-text',{text: "Anyone seen my RA spray? my propeller is getting rusty.", duration: 25 },">")
.set('.shead',{className:"shead shead-side"},"<")
.set('.shead',{className:"shead"},">+=15")
.set('.shead',{scaleX: -2.5,className:"shead shead-side"},">+=15")
.set('.shead',{scaleX: 2.5,className:"shead"},">+=15")
.set('.shead',{scaleX: 2.5,className:"shead shead-side",duration:15},">+=15")

.to('.dialogue-text',{text: "", duration: 0 },">+=15")
.to('.dialogue-box', { x: "-=15",y:"-=15", yoyo: true, repeat: 15, duration: 2 }, "<")
.to('.dialogue-text',{text: "Or did you steal it too! <br><br><i>Like you stole my hat</i>.", duration: 25 },">")
.to('.shead img',{scale:1.0 ,duration:15},"<")
.to('.shead',{className:"shead shead-talk" ,duration:15},"<")

.to('.character-name', {text: f, duration: 3 },">+=25")
.to('.shead',{className:"shead" ,duration:15},"<")

.to("#S5-Falco-3",{filter: "blur(5vw) brightness(1.5)",opacity:"0.0",duration:10},"<")
.to('#S5-Falco-4',{filter: "blur(0px) brightness(1)",opacity:"1.0",duration:2},"<")
.to('.shead img',{scale:0.0 ,duration:15},"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:1,duration:1},"<")
.to('#chara-seven', {opacity:0,duration:1},"<")
.to('.dialogue-box',{x:"45vw",y:"-70vh", duration: 15 },"<")
.to('.dialogue-box', { x: "-=25", yoyo: true, repeat: 55, duration: 2 }, "<")
.to('#S5-Falco-4', {y:"-=25" ,x: "-=25", yoyo: true, repeat: 55, duration: 2 }, "<")
.to('.dialogue-text',{text: "", duration: 0 },"<")
.to('.dialogue-text',{text: "I DIDN'T STEAL ANYTHING!!!!", duration: 25 },"<")
.to('.dialogue-text',{text: "", duration: 0 },">+=25")
.to('.dialogue-text',{text: "YOU GAVE ME THAT DAMN <i>HAT</i>.", duration: 25 },"<")
.to('.dialogue-text',{text: "", duration: 0 },">+=15")
.to('.character-name', {text: "FALCO VON VIVIAN !!!!!", duration: 3 },"<")
.to('.dialogue-text',{text: "YOUR OWN SON. FALCO VON VIVIAN!!!!", duration: 15 },"<")


.to('.dialogue-text',{text: "", duration: 0 },">+25")
.to('.character-name', {text: f, duration: 3 },">")
.to('.dialogue-text',{text: "I'M TRYING TO SAVE YOU HERE!", duration: 15 },">")
.to('.dialogue-text',{text: "", duration: 0 },">+=15")

.to("#S5-Falco-4",{filter: "blur(5vw) brightness(1.5)",opacity:"0.0",duration:10},">+=5")
.to('#S5-Falco-3',{filter: "blur(0px) brightness(1)",opacity:"1.0",duration:2},"<")


.to('.dialogue-box',{x:"60vw",y:"-80vh", duration: 15 },"<")
.to('.dialogue-text',{text: "Also, I may have some RA left. <br><br><i>Not that I stole it</i>", duration: 15 },">")

.to('#S5-Falco-4',{className:"parallax-layer"},"<")



.to("#S5-Falco-3",{filter: "blur(5vw) brightness(1.5)",opacity:"0.0",duration:10},"+=15")
.to('#S5-Falco-1',{filter: "blur(0px) brightness(1)",opacity:"1.0",duration:2},"<")
.set('.shead',{className:"shead" ,scaleX: 2.5},"<")
.to('.shead img',{scale:1.0 ,duration:5},"<")




.fromTo('#gyard', 
    { volume: 0.5}, { volume: 0.0, duration: 0.5,
        onStart: () => {
            const gyardd = document.getElementById("gshot");
            gyardd.currentTime = 0;
            gyardd.play();


            const rs = document.getElementById("rs");
            rs.currentTime= 0;
            rs.play();

            const gyard = document.getElementById("gyard");
            gyard.pause();
            gyard.currentTime = 0;
        },
        onReverseComplete: () => {
            const gyardd = document.getElementById("gshot-rev");
            gyardd.currentTime = 0;
            gyardd.play();

            const gyard = document.getElementById("gyard");
            gyard.currentTime = 0;
            gyard.play();

        }
    }, 
    "<"
)

.set("#S5-F-S img",{attr:{src:"img/Layers/S5-Falco-Side-broken.webp"}},"<")
.to('.dialogue-box',{x:"55vw",y:"-80vh", duration: 15 },"<")
.to('.character-name', {text: f, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:1,duration:1},"<")
.to('#chara-seven', {opacity:0,duration:1},"<")
.to('.dialogue-text',{text: "HOLY $&!%", duration: 10 },"<")
.to('#S5-Falco-1', {y:"-=25" ,x: "-=25", yoyo: true, repeat: 5, duration: 2 }, "<")
.to('#S5-F-S', {y:"-=25" ,x: "-=25", yoyo: true, repeat: 5, duration: 2 }, "<")


.to('.dialogue-box',{x:"40vw",y:"-80vh", duration: 15 },">=+15")
.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text: "", duration: 0 },"<")
.to('.dialogue-text',{text: "My hat >':", duration: 15 },">")
.to('.shead',{x:"0%",scale:1.0,duration:15},"<")
.to('.shead img',{scale:0.0 ,duration:5},"<")


.fromTo('#r1', 
    { volume: 0.0 }, 
    { 
        volume: 0.5, 
        duration: 5.5,
        onStart: () => {
            const r1 = document.getElementById("r1");
            r1.currentTime = 0;
            r1.play();

        },
        onReverseComplete: () => {
            const gyard = document.getElementById("r1");
            gyard.pause();
            gyard.currentTime = 0;

        }
    }, 
    "<"
)

.fromTo('#S5-Q-S',{x:"-100%"},{x:"-45%",duration:25},"<")
.fromTo('#S5-Quinn',{scale:"0.4",x:"-100%"},{x:"-30%",duration:15},"<")

.to('.dialogue-box',{x:"0vw",y:"-80vh", duration: 15 },">+=15")
.to('.character-name', {text: q, duration: 3 },"<")
.to('#chara-quinn', {opacity:1,duration:1},"<")
.to('#chara-falco', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:0,duration:1},"<")
.to('.dialogue-text',{text: "", duration: 1 },"<")
.to('.dialogue-text',{text: "NOW'S A GREAT TIME TO TEST YOUR NEW AUGMENT V!", duration: 25 },">")

.to('.dialogue-box',{x:"55vw",y:"-80vh", duration: 15 },">+=15")
.to('.character-name', {text: f, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:1,duration:1},"<")
.to('#chara-seven', {opacity:0,duration:1},"<")
.to('.dialogue-text',{text: "Come on Quinn, no need for that. <br><i>The gun is actually for show.</i>", duration: 25 },"<")


.to('.dialogue-box',{x:"40vw",y:"-80vh", duration: 15 },">+=15")
.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text: "", duration: 0 },"<")
.to('.dialogue-text',{text: "Sorry my <i>alleged</i> son. <br> <i>Who stole my hat and it seems my RA too.</i>", duration: 25 },">")
.to("#S5-SVG",{yPercent:-500,duration:55},"<")


.to('#S5-F-S',{x:"55%" ,duration:25},"<")
.to('#S5-Falco-1',{scale:"0.35",y:"-20%",x:"38%",duration:15},"<")


.to('#S5-Q-S',{x:"-55%",duration:25},"<")
.to('#S5-Quinn',{scale:"0.35",x:"-40%",duration:15},"<")

.set('.Seven', {x: "265%",y:'450%',backgroundImage: 'url("img/Seven/sss.png")',scaleX:1,className: 'Seven is-front',filter: "brightness(100%)",}, "<")
.to('.Seven',{y: "100%", duration: 14}, "<")  

.to('.character-name', {text: f, duration: 3 },">+=25")
.to('.dialogue-box',{x:"55vw",y:"-80vh", duration: 15 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:1,duration:1},"<")
.to('#chara-seven', {opacity:0,duration:1},"<")
.to('.dialogue-text',{text: "I can find a way to save you, Father. Just please come with m-", duration: 15 },"<")


.to('#S5-F-S',{x:"45%" ,duration:25},"<")
.to('#S5-Falco-1',{scale:"0.4",x:"28%",duration:15},"<")


.to('.dialogue-box',{x:"0vw",y:"-80vh", duration: 15 },">+=20")

.to('#S5-Q-S',{x:"-45%",duration:15},"<")
.to('#S5-Quinn',{scale:"0.4",x:"-35%",duration:15},"<")

.to('.character-name', {text: q, duration: 3 },"<")
.to('#chara-quinn', {opacity:1,duration:1},"<")
.to('#chara-falco', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:0,duration:1},"<")
.to('.dialogue-text',{text: "", duration: 0 },"<")
.to('.dialogue-text',{text: "He can take us out any second now.", duration: 25 },">")
.to('.dialogue-text',{text: "", duration: 0 },">+=10")
.to('.dialogue-box', {y:"-=25" ,x: "-=25", yoyo: true, repeat: 5, duration: 2 }, "<")
.to('.dialogue-text',{text: "DO IT NOW!", duration: 5 },"<")

.to('.dialogue-box',{x:"40vw",y:"-80vh", duration: 15 },">+=15")

.to('#S5-Q-S',{x:"-55%",duration:15},"<")
.to('#S5-Quinn',{scale:"0.35",x:"-35%",duration:15},"<")

.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text: "", duration: 0 },"<")
.to('.dialogue-text',{text: "This is for stealing my HAT, <i>and RA spray.</i>", duration: 15 },"<")
.to('.dialogue-text',{text: "", duration: 0 },">+=15")
.to('.dialogue-text',{text: "EXPLOSION!", duration: 15 },">")
.to('.dialogue-box', {y:"-=25" ,x: "-=25", yoyo: true, repeat: 2, duration: 2 }, "<")
.set(".Seven",{className: 'Seven is-expo'},"<")


.to('.dialogue-box',{x:"55vw",y:"-80vh", duration: 15 },">+=15")
.to('.character-name', {text: f, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:1,duration:1},"<")
.to('#chara-seven', {opacity:0,duration:1},"<")
.to('.dialogue-text',{text: "Aghaaaa... ", duration: 25 },"<")
.to('.dialogue-text',{text: "...", duration: 0 },">+=15")
.to('.dialogue-text',{text: "Ummm...?", duration: 25 },">")

.to("#S5-Falco-1",{filter: "blur(5vw) brightness(1.5)",opacity:"0.0",duration:10},"<")
.to('#S5-Falco-5',{filter: "blur(0px) brightness(1)",opacity:"1.0",duration:2},"<")

.to('.dialogue-text',{text: "", duration: 0 },">+=10")
.to('.dialogue-box',{x:"40vw",y:"-80vh", duration: 15 },">")
.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.set(".Seven",{className: 'Seven is-reading'},"<")
.to('.dialogue-text',{text: "No, no.", duration: 15 },">")

.to('#S5-F-S',{x:"55%" ,duration:25},"<")
.to('#S5-Falco-5',{scale:"0.35",y:"-20%",x:"38%",duration:15},"<")
.to('#S5-Falco-1',{scale:"0.35",y:"-20%",x:"38%",duration:15},"<")

.to('.dialogue-text',{text: "", duration: 0 },">+=10")
.to('.dialogue-text',{text: "How about..................................................................................................................................................................................................", duration: 45 },">")
.to('.dialogue-text',{text: "", duration: 0 },">+=10")

.set(".Seven",{className: 'Seven is-expo'},"<")
.to('.dialogue-text',{text: "SUPER NOVA!", duration: 15 },">")
.to('.dialogue-box', {y:"-=25" ,x: "-=25", yoyo: true, repeat: 5, duration: 2 }, "<")

.to('.dialogue-text',{text: "", duration: 0 },">+=10")

.set(".Seven",{className: 'Seven is-reading'},"<")
.to('.dialogue-text',{text: "Nah too cliché. Just a sec...", duration: 15 },">")


.to('.character-name', {text: q, duration: 3 },">+=15")
.to('.dialogue-box',{x:"5vw",y:"-80vh", duration: 15 },"<")
.to('#chara-quinn', {opacity:1,duration:1},"<")
.to('#chara-falco', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:0,duration:1},"<")
.to('.dialogue-text',{text: "VI.VI.", duration: 15 },"<")

.to('#S5-Q-S',{x:"-45%",duration:15},"<")
.to('#S5-Quinn',{scale:"0.4",x:"-35%",duration:15},"<")


.to('.dialogue-box',{x:"40vw",y:"-80vh", duration: 15 },">+=15")
.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text: "", duration: 0 },">")
.to('.dialogue-text',{text: "...Ugh, whatever.", duration: 15 },">")

.set(".Seven",{className: 'Seven is-expo'},"<")
.to('#S5-Q-S',{x:"-55%",duration:25},"<")
.to('#S5-Quinn',{scale:"0.35",x:"-40%",duration:15},"<")

.to('.character-name', {text: f, duration: 3 },">+=25")
.to('.dialogue-box',{x:"55vw",y:"-80vh", duration: 15 },"<")

.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:1,duration:1},"<")
.to('#chara-seven', {opacity:0,duration:1},"<")
.to('.dialogue-box', {scale:1.4,y:"-=25" ,x: "-=25", yoyo: true, repeat: 5, duration: 2 }, "<")
.to('.dialogue-text',{text: "NOT AGAIN!", duration: 5 },"<")

.to("#S5-Falco-5",{filter: "blur(5vw) brightness(1.5)",opacity:"0.0",duration:10},"<")
.to('#S5-Falco-1',{filter: "blur(0px) brightness(1)",opacity:"1.0",duration:2},"<")

.to("#r1",{volume:0.0,duration:10.0},"<")

.fromTo('#r2', 
    { volume: 0.0 }, 
    { 
        volume: 0.5, 
        duration: 5.5,
        onStart: () => {
            const r1 = document.getElementById("r2");
            r1.currentTime = 0;
            r1.play();

        },
        onReverseComplete: () => {
            const gyard = document.getElementById("r2");
            gyard.pause();
            gyard.currentTime = 0;

        }
    }, 
    "<"
)

.to('.parallax-layer', {y:"-=55" ,x: "-=55", yoyo: true, repeat: 25, duration: 2 }, "<")
.fromTo('#S5-EXPO',{scale:"0"},{scale:"0.05",duration:35},"<")
.fromTo('.Seven',{filter:"brightness(100%)"},{filter:"brightness(5%)",duration:20},"<")
.fromTo('#S5-Falco-1',{filter:"brightness(100%)"},{filter:"brightness(10%)",duration:20},"<")
.fromTo('#S5-Quinn',{filter:"brightness(100%)"},{filter:"brightness(10%)",duration:20},"<")

.to('#S5-EXPO',{scale:"1",duration:15,
    onStart: () => {
        const r1 = document.getElementById("ex");
        r1.currentTime = 0;
        r1.play();
    }})



.to('.Seven',{filter:"brightness(100)",duration:1},"<")
.to('#S5-Quinn',{filter:"brightness(1.5)",y:"-50%",scale:"0.4",x:"-100%",duration:25},"<")
.to('#S5-Q-S',{filter:"brightness(1.5)",y:"-55%", x:"-100%",duration:10},"<")
.to('#S5-F-S',{filter:"brightness(1.5)",y:"55%",x:"100%",duration:10},"<")
.to('#S5-Falco-0',{y:"-55%",x:"100%" ,duration:25},"<")
.to('#S5-Falco-1',{filter:"brightness(1.5)",y:"-55%",x:"100%" ,duration:25},"<")

.fromTo('#file4',{visibility:"hidden",x:"0%",opacity:0, filter:"brightness(0) saturate(0) hue-rotate(30deg)"},{visibility:"visible",x:"-300%",opacity:1 ,filter:"brightness(5)" ,duration:5},"<")

.to('.Seven',{opacity:0.0,scale:2,filter:"brightness(100%)",duration:1},">")



.to('.dialogue-box',{y:"-150vh", duration: 15 },">+=5")
.to('#file4',{opacity:0, filter:"brightness(0) saturate(0) hue-rotate(30deg)",duration:5},"<")

.to('#S5-EXPO',{opacity:"0",duration:25,
        onReverseComplete: () => {
        const gyard = document.getElementById("ex-rev");
            gyard.currentTime = 0;
        gyard.play();

    }
},"<")


.to('#file4',{visibility:"hidden"},">")


.fromTo([".S6"], { opacity: 0},{})

.to('.dialogue-box', {scale:1.2, x: "40vw", y: "-25vh", duration: 15 }, "+=60")
.to('.dialogue-box', { y: "-=15",x:"-=15", yoyo: true, repeat: 3, duration: 2 }, "<")
.to('.character-name', { text: 'Rahal', duration: 5 }, "<")
.to(['#chara-falco', '#chara-quinn', '#chara-seven'], { opacity: 0, duration: 15 }, "<")
.to('#chara-rahal', {opacity: 1, duration: 5 }, "<")
.to('.dialogue-text', { text: "", duration: 0 }, "<")
.to('.dialogue-text', { text: "IS THE MANIAC GONNA EXPLODE?! ", duration: 45 }, ">")
.to('.dialogue-text', { text: "", duration: 0 }, ">+=15")
.to('.dialogue-box', { y: "-=25",x:"-=25", yoyo: true, repeat: 3, duration: 2 }, "<")
.to('.dialogue-text', { text: "Dammit VIVI, SNAP OUT OF IT!!", duration: 45 }, "<")
.to('.dialogue-text', { text: "", duration: 0 }, ">+=15")
.to('.dialogue-box',{scale:0, duration: 15 },"<")

.to('.dialogue-box', {scale:1,x: "60vw", y: "-80vh", duration: 25, ease: "power2.out" }, "+=35") 

.fromTo('#rahal-p0', 
    { volume: 0.0 }, 
    { 
        volume: 0.5, 
        duration: 15.5,
        onStart: () => {
            const r1 = document.getElementById("rahal-p0");
            r1.currentTime = 0;
            r1.play();
        },
        onReverseComplete: () => {
            const gyard = document.getElementById("rahal-p0");
            gyard.pause();
            gyard.currentTime = 0;
        }
    }, 
    "<"
)

.to('.character-name', { text: s, duration: 5 }, "<")
.to('#chara-rahal', { opacity: 0, duration: 10 }, "<")
.to('#chara-seven', { opacity: 1, duration: 10 }, "<")
.to('.dialogue-text', { text: "", duration: 0 }, "<")
.to('.dialogue-text', { text: "Hmmmm........", duration: 30 }, ">")
.to('.dialogue-text', { text: "", duration: 0 }, "<")
// 50 is not greater than 50, remains 50
.to('.dialogue-text', { text: "What... happened... why is my arm raised like that?",letterSpacing:"3px", duration: 50 }, ">")

// 50 is not greater than 50, remains 50
.fromTo("#S6-RAHAL", {filter:"blur(50px)",opacity: 0}, {filter:"blur(0px)",opacity: 1, duration: 50.0, },"<")

// 55.5 -> 35.5
.to("#S6-RAHAL", {filter:"blur(50px)",opacity: 0, duration: 35.5, stagger: 0.05, ease: "power2.inOut"},"+=15")

// 55.5 -> 35.5
.fromTo([".S6:not(#S6-RAHAL)"],  {filter:"blur(50px)",opacity: 0 }, { 
    filter:"blur(0px)",
    opacity: 1, 
    duration: 35.5, 
    stagger: 0.05,
    ease: "power2.inOut" 
  },"+=5")

.fromTo("#S6-R0",{filter:"blur(50px)",opacity: 0, opacity:0}, {filter:"blur(0px)",opacity: 0, opacity: 1, duration: 25.5, stagger: 0.05, ease: "power2.inOut"},"<")

.to('.dialogue-box', { x: "40vw", y: "-80vh", duration: 15, ease: "back.out(2)" })
.to('.character-name', { text: 'Rahal', duration: 0.1 }, "<")
.to('#chara-seven', { opacity: 0, duration: 0.2 }, "<")
.to('#chara-rahal', { opacity: 1, duration: 0.2 }, "<")
.to('.dialogue-text', { text: "", duration: 0 }, ">")
.to('.dialogue-text', { text: `WHAT THE HELL, VIVI?!`, duration: 25.2 }, "<")
.to('.dialogue-text', { text: "", duration: 0 }, ">+=15")

.to("#S6-R0", {filter:"blur(50px)",opacity: 0, duration: 15.5, stagger: 0.05, ease: "power2.inOut"},"<")
.fromTo("#S6-R1",{filter:"blur(50px)",opacity: 0}, {filter:"blur(0px)",opacity: 1, duration: 15.5, stagger: 0.05, ease: "power2.inOut"},"<")

.to('.dialogue-text', { text: `YOU WERE THIS CLOSE TO KILLING US BOTH!`, duration: 25.2 }, "<")
.to('.dialogue-text', { text: "", duration: 0 }, ">+=15")
.to('.dialogue-text', { text: `Also who is this "Quinn"??"`, duration: 25.2 }, "<")
.to('.dialogue-text', { text: "", duration: 0 }, ">+=15")

.to("#S6-R1", {filter:"blur(50px)",opacity: 0, duration: 15.5, stagger: 0.05, ease: "power2.inOut"},"<")
.fromTo("#S6-R0",{filter:"blur(50px)",opacity: 0}, {filter:"blur(0px)",opacity: 1, duration: 15.5, stagger: 0.05, ease: "power2.inOut"},"<")
.set("#S6-R0",{className:""},"<")
.set("#S6-R0",{className:"DRAMA"},"<")

.to('.dialogue-text', { text: `"Quinnnnn!" "Where are you, Quiiinnn?."`, duration: 25.2 }, "<")

.to('.dialogue-text', { text: "", duration: 0 }, ">+=15")
.to('.dialogue-text', { text: `"QUINNN. QUINNN. QUINNNN.".`, duration: 25.2 }, "<")

.to('.dialogue-text', { text: "", duration: 0 }, ">+=15")
.to("#S6-R0", {filter:"blur(50px)",opacity: 0, duration: 15.5, stagger: 0.05, ease: "power2.inOut"},"<")
.fromTo("#S6-R4",{filter:"blur(50px)",opacity: 0}, {filter:"blur(0px)",opacity: 1, duration: 15.5, stagger: 0.05, ease: "power2.inOut"},"<")
.set("#S6-R0",{className:""},"<")
.to('.dialogue-text', { text: `"Oh save me QUINN.".`, duration: 25.2 }, "<")

.to('.dialogue-box', { x: "30vw", y: "-80vh", duration: 25, ease: "power2.out" }, ">+=10") 

.to('.character-name', { text: s, duration: 5 }, "<")
.to('#chara-rahal', { opacity: 0, duration: 10 }, "<")
.to('#chara-seven', { opacity: 1, duration: 10 }, "<")
.to('.dialogue-text', { text: "", duration: 0 }, "<")
.to('.dialogue-box', { y: "-=5",x:"-=25", yoyo: true, repeat: 4, duration: 2 }, "<")
.to('.dialogue-text', { text: "I had an episode. ALRIGHT! ", duration: 15 }, "<")

.to("#S6-R4", {filter:"blur(50px)",opacity: 0, duration: 15.5, stagger: 0.05, ease: "power2.inOut"},">+=15")
.fromTo("#S6-R5",{filter:"blur(50px)",opacity: 0}, {filter:"blur(0px)",opacity: 1, duration: 15.5, stagger: 0.05, ease: "power2.inOut"},"<")

.to('.dialogue-text', { text: "", duration: 0 }, ">")
.to('.dialogue-text', { text: "You really love the sound of your own voice.", duration: 15 }, ">")


.to('.dialogue-box', { x: "70vw", y: "-80vh", duration: 15, ease: "back.out(2)" }, ">+=15")
.to('.character-name', { text: 'Rahal', duration: 0.1 }, "<")
.to('#chara-arfop', { opacity: 0, duration: 0.2 }, "<")
.to('#chara-rahal', { opacity: 1, duration: 0.2 }, "<")
.to('.dialogue-text', { text: "Whatever... <i>Jar head.</i>", duration: 15 }, "<")


.set("#arfop1",{opacity:0.0},"+=26")

.to('.dialogue-box', { x: "30vw", y: "-80vh", duration: 25, ease: "power2.out" }, "<") 
.to('.character-name', { text: s, duration: 5 }, "<")
.to('#chara-rahal', { opacity: 0, duration: 10 }, "<")
.to('#chara-seven', { opacity: 1, duration: 10 }, "<")
.to('.dialogue-text', { text: "...", duration: 1 }, "<")

.set("#arfop0",{opacity:1.0},"<")

.to("#S6-R5", {x:"50%", duration: 10.5, stagger: 0.05, ease: "power2.inOut"},"<")
.to(["#S6-LHOUSE","#S6-IUPDOWN",'#S6-ISLAND'],{y:"-45%",x:"10%", duration :40},"<")
.to(["#S6-ITREE","#S6-FLOATS-ITREE"],{y:"-50%",x:"30%", duration :40},"<")
.to("#S6-FLOAT0",{y:"-65%",x:"4%", duration :35},"<")
.to("#S6-FLOAT1",{y:"-80%",x:"8%", duration :25},"<")
.to(["#S6-BG","#S6-BG-CLOUDS"],{x:"1%",y:"-60%", duration: 30},"<")
.to("#S6-FG",{x:"70%",y:"-61%", duration :30},"<")
.to("#S6-FG",{scale: 2.3,x:"85%", duration :20})

.to('.dialogue-box', {scale:1,x: "10vw", y: "-50vh", duration: 5, ease: "back.out(2)" }, "<")
.to('.dialogue-text', { text: "...", duration: 0 }, "<")
.to('.dialogue-text', { text: "Ummmmm...want a hug or something, Arfop?", duration: 25 }, ">=15")

.set("#S6-R5",{opacity:0.0,x:"10%"},"<")

.to('.dialogue-box', {x: "45vw", y: "-80vh", duration: 5, ease: "back.out(2)" }, "+=15")
.to('.character-name', { text: 'Arfop', duration: 5 }, "<")
.to('#chara-seven', { opacity: 0, duration: 15 }, "<")
.to('#chara-arfop', { opacity: 1, duration: 15 }, "<")
.to('.dialogue-text', { text: "", duration: 0 }, "<")
.to('.dialogue-text', { text: "...", duration: 10 }, ">")

.to('.dialogue-box', { x: "70vw", y: "-80vh", duration: 15, ease: "back.out(2)" }, ">+=16")
.to('.character-name', { text: 'Rahal', duration: 0.1 }, "<")
.to('#chara-arfop', { opacity: 0, duration: 0.2 }, "<")
.to('#chara-rahal', { opacity: 1, duration: 0.2 }, "<")
.to('.dialogue-text', { text: "", duration: 0 }, ">")
.to('.dialogue-text', { text: `He wants "His" backpack back.`, duration: 25.2 }, "<")

.to('.dialogue-box', { x: "10vw", y: "-70vh", duration: 25, ease: "power2.out" }, ">+=15") 
.to('.character-name', { text: s, duration: 5 }, "<")
.to('#chara-rahal', { opacity: 0, duration: 10 }, "<")
.to('#chara-seven', { opacity: 1, duration: 10 }, "<")
.to('.dialogue-text', { text: "", duration: 0 }, "<")
.to('.dialogue-text', { text: "How come you always know what he wants?!.", duration: 25 }, ">")

.to('.dialogue-box', { x: "70vw", y: "-80vh", duration: 15, ease: "back.out(2)" }, ">+=16")
.to('.character-name', { text: 'Rahal', duration: 0.1 }, "<")
.to('#chara-arfop', { opacity: 0, duration: 0.2 }, "<")
.to('#chara-rahal', { opacity: 1, duration: 0.2 }, "<")
.to('.dialogue-text', { text: "", duration: 0 }, ">")
.to('.dialogue-text', { text: `It's called body language. <br><br><i>Not that you have one.</i>`, duration: 25.2 }, "<")

.to('.inv-tool-icon', {y: "+=100",x:"100%", scale: 3.5, rotation: -25, duration: 5, ease: "back.in(1.5)"}, ">+=5")
.to('.inv-tool-icon', {y: "-=100", scale: 0, rotation: 25, duration: 5, ease: "power2.inOut(1.5)"}, ">+=5")

.set("#arfop1",{opacity:1.0},"<")
.set("#arfop0",{opacity:0.0},"<")
.call(() => {document.getElementById('bclose').play()}, null, "<")

.to('.dialogue-box', {x: "45vw", y: "-80vh", duration: 5, ease: "back.out(2)" }, ">+=15")
.to('.character-name', { text: 'Arfop', duration: 5 }, "<")
.to(['#chara-seven', '#chara-norina'], { opacity: 0, duration: 15 }, "<")
.to('#chara-arfop', { opacity: 1, duration: 15 }, "<")
.to('.dialogue-text', { text: "", duration: 0 }, "<")
.to('.dialogue-text', { text: "...", duration: 10 }, ">")

// 50 stays 50
.to("#S6-FG",{scale: 1.8,x:"70%",y:"0%", duration :50},"+=16")
// 55 -> 35
.to(["#S6-LHOUSE","#S6-IUPDOWN","#S6-ITREE","#S6-FLOATS-ITREE,#S6-FLOAT0","#S6-FLOAT1","#S6-BG-CLOUDS","#S6-BG","#S6-ISLAND"],{y:"0%", duration :35},"<")

.to('.dialogue-box', {scale:0,x: "45vw", y: "-80vh", duration: 5, ease: "back.out(2)" }, "<")
.to('.dialogue-text', { text: "", duration: 1 }, "<")

.to(["#S6-LHOUSE","#S6-IUPDOWN","#S6-ISLAND"],{y:"0%",x:"0%", duration :35})
.to(["#S6-ITREE","#S6-FLOATS-ITREE"],{y:"0%",x:"0%", duration :35},"<")
.to("#S6-FLOAT0",{y:"0%",x:"0%", duration :30},"<")
.to("#S6-FLOAT1",{y:"0%",x:"0%", duration :25},"<")
.to(["#S6-BG","#S6-BG-CLOUDS"],{x:"0%",y:"0%", duration :45},"<")
.to("#S6-FG",{x:"0%", duration :40},"<")

.fromTo("#S6-R6",{filter:"blur(50px)",opacity: 0}, {filter:"blur(0px)",opacity: 1, duration: 2.5, ease: "power2.inOut"},"<")

.to('.dialogue-box', {scale:1, x: "30vw", y: "-20vh", duration: 15, ease: "back.out(2)" }, "<+=60")
.to('.character-name', { text: 'Rahal', duration: 0.1 }, "<")
.to('#chara-arfop', { opacity: 0, duration: 0.2 }, "<")
.to('#chara-rahal', { opacity: 1, duration: 0.2 }, "<")
.to('.dialogue-text', { text: "", duration: 0 }, ">")
.to('.dialogue-text', { text: "<i>Sigh</i>", duration: 25 }, ">")
.to('.dialogue-text', { text: "", duration: 0 }, ">+=16")
.to('.dialogue-text', { text: `Come on, let's just go.`, duration: 25.2 }, "<")
.to('.dialogue-text', { text: "", duration: 0 }, ">+=16")
.to('.dialogue-text', { text: "The client should be waiting for us, up on that lighthouse.", duration: 25.2 }, ">")
.to("#S6-R6", {filter:"blur(50px)",opacity: 0, duration: 15.5, stagger: 0.05, ease: "power2.inOut"},"<")
.fromTo("#S6-R7",{filter:"blur(50px)",opacity: 0}, {filter:"blur(0px)",opacity: 1, duration: 5.5, stagger: 0.05, ease: "power2.inOut"},"<")

.to('.dialogue-text', { text: "...", duration: 0 }, "+=20")
.to('.dialogue-box', {scale:0, x: "70vw", y: "-80vh", duration: 5, ease: "back.out(2)" }, "<")

.to("#S6-R7", {filter:"blur(50px)",opacity: 0, duration: 15.5, stagger: 0.05, ease: "power2.inOut"},"<")
.fromTo("#S6-R5",{filter:"blur(50px)",opacity: 0}, {filter:"blur(0px)",opacity: 1, duration: 15.5, stagger: 0.05, ease: "power2.inOut"},"<")

.to("#S6-R5", {filter:"blur(50px)",opacity: 0, duration: 15.5, stagger: 0.05, ease: "power2.inOut"},">+=20")
.fromTo("#S6-R2",{filter:"blur(50px)",opacity: 0}, {filter:"blur(0px)",opacity: 1, duration: 15.5, stagger: 0.05, ease: "power2.inOut"},"<")

.to('.dialogue-box', {scale:1, x: "50vw", y: "-80vh", duration: 5, ease: "back.out(2)" }, "<")
.to('.dialogue-text', { text: "", duration: 0 }, "<")
.to('.dialogue-text', { text: "OHHHHHHH VIIIIIII VIIIIIIII.", duration: 25.2 }, ">")
.to('.dialogue-text', { text: "", duration: 0 }, ">+=16")
.to('.dialogue-text', { text: "Sorry I yelled back there, for almost turning us to dust.<br><br> <i>Whatever that blue aura was</i>", duration: 25.2 }, ">")

.to("#S6-R2", {filter:"blur(50px)",opacity: 0, duration: 15.5, stagger: 0.05, ease: "power2.inOut"},">+=20")
.fromTo("#S6-R3",{filter:"blur(50px)",opacity: 0}, {filter:"blur(0px)",opacity: 1, duration: 15.5, stagger: 0.05, ease: "power2.inOut"},"<")
.to('.dialogue-text', { text: "", duration: 0 }, "<")
.to('.dialogue-text', { text: "Wooouuuld you kindly... Fly us over there, hmmm?", duration: 25.2 }, ">")

.to('.dialogue-box', { x: "25vw", y: "-70vh", duration: 25, ease: "power2.out" }, ">+=15") 
.to('.character-name', { text: s, duration: 5 }, "<")
.to('#chara-rahal', { opacity: 0, duration: 10 }, "<")
.to('#chara-seven', { opacity: 1, duration: 10 }, "<")
.to('.dialogue-text', { text: "", duration: 0 }, "<")
.to('.dialogue-text', { text: "Hmmmmmmmm...", duration: 25 }, ">")

.to('.dialogue-box', { x: "50vw", y: "-80vh", duration: 15, ease: "back.out(2)" }, "+=15")


.to('.character-name', { text: 'Rahal', duration: 0.1 }, "<")
.to('#chara-arfop', { opacity: 0, duration: 0.2 }, "<")
.to('#chara-rahal', { opacity: 1, duration: 0.2 }, "<")
.to('.dialogue-text', { text: "", duration: 0 }, ">")
.to('.dialogue-text', { text: "COME ON, VIVI. SAID I'M SORRY.", duration: 25 }, ">")
.to("#S6-R3", {filter:"blur(50px)",opacity: 0, duration: 15.5, stagger: 0.05, ease: "power2.inOut"},"<")
.fromTo("#S6-R0",{filter:"blur(50px)",opacity: 0}, {filter:"blur(0px)",opacity: 1, duration: 15.5, stagger: 0.05, ease: "power2.inOut"},"<")


.to(["#S6-FLOATS-ITREE","#S6-FG"],{y:"150%", duration :55},"<+=20")
.to('.dialogue-text', { text: "", duration: 0 }, "<")
.to(["#S6-ITREE","#S6-LHOUSE","#S6-IUPDOWN","#S6-FLOATS-ITREE,#S6-FLOAT0"],{y:"150%", duration :50},"<")
.to(["#S6-FLOAT1","#S6-ISLAND"],{y:"150%", duration :75},"<")
.to(['#S6-BG',"#S6-BG-CLOUDS"],{opacity:0 ,duration: 100 },"<")

.to('.dialogue-text', { text: "<i>Although you did deserve it</i>", duration: 5 }, "<+=20")

.fromTo('.S7',{opacity:0}, {opacity:1,duration: 100 },"<")


//PART 2 : 

.to('.dialogue-box', {scale:0,x: "70vw", y: "-80vh", duration: 15, ease: "back.out(2)" })



.to('#rahal-p0',  
    { 
        volume: 0.0, 
        duration: 15.5,
        onReverseComplete: () => {
            const r1 = document.getElementById("rahal-p0");
            r1.currentTime = 0;
            r1.play();
        },
        onComplete: () => {
            const gyard = document.getElementById("rahal-p0");
            gyard.pause();
            gyard.currentTime = 0;
        }
    }, 
    "<"
)

.fromTo('#rahal-p1', 
    { volume: 0.0 }, 
    { 
        volume: 0.5, 
        duration: 45.5,
        onStart: () => {
            const r1 = document.getElementById("rahal-p1");
            r1.currentTime = 0;
            r1.play();
        },
        onReverseComplete: () => {
            const gyard = document.getElementById("rahal-p1");
            gyard.pause();
            gyard.currentTime = 0;
        }
    }, 
    "<"
)

.to('.dialogue-box', {scale:1, x: "60vw", y: "-80vh", duration: 15 }, "<+=50")



.fromTo("#S7-FG",{y:"100%",scale:0.5},{scale:2,y:"0%",duration: 355},"<")
.fromTo(["#VIVI-3D","#RAHAL-3D","#ARFOP-3D"],{x:"150%"},{x:"0%",duration: 555},"<")
.fromTo(["#S7-FG-1"],{y:"300%"},{y:"50%",duration: 133},"<")
.fromTo(["#S7-FG-2"],{y:"300%"},{y:"60%",duration: 133},"<")

.fromTo("#S7-L0",{x:"-150%"},{x:"100%",duration: 1250},"<")



.to('.character-name', { text: 'Rahal', duration: 5 }, "<")
.to('#chara-seven', { opacity: 0, duration: 5 },   "<")
.to('#chara-rahal', {opacity: 1, duration: 5 }, "<")
.to('.dialogue-text', { text: "", duration: 0 }, "<")
.to('.dialogue-text', { text: "<i>Ughhhhh</b>. I would kill for some pizza right now.", duration: 25 }, ">")


.to('.dialogue-box', { x: "30vw", y: "-80vh", duration: 25, ease: "power2.out" }, ">+=15") 
.to('.character-name', { text: s, duration: 5 }, "<")
.to('#chara-rahal', { opacity: 0, duration: 10 }, "<")
.to('#chara-seven', { opacity: 1, duration: 10 }, "<")
.to('.dialogue-text', { text: "", duration: 0 }, "<")
.to('.dialogue-text', { text: "I... I think I had a....", duration: 25 }, "<")
.to('.dialogue-text', { text: "", duration: 0 }, ">+=15")
.to('.dialogue-text', { text: "...A really cool hat.",letterSpacing:"3px", duration: 45 }, ">")

.to('.dialogue-box', {scale:1, x: "60vw", y: "-80vh", duration: 15 }, ">+=20")
.to('.character-name', { text: 'Rahal', duration: 5 }, "<")
.to('#chara-seven', { opacity: 0, duration: 5 },   "<")
.to('#chara-rahal', {opacity: 1, duration: 5 }, "<")
.to('.dialogue-text', { text: "", duration: 0 }, "<")
.to('.dialogue-text', { text: "Huuuuuh?",letterSpacing:"5px", duration: 25 }, ">")
.to('.dialogue-text', { text: "", duration: 0 }, ">+=15")
.to('.dialogue-text', { text: "I'm not really in the mood for jokes, VIVI.",letterSpacing:"0px", duration: 25 }, ">")

.to('.dialogue-box', { x: "30vw", y: "-80vh", duration: 15, ease: "back.out(2)" }, ">+=16")


.to('.character-name', { text: s, duration: 0.1 }, "<")
.to('#chara-rahal', { opacity: 0, duration: 10 }, "<")
.to('#chara-seven', { opacity: 1, duration: 0.2 }, "<")
.to('.dialogue-text', { text: "", duration: 0 }, "<")

.to('.dialogue-text', { text: `Stolen... then, somehow... shot at. Crazy stuff.`, duration: 25.2 }, "<")


.to('.dialogue-box', {scale:1, x: "60vw", y: "-80vh", duration: 15 }, ">+=20")
.to('.character-name', { text: 'Rahal', duration: 5 }, "<")
.to('#chara-seven', { opacity: 0, duration: 5 },   "<")
.to('#chara-rahal-sur', {opacity: 1, duration: 5 }, "<")
.to('.dialogue-text', { text: "", duration: 0 }, "<")
.to('.dialogue-text', { text: "Wait you are not...",letterSpacing:"2px", duration: 25 }, ">")

.to(['.dialogue-box'], { y: "-=35", yoyo: true, repeat: 5, duration: 2 }, ">+=20")
.to('#RAHAL-3D', { rotate: "-=15deg", yoyo: true, repeat: 5, duration: 2 }, "<")
.to('#chara-rahal-sur', {opacity: 0, duration: 5 }, "<")
.to('#chara-rahal-laugh', {opacity: 1, duration: 5 }, "<")
.to('.dialogue-text', { text: "PFFFFT HAHAHAHA!", duration: 20}, "<")



.to('.dialogue-box', {scale:1 ,x: "30vw", y: "-80vh", duration: 8, ease: "power2.out" }, "<+=35") 
.to(['.dialogue-box','#VIVI-3D'], {x:"-=15" ,y: "-=35", yoyo: true, repeat: 10, duration: 2 }, "<")

.to('.character-name', { text: s, duration: 5 }, "<")
.to('#chara-rahal-laugh', { opacity: 0, duration: 10 }, "<")
.to('#chara-seven', { opacity: 1, duration: 10 }, "<")
.to('.dialogue-text', { text: "", duration: 0 }, "<")
.set("#VIVI-3D",{scaleX:-0.05, className:""},"<")

.to('.dialogue-text', { text: "Ay Ay Ay! What's so funny?!", duration: 15 }, ">")
.to('.dialogue-text', { text: "", duration: 0}, ">+=15")

.to('.dialogue-box', { x: "60vw", y: "-80vh", duration: 15 }, "<")
.to('.character-name', { text: 'Rahal', duration: 5 }, "<")
.to('#chara-seven', { opacity: 0, duration: 5 }, "<")
.to('#chara-rahal-laugh', { opacity: 1, duration: 5 }, "<")

.to('.dialogue-box', { y: "-=5", yoyo: true, repeat: 5, duration: 2 }, ">")
.to('.dialogue-text', { text: `"WHAT'S SO FUNNY"?!?!?`,letterSpacing:"2px", duration: 20}, "<")

.to('.dialogue-text', { text: "", duration: 0}, ">+=15")
.to('.dialogue-box', { y: "-=20", yoyo: true, repeat: 5, duration: 2 }, "<")


.to('.dialogue-text', { text: `Dude, from all the thing you could've remembered of your <br><br><b>"Ancient lifespan."</b>`,letterSpacing:"5px", duration: 60}, "<")



.to('.dialogue-text', { text: "", duration: 0}, ">+15")
.to('.dialogue-box', { y: "-=15", yoyo: true, repeat: 25, duration: 2 }, "<")
.to('.dialogue-text', { text: "You remembered A HAT?!",letterSpacing:"4px", duration: 40}, "<")

.to('.dialogue-text', { text: "", duration: 0}, ">+15")
.to('.dialogue-box', { y: "-=15", yoyo: true, repeat: 25, duration: 2 }, "<")

.to('.dialogue-text', { text: "", duration: 0}, ">+15")
.to(['.dialogue-box','#RAHAL-3D'], { x: "-=15", yoyo: true, repeat: 25, duration: 2 }, "<")
.to('.dialogue-text', { text: "And You were gonna blow us to smithereens... FOR A HAT!!", duration: 40}, "<")
.to('.dialogue-text', { text: "",letterSpacing:"0px", duration: 0}, ">+=15")

.to('.dialogue-box', {scale:0.6, x: "1vw", y: "-70vh", duration: 28 }, "<") 
.to('#chara-rahal-laugh', { opacity: 0, duration: 1 }, "<")
.to('#chara-seven', { opacity: 1, duration: 1 }, "<")
.to('.character-name', { text: s, duration: 5 }, "<")
.to('.dialogue-text', { text: "", duration: 0 }, "<")
.set("#VIVI-3D",{scaleX:0.05},"<")
.to("#VIVI-3D",{x:"-50%",duration:55},"<")
.to(["#S7-L1","S7-L2","#S7-L0","#S7-FG"],{scale:1,duration: 35},"<")
.to(["#S7-FG-1"],{scale:2,duration: 55},"<")
.to(["#S7-FG-2"],{y:"40%",scale:0.8,duration: 55},"<")

.fromTo("#S7-L2",{x:"-200%"},{x:"200%",duration: 555},"<")

.fromTo('#S7-FG-00',{x:"250%",y:"150%"},{x:'-100%',y:"-120%", duration: 455},"<")


.to('.dialogue-text', { text: "...it was a really cool hat though...", duration: 75 }, "<")



.to('.dialogue-box', {scale:1, x: "60vw", y: "-80vh", duration: 15 }, ">+=16")
.to('.character-name', { text: 'Rahal', duration: 5 }, "<")
.to('#chara-seven', { opacity: 0, duration: 5 }, "<")
.to('#chara-rahal-laugh', { opacity: 1, duration: 5 }, "<")
.to('.dialogue-text', { text: "You—", duration: 25 }, "<")
.to('.dialogue-text', { text: "...", duration: 0 }, ">+=35")
.to('#chara-rahal-laugh', { opacity: 0, duration: 5 }, "<")
.to('#chara-rahal-normal', { opacity: 1, duration: 5 }, "<")

.to('#chara-rahal-normal', { opacity: 0, duration: 5 }, ">+=35")
.to('#chara-rahal-smile', { opacity: 1, duration: 5 }, "<")


.to('.dialogue-text', { text: "You know? There is some kind of bazar, on our way.", duration: 25 }, "<")

.to('.dialogue-text', { text: "", duration: 0 }, ">+=25")
.to('.dialogue-text', { text: `Wanna go take a look around, we may find you a "Cool" hat?`, duration: 25 }, ">")
.to('.dialogue-text', { text: "", duration: 0 }, ">+=15")

.to("#VIVI-3D",{x:"0%",duration:55},"<")
.set("#VIVI-3D",{scaleX:-0.05},"<")
.to('.dialogue-text', { text: `AAaaand my treat! <br><i>[please let it be cheap]</i>`, duration: 25 }, ">")



.to('.dialogue-box', {x: "70vw", y: "-69vh", duration: 5, ease: "back.out(2)" }, ">+=25")
.to('.character-name', { text: 'Arfop', duration: 5 }, "<")
.to('#chara-rahal-smile', { opacity: 0, duration: 15 }, "<")
.to('#chara-arfop', { opacity: 1, duration: 15 }, "<")
.to('.dialogue-text', { text: "", duration: 0 }, "<")
.to('.dialogue-text', { text: "...", duration: 10 }, ">")

.to('.dialogue-box', { x: "60vw", y: "-80vh", duration: 15 }, ">+=15")
.to('.character-name', { text: 'Rahal', duration: 5 }, "<")
.to('#chara-arfop', { opacity: 0, duration: 5 }, "<")
.to('#chara-rahal-laugh', { opacity: 1, duration: 5 }, "<")
.to('.dialogue-text', { text: "", duration: 0 }, "<")



.to('.dialogue-text', { text: `Of course, of course, you too Arfop!`,letterSpacing:"5px", duration: 35 }, ">")
.to('.dialogue-text', { text: "", duration: 0 }, ">=+15")
.fromTo("#S7-L1",{x:"-150%"},{x:"40%",duration: 200},"<")

.to('.dialogue-text', { text: `[<i>DAMMIT</i>]`,letterSpacing:"5px", duration: 45 }, "<")


.to('.dialogue-box', { x: "40vw", y: "-80vh", duration: 8 }, ">+=10") 



.to(['.dialogue-box',"#VIVI-3D"], { y: "-=5", yoyo: true, repeat: 25, duration: 2 }, "<")

.to('#chara-rahal-laugh', { opacity: 0, duration: 1 }, "<")

.to(["#VIVI-3D","#RAHAL-3D","#ARFOP-3D"],{x:"-50%",duration: 150},"<")
.to(["#S7-L1","S7-L2","#S7-L0","#S7-FG"],{scale:0.5,duration: 85},"<")
.to(["#S7-FG-1"],{scale:1,y:"25%",duration: 85},"<")
.to(["#S7-FG-2"],{scale:0.5,y:"15%",duration: 85},"<")


.to('#chara-seven', { opacity: 1, duration: 1 }, "<")
.to('.character-name', { text: s, duration: 5 }, "<")
.to('.dialogue-text', { text: "", duration: 0 }, "<")
.set("#VIVI-3D",{scaleX:0.05},"<")

.to('.dialogue-text', { text: "YAAAAAAAAY.",letterSpacing:"0px", duration: 35 }, ">")
.to('.dialogue-text', { text: "", duration: 0 }, ">+=15")
.to('.dialogue-text', { text: "You are the best Quinn!", duration: 25 }, ">")

.to('.dialogue-box', { x: "60vw", y: "-80vh", duration: 15 }, ">+=15")

.to('.character-name', { text: 'Rahal', duration: 5 }, "<")
.to('#chara-seven', { opacity: 0, duration: 5 }, "<")
.to('#chara-rahal', { opacity: 1, duration: 5 }, "<")
.to('.dialogue-text', { text: `"Quinn"?`, duration: 25 }, "<")


.to("#S7-FG",{y:"100%",duration: 55},"<")
.to(["#S7-FG-1","#S7-FG-2"],{y:"200%",duration: 88},"<")
.to(".S7",{filter:"blur(50px)",opacity:0,duration:35},">")

.to('#rahal-p1',  
    { 
        volume: 0.0, 
        duration: 35.5,
        onReverseComplete: () => {
            const r1 = document.getElementById("rahal-p1");
            r1.currentTime = 0;
            r1.play();

        },
        onComplete: () => {
            const gyard = document.getElementById("rahal-p1");
            gyard.pause();
            gyard.currentTime = 0;

        }
    }, 
    "<"
)


.to('.site-header',{opacity: 1, duration: 4 })
.to('#s0-bg',{volume:1.0, duration: 15.5 }, "<")

.to('.dialogue-text', { text: "", duration: 5 }, "<")
.to('.dialogue-box',{opacity:0, duration: 15 },"<")
.to('.dialogue-text', { text: "", duration: 0 }, ">")
.to(['#chara-rahal-normal','#chara-rahal','#chara-rahal-sur','#chara-seven'], { opacity: 0, duration: 5 }, "<")


//PART 3 Will be about norina saying they must try again (See VIVI Backstory) as someone from VIVI's world had found a way to the Black Pyramid (Falco)


    return smootherInstance;
}
// Add this inside your main GSAP file or init function
function initSecretVivi() {
    let inventoryData = JSON.parse(sessionStorage.getItem('inv')) || []; 
      const getBrowserName = () => {
        let browserInfo = navigator.userAgent;
        let browser = 'Browser';
        if (browserInfo.includes('Opera') || browserInfo.includes('Opr')) {
          browser = 'Opera Browser';
        } else if (browserInfo.includes('Edg')) {
          browser = 'Edge Browser';
        } else if (browserInfo.includes('Chrome')) {
          browser = 'Chrome Browser';
        } else if (browserInfo.includes('Safari')) {
          browser = 'Safari Browser';
        } else if (browserInfo.includes('Firefox')) {
          browser = 'Firefox Browser'
        } else {
          browser = 'Browser'
        }
          return browser;
      };

    const vivi = "#secret-vivi";
    const viviTl = gsap.timeline({ paused: true });

    viviTl
        .call(()=>{document.getElementById("secret-vivi").style.filter = `brightness(${sessionStorage.getItem('userVolume') || 1.0})`;},null,0)
        .to('.dialogue-box',{scale:1.0,opacity:1,x:"70vw",y:"-30vh", duration: 0.1 },"+=15")
        .fromTo('#pft', { volume: 0.0 }, 
        { 
            volume: 0.2, 
            duration: 5.5,
            onStart: () => {
                const r1 = document.getElementById("pft");
                r1.currentTime = 0;
                r1.play();

            },
            onReverseComplete: () => {
                const gyard = document.getElementById("pft");
                gyard.pause();
                gyard.currentTime = 0;

            }
        }, 
        "<"
        )
        .to('.character-name', {text: "VIVI", duration: 0.1 },"<")
        .to('#chara-quinn', {opacity:0,duration:0},"<")
        .to('#chara-falco', {opacity:0,duration:0},"<")
        .to('#chara-rahal-sur', {opacity:0,duration:0},"<")
        .to('#chara-seven', {opacity:1,duration:0},"<")
        .set('.dialogue-text',{text: ""},"<")

        .set(vivi,{className:"Seven is-side",scale:1,scaleX:1},"<")
        .to('.dialogue-text',{text: "Quinn!", duration: 1 },"<")
        .fromTo(vivi,{x:"-30vw",opacity:1.0}, { x: "70vw", duration: 3},"<")
        .set(vivi,{className:"Seven is-front"},">")


        .to('.dialogue-text',{text: "Where are you?", duration: 1 },">+=2")
        .set(vivi,{className:"Seven is-side",scaleX:-1},"<")
        .to(vivi,{x:"-10vw", duration: 4},"<")
        .set(vivi,{className:"Seven is-back",scaleX:1},">")


        .to('.dialogue-text',{text: "QUIIIIIINNNNNNNNNNNNNNN!", duration: 1 },">+=3")
        .set(vivi,{className:"Seven is-side",scaleX:1},"<")

        .to(vivi,{x:"50vw",scaleX:1, duration: 3},"<")
        .set(vivi,{className:"Seven is-back"},">")


        .to(vivi,{x:"30vw",scaleX:1, duration: 3},">+=2")
        .to('.dialogue-text',{text: "I'm in some kind of credit scene.", duration: 1 },"<")
        .to('.dialogue-text',{text: "...", duration: 1 },"+=1")


        .to(vivi,{x:"35vw", duration: 1},">+=2")
        .set(vivi,{className:"Seven is-side"},"<")
        .set(vivi,{className:"Seven is-front"},"+=1")
        .to('.dialogue-text',{text: "Soooooo.", duration: 1 },"<")
        .to('.dialogue-text',{text: "How's the weather over there?", duration: 1 },">+=2")
        .set(vivi,{className:"Seven is-reading"},"+=3")
        .to('.dialogue-text',{text: "...", duration: 1 },"<")
        .set(vivi,{className:"Seven is-front"},"+=3")
        .to('.dialogue-text',{text: "Where the hell is this music coming from?", duration: 1 },"<")
        .set(vivi,{className:"Seven is-front",scaleX:1},"<+=0.2")
        .set(vivi,{className:"Seven is-side",scaleX:1},"<+=0.2")
        .set(vivi,{className:"Seven is-back",scaleX:1},"<+=0.2")
        .set(vivi,{className:"Seven is-side",scaleX:-1},"<+=0.2")
        .set(vivi,{className:"Seven is-front",scaleX:1},"<+=0.2")
        .set(vivi,{className:"Seven is-side",scaleX:1},"<+=0.2")
        .set(vivi,{className:"Seven is-back",scaleX:1},"<+=0.2")
        .set(vivi,{className:"Seven is-side",scaleX:-1},"<+=0.2")
        .set(vivi,{className:"Seven is-front",scaleX:1},"<+=0.2")

        .to('.dialogue-text',{text: "", duration: 0 },"+=1")
        .to('.dialogue-text',{text: "Quinn! WHERE ARE YOU?", duration: 2 },">")
        .set(vivi,{className:"Seven is-side",scaleX:-1},"<")
        .to(vivi,{x:"0vw",scaleX:-1, duration: 3},"<")
        .set(vivi,{className:"Seven is-front",scaleX:1},">")

        .set(vivi,{className:"Seven is-side",scaleX:1},"+=3")
        .to(vivi,{x:"30vw", duration: 3},"<")
        .set(vivi,{className:"Seven is-front",scaleX:1},">")
        .to('.dialogue-text',{text: "", duration: 0 },"<")
        .to('.dialogue-text',{text: "THIS CREEP  WON'T STOP STARING AT ME.", duration: 2 },"<")

    
        .to('.dialogue-text',{text: "I'll just go. beep boop.", duration: 2 },">+=2")
        .to('#pft',{ volume: 0.0 ,duration:3},"<") 
        .set(vivi,{className:"Seven is-side"},"<")
        .to(vivi,{x:"110vw", duration: 3},"<")

        .to('.dialogue-box',{opacity:0,x:"70vw",y:"-30vh", duration: 0.5 },"+=0.5")
        .to('.dialogue-text',{text: "", duration: 0.5 },"<")


        .set(vivi,{className:"Seven is-side",scaleX:-1})
        .to('.dialogue-text',{text: "You say something?", duration: 1 },">+=5")
        .to('#pft',{ volume: 0.2 ,duration:1},"<") 
        .to('.dialogue-box',{opacity:1,x:"50vw",y:"-30vh", duration: 0.5 },"<")
        .to(vivi,{x:"70vw", duration: 1},"<")
        .set(vivi,{className:"Seven is-front",scaleX:1},">")
        .to('.dialogue-text',{text: "No? alright just checking...", duration: 1 },"+=1")
        .to('.dialogue-text',{text: "", duration: 0 },"+=1.5")
        .set(vivi,{className:"Seven is-front",scaleX:1},">")

        if (!inventoryData.some(item => item.id === 'file97')){
            viviTl.to('.dialogue-text',{text: "By the way, I've found this in the dark. <br><br> <i>I don't think it's mine.</i>", duration: 1 })
            .to('.dialogue-text',{text: "", duration: 0 },"+=1.5")
            .set(vivi,{className:"Seven is-front-wave",scaleX:1},">")
            .to('.dialogue-text',{text: "Here! you have it.", duration: 1 },"<")
            .call(() => {addItemToBackpack(files.quinnLogs, '');}, null, "<")
            .to('.dialogue-text',{text: "", duration: 0 },"+=2")
            .to('.dialogue-text',{text: "But before you go and read it!", duration: 1 },">")

        }


        viviTl.to('.dialogue-text',{text: "", duration: 0 },"+=1")
        .set(vivi,{className:"Seven is-front",scaleX:1},">")
        .to('.dialogue-text',{text: "Wanna see something cool?.", duration: 1 },"<")
        .set(vivi,{className:"Seven is-front-wave",scaleX:1},"<")
        .to('.dialogue-text',{text: "EXPLOSION!!!.", duration: 1 },"+=3")
        .set(vivi,{className:"Seven is-expo",scaleX:1},"<")

        .call(() => {console.log('EXPLOOOOOOSION();');}, null, "+=1")

        .to('.dialogue-text',{text: "Ummmm...", duration: 1 },"+=3")

        .set(vivi,{className:"Seven is-reading",scaleX:1},"+=3")
        .to('.dialogue-text',{text: "'API can only be initiated by a user gestu-'", duration: 3 },"<")
        .to('.dialogue-text',{text: "", duration: 0 },"+=3")
        .to('.dialogue-text', {text: {value: 'Uhhhh $@#$ @#$@@$ !)$*!(&',type: "html"},duration: 1}, ">")
        .set(vivi,{className:"Seven is-front",scaleX:1},"<+=0.1")
        .set(vivi,{className:"Seven is-side",scaleX:1},"<+=0.1")
        .set(vivi,{className:"Seven is-back",scaleX:1},"<+=0.1")
        .set(vivi,{className:"Seven is-side",scaleX:-1},"<+=0.1")
        .set(vivi,{className:"Seven is-front",scaleX:1},"<+=0.1")
        .set(vivi,{className:"Seven is-side",scaleX:1},"<+=0.1")
        .set(vivi,{className:"Seven is-back",scaleX:1},"<+=0.1")
        .set(vivi,{className:"Seven is-side",scaleX:-1},"<+=0.1")
        .set(vivi,{className:"Seven is-front",scaleX:1},"<+=0.1")
        .set(vivi,{className:"Seven is-side",scaleX:1},"<+=0.1")
        .set(vivi,{className:"Seven is-back",scaleX:1},"<+=0.1")
        .set(vivi,{className:"Seven is-side",scaleX:-1},"<+=0.1")
        .set(vivi,{className:"Seven is-front",scaleX:1},"<+=0.1")
        .set(vivi,{className:"Seven is-side",scaleX:1},"<+=0.1")
        .set(vivi,{className:"Seven is-back",scaleX:1},"<+=0.1")
        .set(vivi,{className:"Seven is-side",scaleX:-1},"<+=0.1")
        .set(vivi,{className:"Seven is-front",scaleX:1},"<+=0.1")
        .set(vivi,{className:"Seven is-side",scaleX:1},"<+=0.1")
        .set(vivi,{className:"Seven is-back",scaleX:1},"<+=0.1")
        .set(vivi,{className:"Seven is-side",scaleX:-1},"<+=0.1")
        .set(vivi,{className:"Seven is-front",scaleX:1},"<+=0.1")
        .set(vivi,{className:"Seven is-side",scaleX:1},"<+=0.1")
        .set(vivi,{className:"Seven is-back",scaleX:1},"<+=0.1")

        .to('.dialogue-text',{text: "Your "+getBrowserName()+" protected you this time.", duration: 2 },"+=3")
        .set(vivi,{className:"Seven is-side",scaleX:1},"<")
        .set(vivi,{className:"Seven is-front-wave",scaleX:1},"+=0.01")

        .to('.dialogue-text',{text: "", duration: 0 },"+=3")
        .to('.dialogue-text',{text: "Farewell... "+randomname+".", duration: 4 },">")
        .set(vivi,{className:"Seven is-front",scaleX:1},"<")

        .to('.dialogue-text',{text: "I DON'T CARE IF IT'S NOT YOUR REAL NAME!.", duration: 1 },"+=3")
        .set(vivi,{className:"Seven is-front-wave",scaleX:1},"<")

        .to('.dialogue-text',{text: "I'll just go....", duration: 2 },"+=2")
        .to('#pft',{ volume: 0.0 ,duration:15},"<") 
        .set(vivi,{className:"Seven is-side",scaleX:1},"<")

        .to(vivi,{x:"110vw", duration: 20,ease: "power1.in"},"<")
        .to('.dialogue-text',{text: "...", duration: 1 },"<+=4")
        .to('.dialogue-box',{opacity:0,x:"50vw",y:"-30vh", duration: 0.5 },">+=1")

        .set(vivi,{className:"Seven is-side",scaleX:-1})
        .to('.dialogue-text',{text: "YOU KNOW WHAT!!!", duration: 1 },">+=5")
        .to('#pft',{ volume: 0.2 ,duration:1},"<") 
        .to('.dialogue-box',{opacity:1,x:"50vw",y:"-30vh", duration: 0.5 },"<")
        .to(vivi,{x:"70vw", duration: 1},"<")
        .to('.dialogue-text',{text: "I DON'T LIKE YOU.", duration: 1 },"+=1")
        .set(vivi,{className:"Seven is-front-wave",scaleX:1},">")
        .to('.dialogue-text',{text: "MADE IN HEAVEN!!!!!!", duration: 1 },"+=1")
        .set(vivi,{className:"Seven is-expo",scaleX:1},"<")
        .call(() => {window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });}, null, "+=0.8")


    ScrollTrigger.create({
        trigger: ".wishlist-section",
        start: "top 90%",
        end: "bottom top",
        onEnter: () => {viviTl.play();},
        onToggle: (self) => {
            if (!self.isActive){
                viviTl.kill(); 
                gsap.set([vivi], {opacity: 0,});
                gsap.set([".dialogue-text"], {text:""});
                gsap.to("#pft",{volume:0.0,duration:3})
                self.kill();}}
    });
}



const s6_layers = document.querySelectorAll(['.S6:not(.S6FG,#S6-RAHAL)']);
const S6_totalLayers = s6_layers.length;

s6_layers.forEach((layer, index) => {
  const speedFactor = (index + 1) / S6_totalLayers; 
  const rotationAmount = speedFactor * 0.5;
  
  gsap.fromTo(layer,
    {
        y: -speedFactor * 5,
        x: -speedFactor * 100,
        rotationZ: -rotationAmount*2

    },{

    y: speedFactor * 150,
    x: speedFactor * 100,
    rotationZ: rotationAmount,
    
    duration: 10 - (speedFactor * 0.5), // BG takes 3s, FG takes 1.5s (faster!)
    
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    delay: Math.random() * 2 

  });



gsap.fromTo([".S6FG","#S6-RAHAL"],
    {
        y: -speedFactor * 50,
        x: -speedFactor * 5,
        rotationZ: -rotationAmount

    },{

    y: speedFactor * 50,
    x: speedFactor * 5,
    rotationZ: rotationAmount,
    
    duration: 1.5,
    
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    // Adding a random delay so they don't all start perfectly in sync
    delay: Math.random() * 2 
});

gsap.to(["#S6-FG img[id^='arfop']"], {
  scaleY: 1.05,
  duration: 2.5,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
  stagger: 0.1


});

gsap.to(["#S6-FG img[id^='S6-R']"], {
  scaleY: 0.51,
  duration: 1,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
});


});




const s7_layers = document.querySelectorAll('.S7:not(#S7-FG):not(#S7-FG-1):not(#S7-FG-2):not(#S7-BG)');
const S7_totalLayers = s7_layers.length;

s7_layers.forEach((layer, index) => {
  const speedFactor = (index + 1) / S7_totalLayers; 
  const rotationAmount = speedFactor * 1.8;
  
  gsap.fromTo(layer,
    {
        x: -speedFactor * 20,
        rotationZ: -rotationAmount*8

    },{

    y: speedFactor * 50,
    x: speedFactor * 20,
    rotationZ: rotationAmount,
    scale: 1.1,
    
    duration: 6 - (speedFactor * 0.5),
    
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    delay: Math.random() * 5

  });

});




