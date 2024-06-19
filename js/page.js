const horizontalSections = gsap.utils.toArray("section.horizontal");

horizontalSections.forEach(function (sec, i) {
  var thisPinWrap = sec.querySelector(".pin-wrap");
  var thisAnimWrap = thisPinWrap.querySelector(".animation-wrap");

  var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);

  gsap.fromTo(
    thisAnimWrap,
    {
      x: () => (thisAnimWrap.classList.contains("to-right") ? 0 : getToValue()),
    },
    {
      x: () => (thisAnimWrap.classList.contains("to-right") ? getToValue() : 0),
      ease: "none",
      scrollTrigger: {
        trigger: sec,
        start: "top top",
        end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
        pin: thisPinWrap,
        invalidateOnRefresh: true,
        //anticipatePin: 1,
        scrub: true,
        //markers: true,
      },
    }
  );
});

/* Animation About */
// $(window).scroll(function () {
//   let position = $(this).scrollTop();
//   if (position >= 650) {
//     $(".ibno-img").addClass("fromRight");
//     $(".mission-text").addClass("fromLeft");
//   } else {
//     $(".ibno-img").removeClass("fromRight");
//     $(".mission-text").removeClass("fromLeft");
//   }
// });

// Animating the video background
gsap.to(".item", {
  duration: 1,
  ease: "power4.in",
  opacity: 1,
  // width: "100%",
  // height: "100vh",
});
