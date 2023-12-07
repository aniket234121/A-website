var tml=gsap.timeline({delay:.5});
tml
.from("header",{opacity:0,y:-40,duration:1,ease:"power1" })

.from(["#text1","#UI1",".s1"],{opacity:0,duration:1,ease:"expo.EaseIn"})
.from("#edition1",{opacity:0,x:50,ease:"expo.EaseIn",duration:1,delay:"-1"})
.from("#text1",{x:50,delay:"-1"})
.from(["#UI1",".s1"],{x:-80,delay:"-1"})
.from(".man1",{opacity:0,duration:1,ease:"power4.EaseIn",delay:"-1"})
.from(".tester",{opacity:0,duration:1,ease:"power4.EaseIn",delay:"-1"})

let tml2=gsap.timeline({
    scrollTrigger:{
        trigger:".wrap-2",
        start:"bottom bottom"
    }
});
tml2.from(".stats",{
    opacity:0,
    y:20,
    duration:1,
    ease:"expo.easeIn"
})

gsap.from([".wrap-3 .lora", ".wrap-3 .ellipse"],{
    scrollTrigger:{
        trigger:".wrap-3",
        start:"center bottom"
    },
    scale:1.01,
    opacity:0,y:20,
    duration:1
})

gsap.from(".wrap-3 .sqBefore",{
    scrollTrigger:{
        trigger:".wrap-3",
        start:"center bottom"
    },
    opacity:0,
    y:20,
    duration:1
})

gsap.from(".card",{
    scrollTrigger:{
        trigger:".wrap-5",
        start:"center bottom"
    },
    opacity:0,
    x:-10,
    duration:1,
    ease:"expo.easeIn"
})

gsap.from("#t1",{
    scrollTrigger:{
        trigger:"#t1",
        start:"center bottom"
    },
    opacity:0,
    y:5,
    duration:2,
    ease:"expo.easeIn"
})
gsap.from(".wrap-6 .about",{
    scrollTrigger:{
        trigger:".wrap-6",
        start:"center bottom"
    },
    opacity:0,
    x:-50,
    duration:1,
    ease:"expo.easeIn"
})
gsap.from(".wrap-6 .img1",{
    scrollTrigger:{
        trigger:".wrap-6",
        start:"center bottom"
    },
    opacity:0,
    x:50,
    duration:1,
    ease:"expo.easeIn"
},"-=1")
gsap.from(".wrap-6-1 .about",{
    scrollTrigger:{
        trigger:".wrap-6-1",
        start:"center bottom"
    },
    opacity:0,
    x:50,
    duration:1,
    ease:"expo.easeIn"
})
gsap.from(".wrap-6-1 .img-2",{
    scrollTrigger:{
        trigger:".wrap-6-1",
        start:"center bottom"
    },
    opacity:0,
    x:-50,
    duration:1,
    ease:"expo.easeIn"
},"-=1")
gsap.from(".wrap-7",{
    scrollTrigger:{
        trigger:".wrap-7",
        start:"center bottom"
    },
    opacity:0,
    duration:1,
    ease:"expo.easeIn"
})
gsap.from(".reviews",{
    scrollTrigger:{
        trigger:".wrap-8",
        start:"center bottom"
    },
    opacity:0,x:-5,
    duration:1,
    ease:"expo.easeIn"
})
gsap.from(".rating",{
    scrollTrigger:{
        trigger:".wrap-8",
        start:"bottom bottom"
    },
    opacity:0,x:-5,
    duration:1,
    ease:"expo.easeIn"
})