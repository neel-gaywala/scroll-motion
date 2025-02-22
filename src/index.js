/**
 * *******************************************************
 * aos-gsap
 * made to animate elements on scroll using gsap
 * *******************************************************
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import debounce from "lodash.debounce";

import detect from "./helpers/detector";
import elements from "./helpers/elements";
import { handleScroll } from "./helpers/scroll";
import observer from "./libs/observer";

gsap.registerPlugin(ScrollTrigger);

let $aosElements = [];
let initialized = false;

const options = {
  disable: false,
  startEvent: "DOMContentLoaded",
  disableMutationObserver: false,
  debounceDelay: 50,
};

const isBrowserNotSupported = () => document.all && !window.atob;

const initializeScroll = () => {
  handleScroll($aosElements);
  return $aosElements;
};

const refetchScrollTrigger = () => ScrollTrigger.refresh();

const refresh = (initialize = false) => {
  if (initialized) {
    refetchScrollTrigger();
  } else if (initialize) {
    initialized = true;
    initializeScroll();
  }
};

const refreshHard = () => {
  $aosElements = elements();
  if (isDisabled(options.disable) || isBrowserNotSupported()) {
    return disable();
  }
  refetchScrollTrigger();
};

const disable = () => {};

const isDisabled = (optionDisable) =>
  optionDisable === true ||
  (optionDisable === "mobile" && detect.mobile()) ||
  (optionDisable === "phone" && detect.phone()) ||
  (optionDisable === "tablet" && detect.tablet()) ||
  (typeof optionDisable === "function" && optionDisable() === true);

const init = (settings) => {
  Object.assign(options, settings);
  $aosElements = elements();

  if (!options.disableMutationObserver && !observer.isSupported()) {
    console.info(`
      scroll-animation: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `);
    options.disableMutationObserver = true;
  }

  if (!options.disableMutationObserver) {
    observer.ready("[data-sm]", refreshHard);
  }

  if (isDisabled(options.disable) || isBrowserNotSupported()) {
    return disable();
  }

  if (!["DOMContentLoaded", "load"].includes(options.startEvent)) {
    document.addEventListener(options.startEvent, () => refresh(true));
  } else {
    window.addEventListener("load", () => refresh(true));
  }

  if (
    options.startEvent === "DOMContentLoaded" &&
    ["complete", "interactive"].includes(document.readyState)
  ) {
    refresh(true);
  }

  window.addEventListener(
    "resize",
    debounce(() => refresh(), options.debounceDelay)
  );
  window.addEventListener(
    "orientationchange",
    debounce(() => refresh(), options.debounceDelay)
  );

  return $aosElements;
};

if (typeof window !== "undefined") {
  window.AOS = { init, refresh, refreshHard };
}

export default { init, refresh, refreshHard };
