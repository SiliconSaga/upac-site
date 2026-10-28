// Collapsing top bar.
//
// The masthead (full-size logo and contact details) scrolls away with the page.
// Once it has left the viewport, the sticky bar below is marked compact and a
// small logo slides into it. The state is read straight from scroll position,
// so there is nothing to remember between pages, tabs or reloads: wherever the
// page is scrolled to, the bar matches. No button, no stored preference.
//
// Without JavaScript the page still works: the big logo stays in the masthead
// and the bar simply never shows the small one on wide screens.
(function () {
  var masthead = document.getElementById("masthead");
  var bar = document.getElementById("site-header");
  if (!masthead || !bar || !("IntersectionObserver" in window)) return;

  new IntersectionObserver(function (entries) {
    bar.classList.toggle("is-compact", !entries[0].isIntersecting);
  }, { threshold: 0 }).observe(masthead);
})();
