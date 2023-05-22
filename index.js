document.querySelector('video').playbackRate = 0.9;

gsap.registerPlugin(ScrollTrigger);

const filmImage = document.querySelector(".film")

gsap.to(".film", {
    scrollTrigger: {
      trigger: ".film",
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      end: "+=1200", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    },
    x:-800,
  });


const gridImages = document.querySelectorAll(".gallery-grid-item img")


gsap.to(".grid-image", {
    scrollTrigger: {
      trigger: ".grid-image",
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      end: "+=700", // end after scrolling 500px beyond the start
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
      end: "+=700", // end after scrolling 500px beyond the start
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
      end: "+=700", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      stagger:true,
    },
    y:0,
    opacity:1,
  });


// Vertical Slider 

const track = document.querySelector(".track")
const slides = Array.from(track.children)
const nextButton = document.querySelector(".next")
const prevButton = document.querySelector(".prev")

const trackTwo = document.querySelector(".track-two")
const slidesTwo = Array.from(trackTwo.children)

const secondSlideHeight = slidesTwo[0].getBoundingClientRect().height

const setSecondSlidePosition = (secondSlide, index) => {
  secondSlide.style.top = secondSlideHeight * index + "px"
}

slidesTwo.forEach(setSecondSlidePosition)


const slideHeight = slides[0].getBoundingClientRect().height



const setSlidePosition = (slide, index) => {
  slide.style.top = slideHeight * index + "px"
}


slides.forEach(setSlidePosition)



const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateY(-${targetSlide.style.top})`
  currentSlide.classList.remove("currentSlide")
  targetSlide.classList.add("currentSlide")

}
const moveToSecondSlide = (trackTwo, currentSecondSlide, targetSecondSlide) => {
  trackTwo.style.transform = `translateY(-${targetSecondSlide.style.top})`
  currentSecondSlide.classList.remove("currentSecondSlide")
  targetSecondSlide.classList.add("currentSecondSlide")
}

nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".currentSlide")
  const currentSecondSlide = trackTwo.querySelector(".currentSecondSlide")
  const nextSlide = currentSlide.nextElementSibling
  const secondNextSlide = currentSecondSlide.nextElementSibling


  moveToSlide(track, currentSlide, nextSlide)
  moveToSecondSlide(trackTwo, currentSecondSlide, secondNextSlide)
})

prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".currentSlide")
  const prevSlide = currentSlide.previousElementSibling
  const currentSecondSlide = trackTwo.querySelector(".currentSecondSlide")
  const secondPrevSlide = currentSecondSlide.previousElementSibling

  moveToSlide(track, currentSlide, prevSlide)
  moveToSecondSlide(trackTwo, currentSecondSlide, secondPrevSlide)
})



