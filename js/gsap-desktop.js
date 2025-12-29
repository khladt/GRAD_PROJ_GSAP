import { setSmootherInstance } from "./utils.js";
import { playRandomStep } from "./utils.js";


export function startDesktopGSAP(s, q, f) {

    const path = document.querySelector('#travelPath');
    const pathLength = path.getTotalLength();

    const smootherInstance = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        normalizeScroll: true,
        effects: true,
    });
    
    setSmootherInstance(smootherInstance); 


    let runAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: "#story-parallax",
            start: "top top",
            end: () => "+=" + 185 * window.innerHeight,            
            scrub: 1, 
            pin: true,
            anticipatePin: 1,
            pinType: 'transform'
        }
    });

    runAnimation

    .set(path, {strokeDashoffset: pathLength })
    .set(".fhead",{opacity:0})

    .fromTo('.dialogue-box',{x:"300vh", y:"-100vh" ,scale: 0.0}, {x:"35vw",y:"-20vh" ,scale: 1, duration: 2 })
    .to('.character-name', {text: s, duration: 5 },"<")
    .to('#chara-quinn',{opacity:0,duration:1},"<")
    .to('#chara-seven',{opacity:1,duration:1},"<")
    .to('.dialogue-text',{text: "Quinnnnnnnnnnnn!", duration: 9 },"<")

    .fromTo('.site-header', { opacity: 1}, {opacity: 0, duration: 5 },0)
    .fromTo('.volume-tool-container', { opacity: 0}, {opacity: 1, duration: 5,
        onComplete:()=>{document.querySelector(".volume-tool-container").style.visibility = "visible";},
        onReverseComplete:()=>{document.querySelector(".volume-tool-container").style.visibility = "hidden";},
     },0)
    

    .fromTo('#S1-BG', { y: "-550%"}, {y:"0%", duration: 24.5 }, 0)
    .fromTo('#S1-TOWER', { y: "-550%"}, {y:"0%", duration: 24.3 }, 0)
    .fromTo('#S1-FOG-2', { y: "-550%"}, {y:"15%", duration: 23.1 }, 0) 
    .fromTo('#S1-L2', { y: "-550%"}, {y:"-18%", duration: 23 }, 0) 

    .fromTo('#S1-L1', { y: "-550%"}, {y:"1%", duration: 22.5 }, 0)
    .fromTo('#S1-FOG-1', { y: "-550%"}, {y:"25%", duration: 22.3 }, 0) 
    .fromTo('#S1-L0', { y: "-550%"}, {y:"0%", duration: 21.1 }, 0)
    .fromTo('#S1-FOG-0', { y: "-550%"}, {y:"25%", duration: 21.5 }, 0) 

    .fromTo('#S1-FG', { y: "-550%"}, {y: "40%", duration: 20 }, 0)


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
    .to('.dialogue-text',{text: "Entrance. Underground. You’re welcome.", duration: 9 },"<")




    .to('.dialogue-box',{x:"25vw",y:"-30vh" ,scale: 1, duration: 2 },">+=15")
    .to('#chara-quinn',{opacity:1,duration:1},"<")
    .to('#chara-seven',{opacity:0,duration:1},"<")
    .to('.character-name', {text: q, duration: 7 },"<")
    .to('.dialogue-text',{text: "Hope it gets Falco off our tail.", duration: 15 },"<")

    .to('.dialogue-box',{x:"55vw",y:"-40vh" ,scale: 1, duration: 2 },">+=10")
    .to('#chara-quinn',{opacity:0,duration:1},"<")
    .to('#chara-seven',{opacity:1,duration:1},"<")
    .to('.character-name', {text: s, duration: 7 },"<")
    .to('.dialogue-text',{text: "Come on Come on Come on Come on, let's go!", duration: 10 },"<")
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



    .to('.dialogue-box',{x:"25vw",y:"-30vh" ,scale: 1, duration: 2 },"+=10")
    .to('#chara-quinn',{opacity:1,duration:1},"<")
    .to('#chara-seven',{opacity:0,duration:1},"<")
    .to('.character-name', {text: q, duration: 7 },"<")
    .to('.dialogue-text',{text: "Calm down! It’s probably the sewers, not a theme park.", duration: 15 },"<")
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

.fromTo('#S3-LE', {scale: 0.5,y:"-200%",x:"30%"}, {y:"-35%", duration: 40, },"<")
.fromTo("#ele",{volume: 0.0} , {volume: 1.0, duration: 10},"<")


.to('#S3-BG', {y:"-20%" ,duration: 80 },"<")
.to('#S3-L0', {y:"-30%",duration: 80 },"<")


.to('.dialogue-box',{x:"0vw",y:"-55vh", duration: 10 },"<+=25")

.to('.character-name', {text: q, duration: 3 },"<")
.to('#chara-quinn', {opacity:1,duration:1},"<")
.to('#chara-seven', {opacity:0,duration:1},"<")
.to('.dialogue-text',{text: 'VIVI!', duration: 10 },"<")


.to('.dialogue-box',{x:"0vw",y:"-70vh", duration: 10 },"<+20")
.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text: "...fine.", duration: 5 },"<")
.to('.dialogue-text',{text: "I'll sing with my internal voice.", duration: 10 },">+=10")


.to('.dialogue-box',{x:"0vw",y:"-80vh", duration: 15 },"<+=25")
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


.fromTo('#S4-FG',{filter:"brightness(30%) saturate(0%)" ,scale:2.5,y:'250%',x:'75%'},{y:'10%',duration: 35},'<+=5')

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
.to('.dialogue-text',{text: "You never really talk about this Louis fella, the one you are trying to kill!", duration: 15 },"<")

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


.to('.dialogue-box',{x:"50vw",y:"-85vh", duration: 5 },"<")
.to('.character-name', {text: q, duration: 3 },"<")
.to('#chara-quinn', {opacity:1,duration:1},"<")
.to('#chara-seven', {opacity:0,duration:1},"<")
.to('.dialogue-text',{text: "What's there to talk about?", duration: 5 },"<")


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


.to('.dialogue-box',{x:"50vw",y:"-85vh", duration: 5 },"<")
.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text:"Traveling half the continent just to kill some guy?!",duration:25},"<")


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


.to('.dialogue-box',{x:"50vw",y:"-85vh", duration: 5 },"<")
.to('.character-name', {text: q, duration: 3 },"<")
.to('#chara-quinn', {opacity:1,duration:1},"<")
.to('#chara-seven', {opacity:0,duration:1},"<")
.to('.dialogue-text',{text:"He is someone that doomed us all.",duration:15},"<")


.to('.Quinn-lantern',{x:'-19%',duration: 2},"<+=6")
.to('#S4-FG',{x:'45%',duration: 3},"<")
.set('.Quinn',{className: 'Quinn a'},'<')
.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<")
.set('.Quinn-lantern',{className: 'Quinn-lantern c'},'<')

.to('.Quinn-lantern',{x:'-17%',duration: 5},"<+=3")
.to('#S4-FG',{x:'42%',duration: 3},"<")
.set('.Quinn',{className: 'Quinn b'},'<') 
.set('.Quinn-lantern',{className: 'Quinn-lantern d'},'<')
.to('.Seven',{className:'Seven is-side'},"<")


.to('.Quinn-lantern',{x:'-16%',duration: 2},"<+=6")
.to('#S4-FG',{x:'38%',duration: 3},"<")
.set('.Quinn',{className: 'Quinn c'},'<')
.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<")
.set('.Quinn-lantern',{className: 'Quinn-lantern a'},'<')



.to('.Quinn-lantern',{x:'-13%',duration: 5},"<+=3")
.to('#S4-FG',{x:'34%',duration: 3},"<")
.set('.Quinn',{className: 'Quinn d'},'<')
.set('.Quinn-lantern',{className: 'Quinn-lantern b'},'<')

.to('.Quinn-lantern',{x:'-11%',duration: 2},"<+=6")
.to('#S4-FG',{x:'29%',duration: 3},"<")
.set('.Quinn',{className: 'Quinn a'},'<')
.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<")
.set('.Quinn-lantern',{className: 'Quinn-lantern c'},'<')

.to('.Quinn-lantern',{x:'-9%',duration: 5},"<+=3")
.to('#S4-FG',{x:'25%',duration: 3},"<")
.set('.Quinn',{className: 'Quinn b'},'<')
.set('.Quinn-lantern',{className: 'Quinn-lantern d'},'<')


.to('.dialogue-box',{x:"30vw",y:"-85vh", duration: 25 },"<")
.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text:"Yeah I know, it just feels more personal to you.",duration:10},"<")


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



.to('.dialogue-box',{x:"70vw",y:"-85vh", duration: 25 },"<")
.to('.dialogue-text',{text:"",duration:0},"<")
.to('.dialogue-text',{text:"Did you know him, like before he doomed us all?",duration:25},">")
.to('.Seven',{x:'680%',duration: 70},"<")


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

.set('.Quinn',{className: 'Quinn a'},'<')
.to({}, {
    onStart: () => playRandomStep(),
    onReverseComplete: () => playRandomStep()
}, "<")
.set('.Quinn-lantern',{className: 'Quinn-lantern c'},'<')

.to('.Quinn-lantern',{x:'49%',duration: 5},"<+=3")
.set('.Quinn',{className: 'Quinn b'},'<')
.set('.Quinn-lantern',{className: 'Quinn-lantern d'},'<')


.to('.character-name', {text: q, duration: 3 },"<")
.to('#chara-quinn', {opacity:1,duration:1},"<")
.to('#chara-seven', {opacity:0,duration:1},"<")
.to('.dialogue-text',{text:"V! Drop it.",duration:5},"<")


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
.to('#S4-FG',{y:'-200%',duration: 25})

.fromTo('#S5-SVG',{},{duration: 25},"<")


.fromTo(path,{strokeDasharray:pathLength,strokeDashoffset: pathLength} , {strokeDashoffset: 0,duration: 250,ease: "none"})
.to("#traveler-heads", { motionPath: { path: "#travelPath", align: "#travelPath", alignOrigin: [0.5, 0.5]},duration: 250,ease: "none"}, "<")
.fromTo("#S5-SVG",{y:"-10%"} , {y:"-80%",duration: 120},"<")

.to('.dialogue-box',{x:"2vw",y:"-60vh", duration: 15 },"<")
.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text: "You know, keeping this much bottled up isn’t great for you.", duration: 30 },"<")

.to('.dialogue-box',{x:"2vw",y:"-30vh", duration: 15 },">+=15")
.to('.character-name', {text: q, duration: 3 },"<")
.to('#chara-quinn', {opacity:1,duration:1},"<")
.to('#chara-seven', {opacity:0,duration:1},"<")
.to('.dialogue-text',{text: "We're all gonna bite the dust soon anyway.", duration: 30 },"<")


.to('.dialogue-box',{x:"2vw",y:"-60vh", duration: 15 },"<+=40")
.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text: "Tsk Tsk.", duration: 10 },"<")
.to('.dialogue-text',{text: "I’m serious, Quinn. You've go to change your mindset.", duration: 35 },"<+=30")

.to("#S5-SVG",{y:"-160%",duration: 100},"<+=40")


.to('.dialogue-box',{x:"70vw",y:"-60vh", duration: 15 },"<=+20")
.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text: "", duration: 1 },"<")
.to('.dialogue-text',{text: "Anyway.", duration: 5 },">")
.to('.dialogue-text',{text: "Pretty sure my audio drivers broke again. I can hear your footstep twice.", duration: 35 },">+=15")

.to("#trem",{volume:0.0, duration: 40},"<")

.to('.dialogue-box',{x:"70vw",y:"-30vh", duration: 15 },">+=15")
.to('.character-name', {text: q, duration: 3 },"<")
.to('#chara-quinn', {opacity:1,duration:1},"<")
.to('#chara-seven', {opacity:0,duration:1},"<")
.to('.dialogue-text',{text: "Huh...?!", duration: 15 },"<")


.to('.fhead',{opacity:1.0,duration: 1 },">+=15")
.to("#S5-SVG",{y:"-230%",duration: 30},">+=10")



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
.to('.dialogue-text',{text: "Nevermind...", duration: 5 },"<")

.fromTo('#S5-F-S',{scale:"0.7",y:"-15%",x:"100%"},{x:"45%" ,duration:10},">+=30")
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
.to('.dialogue-text',{text: "IT IS I!!", duration: 15 },"<")
.to('.dialogue-text',{text: "THE GRRRRRREAT FALCO!",duration: 20},">+=10")

.to('.dialogue-text',{text: "Savior of humanity.",duration: 25},">+=15")
.to('.dialogue-text',{text: "",duration: 0},">+=15")
.to('.dialogue-text',{text: "<i>In the process of it anyway.</i>. ",duration: 25},"<")

.to('.dialogue-text',{text: "",duration: 0},">+=10")
.to('.dialogue-text',{text: "I did not come here to shed blood <br> <i>[Or for mine to be shed...]</i>.",duration: 35},">")

.to('.dialogue-box',{x:"10vw",y:"-60vh", duration: 15 },">=+15")
.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text: "", duration: 0 },"<")
.set('.shead',{className:"shead shead-talk"},"<")
.to('.shead',{x:"-100%",scale:2.5,duration:15},"<")
.fromTo('.shead img',{scale:0.0},{rotation:"-10%",y:"-60%",x:"-30%",scale:0.7,duration:15},"<")
.to('.dialogue-text',{text: "Hey! Is that my hat?!", duration: 10 },">")

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


.to('.dialogue-box',{x:"10vw",y:"-60vh", duration: 15 },">=+15")
.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text: "", duration: 0 },"<")

.set('.shead',{className:"shead shead-talk"},"<")
.to('.dialogue-text',{text: "How did you break into my house, huh you creep?!", duration: 25 },">")


.to('.dialogue-box',{x:"50vw",y:"-80vh", duration: 15 },">=+15")
.set('.shead',{className:"shead"},"<")

.to('.character-name', {text: f, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:1,duration:1},"<")
.to('#chara-seven', {opacity:0,duration:1},"<")

.to("#S5-Falco-3",{filter: "blur(5vw) brightness(1.5)",opacity:"0.0",duration:10},">+=5")
.to('#S5-Falco-4',{filter: "blur(0px) brightness(1)",opacity:"1.0",duration:2},"<")
.fromTo('#anger-head',{opacity:0.0},{opacity:"1.0",duration:2},"<")

.to('.dialogue-text',{text: "", duration: 0 },"<")
.to('.dialogue-text',{text: "WE.", duration: 25 },">")
.to('.dialogue-text',{text: "", duration: 0 },">+5")
.to('.dialogue-text',{text: "LIVE.", duration: 5 },"<")
.to('.dialogue-text',{text: "", duration: 0 },">+5")
.to('.dialogue-text',{text: "UNDER.", duration: 5 },"<")
.to('.dialogue-text',{text: "", duration: 0 },">+5")
.to('.dialogue-text',{text: "THE SAME ROOF!", duration: 5 },"<")


.to('.dialogue-box',{x:"10vw",y:"-60vh", duration: 15 },">=+15")
.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text: "", duration: 0 },"<")

.set('.shead',{className:"shead shead-talk"},"<")
.to('.dialogue-text',{text: "", duration: 0},">")
.to('#anger-head',{opacity:0.0,duration:2},"<")



.to('.dialogue-text',{text: "If you were that important, I would've remembered you. <br> <i>Like my hat.</i>.", duration: 25 },">")

.to("#S5-Falco-4",{filter: "blur(5vw) brightness(1.5)",opacity:"0.0",duration:10},">+=15")
.to('#S5-Falco-3',{filter: "blur(0px) brightness(1)",opacity:"1.0",duration:2},"<")

.to('.dialogue-text',{text: "", duration: 0 },">+=15")
.to('.dialogue-text',{text: "Anyway. Anyone seen my RA spray? my propeller is getting rusty.", duration: 25 },">")
.set('.shead',{className:"shead shead-side"},"<")
.set('.shead',{className:"shead"},">+=15")
.set('.shead',{scaleX: -2.5,className:"shead shead-side"},">+=15")
.set('.shead',{scaleX: 2.5,className:"shead"},">+=15")
.set('.shead',{scaleX: 2.5,className:"shead shead-side",duration:15},">+=15")

.to('.dialogue-text',{text: "", duration: 0 },">+=15")
.to('.dialogue-text',{text: "Or did you steal it too! <i>Like you stole my hat</i>.", duration: 25 },">")
.to('.shead img',{scale:1.0 ,duration:15},"<")
.to('.shead',{className:"shead shead-talk" ,duration:15},"<")

.to('.character-name', {text: f, duration: 3 },">+=15")
.to('.shead',{className:"shead" ,duration:15},"<")

.to("#S5-Falco-3",{filter: "blur(5vw) brightness(1.5)",opacity:"0.0",duration:10},"<")
.to('#S5-Falco-4',{filter: "blur(0px) brightness(1)",opacity:"1.0",duration:2},"<")
.to('.shead img',{scale:0.0 ,duration:15},"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:1,duration:1},"<")
.to('#chara-seven', {opacity:0,duration:1},"<")
.set('#S5-Falco-4',{className:"Parallax Layer f4anim"},"<")

.to('.dialogue-text',{text: "I DIDN'T STEAL ANYTHING!!!!", duration: 25 },"<")
.to('.dialogue-text',{text: "", duration: 0 },">+=25")
.to('.dialogue-text',{text: "YOU GIFTED TO ME THIS DAMN <i>HAT</i>.", duration: 25 },"<")
.to('.dialogue-text',{text: "", duration: 0 },">+=15")
.to('.character-name', {text: "FALCO VON VIVIAN !!!!!", duration: 3 },"<")
.to('.dialogue-text',{text: "YOUR OWN SON, FALCO VON VIVIAN!!!!", duration: 15 },"<")


.to('.dialogue-text',{text: "", duration: 0 },">+25")
.to('.character-name', {text: f, duration: 3 },">")
.to('.dialogue-text',{text: "I'M TRYING TO SAVE YOU HERE!", duration: 15 },">")
.to('#S5-Falco-4',{className:"parallax-layer"},"<")



.to("#S5-Falco-4",{filter: "blur(5vw) brightness(1.5)",opacity:"0.0",duration:10},">+=15")
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


.to('.dialogue-box',{x:"55vw",y:"-80vh", duration: 15 },"<")
.to('.character-name', {text: f, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:1,duration:1},"<")
.to('#chara-seven', {opacity:0,duration:1},"<")
.to('.dialogue-text',{text: "HOLY $&!%", duration: 10 },"<")

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

.fromTo('#S5-Q-S',{scale:"0.7",y:"-15%", x:"-100%"},{x:"-45%",duration:25},"<")
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
.to('.dialogue-text',{text: "Come on sis, no need for that. <br><i>My gun is actually unloaded.</i>", duration: 25 },"<")


.to('.dialogue-box',{x:"40vw",y:"-80vh", duration: 15 },">+=15")
.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text: "", duration: 0 },"<")
.to('.dialogue-text',{text: "Sorry my <i>alleged</i> son. <br> <i>Who stole my hat</i>", duration: 25 },">")
.to("#S5-SVG",{y:"-350%",duration:15},"<")


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
.to('.dialogue-text',{text: "Father, Come on, it's me. You need to wak-", duration: 15 },"<")


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
.to('.dialogue-text',{text: "Don't buy his weak act. He can take us out any second now.", duration: 25 },">")
.to('.dialogue-text',{text: "", duration: 0 },">+=10")
.to('.dialogue-text',{text: "DO IT NOW!", duration: 5 },">")

.to('.dialogue-box',{x:"40vw",y:"-80vh", duration: 15 },">+=15")

.to('#S5-Q-S',{x:"-55%",duration:15},"<")
.to('#S5-Quinn',{scale:"0.35",x:"-35%",duration:15},"<")

.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text: "", duration: 0 },"<")
.to('.dialogue-text',{text: "This is for stealing my HAT.", duration: 15 },"<")
.to('.dialogue-text',{text: "", duration: 0 },">+=15")
.to('.dialogue-text',{text: "EXPLOSION!", duration: 15 },">")
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
.to('.dialogue-text',{text: "OH COME OOOOOOON!!!", duration: 5 },"<")

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

.fromTo('#S5-EXPO',{scale:"0"},{scale:"1",duration:15,

    onStart: () => {
        const r1 = document.getElementById("ex");
        r1.currentTime = 0;
        r1.play();

    }},">")




.to('#S5-Quinn',{y:"-50%",scale:"0.4",x:"-100%",duration:25},"<")
.to('#S5-Q-S',{y:"-55%", x:"-100%",duration:10},"<")
.to('#S5-F-S',{y:"55%",x:"100%",duration:10},"<")
.to('#S5-Falco-0',{y:"-55%",x:"100%" ,duration:25},"<")
.to('#S5-Falco-1',{y:"-55%",x:"100%" ,duration:25},"<")

.to(".Seven",{scale:2,opacity:0.0,duration:15},"<")



.to('.dialogue-box',{y:"-150vh", duration: 15 },">+=5")
.to('#S5-EXPO',{opacity:"0",duration:25,
        onReverseComplete: () => {
        const gyard = document.getElementById("ex-rev");
            gyard.currentTime = 0;
        gyard.play();

    }
},"<")


//.fromTo("#S6-FG",{y:"200%",scale:"1.1"},{y:"-90%",duration:27}, ">+=5")
//.fromTo("#S6-L0",{y:"200%",x:"5%"},{y:"60%",duration:28}, "<")
//.fromTo("#S6-L2",{y:"150%"},{y:"0%",duration:28}, "<")
//.fromTo("#S6-L1",{y:"150%"},{y:"-5%",duration:28}, "<")


//Norina
.to('.dialogue-box',{x:"20vw",y:"-50vh", duration: 15 },"+=55")
.to('.character-name', {text: 'Norina', duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text: "", duration: 0 },">")
.to('.dialogue-text',{text: "And then what a hppanend?", duration: 15 },">")

//Vivi
.to('.dialogue-box',{x:"60vw",y:"-80vh", duration: 15 },">+=15")
.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text: "", duration: 0 },">")
.to('.dialogue-text',{text: "How should I know?", duration: 15 },">")

//Cyru
.to('.dialogue-box',{x:"40vw",y:"-50vh", duration: 15 },">+=15")
.to('.character-name', {text: 'Cyru', duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text: "", duration: 0 },">")
.to('.dialogue-text',{text: "It's your story pal.", duration: 15 },">")

//VIVI
.to('.dialogue-box',{x:"60vw",y:"-80vh", duration: 15 },">+=15")
.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text: "", duration: 0 },">")
.to('.dialogue-text',{text: "It's been like a really loooooooooooooooooooong time.", duration: 25 },">")


//rahal
.to('.dialogue-box',{x:"70vw",y:"-10vh", duration: 15 },">+=15")
.to('.character-name', {text: 'Rahal', duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text: "", duration: 0 },">")
.to('.dialogue-text',{text: "I hope Quinn's alright...", duration: 15 },">")


//vivi
.to('.dialogue-box',{x:"60vw",y:"-80vh", duration: 15 },">+=25")
.to('.character-name', {text: s, duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text: "", duration: 0 },">")
.to('.dialogue-text',{text: "Oh yeah, here's your backpack, Arphop. Really got me in the roleplay HeHe.", duration: 25 },">")
.fromTo('.inv-tool-icon',{scale:1.0},{scale:0.0, duration: 15 },"<")


//arphip
.to('.dialogue-box',{x:"10vw",y:"-30vh", duration: 15 },">+=35")
.to('.character-name', {text: 'Arphop', duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text: "", duration: 0 },">")
.to('.dialogue-text',{text: "Mm-HMM...", duration: 15 },">")


//rahal
.to('.dialogue-box',{x:"70vw",y:"-10vh", duration: 15 },">+=15")
.to('.character-name', {text: 'Rahal', duration: 3 },"<")
.to('#chara-quinn', {opacity:0,duration:1},"<")
.to('#chara-falco', {opacity:0,duration:1},"<")
.to('#chara-seven', {opacity:1,duration:1},"<")
.to('.dialogue-text',{text: "", duration: 0 },">")
.to('.dialogue-text',{text: "Wait I just realized. THIS PIECE OF %#@! HAVE A SON?!", duration: 15 },">")

.to('.site-header',{opacity: 1, duration: 4 },">+=15")
.to('.dialogue-box',{opacity:0, duration: 15 },"<")



    return smootherInstance;
}
