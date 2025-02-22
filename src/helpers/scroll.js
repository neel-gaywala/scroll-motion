import gsap from "gsap";
import { DEFAULT_ANIMATIONS } from "../constant/defaults";

function handleScroll(elements) {
  elements.forEach((el) => {
    const node = el.node;
    const animationType = node.getAttribute("data-aos") || "fade-up"; // Default animation
    const duration = parseFloat(node.getAttribute("data-aos-duration")) || 0.8;
    const delay = parseFloat(node.getAttribute("data-aos-delay")) || 0;
    const easing = node.getAttribute("data-aos-easing") || "power2.out";

    let animationFrom = DEFAULT_ANIMATIONS[animationType] || {};
    let animationTo = { x: 0, y: 0, scale: 1, rotate: 0, autoAlpha: 1 };

    // Handle custom animations
    if (animationType === "custom") {
      const x = parseFloat(node.getAttribute("data-aos-x")) || 0;
      const y = parseFloat(node.getAttribute("data-aos-y")) || 0;
      const scale = parseFloat(node.getAttribute("data-aos-scale")) || 1;
      const rotate = parseFloat(node.getAttribute("data-aos-rotate")) || 0;

      animationFrom = { x, y, scale, rotate, autoAlpha: 0 };
    }

    gsap.fromTo(node, animationFrom, {
      ...animationTo,
      scrollTrigger: {
        trigger: node,
        start: "top bottom",
        end: "top top",
        toggleActions: "play none none reverse",
      },
      duration,
      delay,
      ease: easing,
    });

    el.animation = animationFrom;
  });
}

export { handleScroll };
