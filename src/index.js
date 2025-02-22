/**
 * *******************************************************
 * aos-gsap
 * made to animate elements on scroll using gsap
 * *******************************************************
 */
// Modules & helpers
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import debounce from "lodash.debounce";

import detect from "./helpers/detector";
import elements from "./helpers/elements";
import { handleScroll } from "./helpers/scroll";
import observer from "./libs/observer";

gsap.registerPlugin(ScrollTrigger);

// Private variables
let $aosElements = [];
let initialized = false;

// Default options
let options = {
  disable: false,
  startEvent: "DOMContentLoaded",
  disableMutationObserver: false,
  debounceDelay: 50,
};

// Detect not supported browsers (<=IE9)
const isBrowserNotSupported = () => document.all && !window.atob;

const initializeScroll = function initializeScroll() {
  // Add scrolling animations to elements using gsap
  handleScroll($aosElements);
  return $aosElements;
};

// Refresh scroll trigger using gsap
const refetchScrollTrigger = function refetchScrollTrigger() {
  ScrollTrigger.refresh();
};

// Refresh only when it was first initialized on startEvent
const refresh = function refresh(initialize = false) {
  if (initialized) {
    refetchScrollTrigger();
  } else if (initialize) {
    initialized = true;
    initializeScroll();
  }
};

// Hard refresh
const refreshHard = function refreshHard() {
  $aosElements = elements();

  if (isDisabled(options.disable) || isBrowserNotSupported()) {
    return disable();
  }

  refetchScrollTrigger();
};

// Disable animations on scroll
const disable = function () {};

// Check disabled based on provided setting
const isDisabled = function (optionDisable) {
  return (
    optionDisable === true ||
    (optionDisable === "mobile" && detect.mobile()) ||
    (optionDisable === "phone" && detect.phone()) ||
    (optionDisable === "tablet" && detect.tablet()) ||
    (typeof optionDisable === "function" && optionDisable() === true)
  );
};

// Initializing aos-gsap
const init = function init(settings) {
  options = Object.assign(options, settings);

  // Create initial array with elements -> to be fulfilled later with prepare()
  $aosElements = elements();

  // Disable mutation observing if not supported
  if (!options.disableMutationObserver && !observer.isSupported()) {
    console.info(`
      scroll-animation: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `);
    options.disableMutationObserver = true;
  }

  // it'll refresh plugin automatically
  if (!options.disableMutationObserver) {
    observer.ready("[data-sm]", refreshHard);
  }

  // Disable animations if disabled or not supported
  if (isDisabled(options.disable) || isBrowserNotSupported()) {
    return disable();
  }

  // Handle initializing
  if (["DOMContentLoaded", "load"].indexOf(options.startEvent) === -1) {
    // Listen to options.startEvent and initialize aos-gsap
    document.addEventListener(options.startEvent, function () {
      refresh(true);
    });
  } else {
    window.addEventListener("load", function () {
      refresh(true);
    });
  }

  if (
    options.startEvent === "DOMContentLoaded" &&
    ["complete", "interactive"].indexOf(document.readyState) > -1
  ) {
    // Initialize aos-gsap if default startEvent was already fired
    refresh(true);
  }

  // Refresh plugin on window resize or orientation change
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

// Check if window is available (ensuring it's running in a browser)
if (typeof window !== "undefined") {
  window.AOSGSAP = {
    init,
    refresh,
    refreshHard,
  };
}

export default {
  init,
  refresh,
  refreshHard,
};
