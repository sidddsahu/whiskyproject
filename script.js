const kedda = document.querySelector(".content-1")
const overlay = document.querySelector(".overlay")

kedda.addEventListener("click", function () {
    overlay.style.transform = "translateX(0%)"
})



const lighter = document.querySelector(".d-1")
const whiter = document.querySelector(".overlay")

lighter.addEventListener("click", function () {
    whiter.style.transform = "translateX(100%)"
})





function scrolll() {
    var left = document.querySelector(".scroll-images")
    left.scrollBy(300, 0)
}

function scrollr() {
    var right = document.querySelector(".scroll-images")
    right.scrollBy(-300, 0)
}


var tl = gsap.timeline()

tl.from(".right-nav", {
    y: 1000,
    opacity: 0,
    duration: 2,
    ease: Power0.easeOut
})


tl.from(".left-nav", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: Power0.easeOut
})


tl.from(".left-content", {
    // x: -1000,
    opacity: 0,
    duration: 2,
    ease: Power0.easeOut
})


gsap.from(".container-2",{
    scrollTrigger:{
        trigger:".container-2",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 10%",
        scrub:2

    },
    // scale:0,
    opacity:1,
    duration:0.5,
    
    // Delay:5,
})


gsap.from(".container-2 .left-nav-1",{
    scrollTrigger:{
        trigger:".container-2-child .left-nav-1",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 10%",
        scrub:2

    },
    x:-500,
    scale:0,
    opacity:0,
    duration:0.5,
    
    // Delay:5,
})



gsap.from(".container-2 .right-nav-1",{
    scrollTrigger:{
        trigger:".container-2-child .right-nav-1",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 10%",
        scrub:2

    },
    x:500,
    scale:0,
    opacity:0,
    duration:0.1,
    
    // Delay:5,
})



gsap.from(".contents",{
    scrollTrigger:{
        trigger:".contents",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 10%",
        scrub:2

    },
    y:-500,
    scale:0,
    opacity:0,
    duration:0,
    
    // Delay:5,
})

gsap.from(".container-3",{
    scrollTrigger:{
        trigger:".contents",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 10%",
        scrub:2

    },
    scale:1,
    opacity:1,
    duration:0.5,
    
    // Delay:5,
})



gsap.from(".container-4",{
    scrollTrigger:{
        trigger:".container-4",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 10%",
        scrub:2

    },
    scale:1,
    opacity:1,
    duration:0,
    
    // Delay:5,
})



