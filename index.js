document.querySelector('video').playbackRate = 0.9;

document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")

  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
  let currentDropdown
  if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]")
      currentDropdown.classList.toggle("active")
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove("active")
  })
})


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
      end: "+=200", // end after scrolling 500px beyond the start
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
      end: "+=200", // end after scrolling 500px beyond the start
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
      end: "+=200", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      stagger:true,
    },
    y:0,
    opacity:1,
  });
}
if (window.matchMedia("(max-width:350px)").matches) {
  gsap.to(".grid-image", {
    scrollTrigger: {
      trigger: ".grid-image",
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      end: "+=50", // end after scrolling 500px beyond the start
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
      end: "+=50", // end after scrolling 500px beyond the start
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
      end: "+=50", // end after scrolling 500px beyond the start
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
const prevArrow = document.querySelector(".prevArrow")

const nextArrow = document.querySelector(".nextArrow")

const paginationTrack = document.querySelector(".pagination")
const paginationButtons = Array.from(paginationTrack.children)





nextArrow.addEventListener("click", (e) => {
  const currentClickerSlide = document.querySelector(".current-click")

  if (currentClickerSlide.nextElementSibling != null) {
    currentClickerSlide.classList.remove("current-click")
    currentClickerSlide.nextElementSibling.classList.add("current-click")
    
    const currentButton = document.querySelector(".highlighted")
    currentButton.classList.remove("highlighted")
    currentButton.nextElementSibling.classList.add("highlighted")
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


paginationButtons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    const currentClickerSlide = document.querySelector(".current-click")
    currentClickerSlide.classList.remove("current-click")
    clickerSlides[index].classList.add("current-click")

    paginationButtons.forEach((button) => {
      if (button.classList.contains("highlighted")) {
        button.classList.remove("highlighted")
      }
    })
   paginationButtons[index].classList.add("highlighted")



   iconButtons.forEach((icon) => {
    if (icon.classList.contains("highlight")) {
      icon.classList.remove("highlight")
    }
  })
 iconButtons[index].classList.add("highlight")
  })
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



   paginationButtons.forEach((button) => {
    if (button.classList.contains("highlighted")) {
      button.classList.remove("highlighted")
    }
  })
 paginationButtons[index].classList.add("highlighted")
  })
})



