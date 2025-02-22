import gsap from "gsap";
import { DEFAULT_ANIMATIONS } from "../constant/defaults";
import { CustomEase } from "gsap/all";

function handleScroll(elements) {
  elements.forEach((el) => {
    const node = el.node;
    const animationType = node.getAttribute("data-aos") || "fade-up"; // Default animation
    const duration = parseFloat(node.getAttribute("data-aos-duration")) || "1";
    const delay = parseFloat(node.getAttribute("data-aos-delay")) || 0;
    const startAnimation = node.getAttribute("data-aos-start") || "top bottom";
    const endAnimation = node.getAttribute("data-aos-end") || "top top";
    const scrub = node.getAttribute("data-aos-scrub") === "true";
    let easing = node.getAttribute("data-aos-easing") || "back.out(2)";
    if (easing.startsWith("cubic:")) {
      easing = CustomEase.create("custom", easing.replace("cubic:", ""));
    }
    if (animationType.includes("flip")) {
      gsap.set(node, { perspective: 2500, backfaceVisibility: "hidden" });
    }

    let animationFrom = DEFAULT_ANIMATIONS[animationType] || { autoAlpha: 0 };
    let animationTo = {
      x: 0,
      y: 0,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      autoAlpha: 1,
    };

    // Handle custom animations
    if (animationType === "custom") {
      animationFrom = {
        x: parseFloat(node.getAttribute("data-aos-x")) || 0,
        y: parseFloat(node.getAttribute("data-aos-y")) || 0,
        scale: parseFloat(node.getAttribute("data-aos-scale")) || 1,
        rotateX: parseFloat(node.getAttribute("data-aos-rotateX")) || 0,
        rotateY: parseFloat(node.getAttribute("data-aos-rotateY")) || 0,
        autoAlpha: 0,
      };
    }

    gsap.fromTo(node, animationFrom, {
      ...animationTo,
      scrollTrigger: {
        trigger: node,
        start: startAnimation,
        end: endAnimation,
        toggleActions: "play none none reverse",
        scrub: scrub,
      },
      duration,
      delay,
      ease: easing,
    });

    el.animation = animationFrom;
  });
}

export { handleScroll };
