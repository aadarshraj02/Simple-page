const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

gsap.from(".nav-link", {
  stagger: 0.2,
  y: 20,
  duration: 1,
  ease: "power2",
  opacity: 0,
});

Shery.textAnimate("#headings h1", {
  style: 2,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});
