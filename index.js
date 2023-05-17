document.querySelector('video').playbackRate = 0.9;

gsap.registerPlugin(ScrollTrigger);

const listItems = document.querySelectorAll(".clicker-section-bottom ul li p")
const images = document.querySelectorAll(".clicker-section-bottom-left img")
console.log(listItems)

listItems.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
        item.classList.add("active")
        console.log("h")
        images[index].classList.add("imageActive")  
              
    })
})

listItems.forEach((item, index) => {
    item.addEventListener("mouseleave", (e) => {
        item.classList.remove("active")
        images[index].classList.remove("imageActive")
    })

})




const filmImage = document.querySelector(".film")

gsap.to(".film", {
    scrollTrigger: {
      trigger: ".film",
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      end: "+=1200", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    },
    x:-600,
  });


const gridImages = document.querySelectorAll(".gallery-grid-item img")


gsap.to(".grid-image", {
    scrollTrigger: {
      trigger: ".grid-image",
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      end: "+=900", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      stagger:true,
    },
    y:0,
    opacity:1,
  });
  gsap.to(".grid-image-two", {
    scrollTrigger: {
      trigger: ".grid-image-two",
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      end: "+=900", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      stagger:true,
    },
    y:0,
    opacity:1,
  });
  gsap.to(".grid-image-three", {
    scrollTrigger: {
      trigger: ".grid-image-three",
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      end: "+=900", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      stagger:true,
    },
    y:0,
    opacity:1,
  });