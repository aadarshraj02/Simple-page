const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

gsap.from(".nav-link", {
  stagger: .2,
  y: 20,
  duration: 1,
  ease: "power2",
  opacity: 0,
});
