const initSmoothScroll = async () => {
  if (typeof window === "undefined") return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  const { default: SmoothScroll } = await import("smooth-scroll");
  new SmoothScroll('a[href^="#"]', {
    speed: 600,
    speedAsDuration: true,
    offset: () => {
      const header = document.querySelector("[data-site-header]");
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      return headerHeight + 12;
    },
    updateURL: true,
    popstate: true,
  });
};

initSmoothScroll();
