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
  delay: 0.5,
  duration: 3,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

gsap.from(".anime2", {
  stagger: 0.3,
  y: 40,
  opacity: 0,
  ease: "expo",
  duration: 2,
});

Shery.imageEffect("#imgs-text img", {
  style: 3,
  config: {
    uFrequencyX: { value: 11.5, range: [0, 100] },
    uFrequencyY: { value: 5, range: [0, 100] },
    uFrequencyZ: { value: 45, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 18.7 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.7500071491892819 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.3, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

Shery.imageEffect(".img-effect", {
  style: 5,
  config: {
    a: { value: 2.29, range: [0, 30] },
    b: { value: -0.59, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.6666667659638166 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.34, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

Shery.imageEffect("#image", {
  style: 5,
  gooey: true,
  config: {
    a: { value: 0, range: [0, 30] },
    b: { value: -1, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 1.8680758736316119 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 2.5, range: [1, 15] },
    durationOut: { value: 0.74, range: [0.1, 5] },
    durationIn: { value: 2.31, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.24, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 0.53, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 32 } },
    discard_threshold: { value: 0.66, range: [0, 1] },
    antialias_threshold: { value: 0.02, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 14.5, range: [0, 100] },
  },
});

document
  .querySelector("#future-text button")
  .addEventListener("mouseover", () => {
    gsap.to("#future video", {
      opacity: 1,
      duration: 1,
      ease: "power5",
    });
  });

document
  .querySelector("#future-text button")
  .addEventListener("mouseleave", () => {
    gsap.to("#future video", {
      opacity: 0,
      duration: 1,
      ease: "power5",
    });
  });
