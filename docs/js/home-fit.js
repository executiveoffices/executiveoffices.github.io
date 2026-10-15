/* Scales the fixed 960px home canvas to fit narrower screens, so elements
   outside the canvas (the floating cowboy icon) stay in real screen pixels. */
(function () {
  var fit = document.getElementById('eo-fit'), c = document.getElementById('eo-canvas');
  if (!fit || !c) return;
  function size() {
    var w = document.documentElement.clientWidth, s = Math.min(1, w / 960);
    c.style.transform = s < 1 ? 'scale(' + s + ')' : '';
    c.style.marginLeft = s < 1 ? '0' : '';
    fit.style.height = s < 1 ? (c.offsetHeight * s) + 'px' : '';
  }
  window.eoFit = size;
  size();
  window.addEventListener('resize', size);
  window.addEventListener('load', size);
})();
