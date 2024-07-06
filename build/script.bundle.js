!function removeBeforeAndAfterSelectors() {
  document.querySelectorAll(".button-menu").forEach((function(e) {
    var o = e.querySelector(".square-1-1-1"), r = e.querySelector(".square-1-1"), s = e.querySelector(".square-1"), t = e.querySelector(".square");
    e.addEventListener("mouseover", (function() {
      console.log("Мышка наведена"), o.classList.add("no-before-after"), r.classList.add("no-before-after"), 
      s.classList.add("no-before-after"), t.classList.add("no-before-after");
    })), e.addEventListener("mouseout", (function() {
      console.log("Мышка не наведена"), o.classList.remove("no-before-after"), r.classList.remove("no-before-after"), 
      s.classList.remove("no-before-after"), t.classList.remove("no-before-after");
    }));
  }));
}(), console.log("Мышка не наведена");