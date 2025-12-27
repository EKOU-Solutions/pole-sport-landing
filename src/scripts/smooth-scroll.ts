const initSmoothScroll = () => {
  if (typeof window === "undefined") return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement | null;
    const anchor = target?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
    if (!anchor) return;

    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;

    const id = decodeURIComponent(href.slice(1));
    const section = document.getElementById(id);
    if (!section) return;

    event.preventDefault();

    const header = document.querySelector("[data-site-header]");
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    const targetTop = section.getBoundingClientRect().top + window.scrollY;
    const offsetTop = Math.max(0, targetTop - headerHeight - 12);

    window.scrollTo({ top: offsetTop, behavior: "smooth" });
    history.pushState(null, "", `#${id}`);
  });
};

initSmoothScroll();
