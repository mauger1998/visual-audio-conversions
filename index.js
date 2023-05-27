document.querySelector('video').playbackRate = 0.9;

gsap.registerPlugin(ScrollTrigger);

// const filmImage = document.querySelector(".film")

// gsap.to(".film", {
//     scrollTrigger: {
//       trigger: ".film",
//       start: "top bottom", // when the top of the trigger hits the top of the viewport
//       end: "+=1200", // end after scrolling 500px beyond the start
//       scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//     },
//     x:-800,
//   });
// gsap.to(".second-slide:nth-child(1)", {
//     scrollTrigger: {
//       trigger: ".second-slide:nth-child(1)",
//       start: "top bottom", // when the top of the trigger hits the top of the viewport
//       end: "+=500", // end after scrolling 500px beyond the start
//     },
//     y:0,
//     opacity:1,
//   });


  // Film Gallery Images
const gridImages = document.querySelectorAll(".gallery-grid-item img")

if (window.matchMedia("(min-width:700px)").matches) {
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
}
if (window.matchMedia("(max-width:699px)").matches) {
  gsap.to(".grid-image", {
    scrollTrigger: {
      trigger: ".grid-image",
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      end: "+=400", // end after scrolling 500px beyond the start
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
      end: "+=400", // end after scrolling 500px beyond the start
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
      end: "+=400", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      stagger:true,
    },
    y:0,
    opacity:1,
  });
}






  
// Clicker Slider 


const clickerTrack = document.querySelector(".clicker-content")
const clickerSlides = Array.from(clickerTrack.children)

const iconButtons = document.querySelectorAll(".icon-container img")

const nextArrow = document.querySelector(".arrows img:nth-child(2)")
const prevArrow = document.querySelector(".arrows img:nth-child(1)")






nextArrow.addEventListener("click", (e) => {
  const currentClickerSlide = document.querySelector(".current-click")

  if (currentClickerSlide.nextElementSibling != null) {
    currentClickerSlide.classList.remove("current-click")
    currentClickerSlide.nextElementSibling.classList.add("current-click")
  } else {
    return
  }
})




prevArrow.addEventListener("click", (e) => {
  const currentClickerSlide = document.querySelector(".current-click")

  if (currentClickerSlide.previousElementSibling.classList.contains("arrows")) {
    return
  } else {
    currentClickerSlide.classList.remove("current-click")
    currentClickerSlide.previousElementSibling.classList.add("current-click")
  }
  
})




iconButtons.forEach((icon, index) => {
  icon.addEventListener("click", (e) => {
    const currentClickerSlide = document.querySelector(".current-click")
    currentClickerSlide.classList.remove("current-click")
    clickerSlides[index].classList.add("current-click")

    iconButtons.forEach((icon) => {
      if (icon.classList.contains("highlight")) {
        icon.classList.remove("highlight")
      }
    })
   iconButtons[index].classList.add("highlight")
  })
})



